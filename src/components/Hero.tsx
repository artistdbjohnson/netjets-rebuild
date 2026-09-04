"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const VIDEO_URL = "/video/imagine-flyover.mp4";
const HOLD_S = 2.8;
const FADE_MS = 2400;
const FADE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const NAV_ITEMS = [
  { label: "Programs", href: "/programs" },
  { label: "Fleet", href: "/fleet" },
  { label: "Solutions", href: "/private-aviation-solutions" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
];

const SLIDESHOW = [
  {
    src: "/jets/global-7500-golden-side.jpg",
    alt: "Bombardier Global 7500 side profile over clouds",
    pos: "center 40%",
  },
  {
    src: "/jets/global-7500-reference.jpg",
    alt: "Bombardier Global 7500 over clouds",
    pos: "20% 10%",
  },
];

type Phase = "clip" | "dissolve" | "stills";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("clip");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPhase("stills");
  }, []);

  useEffect(() => {
    if (phase !== "stills") return;
    const timer = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [phase, slideIndex]);

  useEffect(() => {
    if (phase === "clip") return;
    const timer = setTimeout(() => setBaseIndex(slideIndex), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase, slideIndex]);

  useEffect(() => {
    if (phase !== "dissolve") return;
    const timer = setTimeout(() => setPhase("stills"), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const startDissolve = () => {
    setPhase((prev) => (prev === "clip" ? "dissolve" : prev));
  };

  const finishToStills = () => setPhase("stills");

  const onVideoError = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const mediaError = event.currentTarget.error;
    if (!mediaError || mediaError.code === MediaError.MEDIA_ERR_ABORTED) return;
    finishToStills();
  };

  const onTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.currentTime >= HOLD_S) startDissolve();
  };

  const showStills = phase !== "clip";
  const videoOpacity = phase === "stills" ? 0 : 1;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0b]">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        poster="/video/imagine-flyover-poster.jpg"
        autoPlay
        muted
        playsInline
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        onEnded={finishToStills}
        onError={onVideoError}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: videoOpacity,
          objectPosition: "center 40%",
          transition: `opacity ${FADE_MS}ms ${FADE_EASE}`,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0">
        {SLIDESHOW.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: showStills && (i === slideIndex || i === baseIndex) ? 1 : 0,
              zIndex: i === slideIndex ? 2 : i === baseIndex ? 1 : 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: slide.pos,
              transition: i === slideIndex ? `opacity ${FADE_MS}ms ${FADE_EASE}` : "none",
            }}
            aria-hidden={!(showStills && i === slideIndex)}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 md:h-64 lg:h-[300px] bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent"
        aria-hidden="true"
      />

      <header className="relative z-20 mx-auto max-w-7xl px-6 pt-4 md:px-8 md:pt-5">
        <div className="flex items-center justify-between">
          <Logo className="h-8 text-white" />
          <nav className="hidden items-center md:flex">
            <div className="liquid-glass flex items-center rounded-full px-1.5 py-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative z-10 px-3 py-2 text-sm font-medium font-body text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/request"
                className="relative z-10 ml-1 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium font-body text-black transition-colors hover:bg-white/90"
              >
                Request
              </a>
            </div>
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
          <div className="mt-4 liquid-glass rounded-2xl p-6 shadow-xl md:hidden">
            <nav className="relative z-10 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium font-body text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/request"
                className="mt-1 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-medium font-body text-black"
                onClick={() => setMobileOpen(false)}
              >
                Request
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-8 md:pt-12 text-center">
        <div className="pointer-events-none absolute left-1/2 top-6 h-[70%] w-[min(100%,42rem)] -translate-x-1/2 rounded-[40%] bg-black/35 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <p className="mb-5 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">
            World{"'"}s Leading Private Jet Company
          </p>

          <h1 className="mx-auto max-w-4xl font-heading italic text-white leading-[0.8] tracking-tight md:tracking-[-0.04em]">
            <span className="block text-4xl text-white/90 md:text-6xl lg:text-[5.5rem]">
              Time is the
            </span>
            <span className="block text-4xl text-white md:text-6xl lg:text-[5.5rem]">
              only luxury.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-body font-light leading-tight text-white/85 md:text-base lg:text-lg">
            The most advanced private jet fleet in the world. Access it on your terms.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-center gap-3 px-6 pb-10 sm:flex-row md:pb-14">
        <a
          href="/request"
          className="rounded-full bg-white px-8 py-3 text-sm font-semibold font-body text-black transition-colors hover:bg-white/90"
        >
          Request Information
        </a>
        <a
          href="tel:+18773565823"
          className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-semibold font-body text-white transition-colors hover:bg-white/5"
        >
          Call Us
        </a>
      </div>
    </section>
  );
}
