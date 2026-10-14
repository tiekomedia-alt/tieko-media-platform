import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import Header from "@/components/navigation/Header";

const auditAreas = [
  {
    number: "01",
    title: "Technical search foundation",
    copy: "We inspect crawlability, indexation, site structure, page speed, mobile experience, metadata, canonicals, redirects, sitemaps and the technical signals that help search systems process the site correctly.",
  },
  {
    number: "02",
    title: "Demand and ranking baseline",
    copy: "We map what the business ranks for today, which pages receive impressions, what competitors capture, and where commercially useful searches are leaking to better-positioned answers.",
  },
  {
    number: "03",
    title: "Content and answer quality",
    copy: "We compare the questions customers ask with the pages available to answer them, then assess clarity, evidence, structure, internal links, freshness and the next action offered to the reader.",
  },
  {
    number: "04",
    title: "Authority and discoverability",
    copy: "We review reputable mentions, relevant backlinks, directory consistency, brand citations and the external signals that help people and search systems verify the organisation.",
  },
];

const deliverySteps = [
  {
    title: "Establish the truth",
    copy: "Connect available analytics and search data, verify indexation, record current rankings and identify the pages already closest to opportunity.",
  },
  {
    title: "Repair the foundation",
    copy: "Resolve priority technical issues, strengthen page architecture, improve metadata and make the important journey clear on mobile and desktop.",
  },
  {
    title: "Build the answer system",
    copy: "Turn genuine customer questions into useful service pages, articles, comparisons, FAQs and evidence-led resources organised around search intent.",
  },
  {
    title: "Earn and place authority",
    copy: "Pursue relevant editorial links, credible directories, partner mentions and placements where the right audience already looks for the service.",
  },
  {
    title: "Measure business movement",
    copy: "Track visibility, qualified visits, enquiries and assisted conversion; then update the roadmap from evidence instead of chasing vanity rankings.",
  },
];

const relatedInsights = [
  {
    title: "Why SEO and AEO belong in the same visibility strategy",
    href: "/insights/seo-aeo-visibility-strategy",
    category: "Search strategy",
  },
  {
    title: "Visibility is the new oil, but infrastructure creates the value",
    href: "/insights/visibility-is-the-new-oil",
    category: "Digital infrastructure",
  },
  {
    title: "Answer what customers are already searching for",
    href: "/insights/answer-what-customers-search-for",
    category: "Content demand",
  },
];

