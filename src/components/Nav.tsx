"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "@/content/nav";

type NavProps = {
  variant?: "transparent" | "solid";
};

export default function Nav({ variant = "transparent" }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = variant === "transparent" && !scrolled;

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 transition-all duration-500 ${
        isTransparent ? "" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 md:px-5 md:py-3 transition-all duration-500 ${
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
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full liquid-glass text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 liquid-glass rounded-2xl p-6 shadow-2xl lg:hidden">
          <nav className="relative z-10 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3.5 text-lg font-medium font-body text-white/90"
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
              Request
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
