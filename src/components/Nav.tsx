"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "@/content/nav";

type NavProps = {
  variant?: "transparent" | "solid";
};

export default function Nav({ variant = "transparent" }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const isTransparent = variant === "transparent" && !scrolled;

  return (
    <header
      className={`fixed top-3 left-0 right-0 z-50 px-3 sm:top-4 sm:px-4 md:px-8 lg:px-16 transition-all duration-500`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 transition-all duration-500 ${
          isTransparent ? "bg-transparent" : "liquid-glass"
        }`}
      >
        <a href="/" className="relative z-10 shrink-0">
          <Logo className="h-7 text-white" />
        </a>

        <nav className="hidden items-center lg:flex">
          <div className="liquid-glass flex items-center rounded-full px-1.5 py-1">
            {primaryNav.map((item) => (
              <a
                key={item.href}
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
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full liquid-glass text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

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
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85svh] overflow-y-auto rounded-t-3xl bg-[#0a0a0b]/92 liquid-glass-strong px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/30" aria-hidden="true" />
            <nav className="relative z-10 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center rounded-xl px-3 text-lg font-medium font-body text-white/90"
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
    </header>
  );
}
