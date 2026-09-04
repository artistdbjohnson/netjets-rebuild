"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="request" className="relative bg-[var(--bed)] py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center md:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="mb-6 font-heading italic text-4xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-5xl lg:text-6xl">
          Explore the Possibilities
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base font-body font-light text-[var(--ink-muted)] md:text-lg">
          We have the right solution to fit your unique travel needs.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/request"
            className="rounded-full bg-[var(--cta-bg)] px-8 py-3.5 text-sm font-semibold font-body text-[var(--cta-fg)] transition-colors hover:opacity-90"
          >
            Request Information
          </a>
          <a
            href="tel:+18773565823"
            className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-semibold font-body text-[var(--ink)] transition-colors hover:bg-white/5"
          >
            Call Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
