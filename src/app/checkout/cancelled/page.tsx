import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navigation/Header";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  robots: { index: false, follow: false },
};

export default function CancelledCheckoutPage() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="payment-result-page">
        <section className="payment-result payment-result-pending">
          <span>Checkout cancelled</span>
          <h1>No payment was completed.</h1>
          <p>You can return to the offer when you are ready or start with a free review if you need help choosing the right scope.</p>
          <div>
            <Link href="/checkout/content-system-session">Return to checkout</Link>
            <Link href="/start-your-review?service=content-creation">Start a free review</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
