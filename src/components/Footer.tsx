"use client";

import Logo from "./Logo";
import { footerData } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bed)] text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="mb-6" themeAware />
            <a
              href={footerData.phoneHref}
              className="block text-lg font-medium font-body tracking-tight text-[var(--ink)] transition-opacity hover:opacity-80"
            >
              {footerData.phone}
            </a>
            <a
              href={footerData.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm font-body font-light leading-relaxed text-[var(--ink-muted)] transition-opacity hover:opacity-80"
            >
              {footerData.address}
            </a>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-medium font-body uppercase tracking-wider text-[var(--ink-subtle)]">
              {footerData.otherCompaniesHeading}
            </h3>
            <ul className="space-y-3">
              {footerData.otherCompanies.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body font-light text-[var(--ink-soft)] transition-opacity hover:opacity-100"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <ul className="space-y-3">
              {footerData.links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-body font-light text-[var(--ink-soft)] transition-opacity hover:opacity-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row md:items-center">
          <p className="text-xs font-body font-light text-[var(--ink-subtle)]">{footerData.copyright}</p>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-6">
            <a
              href="https://www.douglxss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body font-light text-[var(--ink-subtle)] transition-opacity hover:opacity-80"
            >
              built by dglxss
            </a>
            <button
              type="button"
              className="text-xs font-body font-light text-[var(--ink-subtle)] transition-opacity hover:opacity-80"
              aria-label={footerData.scrollToTopLabel}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
