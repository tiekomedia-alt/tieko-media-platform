"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  ["content-creation", "Content Creation"],
  ["media-buying", "Media Buying"],
  ["digital-presence-optimisation", "Digital Presence Optimisation"],
  ["compliance", "Compliance"],
  ["business-automation-ai-systems", "Business Automation & AI Systems"],
  ["intelligence-reports", "Intelligence Reports"],
  ["other", "Another business need"],
];

export default function BookingForm({ initialService }: { initialService: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = (await response.json()) as { error?: string };
    setSending(false);

    if (!response.ok) {
      setError(result.error ?? "We could not send your request. Please try again.");
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="booking-success" role="status">
        <span>Consultation request sent</span>
        <h2>Thank you. We have your preferred time.</h2>
        <p>Your request has been delivered to Tieko Media. We will confirm the meeting details using the contact information you supplied.</p>
        <Link href="/services">Return to services <span aria-hidden="true">→</span></Link>
      </div>
    );
  }

  return (
    <div className="booking-panel">
      <div className="booking-panel-aside">
        <p className="funnel-kicker">Before the call</p>
        <h2>A little context creates a better conversation.</h2>
        <p>We will use your answers to prepare the right questions and avoid spending the call collecting basic information.</p>
        <div>
          <strong>What happens next</strong>
          <span>We review your request</span>
          <span>We confirm a suitable time</span>
          <span>We send the meeting details</span>
        </div>
      </div>
      <form className="booking-form" onSubmit={submitBooking}>
        <div className="intake-field-grid">
          <label className="intake-field">
            <span>Full name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className="intake-field">
            <span>Business or organisation</span>
            <input type="text" name="organisation" autoComplete="organization" required />
          </label>
          <label className="intake-field">
            <span>Email address</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className="intake-field">
            <span>Phone or WhatsApp</span>
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label className="intake-field intake-field-wide">
            <span>Service or topic</span>
            <select name="service" defaultValue={initialService || "content-creation"} required>
              {services.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select>
          </label>
          <label className="intake-field">
            <span>Preferred date</span>
            <input type="date" name="date" required />
          </label>
          <label className="intake-field">
            <span>Preferred time</span>
            <select name="time" defaultValue="" required>
              <option value="" disabled>Select a time</option>
              <option>9:00 AM WAT</option>
              <option>11:00 AM WAT</option>
              <option>1:00 PM WAT</option>
              <option>3:00 PM WAT</option>
              <option>5:00 PM WAT</option>
            </select>
          </label>
          <label className="intake-field intake-field-wide">
            <span>What should we discuss?</span>
            <textarea name="notes" rows={4} required placeholder="A short summary helps us prepare." />
          </label>
        </div>
        <label className="intake-consent">
          <input type="checkbox" required />
          <span>I agree that Tieko Media may contact me about this consultation.</span>
        </label>
        <button type="submit" className="booking-submit" disabled={sending}>{sending ? "Sending..." : "Request consultation"} <span aria-hidden="true">→</span></button>
        {error && <p className="form-error" role="alert">{error}</p>}
      </form>
    </div>
  );
}
