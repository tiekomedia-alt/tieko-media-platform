import Header from "@/components/navigation/Header";
import { supportingWork, teamShuffleCaseStudy, teamShuffleResponsibilities } from "@/lib/home-work";

export default function WorkLanding() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="work-page">
        <section className="work-page-hero" aria-labelledby="work-page-heading">
          <div className="section-shell">
            <p className="section-eyebrow">Work</p>
            <div>
              <h1 id="work-page-heading">Selected systems, products and foundations built for real organisations.</h1>
              <p>Tieko Media works across product strategy, digital experience, business foundations and information systems. This page presents confirmed project scopes without invented outcomes or unsupported claims.</p>
            </div>
          </div>
        </section>

        <section className="work-page-feature" aria-labelledby="work-teamshuffle-heading">
          <div className="section-shell">
            <div className="work-page-feature-copy">
              <p className="work-kicker">Featured product</p>
              <h2 id="work-teamshuffle-heading">TeamShuffle</h2>
              <p className="work-page-feature-statement">A global web-based decision toolkit built for fair and transparent team selection.</p>
              <p>Tieko Media led the product strategy, user experience, interface design and responsive engineering behind TeamShuffle, including its fairness logic, verification records, shareable results and search architecture.</p>
              <ul>
                {teamShuffleResponsibilities.slice(0, 8).map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div className="work-page-actions">
                <a href="https://teamshuffle.win" target="_blank" rel="noreferrer">Visit TeamShuffle</a>
                {!teamShuffleCaseStudy.caseStudyAvailable && <span>Case study coming later</span>}
              </div>
            </div>
            <div className="work-page-feature-placeholder">
              <span>TeamShuffle product screenshot</span>
              <small>Approved image pending</small>
            </div>
          </div>
        </section>

        <section className="work-page-index" aria-labelledby="supporting-work-heading">
          <div className="section-shell">
            <div className="work-page-index-heading">
              <p className="section-eyebrow">Supporting Work</p>
              <h2 id="supporting-work-heading">Different needs. Deliberate foundations.</h2>
            </div>
            <div className="work-project-rows">
              {supportingWork.map((project, index) => (
                <article key={project.slug}>
                  <div className="work-project-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="work-project-placeholder">
                    <span>{project.placeholder}</span>
                  </div>
                  <div className="work-project-copy">
                    <p>{project.location ?? "Project record"}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {!project.caseStudyAvailable && <span>Case study coming later</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
