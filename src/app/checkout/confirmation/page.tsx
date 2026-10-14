import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import { getSalesOffer } from "@/lib/offers";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type ConfirmationPageProps = {
  searchParams: Promise<{ status?: string; reference?: string }>;
};

export const metadata: Metadata = {
  title: "Payment Status",
  robots: { index: false, follow: false },
};

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { status, reference: suppliedReference } = await searchParams;
  const reference = suppliedReference?.trim().slice(0, 80);
  const supabase = getSupabaseAdmin();
  const safeReference = reference && /^[A-Za-z0-9.=\-]+$/.test(reference) ? reference : undefined;
  const { data: order } = safeReference && supabase
    ? await supabase.from("orders").select("status, offer_slug, fulfillment_status").eq("reference", safeReference).maybeSingle()
    : { data: null };
  const verifiedStatus = order?.status === "paid" ? "success" : order?.status === "pending" || order?.status === "processing" ? "pending" : null;
  const paymentStatus = verifiedStatus ?? (status === "pending" ? "pending" : "failed");
  const offer = order?.offer_slug ? getSalesOffer(order.offer_slug) : null;
  const digitalDelivery = offer?.fulfillment !== undefined && offer.fulfillment !== "manual";
  const content = {
    success: {
      label: "Payment confirmed",
      title: digitalDelivery ? "Your purchase is confirmed." : "Your strategy session is secured.",
      copy: digitalDelivery
        ? order?.fulfillment_status === "fulfilled"
          ? "Your private access email has been sent. Check your inbox and spam folder, and keep the payment reference below."
          : "Your payment is confirmed and your private access email is being prepared. Keep the payment reference below."
        : "Thank you. Tieko Media will contact you with the onboarding questionnaire and scheduling details.",
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
          {safeReference && <small>Payment reference: {safeReference}</small>}
          <div>
            <Link href={digitalDelivery ? "/store" : "/services/content-creation"}>{digitalDelivery ? "Return to Tieko Store" : "Return to Content Creation"}</Link>
            <Link href={digitalDelivery ? "mailto:info@tiekomedia.com?subject=Digital%20purchase%20support" : "/book-a-call?service=content-creation"}>Contact Tieko Media</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
