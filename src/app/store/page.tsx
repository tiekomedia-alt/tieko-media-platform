import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import StoreProductVisual from "@/components/store/StoreProductVisual";
import { absoluteUrl } from "@/lib/site";
import { storeCategories, storeProducts } from "@/lib/store-products";

const categoryCards = [
  { category: "Infrastructure", href: "/store/data-centre-sourcing-lagos", title: "Lagos Data Centres", description: "Advisory and sourcing for organisations assessing colocation, hosting and data-centre options in Lagos.", visualSlug: "data-centre-sourcing-lagos" },
  { category: "Books & guides", href: "/store/tieko-media-books-amazon", title: "Tieko Media Books on Amazon", description: "Explore the complete collection of practical Tieko Media books, then purchase through the verified Amazon listings.", visualSlug: "creators-storyboard-planner" },
  { category: "Learning resources", href: "/store/six-week-ui-ux-project-tutorial", title: "Six-Week UI/UX Tutorial", description: "A paid, structured learning resource for building stronger UI/UX foundations before leaning on AI.", visualSlug: "six-week-ui-ux-project-tutorial" },
  { category: "Machinery", href: "/store/smt-machinery", title: "Machinery by SMT", description: "A dedicated discovery route for equipment requirements, verification and the next commercial conversation.", visualSlug: "smt-machinery" },
  { category: "Furniture & craft", href: "/store/handwoven-rattan-baskets", title: "Rattan Furniture & Craft", description: "Handwoven rattan pieces for homes, hospitality spaces, gifting and considered retail collections.", visualSlug: "handwoven-rattan-baskets" },
  { category: "Decor & art", href: "/store/decor-and-artworks", title: "Decor & Artworks", description: "A changing collection of decor and artwork selected for character, context and visual identity.", visualSlug: "decor-and-artworks" },
  { category: "Prompt systems", href: "/store/website-building-prompt-system", title: "Prompt Systems", description: "Practical workflows and checklists for using AI with clearer business, website and compliance thinking.", visualSlug: "website-building-prompt-system" },
] as const;

export const metadata: Metadata = {
  title: "Tieko Store | Digital Products, Books, Infrastructure and Objects",
  description: "Explore Tieko Media books, practical prompt systems, Lagos infrastructure sourcing, machinery, rattan furniture, decor and artworks.",
  alternates: { canonical: "/store" },
  openGraph: {
    title: "Tieko Store | Useful Knowledge, Infrastructure and Objects",
    description: "Digital products, books, business resources, infrastructure sourcing and selected physical pieces from Tieko Media and its partners.",
    url: "/store",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/store/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tieko Store",
    description: "Useful knowledge, infrastructure and objects brought together by Tieko Media.",
    images: ["/store/opengraph-image"],
  },
};

export default function StorePage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tieko Store",
    description: metadata.description,
    url: absoluteUrl("/store"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryCards.map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: card.title,
        url: absoluteUrl(card.href),
      })),
    },
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="store-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c") }} />

        <section className="store-hero" aria-labelledby="store-heading">
          <div className="section-shell store-hero-grid">
            <div className="store-hero-intro">
              <p className="section-eyebrow">Tieko Store / Lagos to the world</p>
              <h1 id="store-heading">Useful things, properly explained.</h1>
              <Link className="store-hero-link" href="#books-guides">Explore the collection <span aria-hidden="true">→</span></Link>
            </div>
            <div className="store-hero-showcase">
              <div className="store-hero-copy">
                <p>A curated home for Tieko Media&apos;s digital products, books and working systems—alongside selected infrastructure, machinery, furniture, decor and art.</p>
                <p>Every category opens a clear route, with enough context to decide whether it belongs in your next move.</p>
              </div>
              <Link className="store-hero-products" href="/store/tieko-media-books-amazon" aria-label="Explore all Tieko Media books on Amazon">
                {storeProducts.filter((product) => ["lagos-handbook", "creators-storyboard-planner", "handwriting-workout-2027"].includes(product.slug)).map((product) => (
                  <span className="store-hero-product" key={product.slug}><StoreProductVisual product={product} /></span>
                ))}
              </Link>
            </div>
          </div>
        </section>

        <nav className="store-category-nav" aria-label="Store categories">
          <div className="section-shell">
            {storeCategories.map((category) => <a key={category} href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{category}</a>)}
          </div>
        </nav>

        <section className="store-catalogue" aria-labelledby="store-catalogue-heading">
          <div className="section-shell">
            <div className="store-section-heading">
              <div><p className="section-eyebrow">The catalogue</p><h2 id="store-catalogue-heading">Browse by what you need to move forward.</h2></div>
              <p>Choose a category to see its complete collection. Books stay together on one dedicated Amazon page; each other category opens its own focused route.</p>
            </div>

            <div className="store-category-showcase">
              {categoryCards.map((card, index) => {
                const visualProduct = storeProducts.find((product) => product.slug === card.visualSlug);
                if (!visualProduct) return null;
                return (
                  <article className="store-category-card" id={card.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={card.category}>
                    <Link href={card.href} className="store-category-card-visual" aria-label={`Explore ${card.category}`}><StoreProductVisual product={visualProduct} compact /></Link>
                    <div className="store-category-card-copy">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{card.category}</p>
                      <h3><Link href={card.href}>{card.title}</Link></h3>
                      <div>{card.description}</div>
                      <Link href={card.href}>Explore category <b aria-hidden="true">→</b></Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="store-principles" aria-labelledby="store-principles-heading">
          <div className="section-shell store-principles-grid">
            <div><p className="section-eyebrow section-eyebrow-light">How the store works</p><h2 id="store-principles-heading">One storefront. Different fulfilment paths.</h2></div>
            <ol>
              <li><span>01</span><strong>Direct digital</strong><p>Resources sold by Tieko Media use secure checkout and a defined delivery route.</p></li>
              <li><span>02</span><strong>Amazon books</strong><p>The dedicated books page explains each title; the verified Amazon listing handles purchase.</p></li>
              <li><span>03</span><strong>Enquiry-led</strong><p>Physical goods and infrastructure begin with current specifications, stock and logistics.</p></li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
