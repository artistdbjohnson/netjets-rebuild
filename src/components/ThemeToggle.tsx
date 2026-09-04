"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_EVENT, applyTheme, getDocumentTheme, type ThemeMode } from "@/lib/theme";
type Props = { className?: string; forceColor?: "light" | "dark" };
export default function ThemeToggle({ className = "", forceColor }: Props) {
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
  const colorClass = forceColor === "light" ? "text-white" : forceColor === "dark" ? "text-[#444240]" : "text-[var(--toggle-ink)]";
  return (
    <button type="button" onClick={() => applyTheme(next)} aria-label={label}
      className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full opacity-80 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bed)] motion-reduce:transition-none ${colorClass} ${className}`}>
      {mounted && theme === "dark" ? <Sun size={17} strokeWidth={1.5} aria-hidden="true" /> : <Moon size={17} strokeWidth={1.5} aria-hidden="true" />}
    </button>
  );
}
