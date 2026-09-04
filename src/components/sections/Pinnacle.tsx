"use client";

import { motion } from "framer-motion";

/**
 * Pinnacle intro — live exact copy (Wren deck).
 */
export default function Pinnacle() {
  return (
    <section className="relative bg-[var(--bed)] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium font-body uppercase tracking-[0.14em] text-[var(--ink-soft)] sm:text-xs">
            FROM THE PIONEER OF FRACTIONAL AIRCRAFT OWNERSHIP
          </p>
          <h2 className="font-heading italic text-[1.75rem] tracking-tight leading-[0.92] text-[var(--ink)] sm:text-4xl md:text-5xl lg:text-6xl">
            THE PINNACLE OF PRIVATE TRAVEL
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-body font-light leading-relaxed text-[var(--ink-muted)] sm:mt-6 sm:text-base md:text-lg">
            Expect the world with NetJets—the leading fractional aircraft company offering superior solutions favored by the most discerning travelers. Our vast, versatile private jet fleet, operational excellence, and proven business model ensure seamlessness and stability that is unmatched. Only NetJets®, a proud Berkshire Hathaway company, empowers luxury travel on your terms, marked by our resolute commitment to the highest safety standards, personalized service, and global access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
