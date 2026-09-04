"use client";

import { motion } from "framer-motion";

/**
 * Owners Lounge — link-out hub only.
 * CTA labels + URLs from tasker recon (exact THEIR words).
 */
const links = [
  {
    label: "Login",
    href: "https://fly.netjets.com/applogin",
    primary: true,
  },
  {
    label: "Owner Portal",
    href: "https://fly.netjets.com/applogin",
    primary: false,
  },
  {
    label: "NetJets App",
    href: "https://www.netjets.com/en-us/netjets-app-book-private-flights",
    primary: false,
  },
  {
    label: "Enroll",
    href: "https://fly.netjets.com/Account/Enroll",
    primary: false,
  },
] as const;

export default function OwnersLounge() {
  return (
    <section
      id="owners-lounge"
      aria-labelledby="owners-lounge-title"
      className="relative bg-[var(--bed-alt)] py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p
            className="mb-3 text-xs font-medium font-body uppercase tracking-[0.14em]"
            style={{ color: "var(--ink-muted)" }}
          >
            Owner Digital Experience
          </p>
          <h2
            id="owners-lounge-title"
            className="font-heading italic text-[1.75rem] leading-[0.92] tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "var(--primary)" }}
          >
            Owners Lounge
          </h2>
          <span className="champagne-rule mb-6" aria-hidden />

          <div className="mt-6 flex flex-col gap-3 sm:max-w-md">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  item.primary
                    ? "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold font-body transition-opacity hover:opacity-90"
                    : "inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-medium font-body transition-opacity hover:opacity-90"
                }
                style={
                  item.primary
                    ? { background: "var(--cta-bg)", color: "var(--cta-fg)" }
                    : {
                        color: "var(--cta-secondary-fg)",
                        borderColor: "var(--cta-secondary-border)",
                        background: "transparent",
                      }
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
