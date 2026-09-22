import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import CalBookingEmbed from "@/components/forms/CalBookingEmbed";

export const metadata: Metadata = {
  title: "Book an Introductory Call",
  description: "Book a free 15-minute phone or WhatsApp audio call with Tieko Media to discuss your business goal and next practical step.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book an Introductory Call | Tieko Media",
    description: "Choose a time for a focused 15-minute introductory phone or WhatsApp audio call.",
    url: "/book-a-call",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default async function BookACallPage({ searchParams }: PageProps<"/book-a-call">) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";
  const calBookingUrl =
    process.env.NEXT_PUBLIC_CAL_BOOKING_URL ??
    "https://cal.com/tieko-media-ltd-qjqmt3/15min";

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="booking-page">
        <section className="booking-hero">
          <div className="funnel-shell booking-hero-grid">
            <div>
              <p className="funnel-kicker">Free introductory call / 15 minutes</p>
              <h1>Let us make the next step useful.</h1>
              <p>Choose a time for a phone or WhatsApp audio call and tell us what a productive conversation should cover.</p>
            </div>
            <ul>
              <li><span>01</span> Clarify the business goal</li>
              <li><span>02</span> Identify the right starting point</li>
              <li><span>03</span> Agree the next action</li>
            </ul>
          </div>
        </section>
        <section className="booking-form-section">
          <div className="funnel-shell">
            <CalBookingEmbed bookingUrl={calBookingUrl} initialService={service} />
          </div>
        </section>
      </main>
    </div>
  );
}