const faqs = [
  {
    question: "Can you guarantee a first-page ranking?",
    answer: "No responsible agency can control or guarantee an organic ranking. We improve the technical, content, authority and conversion conditions that make durable visibility more likely, then report what the evidence shows.",
  },
  {
    question: "What is the difference between SEO and AEO?",
    answer: "SEO helps pages become discoverable and competitive in search. AEO makes answers clear, structured and trustworthy enough for direct-answer and AI-assisted experiences. Strong AEO still depends on sound SEO and credible content.",
  },
  {
    question: "Do you buy backlinks?",
    answer: "We do not build a strategy on bulk or spam links. We identify relevant editorial, directory, partnership, citation and digital PR opportunities where a real audience and a credible relationship exist.",
  },
  {
    question: "How quickly should we expect results?",
    answer: "Technical fixes can be deployed quickly, but crawling, competitive movement and authority development take time. The starting condition, market, resources and publishing pace determine the realistic timeline.",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function SeoAeoLanding() {
  const bookingHref = "/book-a-call?service=seo-aeo-ranking";

  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="seo-service-page">
        <section className="seo-service-hero" aria-labelledby="seo-service-title">
          <AmiRibbon />
          <div className="seo-service-shell seo-service-hero-grid">
            <div className="seo-service-hero-copy">
              <nav className="seo-service-breadcrumb" aria-label="Breadcrumb">
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <span>SEO, AEO &amp; Ranking</span>
              </nav>
              <p className="seo-service-kicker">Search visibility infrastructure</p>
              <h1 id="seo-service-title">Turn search demand into a compounding business asset.</h1>
              <p className="seo-service-lead">
                Tieko Media finds where your visibility is leaking, repairs the search foundation and builds useful answers that help the right people discover, trust and choose your business.
              </p>
              <div className="seo-service-hero-actions">
                <Link className="seo-service-button seo-service-button--primary" href={bookingHref}>
                  Book a visibility audit <Arrow />
                </Link>
                <Link className="seo-service-text-link" href="#seo-method">
                  See how we work <Arrow />
                </Link>
              </div>
              <ul className="seo-service-signal-list" aria-label="Core service areas">
                <li>Technical SEO</li>
                <li>Answer engine optimisation</li>
                <li>Content authority</li>
                <li>Ethical link acquisition</li>
              </ul>
            </div>

            <figure className="seo-service-hero-visual">
              <Image
                src="/images/insights/seo-aeo-visibility.webp"
                alt="A visual pathway connecting a customer question to organised pages, evidence and a useful answer"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className="seo-service-leak" aria-labelledby="seo-leak-title">
          <div className="seo-service-shell seo-service-leak-grid">
            <div>
              <p className="seo-service-kicker seo-service-kicker--light">The visibility leak</p>
              <h2 id="seo-leak-title">Ranking is not one trick. It is a connected system.</h2>
            </div>
            <div>
              <p>
                A business can publish often and remain invisible because search engines cannot process the site, its pages answer the wrong questions, credible websites do not reference it, or visitors arrive without a clear reason to act.
              </p>
              <p>
                We audit the full chain. The aim is not traffic for its own sake; it is qualified discovery that can become trust, enquiries and revenue.
              </p>
            </div>
          </div>
          <div className="seo-service-shell">
            <ol className="seo-service-pipeline" aria-label="Search visibility pipeline">
              <li><span>01</span><strong>Crawl</strong><small>Can systems reach it?</small></li>
              <li><span>02</span><strong>Understand</strong><small>Is the offer clear?</small></li>
              <li><span>03</span><strong>Trust</strong><small>Is there evidence?</small></li>
              <li><span>04</span><strong>Surface</strong><small>Does it deserve visibility?</small></li>
              <li><span>05</span><strong>Convert</strong><small>Can the visitor act?</small></li>
            </ol>
          </div>
        </section>

        <section className="seo-service-audit" aria-labelledby="seo-audit-title">
          <div className="seo-service-shell">
            <div className="seo-service-heading">
              <p className="seo-service-kicker">The audit</p>
              <div>
                <h2 id="seo-audit-title">We find the gaps before we prescribe the work.</h2>
                <p>Every engagement begins with the current reality: what is indexed, what ranks, what customers search, what competitors own and where attention disappears.</p>
              </div>
            </div>
            <div className="seo-service-audit-grid">
              {auditAreas.map((area) => (
                <article key={area.number}>
                  <span>{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="seo-method" className="seo-service-method" aria-labelledby="seo-method-title">
          <div className="seo-service-shell">
            <div className="seo-service-heading seo-service-heading--light">
              <p className="seo-service-kicker seo-service-kicker--light">Our operating method</p>
              <div>
                <h2 id="seo-method-title">From baseline to durable search authority.</h2>
                <p>We combine technical repair, demand research, content production, internal linking and off-page authority into one measurable programme.</p>
              </div>
            </div>
            <ol className="seo-service-method-list">
              {deliverySteps.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seo-service-case" aria-labelledby="seo-case-title">
          <div className="seo-service-shell seo-service-case-grid">
            <figure>
              <Image
                src="/images/work/teamshuffle-home.webp"
                alt="TeamShuffle homepage showing searchable decision-making tools"
                width={1200}
                height={750}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </figure>
            <div>
              <p className="seo-service-kicker">Applied thinking: TeamShuffle</p>
              <h2 id="seo-case-title">Build around what people are trying to do.</h2>
              <p>
                For TeamShuffle, the product and its content architecture begin with recognisable user tasks: shuffle teams, roll dice, flip a coin and spin a wheel. Each tool has a clear purpose, its own destination and supporting information that can answer the visitor before asking for attention.
              </p>
              <ul>
                <li>Searchable tool destinations mapped to distinct user intent.</li>
                <li>Clear page titles, descriptions and internal paths between related tools.</li>
                <li>Supporting stories that explain use cases and expand topical relevance.</li>
                <li>A fast, responsive experience with direct actions instead of unnecessary friction.</li>
              </ul>
              <p className="seo-service-case-note">
                The lesson is transferable: begin with the job the user is searching for, then build the most useful and technically accessible destination for it.
              </p>
              <Link className="seo-service-text-link" href="/work">See selected work <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="seo-service-authority" aria-labelledby="seo-authority-title">
          <div className="seo-service-shell seo-service-authority-grid">
            <div>
              <p className="seo-service-kicker">Authority without shortcuts</p>
              <h2 id="seo-authority-title">Backlinks, directories and placements that make sense.</h2>
            </div>
            <div className="seo-service-authority-copy">
              <p>
                We do not confuse a spreadsheet of links with authority. We look for relevant websites, editorial opportunities, business directories, partner ecosystems and industry platforms where a real customer could reasonably discover the brand.
              </p>
              <p>
                That may include reclaiming unlinked mentions, correcting inconsistent listings, contributing evidence-led commentary, creating reference-worthy resources and approaching publishers with a genuine reason to cite the work.
              </p>
              <aside>
                <strong>A note on “domain authority”</strong>
                <p>Authority scores are third-party diagnostic metrics, not Google guarantees. We use them as context alongside relevance, traffic quality, editorial standards and business value.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="seo-service-aeo" aria-labelledby="seo-aeo-title">
          <div className="seo-service-shell seo-service-aeo-grid">
            <div className="seo-service-aeo-mark" aria-hidden="true">AEO</div>
            <div>
              <p className="seo-service-kicker seo-service-kicker--light">Answer engine optimisation</p>
              <h2 id="seo-aeo-title">Become a source worth using in the answer.</h2>
              <p>
                AEO is not a magic AI tag. It is the discipline of making expertise easy to retrieve, understand and verify. We structure direct answers, supporting evidence, authorship, FAQs, internal references and appropriate structured data around questions that matter to the buyer.
              </p>
              <p>
                The same work helps human readers: a clear answer earns attention, deeper evidence earns trust, and a relevant service path turns that trust into action.
              </p>
              <Link className="seo-service-button seo-service-button--light" href={bookingHref}>
                Audit our search visibility <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <section className="seo-service-insights" aria-labelledby="seo-insights-title">
          <div className="seo-service-shell">
            <div className="seo-service-heading">
              <p className="seo-service-kicker">Related intelligence</p>
              <div>
                <h2 id="seo-insights-title">Read the thinking behind the service.</h2>
                <p>These articles explain how search demand, useful answers and owned infrastructure work together.</p>
              </div>
            </div>
            <div className="seo-service-insight-grid">
              {relatedInsights.map((article, index) => (
                <article key={article.href}>
                  <span>0{index + 1} / {article.category}</span>
                  <h3>{article.title}</h3>
                  <Link href={article.href}>Read article <Arrow /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-service-faq" aria-labelledby="seo-faq-title">
          <div className="seo-service-shell seo-service-faq-grid">
            <div>
              <p className="seo-service-kicker">Before we begin</p>
              <h2 id="seo-faq-title">Questions serious clients ask.</h2>
            </div>
            <div>
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-service-final" aria-labelledby="seo-final-title">
          <div className="seo-service-final-ribbon" aria-hidden="true">SEARCH / ANSWERS / AUTHORITY / CONVERSION /</div>
          <div className="seo-service-shell">
            <p className="seo-service-kicker seo-service-kicker--light">Your next move</p>
            <h2 id="seo-final-title">Stop renting every click. Build visibility that compounds.</h2>
            <p>Tell us what you sell, who should find it and where growth is currently stuck. We will begin with the search evidence and identify the highest-value leaks.</p>
            <Link className="seo-service-button seo-service-button--light" href={bookingHref}>
              Book your visibility audit <Arrow />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
