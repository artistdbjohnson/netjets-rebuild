"use client";

import { motion } from "framer-motion";

/** Live exact consult + phone */
export default function ContactPhone() {
  return (
    <section className="relative border-t border-white/10 bg-[#0a0a0b] py-14 sm:py-16 md:py-20">
      <motion.div
        className="mx-auto max-w-7xl px-5 text-center sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <p className="mx-auto max-w-2xl text-sm font-body font-light text-white/60 sm:text-base md:text-lg">
          Call today for a personal consultation with one of our private aviation experts.
        </p>
        <a
          href="tel:+18773565823"
          className="mt-5 inline-block font-heading italic text-2xl tracking-tight text-white transition-colors hover:text-white/80 sm:mt-6 sm:text-3xl md:text-4xl"
        >
          +1.877.356.5823
        </a>
      </motion.div>
    </section>
  );
}
