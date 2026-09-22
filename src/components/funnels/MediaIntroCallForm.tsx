"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { FormEvent, useState } from "react";

type BookingResponse = {
  error?: string;
  id?: string;
  emailDelivered?: boolean;
};

export default function MediaIntroCallForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const earliestDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
  }).format(new Date());

  async function requestCall(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const contactMethod = String(formData.get("contactMethod") ?? "");
    const timezone = String(formData.get("timezone") ?? "");
    const website = String(formData.get("website") ?? "").trim() || "Not supplied";
    const budget = String(formData.get("budget") ?? "Not sure yet");
    const challenge = String(formData.get("challenge") ?? "").trim();

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          organisation: formData.get("organisation"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: "Media Services introductory call",
          date: formData.get("date"),
          time: `${formData.get("time")} (${timezone}) by ${contactMethod}`,
          notes: [
            `Main challenge: ${challenge}`,
            `Website: ${website}`,
            `Indicative media budget: ${budget}`,
            `Preferred contact method: ${contactMethod}`,
            `Time zone: ${timezone}`,
          ].join("\n"),
        }),
      });
      const result = (await response.json()) as BookingResponse;

      if (!response.ok) {
        throw new Error(result.error ?? "We could not send your request. Please try again.");
      }

      posthog.capture("media_services_enquiry_submitted", {
        contact_method: contactMethod,
        timezone,
        email_delivered: result.emailDelivered ?? false,
      });
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="media-call-success" role="status" aria-live="polite">
        <span>Callback request received</span>
        <h3>Thank you. Your appointment is not confirmed yet.</h3>
        <p>
          Tieko Media will review your request and contact you to confirm a suitable 15-minute call time. We will initiate the phone or WhatsApp audio call after confirmation.
        </p>
        <Link href="/services">Explore Tieko Media services</Link>
      </div>
    );
  }

  return (
    <form className="media-call-form" onSubmit={requestCall}>
      <div className="media-call-form-grid">
        <label>
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Business name</span>
          <input name="organisation" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone or WhatsApp number</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="media-call-field-wide">
          <span>Main challenge</span>
          <textarea
            name="challenge"
            rows={4}
            required
            placeholder="What is getting in the way of your next marketing move?"
          />
        </label>
        <label>
          <span>Website URL <small>Optional</small></span>
          <input name="website" type="url" inputMode="url" placeholder="https://example.com" />
        </label>
        <label>
          <span>Indicative media budget <small>Optional</small></span>
          <select name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under NGN 100,000</option>
            <option>NGN 100,000 to NGN 500,000</option>
            <option>NGN 500,000 to NGN 1,000,000</option>
            <option>Above NGN 1,000,000</option>
          </select>
        </label>
        <fieldset className="media-call-field-wide media-call-method">
          <legend>How should we call you?</legend>
          <label>
            <input type="radio" name="contactMethod" value="Phone call" required />
            <span>Phone call</span>
          </label>
          <label>
            <input type="radio" name="contactMethod" value="WhatsApp audio" required />
            <span>WhatsApp audio</span>
          </label>
        </fieldset>
        <label>
          <span>Preferred date</span>
          <input name="date" type="date" min={earliestDate} required />
        </label>
        <label>
          <span>Preferred time</span>
          <select name="time" defaultValue="" required>
            <option value="" disabled>Select a time</option>
            <option>9:00 am</option>
            <option>11:00 am</option>
            <option>1:00 pm</option>
            <option>3:00 pm</option>
            <option>5:00 pm</option>
          </select>
        </label>
        <label className="media-call-field-wide">
          <span>Your time zone</span>
          <select name="timezone" defaultValue="West Africa Time (UTC+1)" required>
            <option>West Africa Time (UTC+1)</option>
            <option>Greenwich Mean Time (UTC+0)</option>
            <option>British time</option>
            <option>Eastern Time</option>
            <option>Central Time</option>
            <option>Pacific Time</option>
            <option>Another time zone</option>
          </select>
        </label>
      </div>
      <p className="media-call-explainer">
        This is a callback request, not a confirmed appointment. Tieko Media will confirm the time first, then initiate the selected phone or WhatsApp audio call.
      </p>
      <label className="media-call-consent">
        <input type="checkbox" required />
        <span>I agree that Tieko Media may contact me about this request.</span>
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending request..." : "Request my introductory call"}
      </button>
      {error && <p className="form-error" role="alert" aria-live="assertive">{error}</p>}
    </form>
  );
}
