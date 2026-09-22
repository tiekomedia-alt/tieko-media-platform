import Link from "next/link";
import Header from "@/components/navigation/Header";
import { capabilityGroups } from "@/lib/home-services";

const serviceThemes: Record<string, string> = {
  "Media Buying": "signal",
  "Digital Presence Optimisation": "search",
  "Billboard Advertising": "outdoor",
  "Content Creation": "content",
  "Press Release Services": "press",
  Compliance: "foundation",
  "Data and Records Management": "records",
  "Business Automation & AI Systems": "automation",
  "Intelligence Reports": "intelligence",
};

const shortDescriptions: Record<string, string> = {
  "Media Buying":
    "Plan, place and optimise campaigns around a defined audience, objective and measurement framework.",
  "Digital Presence Optimisation":
    "Improve how your business is found, understood and trusted across search, websites and AI discovery.",
  "Billboard Advertising":
    "Coordinate outdoor campaigns from location and format assessment through placement and reporting.",
  "Content Creation":
    "Build a repeatable content system that develops authority and supports the customer journey.",
  "Press Release Services":
    "Shape a credible news angle, prepare the release and coordinate suitable media distribution.",
  Compliance:
    "Put essential business, regulatory and intellectual-property foundations in place through a scoped process.",
  "Data and Records Management":
    "Digitise, organise, retrieve and govern business records so useful information stays accessible.",
  "Business Automation & AI Systems":
    "Connect tools and automate repetitive work, follow-up, reporting and internal knowledge access.",
  "Intelligence Reports":
    "Turn fragmented market, competitor and audience information into decision-ready intelligence.",
};

const services = capabilityGroups.flatMap((group) =>
  group.services.map((service) => ({
    ...service,
    group: group.title,
    theme: serviceThemes[service.name] ?? "signal",
    shortDescription: shortDescriptions[service.name] ?? service.description,
  })),
).filter((service) => ["/services/compliance", "/services/content-creation"].includes(service.href));

services.push({
  name: "Media Services",
  href: "/mediaservices",
  description: "Connect advertising, landing pages and follow-up around a clear customer pathway.",
  linkLabel: "Explore Media Services",
  group: "Build visibility",
  theme: "signal",
  shortDescription: "Connect advertising, landing pages and follow-up around a clear customer pathway.",
});

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
              <p className="services-page-kicker">Choose your starting point</p>
              <h1 id="services-heading">
                Services built around how businesses <span>actually grow.</span>
              </h1>
            </div>
            <div className="services-page-lead">
              <p>
                Tieko connects foundations, digital systems, visibility, communication and intelligence so you solve the right problem before purchasing an isolated deliverable.
              </p>
              <a href="#service-catalogue">Explore all services <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="services-page-start" aria-labelledby="start-heading">
          <div className="services-page-shell">
            <article className="onboarding-card">
              <div className="onboarding-visual" aria-hidden="true">
                <span>Start</span>
                <strong>01</strong>
                <small>Free review</small>
              </div>
              <div className="onboarding-copy">
                <p className="service-card-label">Not sure what you need?</p>
                <h2 id="start-heading">Start with a free business visibility review.</h2>
                <p>
                  We review the content or business problem you want to solve, identify the most useful next step and prepare your onboarding path. No random package. No unnecessary scope.
                </p>
                <div className="onboarding-steps" aria-label="Onboarding process">
                  <span><b>01</b> Share your goal</span>
                  <span><b>02</b> Get a focused review</span>
                  <span><b>03</b> Choose the right scope</span>
                </div>
              </div>
              <Link className="services-card-action services-card-action-light" href="/start-your-review">
                Start your free review <ArrowIcon />
              </Link>
            </article>
          </div>
        </section>

        <section id="service-catalogue" className="services-catalogue" aria-labelledby="catalogue-heading">
          <div className="services-page-shell">
            <div className="services-catalogue-heading">
              <div>
                <p className="services-page-kicker">The service catalogue</p>
                <h2 id="catalogue-heading">Choose the outcome you need.</h2>
              </div>
              <p>These are the completed service pages currently available. Additional capabilities will appear when their content and supporting visuals are ready.</p>
            </div>

            <div className="services-card-list">
              {services.map((service, index) => (
                <article className="service-offer-card" key={service.name}>
                  <div className={`service-card-visual service-card-visual-${service.theme}`} aria-hidden="true">
                    <span>Tieko Media</span>
                    <strong>{service.name}</strong>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                  <div className="service-card-copy">
                    <p className="service-card-label">{service.group}</p>
                    <h3>{service.name}</h3>
                    <p>{service.shortDescription}</p>
                    <span className="service-card-meta">Scoped after onboarding</span>
                  </div>
                  <Link className="services-card-action" href={service.href}>
                    Explore service <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-final-cta" aria-labelledby="services-cta-heading">
          <div className="services-page-shell">
            <p className="services-page-kicker">One useful conversation</p>
            <h2 id="services-cta-heading">Tell us what you are trying to solve.</h2>
            <p>We will help you identify the right service, product or next step.</p>
            <Link href="/book-a-call">Book a Call <ArrowIcon /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
