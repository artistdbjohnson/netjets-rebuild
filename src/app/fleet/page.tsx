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
      "One of the most successful light jets in the sky -- agile, efficient, and refined.",
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

      <section className="scroll-mt-20 pt-32 pb-8 md:scroll-mt-24 md:pt-40 md:pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
              The Fleet
            </p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              Aircraft for
              <br />
              <span className="text-white/55">every mission.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              From light jets to the ultra-long-range Global 7500 -- every
              aircraft maintained to the same standard.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="fleet-flyover"
        className="scroll-mt-20 pb-10 md:scroll-mt-24 md:pb-12"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FleetFlyover />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {fleet.map((jet) => (
              <motion.article
                key={jet.name}
                variants={item}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all hover:border-white/18"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={jet.image}
                    alt={jet.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {jet.category}
                  </p>
                  <h2 className="mb-3 text-xl font-medium tracking-tight text-white">
                    {jet.name}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    {jet.description}
                  </p>
                  <div className="flex gap-6 text-xs text-white/40">
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
