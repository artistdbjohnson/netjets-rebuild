"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "@/content/nav";

const VIDEO_URL = "/video/imagine-flyover.mp4";
const VIDEO_MOBILE_URL = "/video/imagine-flyover-9x16.mp4";
const POSTER = "/video/imagine-flyover-poster.jpg";
const POSTER_MOBILE = "/video/imagine-flyover-9x16-poster.jpg";

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0b]">
      {/* Mobile: Doug 9:16 Imagine hero — full Global 7500 + vertical clouds */}
      <video
        src={VIDEO_MOBILE_URL}
        poster={POSTER_MOBILE}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
        aria-hidden="true"
      />
      {/* Desktop / tablet: landscape Imagine flyover */}
      <video
        src={VIDEO_URL}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_42%] sm:block"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-transparent" />
      {/* Soft cinematic fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-72 sm:h-80 md:h-96"
        style={{
          background:
            "linear-gradient(to top, #0a0a0b 0%, rgba(10,10,11,0.95) 22%, rgba(10,10,11,0.7) 48%, rgba(10,10,11,0.28) 72%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <header className="relative z-30 mx-auto max-w-7xl px-4 pt-4 sm:px-6 md:px-8 md:pt-5">
        <div className="flex items-center justify-between gap-3">
          <Logo className="h-7 text-white sm:h-8" />

          <nav className="hidden items-center lg:flex">
            <div className="liquid-glass flex items-center rounded-full px-1.5 py-1">
              {primaryNav.map((item) => (
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
            ref={buttonRef}
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full liquid-glass text-white lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            ref={panelRef}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85svh] overflow-y-auto rounded-t-3xl bg-[#0a0a0b]/95 border border-white/10 backdrop-blur-xl px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/30" aria-hidden="true" />
            <nav className="relative z-10 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-h-12 items-center rounded-xl px-3 text-lg font-medium font-body text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/request"
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold font-body text-black"
                onClick={() => setMobileOpen(false)}
              >
                Request Information
              </a>
              <a
                href="tel:+18773565823"
                className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full liquid-glass-strong px-5 py-3 text-base font-semibold font-body text-white"
                onClick={() => setMobileOpen(false)}
              >
                Call Us
              </a>
            </nav>
          </div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-stretch gap-3 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:items-center sm:px-6 sm:pb-10 sm:flex-row sm:justify-center md:pb-14">
        <a
          href="/request"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold font-body text-black transition-colors hover:bg-white/90 sm:w-auto"
        >
          Request Information
        </a>
        <a
          href="tel:+18773565823"
          className="inline-flex min-h-12 w-full items-center justify-center liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-semibold font-body text-white transition-colors hover:bg-white/5 sm:w-auto"
        >
          Call Us
        </a>
      </div>
    </section>
  );
}
