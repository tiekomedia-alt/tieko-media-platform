import Header from "@/components/navigation/Header";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import AmiRibbon from "@/components/brand/AmiRibbon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-ivory text-ink-black font-sans">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="home-intro-thread">
          <AmiRibbon />
          <Hero />
          <ProblemSection />
        </div>
      </main>
    </div>
  );
}
