"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { selectedWorkProjects } from "@/lib/home-work";

export default function SelectedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToProject = useCallback((index: number) => {
    const track = trackRef.current;
    const project = track?.children.item(index) as HTMLElement | null;

    if (!track || !project) return;

    track.scrollTo({
      left: project.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const moveBy = useCallback((direction: number) => {
    setCurrentIndex((current) => {
      const next = (current + direction + selectedWorkProjects.length) % selectedWorkProjects.length;
      scrollToProject(next);
      return next;
    });
  }, [scrollToProject]);

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
    <section className="home-work-summary" aria-labelledby="selected-work-heading">
      <div className="section-shell">
        <div className="home-work-heading">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Our work</p>
            <h2 id="selected-work-heading">Practical work for real organisations.</h2>
          </div>
          <p>Selected projects: the problem, what we did and what changed.</p>
        </div>
        <div
          ref={trackRef}
          className="home-work-grid home-work-carousel-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected Tieko Media projects"
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
          {selectedWorkProjects.map((project) => (
            <article key={project.name}>
              <figure className="home-work-visual">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={750}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </figure>
              <span>{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <div className="home-work-carousel-footer">
          <Link className="home-work-link" href="/work">View selected work <span aria-hidden="true">→</span></Link>
          <div className="home-work-carousel-controls" aria-label="Project carousel controls">
            <span className="sr-only" aria-live="polite">Showing {selectedWorkProjects[currentIndex].name}</span>
            <button type="button" onClick={() => moveBy(-1)} aria-label="Show previous project">←</button>
            <button type="button" onClick={() => moveBy(1)} aria-label="Show next project">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
