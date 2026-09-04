"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FleetFlyover from "@/components/fleet/FleetFlyover";

const fleet = [
  {
    name: "Bombardier Global 7500",
    category: "Ultra Long-Range",
    range: "7,700 nm",
    passengers: "Up to 19",
    description:
      "The flagship. Unmatched cabin volume and range for the most demanding missions.",
    image: "/jets/global-7500-golden-hour.jpg",
  },
  {
    name: "Bombardier Challenger 350",
    category: "Super-Midsize",
    range: "3,200 nm",
    passengers: "Up to 10",
    description:
      "Performance and cabin comfort in a versatile super-midsize platform.",
    image: "/jets/challenger-350.jpg",
  },
  {
    name: "Cessna Citation Latitude",
    category: "Midsize",
    range: "2,700 nm",
    passengers: "Up to 9",
    description:
      "Refined midsize capability with modern efficiency and range.",
    image: "/jets/citation-latitude.jpg",
  },
  {
    name: "Embraer Phenom 300E",
    category: "Light Jet",
    range: "2,010 nm",
    passengers: "Up to 11",
    description:
      "One of the most successful light jets in the sky — agile, efficient, and refined.",
    image: "/jets/phenom-300e.jpg",
  },
];

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
              The Fleet
            </p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-white md:text-6xl lg:text-7xl">
              Aircraft for
              <br />
              <span className="text-white/55">every mission.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-white/60">
              From light jets to the ultra-long-range Global 7500 — every
              aircraft maintained to the same standard.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="fleet-flyover"
        className="scroll-mt-20 pb-8 md:scroll-mt-24 md:pb-10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FleetFlyover />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {fleet.map((jet) => (
              <motion.article
                key={jet.name}
                variants={item}
                className="group liquid-glass overflow-hidden rounded-2xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={jet.image}
                    alt={jet.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative z-10 p-7">
                  <p className="mb-2 text-xs font-medium font-body uppercase tracking-wider text-white/40">
                    {jet.category}
                  </p>
                  <h2 className="mb-3 font-heading italic text-xl tracking-tight text-white">
                    {jet.name}
                  </h2>
                  <p className="mb-5 text-sm font-body font-light leading-relaxed text-white/60">
                    {jet.description}
                  </p>
                  <div className="flex gap-6 text-xs font-body font-light text-white/40">
                    <span>Range {jet.range}</span>
                    <span>{jet.passengers}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
