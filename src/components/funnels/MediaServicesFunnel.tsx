import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import MediaCalBooking from "@/components/funnels/MediaCalBooking";
import MediaIntroCallForm from "@/components/funnels/MediaIntroCallForm";
import TrackedFunnelLink from "@/components/funnels/TrackedFunnelLink";

const freeFramework = [
  {
    number: "01",
    title: "Choose one business result",
    copy: "Start with the action the campaign should create, such as an enquiry, booking, sale or qualified visit. Do not begin with a platform or a boosted post.",
  },
  {
    number: "02",
    title: "Clarify the offer and audience",
    copy: "State who the offer helps, what changes for them and why the next action is worth taking. An unclear offer makes every channel work harder.",
  },
  {
    number: "03",
    title: "Prepare the customer path",
    copy: "Check the landing page, form, phone or WhatsApp route before buying attention. Interested visitors should know what to do next.",
  },
  {
    number: "04",
    title: "Plan follow-up and measurement",
    copy: "Decide who responds, how quickly they respond and which useful action will be measured. Impressions alone do not explain business value.",
  },
];

const services = [
  {
    title: "Media Buying",
    copy: "Campaign planning, channel selection, setup and responsible optimisation around a defined objective.",
  },
  {
    title: "Landing Pages",
    copy: "Clear destinations that connect the campaign message to an enquiry, booking or purchase pathway.",
  },
  {
    title: "Content Creation",
    copy: "Campaign messages and content assets designed around the audience, offer and next action.",
  },
  {
    title: "Follow-up Systems",
    copy: "Practical workflows that help businesses respond, organise leads and reduce missed opportunities.",
  },
];

const callSteps = [
  ["01", "Choose how to book", "Select an available Cal.com time for a confirmed appointment, or send a callback request if the available times do not suit you."],
  ["02", "Share useful context", "Tell us about your business, your main challenge and whether you prefer a phone or WhatsApp audio call."],
  ["03", "Tieko Media calls you", "We initiate the 15-minute call using the confirmed time and contact method."],
];

