"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-[#0a0a0b] py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center md:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
          Begin the Conversation
        </p>
        <h2 className="mb-6 text-4xl font-normal tracking-tighter text-white md:text-5xl lg:text-6xl">
          The right program
          <br />
          <span className="text-white/60">starts with a call.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/55">
          An Owner Services representative will map your travel pattern and
          recommend the structure that fits — without pressure, without
          generic rate cards.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/request"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-white/90"
          >
            Request Information
          </a>
          <a
            href="tel:+18773565823"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Call +1.877.356.5823
          </a>
        </div>
      </motion.div>
    </section>
  );
}
