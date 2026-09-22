import Link from "next/link";

const selectedWork = [
  {
    label: "Digital product",
    title: "TeamShuffle",
    description: "Product strategy, user experience, interface design and responsive engineering for a fair team-selection toolkit.",
  },
  {
    label: "Digital presence",
    title: "Passion Care Academy",
    description: "Digital reputation improvement, website strategy and website development for a Delaware organisation.",
  },
  {
    label: "Business foundations",
    title: "Compliance coordination",
    description: "Recorded compliance and licensing work for Nairafolio, Spen Agro and OliveBloom, without publishing unsupported outcomes.",
  },
];

export default function SelectedWork() {
  return (
    <section className="home-work-summary" aria-labelledby="selected-work-heading">
      <div className="section-shell">
        <div className="home-work-heading">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Selected genuine work</p>
            <h2 id="selected-work-heading">Useful systems and foundations built around real needs.</h2>
          </div>
          <p>Only confirmed project scopes are presented. Detailed outcomes and imagery will be added when they are approved for publication.</p>
        </div>
        <div className="home-work-grid">
          {selectedWork.map((project, index) => (
            <article key={project.title}>
              <span>{String(index + 1).padStart(2, "0")} / {project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <Link className="home-work-link" href="/work">View selected work <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
