import Link from "next/link";

const liveServices = [
  {
    number: "01",
    title: "Compliance and Institutional Support",
    description:
      "Application coordination, document preparation and professional referrals for important Nigerian business processes.",
    href: "/services/compliance",
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Strategy, copy, design, video and distribution planning built around a repeatable content system.",
    href: "/services/content-creation",
  },
  {
    number: "03",
    title: "Media Services",
    description:
      "Connected advertising, landing pages and follow-up pathways that give interested visitors a clear next action.",
    href: "/mediaservices",
  },
];

export default function ServicesIndex() {
  return (
    <section className="services-index" aria-labelledby="services-heading">
      <div className="section-shell">
        <div className="services-intro">
          <p className="section-eyebrow">Selected capabilities</p>
          <div>
            <h2 id="services-heading">Start with the business problem, not an isolated deliverable.</h2>
            <p>These completed service pages explain the work, process and next step. Additional Tieko Media capabilities will be added as their content and visuals are approved.</p>
          </div>
        </div>

        <div className="home-service-card-grid">
          {liveServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href}>Explore service <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>

        <div className="home-services-footer">
          <Link href="/services">View all available services</Link>
          <Link href="/book-a-call">Book a Call</Link>
        </div>
      </div>
    </section>
  );
}
