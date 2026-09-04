"use client";

import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";

/** Live: 80+ NEW AIRCRAFT ARRIVING IN 2026 */
export default function NewAircraft() {
  return (
    <section className="relative bg-[#0a0a0b] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:px-8">
        <motion.a
          href="/fleet"
          className="order-2 block liquid-glass rounded-2xl p-8 md:order-1 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="relative z-10 font-heading italic text-2xl tracking-tight text-white md:text-3xl lg:text-4xl">
            80+ NEW AIRCRAFT ARRIVING IN 2026
          </h2>
          <p className="relative z-10 mt-4 text-base font-body font-light text-white/60 md:text-lg">
            Tour the growing, global NetJets fleet
          </p>
        </motion.a>
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <MediaFrame
            src="/media/home/fleet-tails-2026.jpg"
            alt="80+ new aircraft arriving in 2026"
          />
        </motion.div>
      </div>
    </section>
  );
}
