"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HomeMotionProps = {
  children: ReactNode;
};

export default function HomeMotion({ children }: HomeMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({
          defaults: { duration: 0.75, ease: "power3.out" },
        });

        // The primary promise must be immediately available in the server-rendered
        // page. Animating it from invisible here meant it could disappear while
        // the client bundle hydrated, especially on mobile connections.
        heroTimeline
          .from(".hero-editorial-summary", { autoAlpha: 0, y: 18 })
          .from(".hero-editorial-copy a", { autoAlpha: 0, y: 14, stagger: 0.08 }, "-=0.48")
          .from(".hero-editorial-visual", { autoAlpha: 0, y: 24, scale: 0.985 }, "-=0.62")
          .from(
            ".home-intro-thread > .ami-thread svg",
            { autoAlpha: 0, xPercent: 4, stagger: 0.08 },
            "-=0.72",
          );

        gsap.to(".hero-editorial-visual img", {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        const revealGroup = (trigger: string, targets: string) => {
          gsap.from(targets, {
            autoAlpha: 0,
            y: 28,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger,
              start: "top 82%",
              once: true,
            },
          });
        };

        revealGroup(".services-index", ".services-intro > *, .home-services-carousel-track > article");
        revealGroup(".home-work-summary", ".home-work-heading > *, .home-work-carousel-track > article");
        revealGroup(".home-final-cta", ".home-final-cta .section-shell > *");
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="home-motion-root">
      {children}
    </div>
  );
}
