import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import Header from "@/components/navigation/Header";
import { formatOfferPrice, getSalesOffer } from "@/lib/offers";

type CheckoutPageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Secure Checkout",
  description: "Complete a secure payment for an approved Tieko Media offer.",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const offer = getSalesOffer(slug);

  if (!offer) notFound();

  const price = formatOfferPrice(offer);

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="checkout-page">
        <div className="funnel-shell checkout-layout">
          <section className="checkout-offer" aria-labelledby="checkout-heading">
            <p className="funnel-kicker">Tieko Media / Secure purchase</p>
            <h1 id="checkout-heading">{offer.name}</h1>
            <p>{offer.shortDescription}</p>
            <ul>
              {offer.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="checkout-boundary">
              <strong>What happens next</strong>
              <p>{offer.fulfillment === "manual" ? "After payment is confirmed, Tieko Media will contact you to complete the questionnaire and schedule the session." : "After Flutterwave confirms the payment, the access instructions are sent automatically to your checkout email."}</p>
            </div>
          </section>
          <aside className="checkout-panel">
            {price ? (
              <CheckoutForm offerSlug={offer.slug} offerName={offer.name} price={price} requiresProjectDetails={offer.requiresProjectDetails} />
            ) : (
              <div className="checkout-unavailable">
                <span>Checkout not activated</span>
                <h2>This offer’s final price is still being approved.</h2>
                <p>Use the free review pathway now. We will recommend the right scope before asking you to pay.</p>
                <Link href="/start-your-review?service=content-creation">Start your free review</Link>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
