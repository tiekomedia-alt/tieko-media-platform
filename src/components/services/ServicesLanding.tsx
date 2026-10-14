import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navigation/Header";

const services = [
  {
    name: "SEO, AEO & Search Ranking",
    description: "Turn customer search demand into durable visibility, authority and qualified enquiries.",
    href: "/services/seo-aeo-ranking",
    image: "/images/insights/seo-aeo-visibility.webp",
    imageAlt: "A customer question connected to organised pages, evidence and a useful answer",
  },
  {
    name: "Business Intelligence & Research",
    description: "Turn scattered information into a clear decision.",
    href: "/services/intelligence-reports",
    image: "/images/services/business-intelligence.webp",
    imageAlt: "Illustrative business research and intelligence workspace",
  },
  {
    name: "Content Creation",
    description: "Turn scattered content into a system that builds trust.",
    href: "/services/content-creation",
    image: "/images/services/content-creation.webp",
    imageAlt: "Illustrative content strategy and production workspace",
  },
  {
    name: "Website & Conversion Optimisation",
    description: "Improve the owned journey from first visit to enquiry.",
    href: "/services/digital-presence-optimisation",
    image: "/images/services/digital-optimisation.webp",
    imageAlt: "Illustrative website and conversion optimisation workspace",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ServicesLanding() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="services-page">
        <section className="services-page-hero" aria-labelledby="services-heading">
          <div className="services-page-shell services-page-hero-grid">
            <div className="services-page-intro">
              <p className="services-page-kicker">Services</p>
              <h1 id="services-heading">Services built around your business problem.</h1>
            </div>
            <div className="services-page-lead">
              <p>Start with the problem. Every service ends with a clear next step.</p>
              <Link href="/book-a-call">Book a call <ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <section id="service-catalogue" className="services-catalogue" aria-labelledby="catalogue-heading">
          <div className="services-page-shell">
            <div className="services-catalogue-heading">
              <div>
                <p className="services-page-kicker">What we do</p>
                <h2 id="catalogue-heading">Choose the problem you want to solve.</h2>
              </div>
            </div>

            <div className="services-card-list">
              {services.map((service) => (
                <article className="service-offer-card" key={service.name}>
                  <figure className="service-card-visual">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={800}
                      height={600}
                      sizes="(max-width: 760px) 100vw, 18rem"
                    />
                    <figcaption>Illustration only</figcaption>
                  </figure>
                  <div className="service-card-copy">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Link className="services-card-action" href={service.href}>
                    Learn more <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-final-cta" aria-labelledby="services-cta-heading">
          <div className="services-page-shell">
            <p className="services-page-kicker">Next step</p>
            <h2 id="services-cta-heading">Tell us what is getting in the way.</h2>
            <p>We will suggest the most useful next step.</p>
            <Link href="/book-a-call">Book a call <ArrowIcon /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
