import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/navigation/Header";
import StoreProductVisual from "@/components/store/StoreProductVisual";
import { absoluteUrl } from "@/lib/site";
import { getStoreProduct, storeProducts } from "@/lib/store-products";

type StoreProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return storeProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: StoreProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getStoreProduct(slug);
  if (!product) return {};

  const isAmazonBookCollection = product.slug === "tieko-media-books-amazon";
  const title = isAmazonBookCollection ? "Tieko Media Books on Amazon" : product.title;
  const description = isAmazonBookCollection
    ? "Browse Tieko Media Limited books on Amazon: The Lagos Handbook, The Handwriting Workout, The Creator's Storyboard Planner and the Graph Paper Notebook."
    : product.description;

  return {
    title,
    description,
    alternates: { canonical: `/store/${product.slug}` },
    openGraph: {
      title: `${title} | Tieko Store`,
      description,
      url: `/store/${product.slug}`,
      siteName: "Tieko Media",
      locale: "en_GB",
      type: "website",
      images: [`/store/${product.slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tieko Store`,
      description,
      images: [`/store/${product.slug}/opengraph-image`],
    },
  };
}

export default async function StoreProductPage({ params }: StoreProductPageProps) {
  const { slug } = await params;
  const product = getStoreProduct(slug);
  if (!product) notFound();

  const isAmazonBookCollection = product.slug === "tieko-media-books-amazon";
  const amazonBooks = storeProducts.filter((item) =>
    ["handwriting-workout-2027", "lagos-handbook", "creators-storyboard-planner", "graph-paper-notebook"].includes(item.slug),
  );
  const bookFaqs = [
    {
      question: "Where can I buy Tieko Media books?",
      answer: "Each title links directly to its verified Amazon listing, where Amazon handles the purchase, delivery, pricing and returns.",
    },
    {
      question: "Which books are available from Tieko Media?",
      answer: "The current collection includes The Lagos Handbook, The Handwriting Workout, The Creator's Storyboard Planner and the Graph Paper Notebook.",
    },
    {
      question: "Are the Tieko Media books available internationally?",
      answer: "Availability depends on the Amazon marketplace, format and delivery location. Open the relevant Amazon listing to see the current options for your region.",
    },
    {
      question: "What formats are available?",
      answer: "The Lagos Handbook is available as a Kindle edition. The Handwriting Workout, The Creator's Storyboard Planner and the Graph Paper Notebook are paperback workbooks and notebooks.",
    },
  ];

  const relatedProducts = storeProducts
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 2);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(`/store/${product.slug}`)}#product`,
    name: product.title,
    description: product.description,
    category: product.category,
    url: absoluteUrl(`/store/${product.slug}`),
    image: absoluteUrl(product.image ?? `/store/${product.slug}/opengraph-image`),
    brand: { "@type": "Brand", name: "Tieko Media" },
    ...(product.ctaHref.startsWith("http") ? { sameAs: product.ctaHref } : {}),
    ...(product.priceNgn
      ? {
          offers: {
            "@type": "Offer",
            price: String(product.priceNgn),
            priceCurrency: "NGN",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/store/${product.slug}`),
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Tieko Store", item: absoluteUrl("/store") },
      { "@type": "ListItem", position: 3, name: product.shortTitle, item: absoluteUrl(`/store/${product.slug}`) },
    ],
  };

  const bookCollectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tieko Media Books on Amazon",
    description: "A collection of books and practical workbooks by Tieko Media Limited.",
    url: absoluteUrl(`/store/${product.slug}`),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: amazonBooks.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Book",
          name: book.title,
          author: { "@type": "Organization", name: "Tieko Media Limited" },
          url: book.ctaHref,
          ...(book.image ? { image: absoluteUrl(book.image) } : {}),
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bookFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const ctaIsExternal = product.ctaHref.startsWith("mailto:") || product.ctaHref.startsWith("http");

  if (isAmazonBookCollection) {
    return (
      <div className="min-h-screen bg-warm-ivory text-ink-black">
        <Header />
        <main id="main-content" className="store-product-page store-books-page">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookCollectionJsonLd).replace(/</g, "\\u003c") }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

          <section className="store-books-hero" aria-labelledby="store-books-heading">
            <div className="section-shell">
              <nav className="store-breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span aria-hidden="true">/</span>
                <Link href="/store">Store</Link><span aria-hidden="true">/</span>
                <span aria-current="page">Books</span>
              </nav>
              <p className="section-eyebrow">Tieko Media Limited / Amazon collection</p>
              <h1 id="store-books-heading">Books made to be used.</h1>
              <p>Four focused titles for clearer writing, planning, creative production and finding your feet in Lagos.</p>
            </div>
          </section>

          <section className="store-books-catalogue" aria-labelledby="store-books-catalogue-heading">
            <div className="section-shell">
              <div className="store-books-heading-row">
                <div>
                  <p className="section-eyebrow">The collection</p>
                  <h2 id="store-books-catalogue-heading">Choose your next useful read.</h2>
                </div>
                <p>Amazon handles checkout, current pricing, regional availability, delivery and returns.</p>
              </div>
              <div className="store-books-grid">
                {amazonBooks.map((book) => (
                  <article className="store-books-card" key={book.slug}>
                    <Link href={`/store/${book.slug}`} aria-label={`Read about ${book.title}`}>
                      <StoreProductVisual product={book} compact />
                    </Link>
                    <div>
                      <p>{book.format}</p>
                      <h2><Link href={`/store/${book.slug}`}>{book.title}</Link></h2>
                      <span>{book.description}</span>
                      <a href={book.ctaHref} target="_blank" rel="noreferrer">View on Amazon <b aria-hidden="true">→</b></a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="store-books-faq" aria-labelledby="store-books-faq-heading">
            <div className="section-shell">
              <div>
                <p className="section-eyebrow section-eyebrow-light">Book buying questions</p>
                <h2 id="store-books-faq-heading">Before you choose.</h2>
              </div>
              <div className="store-books-faq-list">
                {bookFaqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="store-product-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

        <section className="store-product-hero" aria-labelledby="store-product-heading">
          <div className="section-shell">
            <nav className="store-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/store">Store</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{product.shortTitle}</span>
            </nav>
            <div className="store-product-hero-grid">
              <div className="store-product-hero-copy">
                <p className="section-eyebrow">{product.category} / {product.format}</p>
                <h1 id="store-product-heading">{product.title}</h1>
                <p>{product.promise}</p>
                {product.priceNgn && <strong className="store-product-price">{new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(product.priceNgn)}</strong>}
                {ctaIsExternal ? (
                  <a className="store-primary-cta" href={product.ctaHref} target="_blank" rel="noreferrer">{product.ctaLabel} <span aria-hidden="true">→</span></a>
                ) : (
                  <Link className="store-primary-cta" href={product.ctaHref}>{product.ctaLabel} <span aria-hidden="true">→</span></Link>
                )}
                <small>{product.ctaNote}</small>
              </div>
              <StoreProductVisual product={product} />
            </div>
          </div>
        </section>

        <section className="store-product-overview" aria-labelledby="store-product-overview-heading">
          <div className="section-shell store-product-overview-grid">
            <div>
              <p className="section-eyebrow">What this is</p>
              <h2 id="store-product-overview-heading">Context before transaction.</h2>
            </div>
            <div className="store-product-overview-copy">
              {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        {product.gallery && product.gallery.length > 0 && (
          <section className="store-product-gallery" aria-labelledby="store-product-gallery-heading">
            <div className="section-shell">
              <div className="store-section-heading">
                <div>
                  <p className="section-eyebrow">Equipment in context</p>
                  <h2 id="store-product-gallery-heading">{product.galleryHeading ?? "See it in context."}</h2>
                </div>
                <p>{product.galleryDescription ?? "Images are illustrative. Confirm the current specification, condition, availability and fulfilment route before any commitment."}</p>
              </div>
              <div className="store-product-gallery-grid">
                {product.gallery.map((image) => (
                  <figure key={image.src}>
                    <Image src={image.src} alt={image.alt} width={1920} height={1080} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="store-product-fit" aria-labelledby="store-product-fit-heading">
          <div className="section-shell">
            <div className="store-section-heading">
              <div>
                <p className="section-eyebrow">Fit and scope</p>
                <h2 id="store-product-fit-heading">Know what you are considering.</h2>
              </div>
            </div>
            <div className="store-product-fit-grid">
              <article>
                <span>Best suited to</span>
                <ul>{product.suitableFor.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article>
                <span>What the pathway includes</span>
                <ul>{product.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="store-product-process" aria-labelledby="store-product-process-heading">
          <div className="section-shell">
            <p className="section-eyebrow section-eyebrow-light">A clear route forward</p>
            <h2 id="store-product-process-heading">How it works.</h2>
            <ol>
              {product.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="store-product-discovery" aria-labelledby="store-product-discovery-heading">
          <div className="section-shell store-product-discovery-grid">
            <div>
              <p className="section-eyebrow">Related thinking</p>
              <h2 id="store-product-discovery-heading">Read before you decide.</h2>
            </div>
            <div>
              {product.relatedInsights.map((insight) => (
                <Link key={insight.href} href={insight.href}>{insight.label}<span aria-hidden="true">→</span></Link>
              ))}
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="store-related" aria-labelledby="store-related-heading">
            <div className="section-shell">
              <div className="store-related-heading">
                <p className="section-eyebrow">Also in {product.category}</p>
                <h2 id="store-related-heading">Continue exploring.</h2>
              </div>
              <div className="store-related-grid">
                {relatedProducts.map((related) => (
                  <Link href={`/store/${related.slug}`} key={related.slug}>
                    <StoreProductVisual product={related} compact />
                    <strong>{related.title}</strong>
                    <span>Explore product →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="store-product-final" aria-labelledby="store-product-final-heading">
          <div className="section-shell store-product-final-grid">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Next step</p>
              <h2 id="store-product-final-heading">Interested? Start with the right question.</h2>
            </div>
            <div>
              <p>{product.ctaNote}</p>
              {ctaIsExternal ? (
                <a href={product.ctaHref} target="_blank" rel="noreferrer">{product.ctaLabel} <span aria-hidden="true">→</span></a>
              ) : (
                <Link href={product.ctaHref}>{product.ctaLabel} <span aria-hidden="true">→</span></Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
