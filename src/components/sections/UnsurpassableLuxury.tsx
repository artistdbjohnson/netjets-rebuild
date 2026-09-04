"use client";

import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";

/** Live band: UNSURPASSABLE LUXURY */
export default function UnsurpassableLuxury() {
  return (
    <section className="relative bg-[var(--bed)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl liquid-glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="grid md:grid-cols-2">
            <MediaFrame
              label="/media/home/unsurpassable-luxury"
              className="rounded-none ring-0 md:min-h-[280px]"
            />
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12">
              <h2 className="font-heading italic text-3xl tracking-tight text-[var(--ink)] md:text-4xl lg:text-5xl">
                UNSURPASSABLE LUXURY
              </h2>
              <p className="mt-4 max-w-md text-base font-body font-light text-[var(--ink-muted)] md:text-lg">
                Flying with NetJets means seamless travel and personalized experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
