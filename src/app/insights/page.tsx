import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import { getInsightEnhancement } from "@/lib/insight-expansions";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on Nigerian business, digital visibility, compliance, content, data and the systems that turn attention into durable growth.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Tieko Media",
    description:
      "Ideas for building visible, credible and durable African businesses.",
    url: "/insights",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/insights/opengraph-image"],
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function InsightsPage() {
  const [featured, ...articles] = insights;
  const featuredEnhancement = getInsightEnhancement(featured.slug);

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="insights-page">
        <section className="insights-hero" aria-labelledby="insights-heading">
          <div className="section-shell insights-hero-grid">
            <div>
              <p className="section-eyebrow">Ideas for useful growth</p>
              <h1 id="insights-heading">Insights</h1>
            </div>
            <div className="insights-hero-copy">
              <p>
                Clear thinking for businesses that want to be found, trusted and built to last.
              </p>
              <p>
                We study the questions people are already asking, then connect the answer to a practical next step.
              </p>
            </div>
          </div>
        </section>

        <section className="insights-featured" aria-labelledby="featured-insight-heading">
          <div className="section-shell">
            <Link className="insights-featured-card" href={`/insights/${featured.slug}`}>
              <figure className="insights-featured-image">
                <Image
                  src={featuredEnhancement.image}
                  alt={featuredEnhancement.imageAlt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </figure>
              <div className="insights-featured-copy">
                <p className="insight-card-meta">
                  <span>Featured</span>
                  <span>{featuredEnhancement.readingMinutes} min read</span>
                </p>
                <h2 id="featured-insight-heading">{featured.title}</h2>
                <p>{featured.description}</p>
                <span className="insight-card-action">Read and check your DIQ <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="insights-library" aria-labelledby="insights-library-heading">
          <div className="section-shell">
            <div className="insights-library-heading">
              <div>
                <p className="section-eyebrow">The library</p>
                <h2 id="insights-library-heading">Questions worth answering.</h2>
              </div>
              <p>Original perspectives, practical guides and new questions added as the work grows.</p>
            </div>

            <div className="insight-card-grid">
              {articles.map((insight) => {
                const enhancement = getInsightEnhancement(insight.slug);
                return (
                  <article className="insight-card" key={insight.slug}>
                    <Link className="insight-card-image" href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}>
                      <Image
                        src={enhancement.image}
                        alt={enhancement.imageAlt}
                        width={1536}
                        height={1024}
                        sizes="(max-width: 768px) 100vw, (max-width: 1088px) 50vw, 33vw"
                      />
                    </Link>
                  <div className="insight-card-copy">
                    <p className="insight-card-meta">
                      <span>{insight.category}</span>
                      <span>{enhancement.readingMinutes} min</span>
                    </p>
                    <h3>
                      <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
                    </h3>
                    <p>{insight.description}</p>
                    <div className="insight-card-footer">
                      <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
                      <Link href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`}>
                        Read <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="insights-newsletter" aria-labelledby="insights-cta-heading">
          <div className="section-shell insights-newsletter-inner">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Turn an idea into action</p>
              <h2 id="insights-cta-heading">Which business question should we help you answer?</h2>
            </div>
            <Link href="/book-a-call">Book a call <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
