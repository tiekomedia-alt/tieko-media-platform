import Link from "next/link";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="hero-section relative w-full bg-warm-ivory overflow-hidden border-b border-grid-grey/40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 select-none">
        <div className="h-full w-full border-x border-grid-grey/30 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
          <div className="hidden lg:block col-span-4 border-r border-grid-grey/20 h-full" />
          <div className="hidden lg:block col-span-4 border-r border-grid-grey/20 h-full" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-5 items-center">
          <div className="lg:col-span-7 z-10 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-xs bg-action-red shrink-0" aria-hidden="true" />
              <p className="text-[0.75rem] sm:text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-slate">
                African digital intelligence and infrastructure
              </p>
            </div>

            <h1 className="font-display font-extrabold uppercase text-[2.75rem] sm:text-[3.75rem] md:text-[4.35rem] lg:text-[4.75rem] xl:text-[5rem] leading-[0.93] tracking-[-0.01em] text-ink-black max-w-[760px]">
              Build a business people can find, trust and choose.
            </h1>

            <div className="space-y-3.5 max-w-[610px] text-slate text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              <p>Tieko Media helps ambitious businesses and institutions build the foundations, visibility, content, intelligence and information systems they need to operate clearly and grow deliberately.</p>
              <p className="font-medium text-ink-black tracking-tight">We research. We build. We amplify. We optimise.</p>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link href="/book-a-call" className="inline-flex items-center justify-center px-7 py-3.5 bg-action-red hover:bg-deep-red text-white text-[1rem] font-semibold tracking-tight rounded-xs focus-visible:outline-2 focus-visible:outline-action-red focus-visible:outline-offset-2 transition-colors text-center">
                Book a Call
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-7 py-3.5 border border-ink-black hover:border-action-red hover:text-action-red text-ink-black text-[1rem] font-medium tracking-tight rounded-xs focus-visible:outline-2 focus-visible:outline-action-red focus-visible:outline-offset-2 transition-colors text-center">
                Explore Our Services
              </Link>
            </div>

            <div className="pt-3 border-t border-grid-grey/50 flex items-center gap-3 text-[0.875rem] text-slate">
              <span className="inline-block w-1.5 h-1.5 bg-restrained-gold rounded-full" aria-hidden="true" />
              <span className="font-medium tracking-tight text-ink-black">Built in Lagos. Useful anywhere.</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[250px] sm:min-h-[320px] lg:min-h-[420px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
