import Link from "next/link";
import { capabilityGroups } from "@/lib/home-services";
import ChapterMarker from "@/components/home/ChapterMarker";

export default function ServicesIndex() {
  return (
    <section className="services-index" aria-labelledby="services-heading">
      <div className="section-shell">
        <ChapterMarker number="03" />
        <div className="services-intro">
          <p className="section-eyebrow">What we do</p>
          <div>
            <h2 id="services-heading">Services built around how businesses actually grow.</h2>
            <p>You may need one focused service or a connected programme of work. We begin with the problem, identify what is missing and recommend a scope that makes commercial sense.</p>
          </div>
        </div>

        <div className="service-groups">
          {capabilityGroups.map((group, groupIndex) => {
            const serviceOffset = capabilityGroups
              .slice(0, groupIndex)
              .reduce((total, currentGroup) => total + currentGroup.services.length, 0);

            return (
            <section className="service-group-chapter" key={group.id} aria-labelledby={`service-group-${group.id}`}>
              <header>
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3 id={`service-group-${group.id}`}>{group.title}</h3>
              </header>
              <ol>
                {group.services.map((service, serviceIndex) => {
                  const serviceNumber = serviceOffset + serviceIndex + 1;
                  return (
                    <li key={service.name}>
                      <Link href={service.href} aria-label={service.linkLabel}>
                        <span className="service-number">{String(serviceNumber).padStart(2, "0")}</span>
                        <span className="service-content">
                          <strong>{service.name}</strong>
                          <span>{service.description}</span>
                        </span>
                        <span className="service-arrow" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
            );
          })}
        </div>

        <aside className="service-guidance" aria-labelledby="service-guidance-heading">
          <div>
            <p className="section-eyebrow">Service guidance</p>
            <h3 id="service-guidance-heading">Not sure which service fits the problem?</h3>
          </div>
          <div>
            <p>Tell us what is happening in your business. We will help you identify the immediate need, the dependencies around it and the most sensible next step.</p>
            <Link href="/book-a-call">Book a Call</Link>
          </div>
        </aside>

        <div className="health-check-transition">
          <ChapterMarker number="04" />
        </div>
      </div>
    </section>
  );
}
