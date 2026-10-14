import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import Header from "@/components/navigation/Header";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import type { FocusedService } from "@/lib/focused-services";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function FocusedServiceLanding({ service }: { service: FocusedService }) {
  const bookingHref = `/book-a-call?service=${service.slug}`;
  const preserveFullImage = service.slug === "billboard-advertising";

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <ServiceStructuredData
        name={service.eyebrow}
        description={service.summary}
        path={`/services/${service.slug}`}
      />
      <Header />
      <main id="main-content" className="focused-service-page">
        <section className="focused-service-hero" aria-labelledby="focused-service-heading">
          <AmiRibbon />
          <div className="focused-service-shell focused-service-hero-grid">
            <div className="focused-service-hero-copy">
              <nav className="focused-service-breadcrumb" aria-label="Breadcrumb">
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <span>{service.eyebrow}</span>
              </nav>
              <p className="focused-service-kicker">{service.eyebrow}</p>
              <h1 id="focused-service-heading">{service.title}</h1>
              <p className="focused-service-summary">{service.summary}</p>
              <Link className="focused-service-primary" href={bookingHref}>
                Book a call <ArrowIcon />
              </Link>
            </div>
            <figure className={`focused-service-visual${preserveFullImage ? " focused-service-visual--contain" : ""}`}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={preserveFullImage ? 4000 : 1600}
                height={preserveFullImage ? 6000 : 900}
                sizes="(max-width: 900px) 100vw, 52vw"
                quality={84}
                priority
              />
              <figcaption>{service.imageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="focused-service-problem" aria-labelledby="focused-problem-heading">
          <div className="focused-service-shell focused-service-problem-grid">
            <p className="focused-service-kicker">The problem</p>
            <div>
              <h2 id="focused-problem-heading">{service.problemTitle}</h2>
              <p>{service.problemCopy}</p>
            </div>
          </div>
        </section>

        <section className="focused-service-offer" aria-labelledby="focused-offer-heading">
          <div className="focused-service-shell">
            <div className="focused-service-heading">
              <p className="focused-service-kicker">What we do</p>
              <h2 id="focused-offer-heading">{service.offerTitle ?? "A focused service, scoped around your goal."}</h2>
            </div>
            <div className="focused-service-card-grid">
              {service.services.map((item) => (
                <article key={item.number}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focused-service-process" aria-labelledby="focused-process-heading">
          <div className="focused-service-shell">
            <div className="focused-service-heading focused-service-heading-light">
              <p className="focused-service-kicker">How it works</p>
              <h2 id="focused-process-heading">{service.processTitle ?? "Start with clarity. Move forward with a defined scope."}</h2>
            </div>
            <ol>
              {service.process.map((step) => (
                <li key={step.number}>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="focused-service-boundary" aria-labelledby="focused-boundary-heading">
          <div className="focused-service-shell focused-service-boundary-grid">
            <p className="focused-service-kicker">Clear expectations</p>
            <div>
              <h2 id="focused-boundary-heading">{service.boundaryTitle}</h2>
              <p>{service.boundaryCopy}</p>
            </div>
          </div>
        </section>

        <section className="focused-service-final" aria-labelledby="focused-final-heading">
          <div className="focused-service-final-ribbon" aria-hidden="true">ÀMÍ / TIEKO MEDIA / ÀMÍ / TIEKO MEDIA</div>
          <div className="focused-service-shell">
            <p className="focused-service-kicker">Next step</p>
            <h2 id="focused-final-heading">{service.finalTitle}</h2>
            <p>{service.finalCopy ?? "Tell us what you are trying to achieve and what is getting in the way. We will discuss the most useful next step."}</p>
            <Link href={bookingHref}>Book a call <ArrowIcon /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
