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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a href="/" className="relative z-10">
          <Logo className="h-7 text-white" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <button type="button" className="relative z-10 text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-[#0a0a0b]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            {primaryNav.map((item) => (
              <a key={item.href} href={item.href} className="text-base font-medium text-white/90" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
