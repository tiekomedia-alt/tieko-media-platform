import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import ContactEnquiryForm from "@/components/forms/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Tieko Media",
  description: "Contact Tieko Media for SEO, digital visibility, data management, compliance, media services, research, data-centre sourcing and other business enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tieko Media | Start with the right enquiry",
    description: "Tell us what you need help with and receive a considered next step from Tieko Media.",
    url: "/contact",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Tieko Media",
    url: "https://www.tiekomedia.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Tieko Media Limited",
      email: "info@tiekomedia.com",
      telephone: "+2349038198689",
    },
  };

  return (
    <div className="contact-page">
      <Header />
      <main id="main-content">
        <section className="contact-hero">
          <div className="contact-shell contact-hero-grid">
            <div>
              <p className="contact-kicker">Contact Tieko Media</p>
              <h1>Start with the question that matters.</h1>
              <p>Choose the closest area of support, tell us what you are trying to achieve, and we will point you towards a practical next step.</p>
            </div>
            <aside className="contact-hero-aside">
              <span>01</span>
              <strong>Clear enquiry.<br />Useful response.</strong>
              <p>Our first reply is designed to clarify fit, not rush you into a generic package.</p>
            </aside>
          </div>
        </section>
        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <div className="contact-shell contact-layout">
            <div className="contact-copy">
              <p className="contact-kicker">Tell us what you need</p>
              <h2 id="contact-form-title">One enquiry. A clearer starting point.</h2>
              <p>Use this form for services, sourcing, products, partnerships and questions not covered elsewhere on the website.</p>
              <div className="contact-details">
                <a href="mailto:info@tiekomedia.com">info@tiekomedia.com</a>
                <a href="tel:+2349038198689">+234 903 819 8689</a>
                <span>Lagos, Nigeria · Working across borders</span>
              </div>
            </div>
            <ContactEnquiryForm />
          </div>
        </section>
        <section className="contact-expectations">
          <div className="contact-shell">
            <p className="contact-kicker">What happens next</p>
            <ol>
              <li><span>01</span><strong>You send the context</strong><p>Select the closest enquiry area and add any useful detail.</p></li>
              <li><span>02</span><strong>We review the fit</strong><p>We consider the request, available information and the most useful route forward.</p></li>
              <li><span>03</span><strong>You receive a response</strong><p>We reply with a next step, a focused question or a suitable booking route.</p></li>
            </ol>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}
