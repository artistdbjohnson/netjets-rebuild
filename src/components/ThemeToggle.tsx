"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  THEME_EVENT,
  applyTheme,
  getDocumentTheme,
  type ThemeMode,
} from "@/lib/theme";

type ThemeToggleProps = {
  className?: string;
  /** white on cinematic hero; #444240 when header light-solid */
  forceColor?: "light" | "dark";
};

/**
 * Nia: header-only ghost icon, 17px / stroke 1.5, 44×44, aria-label only.
 * Vale: quiet opacity crossfade 200ms; reduced-motion instant.
 */
export default function ThemeToggle({ className = "", forceColor }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getDocumentTheme());
    setMounted(true);
    const onTheme = () => setTheme(getDocumentTheme());
    window.addEventListener(THEME_EVENT, onTheme);
    return () => window.removeEventListener(THEME_EVENT, onTheme);
  }, []);

  const next: ThemeMode = theme === "light" ? "dark" : "light";
  const label = next === "dark" ? "Use dark theme" : "Use light theme";
  const isDark = mounted && theme === "dark";

  const colorClass =
    forceColor === "light"
      ? "text-white"
      : forceColor === "dark"
        ? "text-[#444240]"
        : "text-[var(--toggle-ink)]";

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={label}
      className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-transparent opacity-80 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bed)] motion-reduce:transition-none ${colorClass} ${className}`}
    >
      <span className="relative inline-flex h-[17px] w-[17px] items-center justify-center">
        <Sun
          size={17}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`absolute transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
        <Moon
          size={17}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`absolute transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        />
      </span>
    </button>
  );
}
