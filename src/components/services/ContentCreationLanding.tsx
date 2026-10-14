import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navigation/Header";

const capabilities = [
  "Content strategy and calendars",
  "Copywriting",
  "Social content",
  "Design",
  "Video production",
  "Thought leadership and brand storytelling",
];

const process = [
  ["Discover", "Clarify your goal, audience and offer."],
  ["Design", "Set messages, formats, channels and a realistic production rhythm."],
  ["Produce", "Create the copy, design and video, with approval points built in."],
  ["Improve", "Measure against your goal and improve the next round."],
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
              <p className="funnel-kicker">Content Creation</p>
              <h1 id="content-service-heading">Turn scattered content into a system that builds trust.</h1>
              <p className="content-service-summary">
                Strategy, copy, design and video, tied to one audience, one message and one next step.
              </p>
              <div className="funnel-actions">
                <Link href="/book-a-call?service=content-creation" className="funnel-button funnel-button-primary">
                  Book a call <ArrowIcon />
                </Link>
                <a href="#how-it-works" className="funnel-text-link">See how it works</a>
              </div>
            </div>
            <figure className="content-service-poster content-service-image">
              <Image
                src="/images/services/content-creation.webp"
                alt="Illustration of a content strategy and production workspace"
                width={1600}
                height={900}
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
              <figcaption>Illustration only. Not a client project.</figcaption>
            </figure>
          </div>
        </section>

        <section className="content-problem" aria-labelledby="content-problem-heading">
          <div className="funnel-shell content-problem-grid">
            <p className="funnel-kicker">The problem</p>
            <div>
              <h2 id="content-problem-heading">More posts will not fix an unclear message.</h2>
              <p>Content fails when it is not tied to your offer, your audience and a next step. We fix that first, then build the content.</p>
            </div>
          </div>
        </section>

        <section className="content-capabilities" aria-labelledby="content-capabilities-heading">
          <div className="funnel-shell content-capabilities-grid">
            <div>
              <p className="funnel-kicker">What we build</p>
              <h2 id="content-capabilities-heading">One connected content system.</h2>
            </div>
            <ul>
              {capabilities.map((capability) => <li key={capability}><strong>{capability}</strong></li>)}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="content-process" aria-labelledby="content-process-heading">
          <div className="funnel-shell">
            <div className="content-section-heading content-section-heading-light">
              <p className="funnel-kicker">How it works</p>
              <h2 id="content-process-heading">From objective to repeatable output.</h2>
            </div>
            <div className="content-process-list">
              {process.map(([title, copy]) => (
                <article key={title}><h3>{title}.</h3><p>{copy}</p></article>
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
              <p>We track what matters to your goal: enquiries, qualified attention and better sales conversations.</p>
              <ul>
                <li>No promises of virality</li>
                <li>No fake testimonials</li>
                <li>Human review of all AI-assisted work</li>
                <li>Clear approvals and asset rights</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-service-cta" aria-labelledby="content-cta-heading">
          <div className="funnel-shell">
            <p className="funnel-kicker">Next step</p>
            <h2 id="content-cta-heading">Let&apos;s fix your message first.</h2>
            <p>Tell us what you want your content to achieve. We&apos;ll suggest the most useful next step.</p>
            <Link href="/book-a-call?service=content-creation">Book a call <ArrowIcon /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
