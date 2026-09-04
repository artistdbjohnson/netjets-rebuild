"use client";

import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";

/** Live cue: See all NetJets News */
export default function NewsLink() {
  return (
    <section id="news" className="relative bg-[#0a0a0b] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.a
          href="/news"
          className="group grid overflow-hidden rounded-2xl liquid-glass md:grid-cols-[1.2fr_1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <MediaFrame
            src="/home/safety-insights-hero.jpg"
            alt="See all NetJets News"
            className="rounded-none ring-0"
          />
          <div className="relative z-10 flex flex-col justify-center p-8 md:p-10">
            <h2 className="font-heading italic text-2xl tracking-tight text-white md:text-3xl">
              See all NetJets News
            </h2>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
