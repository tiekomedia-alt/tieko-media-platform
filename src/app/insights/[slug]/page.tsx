import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/navigation/Header";
import { getInsightEnhancement } from "@/lib/insight-expansions";
import { DIQ_PATH } from "@/lib/diq";
import { absoluteUrl } from "@/lib/site";
import { getInsight, insights } from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  const enhancement = getInsightEnhancement(slug);

  if (!insight || !enhancement) return {};

  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    authors: [{ name: "Tieko Media Editorial Team" }],
    openGraph: {
      title: insight.title,
      description: insight.description,
      url: `/insights/${insight.slug}`,
      siteName: "Tieko Media",
      locale: "en_GB",
      type: "article",
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt,
      authors: ["Tieko Media Editorial Team"],
      images: [`/insights/${insight.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.description,
      images: [`/insights/${insight.slug}/opengraph-image`],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);
  const enhancement = getInsightEnhancement(slug);
  if (!insight || !enhancement) notFound();

  const articleIndex = insights.findIndex((item) => item.slug === insight.slug);
  const nextInsight = insights[(articleIndex + 1) % insights.length];
  const articleSections = [...insight.sections, ...enhancement.sections];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt,
    mainEntityOfPage: absoluteUrl(`/insights/${insight.slug}`),
    image: absoluteUrl(enhancement.image),
    author: { "@type": "Organization", name: "Tieko Media" },
    publisher: {
      "@type": "Organization",
      name: "Tieko Media",
      logo: { "@type": "ImageObject", url: absoluteUrl("/brand/tieko-logo.png") },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/insights") },
      { "@type": "ListItem", position: 3, name: insight.shortTitle, item: absoluteUrl(`/insights/${insight.slug}`) },
    ],
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="insight-article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
        />

        <article>
          <header className="insight-article-header">
            <div className="section-shell">
              <nav className="insight-breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/insights">Insights</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{insight.shortTitle}</span>
              </nav>

              <div className="insight-article-heading-grid">
                <div className="insight-article-heading">
                  <p className="section-eyebrow">{insight.category}</p>
                  <h1>{insight.title}</h1>
                  <p className="insight-article-deck">{insight.description}</p>
                  <div className="insight-byline">
                    <span>By Tieko Media Editorial Team</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{enhancement.readingMinutes} min read</span>
                  </div>
                  {insight.slug === "digital-intelligence-quotient" && (
                    <Link className="insight-header-diq-cta" href={DIQ_PATH}>
                      Take the free DIQ test <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
                <figure className="insight-article-hero-image">
                  <Image
                    src={enhancement.image}
                    alt={enhancement.imageAlt}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
                  />
                  <figcaption>{enhancement.imageCaption}</figcaption>
                </figure>
              </div>
            </div>
          </header>

          <div className="section-shell insight-article-layout">
            <aside className="insight-article-aside" aria-label="Article details">
              <p>In this insight</p>
              <ol>
                {articleSections.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="insight-article-body">
              <div className="insight-article-intro">
                {insight.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              {insight.reviewNote && (
                <aside className="insight-review-note" aria-label="Important editorial note">
                  <strong>Important:</strong> {insight.reviewNote}
                </aside>
              )}

              <aside className="insight-takeaways" aria-labelledby="insight-takeaways-heading">
                <p className="section-eyebrow">The short version</p>
                <h2 id="insight-takeaways-heading">Key takeaways</h2>
                <ul>
                  {enhancement.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
                </ul>
              </aside>

              {insight.slug === "digital-intelligence-quotient" && (
                <aside className="insight-diq-cta" aria-labelledby="insight-diq-cta-heading">
                  <p className="section-eyebrow">Free interactive assessment</p>
                  <h2 id="insight-diq-cta-heading">Do not guess your DIQ. Measure it.</h2>
                  <p>Answer 20 questions, receive a score out of 100 and download a branded capability scorecard.</p>
                  <Link href={DIQ_PATH}>Check your DIQ <span aria-hidden="true">&rarr;</span></Link>
                </aside>
              )}

              {articleSections.map((section) => {
                const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <section key={section.heading} id={sectionId}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                    {section.callout && <blockquote>{section.callout}</blockquote>}
                  </section>
                );
              })}

              <section className="insight-faq" aria-labelledby="insight-faq-heading">
                <p className="section-eyebrow">Practical answers</p>
                <h2 id="insight-faq-heading">Frequently asked questions</h2>
                <div className="insight-faq-list">
                  {enhancement.faqs.map((faq) => (
                    <div className="insight-faq-item" key={faq.question}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="insight-service-links" aria-labelledby="insight-next-steps">
                <p className="section-eyebrow">Put the idea to work</p>
                <h2 id="insight-next-steps">Useful next steps from Tieko Media</h2>
                <div>
                  {insight.relatedServices.map((service) => (
                    <Link key={service.href} href={service.href}>
                      {service.label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </section>

              {insight.sources && (
                <section className="insight-sources" aria-labelledby="insight-sources-heading">
                  <h2 id="insight-sources-heading">Sources and further reading</h2>
                  <ul>
                    {insight.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </article>

        <section className="insight-next-article" aria-labelledby="next-insight-heading">
          <div className="section-shell insight-next-article-inner">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Continue reading</p>
              <h2 id="next-insight-heading">{nextInsight.title}</h2>
            </div>
            <Link href={`/insights/${nextInsight.slug}`}>Next insight <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
