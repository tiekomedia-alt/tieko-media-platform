import Link from "next/link";
import Header from "@/components/navigation/Header";

const capabilities = [
  "Content strategy",
  "Campaign concepts",
  "Social content",
  "Copywriting",
  "Design",
  "Video production",
  "Brand storytelling",
  "Content calendars",
  "Reusable content assets",
  "Thought leadership",
  "Distribution planning",
  "Performance review",
];

const process = [
  {
    number: "01",
    title: "Discover",
    copy: "We clarify the business goal, audience, offer, existing assets and the decision your content should help people make.",
  },
  {
    number: "02",
    title: "Design the system",
    copy: "We define messages, themes, formats, channels, workflow, review responsibilities and a realistic production rhythm.",
  },
  {
    number: "03",
    title: "Produce",
    copy: "We create the agreed copy, design, video and reusable assets with documented client review and approval points.",
  },
  {
    number: "04",
    title: "Learn and improve",
    copy: "We connect distribution and measurement to the original objective, then use evidence to improve the next cycle.",
  },
];

const faqs = [
  [
    "Do you provide strategy or only production?",
    "Both. We can develop the content strategy and production system, or work within a clear strategy your team already uses.",
  ],
  [
    "Which content formats do you create?",
    "Scopes can include copy, social graphics, campaign assets, short-form video, brand stories, articles, scripts and reusable content resources.",
  ],
  [
    "How many pieces of content will I receive?",
    "The quantity is defined after onboarding. We recommend a scope based on your objective, channels, available source material and review capacity.",
  ],
  [
    "Can Tieko manage distribution?",
    "Distribution planning can be included. Paid media, press distribution and platform costs are scoped separately where required.",
  ],
  [
    "Do you use AI?",
    "AI may support research and workflow efficiency, but every client-facing output receives human review. We do not treat unreviewed AI output as finished content.",
  ],
  [
    "Who owns the final content?",
    "Ownership and usage rights are stated in the project agreement. Third-party assets remain subject to their applicable licences.",
  ],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ContentCreationLanding() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="content-service-page">
        <section className="content-service-hero" aria-labelledby="content-service-heading">
          <div className="funnel-shell content-service-hero-grid">
            <div>
              <p className="funnel-kicker">Content Creation / Tieko Media</p>
              <h1 id="content-service-heading">Turn scattered content into a system that builds trust.</h1>
              <p className="content-service-summary">
                Strategy, copy, design and video connected to a clear audience, message and customer journey.
              </p>
              <div className="funnel-actions">
                <Link href="/start-your-review?service=content-creation" className="funnel-button funnel-button-primary">
                  Plan your content system <ArrowIcon />
                </Link>
                <a href="#how-it-works" className="funnel-text-link">See how it works</a>
              </div>
            </div>
            <div className="content-service-poster" aria-hidden="true">
              <span>Strategy / Production / Distribution</span>
              <strong>CONTENT<br />WITH A<br /><em>JOB TO DO.</em></strong>
              <small>TIEKO / 04</small>
            </div>
          </div>
        </section>

        <section className="content-problem" aria-labelledby="content-problem-heading">
          <div className="funnel-shell content-problem-grid">
            <p className="funnel-kicker">The real problem</p>
            <div>
              <h2 id="content-problem-heading">More posts will not fix an unclear message.</h2>
              <p>
                Content underperforms when it is disconnected from the offer, audience and next action. Tieko starts with the business problem, then creates the system and assets needed to move people from attention to understanding and trust.
              </p>
            </div>
          </div>
        </section>

        <section className="content-capabilities" aria-labelledby="content-capabilities-heading">
          <div className="funnel-shell">
            <div className="content-section-heading">
              <p className="funnel-kicker">What we can build</p>
              <h2 id="content-capabilities-heading">One connected content system.</h2>
            </div>
            <ul className="content-capability-grid">
              {capabilities.map((capability, index) => (
                <li key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{capability}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="content-process" aria-labelledby="content-process-heading">
          <div className="funnel-shell">
            <div className="content-section-heading content-section-heading-light">
              <p className="funnel-kicker">The working process</p>
              <h2 id="content-process-heading">From objective to repeatable output.</h2>
            </div>
            <div className="content-process-list">
              {process.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-measurement" aria-labelledby="content-measurement-heading">
          <div className="funnel-shell content-measurement-grid">
            <div>
              <p className="funnel-kicker">Measurement</p>
              <h2 id="content-measurement-heading">Measure the job, not vanity.</h2>
            </div>
            <div>
              <p>
                We define useful indicators around the actual objective: discovery, qualified attention, enquiries, conversion support, reusable assets or stronger sales conversations.
              </p>
              <ul>
                <li>No promise of virality</li>
                <li>No artificial testimonials</li>
                <li>Human review for AI-assisted work</li>
                <li>Documented approvals and asset rights</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-offers" aria-labelledby="content-offers-heading">
          <div className="funnel-shell">
            <div className="content-section-heading">
              <p className="funnel-kicker">Choose your next step</p>
              <h2 id="content-offers-heading">Start with clarity, then choose the right scope.</h2>
            </div>
            <div className="content-offer-grid">
              <article>
                <span>Free pathway</span>
                <h3>Business visibility review</h3>
                <p>Share your goal and current challenge. We will identify the most useful next step before recommending a larger scope.</p>
                <strong>Free</strong>
                <Link href="/start-your-review?service=content-creation">Start your review <ArrowIcon /></Link>
              </article>
              <article className="content-offer-featured">
                <span>Custom engagement</span>
                <h3>Content production and management</h3>
                <p>For organisations that need strategy, production and distribution support shaped around a defined objective and realistic workflow.</p>
                <strong>Scoped after onboarding</strong>
                <Link href="/book-a-call?service=content-creation">Book an onboarding call <ArrowIcon /></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="content-faq" aria-labelledby="content-faq-heading">
          <div className="funnel-shell content-faq-grid">
            <div>
              <p className="funnel-kicker">Frequently asked</p>
              <h2 id="content-faq-heading">Before we begin.</h2>
            </div>
            <div className="content-faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="content-service-cta" aria-labelledby="content-cta-heading">
          <div className="funnel-shell">
            <p className="funnel-kicker">Your next content cycle can be clearer</p>
            <h2 id="content-cta-heading">Let us plan the system before we produce the pieces.</h2>
            <Link href="/start-your-review?service=content-creation">
              Start your free review <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
