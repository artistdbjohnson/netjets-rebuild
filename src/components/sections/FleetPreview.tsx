"use client";

import { motion } from "framer-motion";
import FleetFlipCard from "@/components/fleet/FleetFlipCard";
import { featuredFleet } from "@/data/fleet";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FleetPreview() {
  return (
    <section className="relative bg-[#0a0a0b] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">
              EXPERIENCE THE LARGEST, MOST DIVERSE PRIVATE JET FLEET
            </p>
            <h2 className="font-heading italic text-4xl tracking-tight leading-[0.9] text-white md:text-5xl lg:text-[3.75rem]">
              Increased Access To Luxury Private Jets
            </h2>
          </div>
          <a
            href="/fleet"
            className="relative z-10 liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium font-body text-white transition-colors hover:bg-white/5"
          >
            View Full Fleet
          </a>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featuredFleet.map((jet) => (
            <motion.div key={jet.slug} variants={item}>
              <FleetFlipCard
                jet={jet}
                compact
                aspectClassName="aspect-[4/3]"
                titleHref="/fleet"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
