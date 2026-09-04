"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FleetFlipCard from "@/components/fleet/FleetFlipCard";
import {
  chipAdditionalFleet,
  featuredFleet,
  promotedAdditionalFleet,
} from "@/data/fleet";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FleetPage() {
  const cards = [...featuredFleet, ...promotedAdditionalFleet()];
  const chips = chipAdditionalFleet();

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />

      <section className="scroll-mt-20 pt-28 pb-6 md:scroll-mt-24 md:pt-36 md:pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">
              EXPERIENCE THE LARGEST, MOST DIVERSE PRIVATE JET FLEET
            </p>
            <h1 className="max-w-4xl font-heading italic text-5xl tracking-tight leading-[0.9] text-white md:text-6xl lg:text-7xl">
              Increased Access To Luxury Private Jets
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-body font-light text-white/60">
              With NetJets, you gain on-demand access to our vast, versatile global fleet of luxury private jets, which we continually invest in. We thoughtfully purchase new aircraft and make forward-thinking enhancements to our existing jets. In 2026 we anticipate taking delivery of over 80 new private jets, increasing our already industry-leading access for Owners. That means you fly in consistent elegance on aircraft designed with you in mind. Tour the finest fleet—and compare our more than 10 aircraft types—to find your ideal private jet.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="/request"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold font-body text-black transition-colors hover:bg-white/90"
              >
                Request Information
              </a>
              <a
                href="tel:+18773565823"
                className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-semibold font-body text-white transition-colors hover:bg-white/5"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {cards.map((jet) => (
              <motion.div key={jet.slug} variants={item}>
                <FleetFlipCard
                  jet={jet}
                  showDescription
                  aspectClassName="aspect-[16/10]"
                />
              </motion.div>
            ))}
          </motion.div>

          {chips.length > 0 ? (
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {chips.map((name) => (
                  <div
                    key={name}
                    className="liquid-glass rounded-2xl px-5 py-5"
                  >
                    <h3 className="relative z-10 font-heading italic text-base tracking-tight text-white">
                      {name}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="/request"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold font-body text-black transition-colors hover:bg-white/90"
            >
              Request Information
            </a>
            <a
              href="tel:+18773565823"
              className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-semibold font-body text-white transition-colors hover:bg-white/5"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
