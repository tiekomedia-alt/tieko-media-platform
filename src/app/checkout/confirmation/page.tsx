import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navigation/Header";

type ConfirmationPageProps = {
  searchParams: Promise<{ status?: string; reference?: string }>;
};

export const metadata: Metadata = {
  title: "Payment Status",
  robots: { index: false, follow: false },
};

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { status, reference } = await searchParams;
  const paymentStatus = status === "success" || status === "pending" ? status : "failed";
  const content = {
    success: {
      label: "Payment confirmed",
      title: "Your strategy session is secured.",
      copy: "Thank you. Tieko Media will contact you with the onboarding questionnaire and scheduling details.",
    },
    pending: {
      label: "Verification in progress",
      title: "We are confirming your payment.",
      copy: "Your order is recorded. Please do not pay again. Tieko Media will confirm the result after Flutterwave completes verification.",
    },
    failed: {
      label: "Payment not confirmed",
      title: "Your payment could not be verified.",
      copy: "No service will be marked as paid until verification succeeds. You can return to checkout or contact Tieko Media for help.",
    },
  }[paymentStatus];

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="payment-result-page">
        <section className={`payment-result payment-result-${paymentStatus}`}>
          <span>{content.label}</span>
          <h1>{content.title}</h1>
          <p>{content.copy}</p>
          {reference && <small>Payment reference: {reference.slice(0, 80)}</small>}
          <div>
            <Link href="/services/content-creation">Return to Content Creation</Link>
            <Link href="/book-a-call?service=content-creation">Contact Tieko Media</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
