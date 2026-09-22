"use client";

import posthog from "posthog-js";
import { FormEvent, useState } from "react";

type CheckoutFormProps = {
  offerSlug: string;
  offerName: string;
  price: string;
};

export default function CheckoutForm({ offerSlug, offerName, price }: CheckoutFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    posthog.capture("checkout_started", { offer_slug: offerSlug, offer_name: offerName });

    try {
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offerSlug,
          fullName: formData.get("fullName"),
          organisation: formData.get("organisation"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          projectGoal: formData.get("projectGoal"),
        }),
      });
      const result = (await response.json()) as { authorizationUrl?: string; error?: string };

      if (!response.ok || !result.authorizationUrl) {
        throw new Error(result.error ?? "Secure checkout could not be started.");
      }

      posthog.capture("checkout_redirected", { offer_slug: offerSlug });
      window.location.assign(result.authorizationUrl);
    } catch (checkoutError) {
      setSubmitting(false);
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Secure checkout could not be started.",
      );
    }
  }

  return (
    <form className="checkout-form" onSubmit={startCheckout}>
      <div className="checkout-form-heading">
        <span>Secure checkout</span>
        <strong>{price}</strong>
      </div>
      <div className="checkout-field-grid">
        <label>
          <span>Full name</span>
          <input name="fullName" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Business or organisation</span>
          <input name="organisation" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone or WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>What should this session help you achieve?</span>
          <textarea name="projectGoal" rows={4} required placeholder="Tell us about the campaign, platform and result you want to work towards." />
        </label>
      </div>
      <label className="checkout-consent">
        <input type="checkbox" required />
        <span>I agree to the offer details and consent to being contacted about delivery.</span>
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? "Opening secure checkout..." : `Continue to Flutterwave — ${price}`}
      </button>
      <p className="checkout-security">Payment details are entered securely on Flutterwave. Tieko Media does not store your card information.</p>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
