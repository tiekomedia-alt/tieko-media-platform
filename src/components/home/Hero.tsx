"use client";

import Image from "next/image";
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
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="hero-editorial-copy lg:col-span-7 z-10 space-y-5 sm:space-y-6">
            <h1 className="font-display font-extrabold uppercase text-[2.75rem] sm:text-[3.75rem] md:text-[4.35rem] lg:text-[4.75rem] xl:text-[5rem] leading-[0.93] tracking-[-0.01em] text-ink-black max-w-[760px]">
              Build a business people can find, trust and choose.
            </h1>

            <p className="hero-editorial-summary">Research, content and digital systems that turn attention into trust and enquiries.</p>

            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <Link href="/book-a-call" className="inline-flex items-center justify-center px-7 py-3.5 bg-action-red hover:bg-deep-red text-white text-[1rem] font-semibold tracking-tight rounded-xs focus-visible:outline-2 focus-visible:outline-action-red focus-visible:outline-offset-2 transition-colors text-center">
                Book a Call
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-7 py-3.5 border border-ink-black hover:border-action-red hover:text-action-red text-ink-black text-[1rem] font-medium tracking-tight rounded-xs focus-visible:outline-2 focus-visible:outline-action-red focus-visible:outline-offset-2 transition-colors text-center">
                See Our Services
              </Link>
            </div>
          </div>

          <figure className="hero-editorial-visual lg:col-span-5">
            <Image
              src="/images/home/tieko-hero-editorial.webp"
              alt="African business strategy and creative team collaborating in a contemporary workspace"
              width={1600}
              height={1067}
              sizes="(max-width: 1023px) 100vw, 43vw"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
