import type { Metadata } from "next";
import Header from "@/components/navigation/Header";
import Hero from "@/components/home/Hero";
import AmiRibbon from "@/components/brand/AmiRibbon";
import ServicesIndex from "@/components/home/ServicesIndex";
import SelectedWork from "@/components/home/SelectedWork";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Tieko Media | Business Services, Media and Digital Systems" },
  description:
    "Tieko Media helps Nigerian and international organisations strengthen business foundations, content, advertising and digital systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Build a Business People Can Find, Trust and Choose | Tieko Media",
    description:
      "Business foundations, content, media and digital systems for organisations that want a clearer path to growth.",
    url: "/",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-ivory text-ink-black font-sans">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="home-intro-thread">
          <AmiRibbon />
          <Hero />
        </div>
        <ServicesIndex />
        <SelectedWork />
        <section className="home-final-cta" aria-labelledby="home-final-title">
          <div className="section-shell">
            <p className="section-eyebrow">One useful conversation</p>
            <h2 id="home-final-title">Tell us what your business needs to move forward.</h2>
            <p>We will help you identify the immediate requirement, the dependencies around it and a practical next step.</p>
            <Link href="/book-a-call">Book a Call <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
