import { capabilityGroups } from "@/lib/home-services";
import ChapterMarker from "@/components/home/ChapterMarker";

export default function CapabilitiesSection() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-heading">
      <div className="section-shell">
        <ChapterMarker number="02" tone="dark" />
        <div className="capabilities-intro">
          <div>
            <p className="section-eyebrow section-eyebrow-light">One connected system</p>
            <h2 id="capabilities-heading">Four capabilities. One stronger business.</h2>
          </div>
          <p>Growth problems rarely exist in isolation. Tieko Media brings together the foundations, systems, distribution and intelligence required to solve them properly.</p>
        </div>

        <ol className="capability-chapters">
          {capabilityGroups.map((group, index) => (
            <li key={group.id}>
              <div className="capability-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
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
