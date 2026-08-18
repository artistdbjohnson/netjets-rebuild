"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

// Public static assets (normal paths — no data-URL modules)
const VIDEO_URL = "/video/imagine-flyover.mp4";

const NAV_ITEMS = [
  { label: "Programs", href: "/programs" },
  { label: "Fleet", href: "/fleet" },
  { label: "Solutions", href: "/private-aviation-solutions" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
];

// Mixed inventory slideshow — public static paths
const SLIDESHOW = [
  {
    src: "/jets/global-7500-golden-hour.jpg",
    alt: "Bombardier Global 7500 at golden hour",
  },
  {
    src: "/jets/global-7500-golden-side.jpg",
    alt: "Bombardier Global 7500 side profile over clouds",
  },
  {
    src: "/jets/challenger-350.jpg",
    alt: "Bombardier Challenger 350",
  },
  {
    src: "/jets/citation-latitude.jpg",
    alt: "Cessna Citation Latitude",
  },
  {
    src: "/jets/phenom-300e.jpg",
    alt: "Embraer Phenom 300E",
  },
  {
    src: "/jets/cabin-interior.jpg",
    alt: "NetJets cabin interior",
  },
  {
    src: "/jets/global-7500-side.jpg",
    alt: "Bombardier Global 7500 side profile",
  },
  {
    src: "/jets/global-7500-reference.jpg",
    alt: "Bombardier Global 7500 over clouds",
  },
];

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoDone, setVideoDone] = useState(false);

  // Stills only after the one-shot flyover ends (or errors)
  useEffect(() => {
    if (!videoDone) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [videoDone]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0b]">
      {/* One-shot Imagine flyover, then fade to stills */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoDone(true)}
        onError={() => setVideoDone(true)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out"
        style={{ opacity: videoDone ? 0 : 1 }}
        aria-hidden="true"
      />

      {/* Mixed-inventory still slideshow — full opacity after flyover */}
      <div className="absolute inset-0">
        {SLIDESHOW.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{
              opacity: videoDone && i === slideIndex ? 1 : 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={!(videoDone && i === slideIndex)}
          />
        ))}
      </div>

      {/* Top + mid legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />

      {/* Bottom fade into page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 md:h-48 lg:h-56 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/70 to-transparent"
        aria-hidden="true"
      />

      <header className="relative z-20 mx-auto max-w-7xl px-6 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <Logo className="h-8 text-white" />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Content — Motionsites overlapping typography + exact NetJets language */}
      <div className="relative z-20 flex h-[calc(100%-88px)] flex-col items-center justify-center px-6 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
          World’s Leading Private Jet Company
        </p>

        <h1 className="max-w-4xl">
          <span className="block text-5xl font-normal leading-none tracking-tighter text-white/80 md:text-7xl lg:text-8xl">
            Time is the
          </span>
          <span className="block -mt-3 text-5xl font-normal leading-none tracking-tighter text-white md:text-7xl lg:text-8xl">
            only luxury.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          The most advanced private jet fleet in the world. Access it on your terms.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#request"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#202124] transition-colors hover:bg-white/90"
          >
            Request Information
          </a>
          <a
            href="tel:+18773565823"
            className="rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
