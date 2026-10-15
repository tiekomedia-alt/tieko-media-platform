import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { emailField, emailLayout, escapeHtml } from "@/lib/email-content";
import { getResendClient, leadsToEmail, resendFromEmail } from "@/lib/resend";

export const runtime = "nodejs";

const MAX_BODY_LENGTH = 8_192;
const RATE_WINDOW_MS = 60 * 60 * 1_000;
const ENQUIRIES = new Set([
  "SEO, AEO & ranking", "Media services", "Billboard advertising", "Content creation",
  "Digital presence optimisation", "Compliance & institutional support", "Data & records management",
  "Business intelligence & research", "Data centre sourcing in Lagos", "Store, resource or product enquiry", "Something else",
]);

type RateEntry = { count: number; resetAt: number };
type ContactPayload = Record<string, unknown>;
const globalRateStore = globalThis as typeof globalThis & { contactRateStore?: Map<string, RateEntry> };
const rateStore = globalRateStore.contactRateStore ?? new Map<string, RateEntry>();
globalRateStore.contactRateStore = rateStore;

function response(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" } });
}

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string) {
  if (value.length < 6 || value.length > 254 || /[\r\n\0<>]/.test(value)) return false;
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(value);
}

function allowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try { return Boolean(origin && host && new URL(origin).host === host); } catch { return false; }
}

function clientKey(request: Request, email: string) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
  return createHash("sha256").update(`${ip}:${email.toLowerCase()}`).digest("hex");
}

function limited(key: string) {
  const now = Date.now();
  const existing = rateStore.get(key);
  if (!existing || existing.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  existing.count += 1;
  return existing.count > 4;
}

function acknowledgement(name: string, enquiry: string) {
  return `<div style="background:#f4f0e7;padding:32px;font-family:Arial,sans-serif;color:#111"><div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #d8d1c5"><div style="background:#252321;color:#fff;padding:24px"><p style="margin:0 0 8px;color:#ef7779;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">Tieko Media</p><h1 style="margin:0;font-size:28px">We received your enquiry</h1></div><div style="padding:28px;line-height:1.7"><p>Hello ${escapeHtml(name)},</p><p>Thank you for contacting Tieko Media about <strong>${escapeHtml(enquiry)}</strong>. We are reviewing your message and will respond with the most useful next step.</p><p>Please note that sending an enquiry does not create a client relationship or confirm a service scope. We will confirm any next step with you directly.</p><p style="margin-top:28px">Tieko Media Limited</p></div></div></div>`;
}

export async function POST(request: Request) {
  try {
    if (!allowedOrigin(request)) return response({ error: "Request origin was not accepted." }, 403);
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return response({ error: "Unsupported request format." }, 415);
    const raw = await request.text();
    if (!raw || raw.length > MAX_BODY_LENGTH) return response({ error: "Invalid request size." }, 413);
    let body: ContactPayload;
    try { body = JSON.parse(raw) as ContactPayload; } catch { return response({ error: "Invalid request." }, 400); }
    if (!body || typeof body !== "object" || Array.isArray(body)) return response({ error: "Invalid request." }, 400);
    const permittedKeys = new Set(["name", "email", "enquiry", "message", "company"]);
    if (Object.keys(body).some((key) => !permittedKeys.has(key))) return response({ error: "Unexpected request fields." }, 400);

    const name = text(body.name, 160);
    const email = text(body.email, 254).toLowerCase();
    const enquiry = text(body.enquiry, 120);
    const message = text(body.message, 3000);
    if (text(body.company, 120)) return response({ error: "Submission could not be accepted." }, 400);
    if (!name) return response({ error: "Please enter your name." }, 400);
    if (!validEmail(email)) return response({ error: "Please enter a valid email address." }, 400);
    if (!ENQUIRIES.has(enquiry)) return response({ error: "Please choose the service or enquiry area that is closest to your request." }, 400);
    if (limited(clientKey(request, email))) return response({ error: "Too many enquiries from this address. Please try again later." }, 429);

    const resend = getResendClient();
    const confirmation = await resend.emails.send({
      from: resendFromEmail,
      to: email,
      subject: "We received your enquiry | Tieko Media",
      html: acknowledgement(name, enquiry),
    });
    if (confirmation.error) return response({ error: "We could not confirm this email address. Please check it and try again." }, 502);

    const fields = [emailField("Name", name), emailField("Email", email), emailField("Enquiry", enquiry), emailField("Message", message || "Not supplied")].join("");
    const notification = await resend.emails.send({
      from: resendFromEmail,
      to: leadsToEmail,
      replyTo: email,
      subject: `New website enquiry: ${enquiry}`,
      html: emailLayout("New website enquiry", fields),
    });
    if (notification.error) console.error("Contact lead notification failed", notification.error);

    return response({ received: true });
  } catch (error) {
    console.error("Contact enquiry failed", error);
    return response({ error: "We could not send your enquiry right now. Please try again shortly." }, 503);
  }
}
