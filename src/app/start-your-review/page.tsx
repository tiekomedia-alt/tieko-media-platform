import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import ReviewForm from "@/components/forms/ReviewForm";

export const metadata: Metadata = {
  title: "Start Your Free Review",
  description: "Tell Tieko Media what you want to solve and receive a focused onboarding path.",
  alternates: { canonical: "/start-your-review" },
  robots: { index: false, follow: true },
};

export default async function StartYourReviewPage({ searchParams }: PageProps<"/start-your-review">) {
  const params = await searchParams;
  const service = typeof params.service === "string" ? params.service : "";

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="intake-page">
        <section className="intake-intro">
          <div className="funnel-shell intake-intro-grid">
            <div>
              <p className="funnel-kicker">Free starting-point review</p>
              <h1>Tell us what you are trying to solve.</h1>
            </div>
            <p>
              This short onboarding form helps us understand your goal before a call. It takes about three minutes and does not commit you to a paid service.
            </p>
          </div>
        </section>
        <section className="intake-form-section">
          <div className="funnel-shell">
            <ReviewForm initialService={service} />
          </div>
        </section>
      </main>
    </div>
  );
}
