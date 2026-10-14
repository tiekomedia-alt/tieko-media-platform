"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import AmiRibbon from "@/components/brand/AmiRibbon";

const liveServices = [
  {
    title: "SEO, AEO and Search Ranking",
    description:
      "Technical search foundations, demand-led content, answer optimisation and authority building that turn discovery into qualified enquiries.",
    href: "/services/seo-aeo-ranking",
    image: "/images/insights/seo-aeo-visibility.webp",
    imageAlt: "A customer question connected to organised pages, evidence and a useful answer",
  },
  {
    title: "Compliance and Institutional Support",
    description:
      "Application coordination, document preparation and professional referrals for important Nigerian business processes.",
    href: "/services/compliance",
    image: "/images/services/compliance-institutional-support.webp",
    imageAlt: "Compliance documents arranged in a professional workspace",
  },
  {
    title: "Content Creation",
    description:
      "Strategy, copy, design, video and distribution planning built around a repeatable content system.",
    href: "/services/content-creation",
    image: "/images/services/content-creation.webp",
    imageAlt: "Creative production workspace for content planning and creation",
  },
  {
    title: "Media Services",
    description:
      "Plan campaigns and customer journeys that give interested visitors a clear next action.",
    href: "/mediaservices",
    image: "/images/services/media-services.webp",
    imageAlt: "Media campaign planning and digital advertising workspace",
  },
  {
    title: "Billboard and Outdoor Advertising",
    description:
      "Location assessment, format coordination, creative readiness and placement support for outdoor campaigns.",
    href: "/services/billboard-advertising",
    image: "/images/services/billboard-lagos.webp",
    imageAlt: "Outdoor billboard advertising in Lagos",
  },
  {
    title: "Website and Conversion Optimisation",
    description:
      "Clearer websites, landing pages, enquiry paths, analytics and customer follow-up systems.",
    href: "/services/digital-presence-optimisation",
    image: "/images/services/digital-optimisation.webp",
    imageAlt: "Website and conversion optimisation workspace",
  },
  {
    title: "Data and Records Management",
    description:
      "Practical systems for organising, digitising, classifying and retrieving authorised business records.",
    href: "/services/data-records-management",
    image: "/images/services/records-management.webp",
    imageAlt: "Organised business records and information management system",
  },
  {
    title: "Business Intelligence and Research",
    description:
      "Focused market, competitor and customer research organised into a decision-ready business brief.",
    href: "/services/intelligence-reports",
    image: "/images/services/business-intelligence.webp",
    imageAlt: "Business research and intelligence analysis workspace",
  },
];

export default function ServicesIndex() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToService = useCallback((index: number) => {
    const track = trackRef.current;
    const service = track?.children.item(index) as HTMLElement | null;
    if (!track || !service) return;

    track.scrollTo({
      left: service.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const moveBy = useCallback((direction: number) => {
    setCurrentIndex((current) => {
      const next = (current + direction + liveServices.length) % liveServices.length;
      scrollToService(next);
      return next;
    });
  }, [scrollToService]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isPaused || reducedMotion.matches) return;

    const interval = window.setInterval(() => moveBy(1), 10_000);
    return () => window.clearInterval(interval);
  }, [isPaused, moveBy]);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;

    const nearestIndex = Array.from(track.children).reduce((nearest, child, index) => {
      const nearestChild = track.children.item(nearest) as HTMLElement;
      const currentChild = child as HTMLElement;
      const nearestDistance = Math.abs(nearestChild.offsetLeft - track.offsetLeft - track.scrollLeft);
      const currentDistance = Math.abs(currentChild.offsetLeft - track.offsetLeft - track.scrollLeft);
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setCurrentIndex(nearestIndex);
  }

  return (
    <section className="services-index" aria-labelledby="services-heading">
      <AmiRibbon />
      <div className="section-shell">
        <div className="services-intro">
          <p className="section-eyebrow">How we help</p>
          <div>
            <h2 id="services-heading">Start with the business problem, not an isolated deliverable.</h2>
            <p>Each service page explains the business problem, what we can handle and the clearest next step.</p>
          </div>
        </div>

        <div
          ref={trackRef}
          className="home-service-card-grid home-services-carousel-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Tieko Media services"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onScroll={handleScroll}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") moveBy(1);
            if (event.key === "ArrowLeft") moveBy(-1);
          }}
        >
          {liveServices.map((service) => {
            const preserveFullImage = service.href === "/services/billboard-advertising";

            return (
            <article key={service.title}>
              <figure className={`home-service-visual${preserveFullImage ? " home-service-visual--contain" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={preserveFullImage ? 4000 : 1200}
                  height={preserveFullImage ? 6000 : 750}
                  sizes="(max-width: 760px) 84vw, 31rem"
                />
              </figure>
              <div className="home-service-card-copy">
                <p className="home-service-category">Service</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href}>Explore service <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            );
          })}
        </div>

        <div className="home-services-footer">
          <div>
            <Link href="/services">See our services</Link>
            <Link href="/book-a-call">Book a call</Link>
          </div>
          <div className="home-services-carousel-controls" aria-label="Service carousel controls">
            <span className="sr-only" aria-live="polite">Showing {liveServices[currentIndex].title}</span>
            <button type="button" onClick={() => moveBy(-1)} aria-label="Show previous service">←</button>
            <button type="button" onClick={() => moveBy(1)} aria-label="Show next service">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
