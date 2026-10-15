"use client";

import { FormEvent, useState } from "react";
import posthog from "posthog-js";

const enquiryOptions = [
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
];

type SubmissionResponse = { error?: string; confirmationSent?: boolean };

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactEnquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(true);
  const [error, setError] = useState("");

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const enquiry = String(formData.get("enquiry") ?? "");

    const validationError = !name
      ? "Please enter your name."
      : !validEmail(email)
        ? "Please enter a valid email address, for example name@company.com."
        : !enquiryOptions.includes(enquiry)
          ? "Please choose what your enquiry is about."
          : "";

    if (validationError) {
      setError(validationError);
      const fieldName = !name ? "name" : !validEmail(email) ? "email" : "enquiry";
      form.querySelector<HTMLInputElement | HTMLSelectElement>(`[name="${fieldName}"]`)?.focus();
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          enquiry,
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });
      const result = (await response.json()) as SubmissionResponse;

      if (!response.ok) {
        throw new Error(result.error ?? "We could not send your enquiry. Please try again.");
      }

      posthog.capture("contact_enquiry_submitted", {
        enquiry: String(formData.get("enquiry") ?? ""),
      });
      form.reset();
      setConfirmationSent(result.confirmationSent !== false);
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your enquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="contact-success" role="status" aria-live="polite">
        <p className="contact-form-kicker">Enquiry received</p>
        <h2>Thank you. We have your message.</h2>
        <p>{confirmationSent
          ? "We have sent a confirmation to your email address. A member of the Tieko Media team will review your enquiry and respond with the most useful next step."
          : "Your enquiry reached the Tieko Media team, but the email confirmation could not be delivered. We will still review your enquiry and respond directly."}
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
      </section>
    );
  }

  return (
    <form className="contact-enquiry-form" onSubmit={submitEnquiry} noValidate>
      <div className="contact-field-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" maxLength={160} aria-invalid={Boolean(error)} />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} aria-invalid={Boolean(error)} />
          <small>We will send your confirmation here.</small>
        </label>
        <label className="contact-field-wide">
          <span>What is your enquiry about?</span>
          <select name="enquiry" defaultValue="" aria-invalid={Boolean(error)}>
            <option value="" disabled>Select the closest service</option>
            {enquiryOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="contact-field-wide">
          <span>Anything else we should know? <small>Optional</small></span>
          <textarea
            name="message"
            rows={6}
            maxLength={3000}
            placeholder="Share the context, outcome or question that will help us point you in the right direction."
          />
        </label>
        <label className="contact-honeypot" aria-hidden="true">
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="new-password" />
        </label>
      </div>
      <p className="contact-form-note">By sending this enquiry, you agree that Tieko Media may respond about your request. Please do not include confidential records or payment details.</p>
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending enquiry..." : "Send your enquiry"}
        <span aria-hidden="true">→</span>
      </button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
