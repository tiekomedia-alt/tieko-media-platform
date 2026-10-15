import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { calculateDiq, diqCategories, diqQuestions, type DiqCategory } from "@/lib/diq";
import { escapeHtml } from "@/lib/email-content";
import { getResendClient, isResendConfigured, leadsToEmail, resendFromEmail } from "@/lib/resend";
import { isAllowedOrigin } from "@/lib/site";

export const runtime = "nodejs";

const MAX_BODY_LENGTH = 8_192;
const SESSION_MAX_AGE_SECONDS = 7_200;
const MINIMUM_COMPLETION_MS = 1_000;
const RATE_WINDOW_MS = 60 * 60 * 1_000;

type RateEntry = { count: number; resetAt: number };
type RateStore = Map<string, RateEntry>;

const globalRateStore = globalThis as typeof globalThis & { diqRateStore?: RateStore };
const rateStore = globalRateStore.diqRateStore ?? new Map<string, RateEntry>();
globalRateStore.diqRateStore = rateStore;

function signingSecret() {
  const secret = process.env.DIQ_SIGNING_SECRET ?? process.env.RESEND_API_KEY;
  if (!secret) throw new Error("DIQ signing is not configured.");
  return secret;
}

function createSessionToken() {
  const issuedAt = Date.now();
  const nonce = randomBytes(18).toString("hex");
  const payload = `${issuedAt}.${nonce}`;
  const signature = createHmac("sha256", signingSecret()).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const [issuedAtValue, nonce, signature] = token.split(".");
  if (!issuedAtValue || !nonce || !signature || !/^\d+$/.test(issuedAtValue) || !/^[a-f0-9]{36}$/.test(nonce)) return false;

  const issuedAt = Number(issuedAtValue);
  const age = Date.now() - issuedAt;
  if (!Number.isFinite(issuedAt) || age < MINIMUM_COMPLETION_MS || age > SESSION_MAX_AGE_SECONDS * 1_000) return false;

  const expected = createHmac("sha256", signingSecret()).update(`${issuedAtValue}.${nonce}`).digest("hex");
  const providedBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expected, "hex");
  return providedBuffer.length === expectedBuffer.length && timingSafeEqual(providedBuffer, expectedBuffer);
}

function parseCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim().split("="))
    .find(([cookieName]) => cookieName === name)?.[1];
}

function clientAddress(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function exceedsRateLimit(key: string, maximum: number) {
  const now = Date.now();
  if (rateStore.size > 2_000) {
    for (const [storedKey, storedEntry] of rateStore) {
      if (storedEntry.resetAt <= now) rateStore.delete(storedKey);
    }
  }
  const entry = rateStore.get(key);
  if (!entry || entry.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  rateStore.set(key, entry);
  return entry.count > maximum;
}

function validEmail(value: string) {
  if (value.length < 6 || value.length > 254 || /[\r\n\0<>]/.test(value)) return false;
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(value);
}

function safeJsonResponse(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
    },
  });
}

function categoryRows(categoryScores: Record<DiqCategory, number>) {
  return diqCategories
    .map((category) => `<tr><td style="padding:9px 12px;border-bottom:1px solid #e5e1da;font-weight:700">${escapeHtml(category)}</td><td style="padding:9px 12px;border-bottom:1px solid #e5e1da;text-align:right">${categoryScores[category]}%</td></tr>`)
    .join("");
}

function resultEmail(score: number, tier: ReturnType<typeof calculateDiq>["tier"], categoryScores: Record<DiqCategory, number>) {
  const colour = tier.colour === "green" ? "#16803c" : tier.colour === "orange" ? "#d97706" : "#d92d20";
  return `
    <div style="margin:0;background:#f4f0e7;padding:28px;font-family:Arial,sans-serif;color:#252321">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #d8d1c5">
        <div style="padding:30px;background:#252321;color:#fff">
          <p style="margin:0 0 10px;color:#ef7779;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">Tieko Media · Digital Intelligence Quotient</p>
          <h1 style="margin:0;font-size:34px">Your DIQ result</h1>
        </div>
        <div style="padding:30px">
          <div style="border-left:8px solid ${colour};padding:8px 0 8px 22px">
            <p style="margin:0;color:#5f5b55;font-size:13px;font-weight:700;text-transform:uppercase">Score</p>
            <p style="margin:2px 0;font-size:68px;font-weight:800;line-height:1">${score}<span style="font-size:24px">/100</span></p>
            <h2 style="margin:10px 0 0;color:${colour};font-size:28px">${escapeHtml(tier.label)}</h2>
          </div>
          <p style="margin:24px 0;line-height:1.7">${escapeHtml(tier.summary)}</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">${categoryRows(categoryScores)}</table>
          <p style="margin:24px 0 8px;font-weight:700">Recommended next move</p>
          <p style="margin:0;line-height:1.7">${escapeHtml(tier.recommendation)}</p>
          <a href="https://www.tiekomedia.com/start-your-review" style="display:inline-block;margin-top:26px;padding:14px 20px;background:#d92d20;color:#fff;text-decoration:none;font-weight:700">Get a free infrastructure review</a>
        </div>
        <p style="margin:0;padding:18px 30px;background:#eee8de;color:#5f5b55;font-size:12px;line-height:1.6">You requested this result at tiekomedia.com. Tieko Media will never place your email address on a public scorecard.</p>
      </div>
    </div>`;
}

