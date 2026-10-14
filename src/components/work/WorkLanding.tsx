import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import BrandPartners from "@/components/brand/BrandPartners";
import Header from "@/components/navigation/Header";
import { selectedWorkProjects } from "@/lib/home-work";

export default function WorkLanding() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="work-page">
        <section className="work-page-hero" aria-labelledby="work-page-heading">
          <div className="section-shell">
            <p className="section-eyebrow">Our work</p>
            <div>
              <h1 id="work-page-heading">Work</h1>
              <p>Selected projects: the problem, what we did and what changed.</p>
            </div>
          </div>
        </section>

        <BrandPartners variant="wall" />

        <section className="work-showcase" aria-labelledby="work-showcase-heading">
          <AmiRibbon />
          <div className="section-shell">
            <div className="work-showcase-heading">
              <p className="section-eyebrow">Selected projects</p>
              <h2 id="work-showcase-heading">Digital products, compliance support and websites.</h2>
            </div>

            <div className="work-showcase-grid">
              {selectedWorkProjects.map((project) => (
                <article key={project.name} className="work-showcase-card">
                  <figure>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1200}
                      height={750}
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <figcaption>{project.imageCaption}</figcaption>
                  </figure>
                  <div className="work-showcase-copy">
                    <span>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p className="work-showcase-location">{project.location}</p>
                    <p>{project.description}</p>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        Visit website <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <Link href="/book-a-call?interest=compliance-and-institutional-support">
                        Discuss compliance support <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-booking-cta" aria-labelledby="work-booking-heading">
          <div className="section-shell">
            <p className="section-eyebrow section-eyebrow-light">Start a conversation</p>
            <h2 id="work-booking-heading">Have a business need we can help you solve?</h2>
            <p>Book a free 15-minute introductory phone or WhatsApp audio call to tell us what you are working on.</p>
            <Link href="/book-a-call">Book a call <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