const faqs = [
  ["Is the introductory call free?", "Yes. The 15-minute introductory call helps us understand your goal, identify the main challenge and agree a suitable next step."],
  ["Will I receive a full strategy during the call?", "No. This is an introductory conversation. Detailed strategy, campaign setup, creative production and implementation are paid services scoped afterwards."],
  ["Is my time automatically confirmed?", "A time booked successfully through the Cal.com calendar is confirmed when Cal.com shows an accepted status. The alternative callback form is only a request, so Tieko Media will contact you before confirming it."],
  ["Who starts the call?", "Tieko Media initiates the call after the time has been confirmed. You can choose a phone call or WhatsApp audio call."],
  ["Do you guarantee advertising results?", "No. We do not promise sales, virality or platform outcomes. We help build a clearer, more connected marketing pathway based on the agreed scope."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function MediaServicesFunnel() {
  return (
    <div className="media-call-funnel">
      <header className="media-call-header">
        <Link href="/" aria-label="Tieko Media home" className="media-call-logo">
          <Image src="/brand/tieko-logo-header.png" alt="Tieko Media" width={402} height={211} priority />
        </Link>
        <nav aria-label="Media services navigation">
          <a href="#free-guide">Free Guide</a>
          <a href="#how-we-help">How We Help</a>
          <a href="#work">Work</a>
          <TrackedFunnelLink href="#book" eventName="media_services_book_call_clicked" placement="header">
            Book a Call
          </TrackedFunnelLink>
        </nav>
      </header>

      <main>
        <section className="media-call-hero" aria-labelledby="media-call-title">
          <AmiRibbon />
          <div className="media-call-shell media-call-hero-layout">
            <div className="media-call-hero-copy">
              <p className="media-call-kicker">Advertising, landing pages and follow-up</p>
              <h1 id="media-call-title">Make your next marketing move with a clear plan.</h1>
              <p className="media-call-lead">
                Tieko Media helps businesses connect their advertising, landing pages and follow-up so interested visitors have a clear path to becoming customers.
              </p>
              <div className="media-call-actions">
                <TrackedFunnelLink href="#book" eventName="media_services_book_call_clicked" placement="hero" className="media-call-primary">
                  Book a Call <Arrow />
                </TrackedFunnelLink>
                <a href="#free-guide" className="media-call-secondary">Explore the Free Guide</a>
              </div>
            </div>
            <aside className="media-call-intro-card" aria-label="Free introductory call details">
              <span>Free 15-minute introductory call</span>
              <h2>A focused first conversation.</h2>
              <ul>
                <li>Discuss your business goal</li>
                <li>Identify the main challenge</li>
                <li>Agree a suitable next step</li>
              </ul>
              <p>Choose a phone call or WhatsApp audio call. Tieko Media will confirm the time and initiate the call.</p>
            </aside>
          </div>
        </section>

        <section className="media-call-problem" aria-labelledby="media-problem-title">
          <div className="media-call-shell media-call-split">
            <p className="media-call-kicker">The common problem</p>
            <div>
              <h2 id="media-problem-title">Attention is expensive when the customer path is disconnected.</h2>
              <p>Businesses often run adverts before the offer, landing page and follow-up process are ready. The result is avoidable confusion, missed enquiries and limited information about what should improve next.</p>
            </div>
          </div>
        </section>

        <section id="how-we-help" className="media-call-services" aria-labelledby="media-help-title">
          <div className="media-call-shell">
            <div className="media-call-heading">
              <p className="media-call-kicker">How Tieko Media helps</p>
              <h2 id="media-help-title">Connect the campaign to what happens next.</h2>
            </div>
            <div className="media-call-service-grid">
              {services.map((service, index) => (
                <article key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="free-guide" className="media-call-guide" aria-labelledby="media-guide-title">
          <div className="media-call-shell">
            <div className="media-call-heading media-call-heading-light">
              <p className="media-call-kicker">Free guide</p>
              <h2 id="media-guide-title">Four checks before you spend on advertising.</h2>
              <p>Use this framework to find the weakest part of the pathway before choosing a channel or increasing a budget.</p>
            </div>
            <div className="media-call-guide-grid">
              {freeFramework.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="media-call-work" aria-labelledby="media-work-title">
          <div className="media-call-shell">
            <div className="media-call-heading">
              <p className="media-call-kicker">Relevant work</p>
              <h2 id="media-work-title">Strategy and digital pathways built for real organisations.</h2>
            </div>
            <div className="media-call-work-grid">
              <article className="media-call-work-featured">
                <span>Featured product</span>
                <h3>TeamShuffle</h3>
                <p>Tieko Media shaped the product strategy, user experience, responsive engineering and search architecture behind a global web-based toolkit for fair team selection.</p>
                <a href="https://teamshuffle.win" target="_blank" rel="noreferrer">Visit TeamShuffle <Arrow /></a>
              </article>
              <article>
                <span>Website strategy and development</span>
                <h3>Passion Care Academy</h3>
                <p>Digital reputation improvement, website strategy and development for an organisation in Delaware.</p>
              </article>
              <article>
                <span>International nonprofit</span>
                <h3>Compassion Heart World Mission</h3>
                <p>Website strategy, design and development for an international nonprofit organisation.</p>
              </article>
            </div>
            <Link href="/work" className="media-call-work-link">View all work <Arrow /></Link>
          </div>
        </section>

        <section className="media-call-process" aria-labelledby="media-process-title">
          <div className="media-call-shell">
            <div className="media-call-heading">
              <p className="media-call-kicker">How the introductory call works</p>
              <h2 id="media-process-title">A clear request, confirmation and call.</h2>
            </div>
            <div className="media-call-process-grid">
              {callSteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className="media-call-boundary">The introductory call is for understanding fit and next steps. Detailed strategy, campaign setup and implementation are paid services scoped afterwards.</p>
          </div>
        </section>

        <section id="book" className="media-call-booking" aria-labelledby="media-book-title">
          <div className="media-call-shell media-call-booking-grid">
            <div className="media-call-booking-copy">
              <p className="media-call-kicker">Book a Call</p>
              <h2 id="media-book-title">Tell us what is getting in the way.</h2>
              <p>Tell us about your business, your goals and what is getting in the way. We’ll discuss where Tieko Media can help and the next steps.</p>
              <div>
                <strong>Free introductory conversation</strong>
                <span>15 minutes</span>
                <span>Phone or WhatsApp audio</span>
                <span>Tieko Media initiates the confirmed call</span>
              </div>
            </div>
            <div className="media-call-booking-options">
              <MediaCalBooking />
              <details className="media-call-callback">
                <summary>
                  <span>
                    <strong>Can’t find a suitable time?</strong>
                    Request a phone or WhatsApp audio callback instead.
                  </span>
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="media-call-callback-intro">
                  <h3>Request a callback</h3>
                  <p>This route is a request only. Tieko Media will contact you to agree and confirm a suitable time.</p>
                </div>
                <MediaIntroCallForm />
              </details>
            </div>
          </div>
        </section>

        <section className="media-call-faq" aria-labelledby="media-faq-title">
          <div className="media-call-shell media-call-faq-grid">
            <div>
              <p className="media-call-kicker">Frequently asked</p>
              <h2 id="media-faq-title">Before you request a call.</h2>
            </div>
            <div>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="media-call-final">
          <div className="media-call-final-ribbon" aria-hidden="true" />
          <div className="media-call-shell">
            <p>One useful conversation can clarify the next move.</p>
            <h2>Ready to talk?</h2>
            <TrackedFunnelLink href="#book" eventName="media_services_book_call_clicked" placement="final_cta">
              Book a Call <Arrow />
            </TrackedFunnelLink>
          </div>
        </section>
      </main>
    </div>
  );
}
