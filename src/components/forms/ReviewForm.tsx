"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const serviceLabels: Record<string, string> = {
  "content-creation": "Content Creation",
  "media-buying": "Media Buying",
  "seo-aeo-ranking": "SEO, AEO & Search Ranking",
  compliance: "Compliance",
  "digital-presence-optimisation": "Digital Presence Optimisation",
  "intelligence-reports": "Intelligence Reports",
  "billboard-advertising": "Billboard Advertising",
  "press-release-services": "Press Release Services",
  "data-records-management": "Data and Records Management",
  "business-automation-ai-systems": "Business Automation & AI Systems",
};

export default function ReviewForm({ initialService }: { initialService: string }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(initialService || "content-creation");
  const [goal, setGoal] = useState("");
  const [timeline, setTimeline] = useState("");
  const [stage, setStage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service,
        goal,
        timeline,
        stage,
        name: formData.get("name"),
        organisation: formData.get("organisation"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      }),
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
      <div className="intake-success" role="status">
        <span>Review request sent</span>
        <h2>Your starting point is clear.</h2>
        <p>
          Your request has been delivered to Tieko Media. Your selected pathway is {serviceLabels[service] ?? "a Tieko Media service"}.
        </p>
        <Link href={`/book-a-call?service=${encodeURIComponent(service)}`}>
          Continue to book a call <span aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  return (
    <form className="intake-form" onSubmit={submitReview}>
      <div className="intake-progress" aria-label="Form progress">
        {[1, 2, 3].map((number) => (
          <span key={number} className={number <= step ? "is-active" : ""} aria-hidden="true" />
        ))}
      </div>

      {step === 1 && (
        <fieldset>
          <legend>What do you want help with?</legend>
          <p>Choose the closest starting point. We can refine the scope together.</p>
          <div className="intake-options">
            {Object.entries(serviceLabels).map(([value, label]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="service"
                  value={value}
                  checked={service === value}
                  onChange={(event) => setService(event.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <button type="button" onClick={() => setStep(2)}>Continue <span aria-hidden="true">→</span></button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Tell us about the goal.</legend>
          <div className="intake-field-grid">
            <label className="intake-field intake-field-wide">
              <span>What are you trying to achieve?</span>
              <textarea name="goal" rows={5} required value={goal} onChange={(event) => setGoal(event.target.value)} placeholder="Describe the problem, opportunity or result you want to work towards." />
            </label>
            <label className="intake-field">
              <span>When would you like to begin?</span>
              <select name="timeline" required value={timeline} onChange={(event) => setTimeline(event.target.value)}>
                <option value="" disabled>Select a timeframe</option>
                <option>As soon as possible</option>
                <option>Within one month</option>
                <option>Within three months</option>
                <option>I am planning ahead</option>
              </select>
            </label>
            <label className="intake-field">
              <span>Current stage</span>
              <select name="stage" required value={stage} onChange={(event) => setStage(event.target.value)}>
                <option value="" disabled>Select your stage</option>
                <option>New business or project</option>
                <option>Operating but inconsistent</option>
                <option>Growing and need stronger systems</option>
                <option>Established organisation</option>
              </select>
            </label>
          </div>
          <div className="intake-form-actions">
            <button type="button" className="intake-back" onClick={() => setStep(1)}>Back</button>
            <button
              type="button"
              onClick={(event) => {
                if (event.currentTarget.form?.reportValidity()) setStep(3);
              }}
            >
              Continue <span aria-hidden="true">→</span>
            </button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend>Where should we reach you?</legend>
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
          </div>
          <label className="intake-consent">
            <input type="checkbox" required />
            <span>I agree that Tieko Media may contact me about this request.</span>
          </label>
          <div className="intake-form-actions">
            <button type="button" className="intake-back" onClick={() => setStep(2)}>Back</button>
            <button type="submit" disabled={sending}>{sending ? "Sending..." : "Complete review"} <span aria-hidden="true">→</span></button>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
        </fieldset>
      )}
    </form>
  );
}
