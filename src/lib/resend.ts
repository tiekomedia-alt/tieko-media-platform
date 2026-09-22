import "server-only";
import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

export const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
export const leadsToEmail = process.env.LEADS_TO_EMAIL ?? "tiekomedia@gmail.com";
