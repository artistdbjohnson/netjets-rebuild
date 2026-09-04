"use client";

import { useEffect, useState } from "react";
import { THEME_EVENT, getDocumentTheme, type ThemeMode } from "@/lib/theme";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  themeAware?: boolean;
};

export default function Logo({
  className = "",
  variant = "light",
  themeAware = false,
}: LogoProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    if (!themeAware) return;
    const sync = () => setTheme(getDocumentTheme());
    sync();
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, [themeAware]);

  const effective = themeAware ? (theme === "light" ? "dark" : "light") : variant;
  const color = effective === "light" ? "text-white" : "text-[#262524]";

  return (
    <a href="/" className={`inline-flex items-center ${className}`} aria-label="NetJets home">
      <span
        className={`font-logo text-[1.05rem] font-medium italic uppercase leading-none tracking-[0.14em] sm:text-lg ${color}`}
      >
        Net
        <span className="logo-j">J</span>
        ets
      </span>
    </a>
  );
}
