import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { emailField, emailLayout, escapeHtml } from "@/lib/email-content";
import { getResendClient, isResendConfigured, leadsToEmail, resendFromEmail } from "@/lib/resend";
import { absoluteUrl, isAllowedOrigin } from "@/lib/site";

export const runtime = "nodejs";

const MAX_BODY_LENGTH = 8_192;
const RATE_WINDOW_MS = 60 * 60 * 1_000;
const ENQUIRIES = new Set([
  "SEO, AEO & ranking",
  "Media services",
  "Billboard advertising",
  "Content creation",
  "Digital presence optimisation",
  "Compliance & institutional support",
  "Data & records management",
  "Business intelligence & research",
  "Data centre sourcing in Lagos",
  "Store, resource or product enquiry",
  "Something else",
]);

type RateEntry = { count: number; resetAt: number };
type ContactPayload = Record<string, unknown>;
const globalRateStore = globalThis as typeof globalThis & { contactRateStore?: Map<string, RateEntry> };
const rateStore = globalRateStore.contactRateStore ?? new Map<string, RateEntry>();
globalRateStore.contactRateStore = rateStore;

function response(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
    },
  });
}

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string) {
  if (value.length < 6 || value.length > 254 || /[\r\n\0<>]/.test(value)) return false;
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(value);
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
  const websiteUrl = absoluteUrl("/");
  const servicesUrl = absoluteUrl("/services");
  const logoUrl = absoluteUrl("/brand/tieko-logo-circle.png");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>Your enquiry is with Tieko Media</title>
    <style>
      :root { color-scheme: light; supported-color-schemes: light; }
      @media only screen and (max-width: 620px) {
        .email-shell { width: 100% !important; }
        .email-pad { padding-left: 24px !important; padding-right: 24px !important; }
        .email-title { font-size: 32px !important; line-height: 1.08 !important; }
        .email-button { display: block !important; width: auto !important; text-align: center !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#eee9df;color:#111111;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">We have received your ${escapeHtml(enquiry)} enquiry and will review the most useful next step.</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#eee9df;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" class="email-shell" style="width:640px;max-width:640px;background-color:#fffdf8;border:1px solid #d7d0c4;border-collapse:collapse;">
            <tr>
              <td style="height:7px;background-color:#c5261b;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:30px 42px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td width="76" valign="middle" style="width:76px;">
                      <a href="${websiteUrl}" style="text-decoration:none;">
                        <img src="${logoUrl}" width="64" height="64" alt="Tieko Media" style="display:block;width:64px;height:64px;border:0;border-radius:50%;">
                      </a>
                    </td>
                    <td valign="middle" style="padding-left:14px;">
                      <p style="margin:0 0 4px;color:#c5261b;font-size:13px;font-weight:700;line-height:1.3;letter-spacing:1.5px;text-transform:uppercase;">Tieko Media Limited</p>
                      <p style="margin:0;color:#625d55;font-size:14px;line-height:1.5;">Research, content and digital systems</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:26px 42px 34px;background-color:#242321;color:#ffffff;">
                <p style="margin:0 0 12px;color:#f18b82;font-size:13px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Enquiry received</p>
                <h1 class="email-title" style="margin:0;font-size:42px;line-height:1.08;letter-spacing:-1px;color:#ffffff;">Your enquiry is with us.</h1>
                <p style="margin:18px 0 0;color:#e7e3dc;font-size:17px;line-height:1.65;">Hello ${escapeHtml(name)}, thank you for reaching out. We have received your message and a member of our team will review it personally.</p>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:34px 42px 12px;">
                <p style="margin:0 0 10px;color:#6e675e;font-size:12px;font-weight:700;line-height:1.4;letter-spacing:1.3px;text-transform:uppercase;">Your enquiry area</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:18px 20px;background-color:#f4efe7;border-left:4px solid #c5261b;color:#111111;font-size:17px;font-weight:700;line-height:1.45;">${escapeHtml(enquiry)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:22px 42px 8px;color:#393632;">
                <h2 style="margin:0 0 12px;color:#111111;font-size:21px;line-height:1.3;">What happens next</h2>
                <p style="margin:0;font-size:16px;line-height:1.75;">We will review the context of your enquiry, match it with the right capability within Tieko Media and reply with the clearest next step. If we need more information, we will ask only for what is relevant.</p>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:26px 42px 38px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="border-radius:2px;background-color:#c5261b;">
                      <a href="${websiteUrl}" class="email-button" style="display:inline-block;padding:15px 24px;color:#ffffff;font-size:14px;font-weight:700;line-height:1;text-decoration:none;text-transform:uppercase;letter-spacing:.5px;">Visit our website&nbsp;&nbsp;→</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:20px 0 0;color:#676159;font-size:14px;line-height:1.6;">You can also <a href="${servicesUrl}" style="color:#a91f16;font-weight:700;text-decoration:underline;">explore our services</a> or email us at <a href="mailto:info@tiekomedia.com" style="color:#a91f16;font-weight:700;text-decoration:underline;">info@tiekomedia.com</a>.</p>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:24px 42px;background-color:#f4efe7;border-top:1px solid #d7d0c4;color:#625d55;">
                <p style="margin:0 0 8px;color:#111111;font-size:14px;font-weight:700;line-height:1.5;">Tieko Media Limited</p>
                <p style="margin:0 0 12px;font-size:13px;line-height:1.6;">Build a business people can find, trust and choose.</p>
                <p style="margin:0;font-size:13px;line-height:1.6;"><a href="${websiteUrl}" style="color:#a91f16;text-decoration:none;">www.tiekomedia.com</a>&nbsp;&nbsp;•&nbsp;&nbsp;<a href="mailto:info@tiekomedia.com" style="color:#a91f16;text-decoration:none;">info@tiekomedia.com</a></p>
                <p style="margin:16px 0 0;color:#817970;font-size:11px;line-height:1.55;">This email confirms receipt only. It does not create a client relationship or confirm a service scope. Any engagement will be agreed with you directly.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return response({ error: "Request origin was not accepted." }, 403);
    }

    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return response({ error: "Unsupported request format." }, 415);
    }

    const raw = await request.text();
    if (!raw || raw.length > MAX_BODY_LENGTH) {
      return response({ error: "Invalid request size." }, 413);
    }

    let body: ContactPayload;
    try {
      body = JSON.parse(raw) as ContactPayload;
    } catch {
      return response({ error: "Invalid request." }, 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return response({ error: "Invalid request." }, 400);
    }

    const permittedKeys = new Set(["name", "email", "enquiry", "message", "company"]);
    if (Object.keys(body).some((key) => !permittedKeys.has(key))) {
      return response({ error: "Unexpected request fields." }, 400);
    }

    const name = text(body.name, 160);
    const email = text(body.email, 254).toLowerCase();
    const enquiry = text(body.enquiry, 120);
    const message = text(body.message, 3000);

    if (text(body.company, 120)) {
      return response({ error: "Submission could not be accepted." }, 400);
    }
    if (!name) {
      return response({ error: "Please enter your name." }, 400);
    }
    if (!validEmail(email)) {
      return response({ error: "Please enter a valid email address." }, 400);
    }
    if (!ENQUIRIES.has(enquiry)) {
      return response({ error: "Please choose the service or enquiry area that is closest to your request." }, 400);
    }
    if (limited(clientKey(request, email))) {
      return response({ error: "Too many enquiries from this address. Please try again later." }, 429);
    }

    if (!isResendConfigured()) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return response({ error: "The contact form is currently undergoing scheduled maintenance. Please email info@tiekomedia.com directly." }, 503);
    }

    const resend = getResendClient();
    const fields = [
      emailField("Name", name),
      emailField("Email", email),
      emailField("Enquiry", enquiry),
      emailField("Message", message || "Not supplied"),
    ].join("");

    // 1. Notify Tieko Media leads inbox first
    const notification = await resend.emails.send({
      from: resendFromEmail,
      to: leadsToEmail,
      replyTo: email,
      subject: `New website enquiry: ${enquiry}`,
      html: emailLayout("New website enquiry", fields),
    });

    if (notification.error) {
      console.error("Contact lead notification to Tieko Media failed:", notification.error);
      return response({ error: "We could not deliver your enquiry. Please try again shortly." }, 502);
    }

    // 2. Attempt sending user confirmation email (works when domain is verified in Resend)
    const confirmation = await resend.emails.send({
      from: resendFromEmail,
      to: email,
      replyTo: "info@tiekomedia.com",
      subject: "Your enquiry is with us | Tieko Media",
      html: acknowledgement(name, enquiry),
    });

    const confirmationSent = !confirmation.error;
    if (!confirmationSent) {
      console.warn("Contact confirmation delivery to user failed (sender domain may need verification in Resend):", confirmation.error);
    }

    return response({ received: true, confirmationSent });
  } catch (error) {
    console.error("Contact enquiry failed", error);
    return response({ error: "We could not send your enquiry right now. Please try again shortly." }, 503);
  }
}
