import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import StructuredData from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/site";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  eyebrow: string;
  summary: string;
  path: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  eyebrow,
  summary,
  path,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: summary,
            url: absoluteUrl(path),
            isPartOf: { "@type": "WebSite", name: "Tieko Media", url: absoluteUrl("/") },
            about: { "@id": `${absoluteUrl("/")}#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: title, item: absoluteUrl(path) },
            ],
          },
        ]}
      />
      <Header />
      <main id="main-content" className="legal-page">
        <header className="legal-hero">
          <div className="section-shell legal-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="legal-breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>{title}</span>
              </nav>
              <p className="section-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
            </div>
            <div className="legal-hero-summary">
              <p>{summary}</p>
              <span>Last updated: {updated}</span>
            </div>
          </div>
        </header>

        <div className="section-shell legal-layout">
          <aside aria-label={`${title} contents`}>
            <p>On this page</p>
            <ol>
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index + 1}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal-content">
            {sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                <div>{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
