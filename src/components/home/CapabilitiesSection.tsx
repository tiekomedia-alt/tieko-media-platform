import { capabilityGroups } from "@/lib/home-services";

export default function CapabilitiesSection() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-heading">
      <div className="section-shell">
        <div className="capabilities-intro">
          <div>
            <p className="section-eyebrow section-eyebrow-light">One connected system</p>
            <h2 id="capabilities-heading">Four capabilities. One stronger business.</h2>
          </div>
          <p>Growth problems rarely exist in isolation. We bring together the foundations, systems, distribution and intelligence required to solve them properly.</p>
        </div>

        <ol className="capability-chapters">
          {capabilityGroups.map((group) => (
            <li key={group.id}>
              <div className="capability-meta">
                <span>{group.title}</span>
              </div>
              <p className="capability-name">{group.capability}</p>
              <h3>{group.statement}</h3>
              <p className="capability-description">{group.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
