import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import Header from "@/components/navigation/Header";
import StructuredData from "@/components/seo/StructuredData";
import { selectedWorkProjects } from "@/lib/home-work";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tieko Media",
  description:
    "Learn how Tieko Media Limited approaches research, content, visibility, digital systems and business support from Lagos, Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tieko Media | Research, Content and Digital Systems",
    description:
      "A Lagos-based business services company helping organisations build clearer foundations, visibility and digital systems.",
    url: "/about",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/images/lagos/lagos-business-district.webp"],
  },
};

const principles = [
  ["Diagnose before prescribing", "We begin with the business problem, the audience and the evidence available before recommending a deliverable."],
  ["Build owned infrastructure", "Websites, content, records and operating systems should remain useful beyond a single campaign or platform trend."],
  ["State the boundary", "We distinguish our work from decisions controlled by regulators, platforms, licensed professionals and other third parties."],
  ["Measure what can improve", "We connect activity to observable behaviour, document assumptions and use the result to guide the next cycle."],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tieko Media",
            url: absoluteUrl("/about"),
            mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
            ],
          },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-grid-grey">
          <AmiRibbon />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-12 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-action-red">About Tieko Media</p>
              <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
                We build the infrastructure behind credible growth.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
                Tieko Media Limited is a Lagos-based business services company working across research, content, media, digital systems, records and compliance coordination.
              </p>
            </div>
            <figure className="relative overflow-hidden border border-grid-grey bg-soft-paper shadow-xl">
              <Image
                src="/images/lagos/lagos-business-district.webp"
                alt="Lagos business district, where Tieko Media Limited is based"
                width={1600}
                height={1067}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority
              />
              <figcaption className="border-t border-grid-grey px-4 py-3 text-xs text-slate">Lagos, Nigeria</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.38fr_0.62fr] lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-action-red">Our point of view</p>
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl">Visibility works when the foundation can carry it.</h2>
            <div className="mt-8 grid gap-6 text-base leading-8 text-slate sm:grid-cols-2">
              <p>Posting, advertising or ranking can create attention. Sustainable value depends on what happens next: a clear offer, a credible website, reliable records, useful content and a response system that does not lose the opportunity.</p>
              <p>That is why our work connects strategy with execution. We clarify the question, define the scope, build the agreed system and explain what remains outside our control.</p>
            </div>
          </div>
        </section>

        <section className="bg-ink-black text-white">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#ff686c]">How we work</p>
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl">Clear thinking. Defined responsibility. Useful output.</h2>
            </div>
            <div className="mt-12 grid border-l border-t border-white/20 sm:grid-cols-2">
              {principles.map(([title, copy], index) => (
                <article className="border-b border-r border-white/20 p-7 sm:p-9" key={title}>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#ff686c]">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase">{title}</h3>
                  <p className="mt-4 leading-7 text-white/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-action-red">Evidence and accountability</p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">Work we can name. Claims we can support.</h2>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-slate">Our selected work identifies the scope delivered without inventing results or implying endorsements. Our Insights articles are dated, reviewed for clarity and designed to connect readers with the relevant service—not to manufacture authority.</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Selected organisations and products">
                {selectedWorkProjects.map((project) => (
                  <li className="border border-grid-grey bg-soft-paper px-5 py-4 font-semibold" key={project.name}>{project.name}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="inline-flex min-h-12 items-center bg-action-red px-6 font-bold text-white hover:bg-deep-red" href="/work">View selected work</Link>
                <Link className="inline-flex min-h-12 items-center border border-ink-black px-6 font-bold hover:bg-ink-black hover:text-white" href="/insights">Read our insights</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-grid-grey bg-soft-paper">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-action-red">Tieko Media Limited · Ikeja, Lagos</p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl">Tell us what your business needs to move forward.</h2>
            </div>
            <Link className="inline-flex min-h-14 items-center justify-center bg-action-red px-8 font-bold text-white hover:bg-deep-red" href="/book-a-call">Book a call</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
