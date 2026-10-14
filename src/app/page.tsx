import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import BrandPartners from "@/components/brand/BrandPartners";
import Hero from "@/components/home/Hero";
import HomeMotion from "@/components/home/HomeMotion";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesIndex from "@/components/home/ServicesIndex";
import Header from "@/components/navigation/Header";

export const metadata: Metadata = {
  title: { absolute: "Tieko Media | Business Services, Media & Digital Systems" },
  description:
    "Tieko Media helps African businesses turn attention into trust and enquiries through research, content, business support and digital systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tieko Media | Business Services, Media & Digital Systems",
    description:
      "Research, content, business support and digital systems that help African businesses get found, build trust and grow.",
    url: "/",
    siteName: "Tieko Media",
    locale: "en_GB",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <HomeMotion>
      <div className="min-h-screen flex flex-col bg-warm-ivory text-ink-black font-sans">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="home-intro-thread">
            <AmiRibbon />
            <Hero />
          </div>
          <ServicesIndex />
          <SelectedWork />
          <BrandPartners />
          <section className="home-final-cta" aria-labelledby="home-final-title">
            <div className="section-shell home-final-cta-layout">
              <div className="home-final-cta-copy">
                <p className="section-eyebrow">Next step</p>
                <h2 id="home-final-title">Tell us what your business needs to move forward.</h2>
                <p>We will help you identify the immediate requirement, the dependencies around it and a practical next step.</p>
                <Link href="/book-a-call">Book a call <span aria-hidden="true">→</span></Link>
              </div>
              <figure className="home-final-cta-image">
                <Image
                  src="/images/lagos/lagos-urban-movement.webp"
                  alt="A busy Lagos transport corridor with yellow buses, pedestrians and roadside commerce"
                  width={1200}
                  height={800}
                  sizes="(max-width: 760px) 92vw, 42vw"
                />
              </figure>
            </div>
          </section>
        </main>
      </div>
    </HomeMotion>
  );
}
