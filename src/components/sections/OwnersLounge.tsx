"use client";

import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";

/** Owners Lounge (Doug) — link-out only. THEIR CTA labels only; no invented body. */
const links = [
  { label: "Login", href: "https://fly.netjets.com/applogin", primary: true },
  { label: "Owner Portal", href: "https://fly.netjets.com/", primary: false },
  { label: "Owner Digital Experience", href: "https://fly.netjets.com/", primary: false },
  {
    label: "NetJets App",
    href: "https://www.netjets.com/en-us/netjets-app-book-private-flights",
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
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <MediaFrame label="/media/home/owners-lounge" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
