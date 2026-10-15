import "server-only";
import { Resend } from "resend";

export function isResendConfigured(): boolean {
  const apiKey = process.env.RESEND_API_KEY;
  return Boolean(apiKey && !apiKey.includes("xxxxxxxxx") && apiKey.trim().length > 0);
}

export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.includes("xxxxxxxxx")) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

export const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
export const leadsToEmail = process.env.LEADS_TO_EMAIL ?? "tiekomedia@gmail.com";
