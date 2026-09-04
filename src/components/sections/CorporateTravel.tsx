"use client";

import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";

/** Live: CORPORATE TRAVEL, PERFECTED */
export default function CorporateTravel() {
  return (
    <section className="relative bg-[#0a0a0b] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <MediaFrame
            src="/media/home/corporate-travel-perfected.jpg"
            alt="Corporate travel, perfected"
          />
        </motion.div>
        <motion.a
          href="/private-aviation-solutions"
          className="block liquid-glass rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="relative z-10 font-heading italic text-2xl tracking-tight text-white md:text-3xl lg:text-4xl">
            CORPORATE TRAVEL,
            <br />
            PERFECTED
          </h2>
          <p className="relative z-10 mt-4 text-base font-body font-light text-white/60 md:text-lg">
            Enhance your competitive edge
          </p>
        </motion.a>
      </div>
    </section>
  );
}