export async function GET() {
  try {
    const token = createSessionToken();
    const response = safeJsonResponse({ ready: true });
    response.cookies.set("diq_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/api/diq",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });
    return response;
  } catch (error) {
    console.error("DIQ session creation failed", error);
    return safeJsonResponse({ error: "The assessment is temporarily unavailable." }, 503);
  }
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return safeJsonResponse({ error: "Request origin was not accepted." }, 403);
    }

    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return safeJsonResponse({ error: "Unsupported request format." }, 415);
    }

    const rawBody = await request.text();
    if (!rawBody || rawBody.length > MAX_BODY_LENGTH) {
      return safeJsonResponse({ error: "Invalid request size." }, 413);
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return safeJsonResponse({ error: "Invalid request." }, 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return safeJsonResponse({ error: "Invalid request." }, 400);
    }

    const input = body as Record<string, unknown>;
    const allowedKeys = new Set(["email", "answers", "website", "consent"]);
    if (Object.keys(input).some((key) => !allowedKeys.has(key))) {
      return safeJsonResponse({ error: "Unexpected request fields." }, 400);
    }

    const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
    if (!validEmail(email)) {
      return safeJsonResponse({ error: "Enter a valid email address." }, 400);
    }

    if (input.website !== "" || input.consent !== true) {
      return safeJsonResponse({ error: "Submission could not be accepted." }, 400);
    }

    if (!Array.isArray(input.answers) || input.answers.length !== diqQuestions.length || input.answers.some((answer) => typeof answer !== "boolean")) {
      return safeJsonResponse({ error: "Complete all 20 assessment questions." }, 400);
    }

    const token = parseCookie(request, "diq_session");
    if (!verifySessionToken(token)) {
      return safeJsonResponse({ error: "Your assessment session expired. Please retake the test." }, 403);
    }

    const ipKey = `ip:${hash(clientAddress(request))}`;
    const emailKey = `email:${hash(email)}`;
    if (exceedsRateLimit(ipKey, 10) || exceedsRateLimit(emailKey, 5)) {
      return safeJsonResponse({ error: "Too many scorecard requests. Please try again later." }, 429);
    }

    const result = calculateDiq(input.answers as boolean[]);

    if (!isResendConfigured()) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return safeJsonResponse({ error: "The scorecard service is temporarily unavailable. Please try again shortly." }, 503);
    }

    const resend = getResendClient();
    const leadDelivery = await resend.emails.send({
      from: resendFromEmail,
      to: leadsToEmail,
      replyTo: email,
      subject: `New DIQ lead: ${result.score}/100 · ${result.tier.label}`,
      html: `<p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>DIQ:</strong> ${result.score}/100 · ${escapeHtml(result.tier.label)}</p><table style="border-collapse:collapse">${categoryRows(result.categoryScores)}</table>`,
    });
    if (leadDelivery.error) {
      console.error("DIQ lead notification failed", leadDelivery.error);
      return safeJsonResponse({ error: "We could not save your scorecard request. Please try again shortly." }, 502);
    }

    const userDelivery = await resend.emails.send({
      from: resendFromEmail,
      to: email,
      subject: `Your Tieko Media DIQ score: ${result.score}/100`,
      html: resultEmail(result.score, result.tier, result.categoryScores),
    });
    if (userDelivery.error) {
      console.error("DIQ result delivery failed", userDelivery.error);
      return safeJsonResponse({ error: "We could not deliver your scorecard. Please check the email and try again." }, 502);
    }

    const response = safeJsonResponse({
      score: result.score,
      tier: result.tier,
      categoryScores: result.categoryScores,
    });

    response.cookies.set("diq_session", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/api/diq",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("DIQ submission failed", error);
    return safeJsonResponse({ error: "The scorecard service is temporarily unavailable." }, 503);
  }
}
