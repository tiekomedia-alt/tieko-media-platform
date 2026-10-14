import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DiqAssessment from "@/components/diq/DiqAssessment";
import Header from "@/components/navigation/Header";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Check Your Digital Intelligence Quotient",
  description: "Take Tieko Media's free 20-question DIQ assessment and receive a branded scorecard showing how prepared your business is across identity, visibility, payments, data and access.",
  alternates: { canonical: "/digital-intelligence-quotient" },
  openGraph: {
    title: "Check Your DIQ | Tieko Media",
    description: "20 questions. Five capability areas. One clear score out of 100.",
    url: "/digital-intelligence-quotient",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/insights/digital-intelligence-quotient.webp", width: 1536, height: 1024, alt: "Tieko Media Digital Intelligence Quotient assessment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Your DIQ | Tieko Media",
    description: "Discover whether your business infrastructure is exposed, fragile or digitally intelligent.",
    images: ["/images/insights/digital-intelligence-quotient.webp"],
  },
};

export default function DigitalIntelligenceQuotientPage() {
  const assessmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tieko Media Digital Intelligence Quotient",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/digital-intelligence-quotient"),
    description: metadata.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
    provider: { "@type": "Organization", name: "Tieko Media", url: absoluteUrl("/") },
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="diq-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentJsonLd).replace(/</g, "\\u003c") }} />

        <section className="diq-hero" aria-labelledby="diq-page-heading">
          <div className="section-shell diq-hero-grid">
            <div className="diq-hero-copy">
              <p className="section-eyebrow">Tieko Media DIQ assessment</p>
              <h1 id="diq-page-heading">How digitally intelligent is your business?</h1>
              <p>Digital intelligence isn&apos;t how often you post. It&apos;s whether your identity, visibility, payments, data and access work together, without depending on luck.</p>
              <a href="#take-the-test">Take the DIQ test <span aria-hidden="true">&darr;</span></a>
            </div>
            <figure className="diq-hero-visual">
              <Image
                src="/images/insights/digital-intelligence-quotient.webp"
                alt="A connected model of customer, commerce, records and digital tools across Nigeria"
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 100vw, 48vw"
                priority
              />
              <figcaption><strong>20</strong><span>questions</span><strong>100</strong><span>points</span><strong>3</strong><span>minutes</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="diq-manifesto" aria-labelledby="diq-why-heading">
          <div className="section-shell diq-manifesto-grid">
            <p className="section-eyebrow">Beyond social activity</p>
            <div>
              <h2 id="diq-why-heading">Posting is activity. Infrastructure is intelligence.</h2>
              <p>A business can be active on every platform and still be exposed. If customers can&apos;t find a dependable website, if you don&apos;t control your own passwords, or if international buyers can&apos;t pay you, attention has nowhere useful to go.</p>
              <p>Your DIQ measures the systems underneath the content: discoverability, commercial readiness, data discipline, operational intelligence and access control. You get a clear score and a clear place to start improving.</p>
            </div>
          </div>
        </section>

        <div id="take-the-test" className="section-shell diq-assessment-shell">
          <DiqAssessment />
        </div>

        <section className="diq-scale" aria-labelledby="diq-scale-heading">
          <div className="section-shell">
            <div className="diq-scale-heading">
              <p className="section-eyebrow">The DIQ scale</p>
              <h2 id="diq-scale-heading">One score. A clear signal.</h2>
            </div>
            <div className="diq-scale-grid">
              <article className="diq-scale-red"><strong>0–49</strong><h3>Digitally exposed</h3><p>Gaps in your identity, access, records or customer systems put the business at risk. Fix these first.</p></article>
              <article className="diq-scale-orange"><strong>50–69</strong><h3>Visible but fragile</h3><p>You&apos;re active and easy to find, but key systems still rely on improvisation. One lost password or failed payment could stall you.</p></article>
              <article className="diq-scale-green"><strong>70–100</strong><h3>Digitally intelligent</h3><p>Your identity, visibility, payments and data work as one system, ready to support steady growth at home and abroad.</p></article>
            </div>
          </div>
        </section>

        <section className="diq-related">
          <div className="section-shell diq-related-inner">
            <div><p className="section-eyebrow section-eyebrow-light">Go deeper</p><h2>Read the thinking behind the score.</h2></div>
            <Link href="/insights/digital-intelligence-quotient">Read the DIQ insight <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
