"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  title: string;
  href: string;
}

interface ServiceGroup {
  category: string;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    category: "Build visibility",
    items: [
      { title: "Media Buying", href: "/services/media-buying" },
      { title: "Digital Presence Optimisation", href: "/services/digital-presence-optimisation" },
      { title: "Billboard Advertising", href: "/services/billboard-advertising" },
    ],
  },
  {
    category: "Build authority",
    items: [
      { title: "Content Creation", href: "/services/content-creation" },
      { title: "Press Release Services", href: "/services/press-release-services" },
    ],
  },
  {
    category: "Build foundations",
    items: [
      { title: "Compliance", href: "/services/compliance" },
      { title: "Data and Records Management", href: "/services/data-records-management" },
    ],
  },
  {
    category: "Build intelligence",
    items: [
      { title: "Intelligence Reports", href: "/services/intelligence-reports" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll state for subtle border / elevation treatment
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const menuButton = mobileMenuButtonRef.current;
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    document.body.style.overflow = "hidden";
    first?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
      menuButton?.focus();
    };
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (servicesDropdownOpen) setServicesDropdownOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [servicesDropdownOpen, mobileMenuOpen]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-warm-ivory/95 backdrop-blur-sm border-b border-grid-grey shadow-xs"
          : "bg-warm-ivory border-b border-grid-grey/60"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-6">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="relative block h-[59px] w-[112px] lg:h-[64px] lg:w-[122px] overflow-hidden focus-visible:outline-2 focus-visible:outline-action-red rounded-sm"
              aria-label="Tieko Media Homepage"
            >
              <Image
                src="/brand/tieko-logo.png"
                alt="Tieko Media"
                width={500}
                height={499}
                className="absolute max-w-none w-[140px] lg:w-[152px] h-auto left-[-14px] lg:left-[-15px] top-[-41px] lg:top-[-44px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Reduced per user guidance: Services, Work, Intelligence, Insights, About, Book a Call */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-[0.9375rem] font-medium tracking-tight text-ink-black"
          >
            {/* Services with Accessible Flyout */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 py-2 hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs cursor-pointer transition-colors"
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    setServicesDropdownOpen(true);
                  }
                }}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-slate transition-transform duration-150 ${
                    servicesDropdownOpen ? "rotate-180 text-action-red" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Flyout Panel */}
              {servicesDropdownOpen && (
                <div
                  role="menu"
                  aria-label="Services Submenu"
                  className="absolute left-0 top-full mt-2 w-[520px] bg-soft-paper border border-grid-grey p-5 shadow-lg rounded-sm grid grid-cols-2 gap-5 z-50 text-left"
                >
                  {serviceGroups.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate">
                        {group.category}
                      </p>
                      <ul className="space-y-1.5" role="none">
                        {group.items.map((item) => (
                          <li key={item.title} role="none">
                            <Link
                              href={item.href}
                              role="menuitem"
                              className="block group py-1 rounded-xs focus-visible:outline-2 focus-visible:outline-action-red"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <span className="block text-[0.875rem] font-semibold text-ink-black group-hover:text-action-red transition-colors">
                                {item.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work"
              className="py-2 hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs transition-colors"
            >
              Work
            </Link>

            <Link
              href="/intelligence"
              className="py-2 hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs transition-colors"
            >
              Intelligence
            </Link>

            <Link
              href="/insights"
              className="py-2 hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs transition-colors"
            >
              Insights
            </Link>

            <Link
              href="/about"
              className="py-2 hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Primary CTA & Mobile Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/book-a-call"
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.25 bg-action-red hover:bg-deep-red text-white text-[0.875rem] font-semibold tracking-tight rounded-xs focus-visible:outline-2 focus-visible:outline-action-red focus-visible:outline-offset-2 transition-colors cursor-pointer shadow-xs"
            >
              Book a Call
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              ref={mobileMenuButtonRef}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 text-ink-black hover:text-action-red focus-visible:outline-2 focus-visible:outline-action-red rounded-xs"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          ref={mobileMenuRef}
          className="fixed inset-0 top-16 z-40 bg-warm-ivory md:hidden overflow-y-auto border-t border-grid-grey px-6 py-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            {/* Primary Action at Top of Mobile Menu */}
            <div>
              <Link
                href="/book-a-call"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 px-6 bg-action-red text-white text-[1rem] font-semibold rounded-xs shadow-xs focus-visible:outline-2 focus-visible:outline-action-red"
              >
                Book a Call
              </Link>
            </div>

            {/* Navigation Destinations */}
            <nav className="space-y-4 pt-2">
              {/* Expandable Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-[1.25rem] font-display font-bold uppercase tracking-tight text-ink-black text-left"
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 text-slate transition-transform duration-150 ${
                      mobileServicesOpen ? "rotate-180 text-action-red" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-3 mt-2 space-y-4 border-l-2 border-grid-grey">
                    {serviceGroups.map((group) => (
                      <div key={group.category} className="space-y-1.5">
                        <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate">
                          {group.category}
                        </span>
                        {group.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[0.9375rem] font-medium text-ink-black py-1 hover:text-action-red"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Link
                  href="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[1.25rem] font-display font-bold uppercase tracking-tight text-ink-black hover:text-action-red"
                >
                  Work
                </Link>
              </div>

              <div>
                <Link
                  href="/intelligence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[1.25rem] font-display font-bold uppercase tracking-tight text-ink-black hover:text-action-red"
                >
                  Intelligence
                </Link>
              </div>

              <div>
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[1.25rem] font-display font-bold uppercase tracking-tight text-ink-black hover:text-action-red"
                >
                  Insights
                </Link>
              </div>

              <div>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[1.25rem] font-display font-bold uppercase tracking-tight text-ink-black hover:text-action-red"
                >
                  About
                </Link>
              </div>
            </nav>
          </div>

          {/* Footer inside mobile menu */}
          <div className="pt-8 border-t border-grid-grey/60 text-[0.8125rem] text-slate space-y-1">
            <p className="font-semibold text-ink-black">Tieko Media Limited</p>
            <p>Built in Lagos. Useful anywhere.</p>
          </div>
        </div>
      )}
    </header>
  );
}
