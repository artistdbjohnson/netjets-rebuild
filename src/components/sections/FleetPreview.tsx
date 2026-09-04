"use client";

import { motion } from "framer-motion";

const jets = [
  {
    name: "Global 7500",
    category: "Ultra Long-Range",
    description:
      "The flagship. Unmatched cabin volume and range for the most demanding missions.",
    image: "/jets/global-7500-golden-hour.jpg",
  },
  {
    name: "Challenger 350",
    category: "Super-Midsize",
    description:
      "Performance and cabin comfort in a versatile super-midsize platform.",
    image: "/jets/challenger-350.jpg",
  },
  {
    name: "Citation Latitude",
    category: "Midsize",
    description:
      "Refined midsize capability with modern efficiency and range.",
    image: "/jets/citation-latitude.jpg",
  },
  {
    name: "Phenom 300E",
    category: "Light Jet",
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
          <div className="max-w-xl">
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">
              The Fleet
            </p>
            <h2 className="font-heading italic text-4xl tracking-tight leading-[0.9] text-white md:text-5xl lg:text-[3.75rem]">
              Aircraft for
              <br />
              <span className="text-white/60">every mission.</span>
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
          {jets.map((jet) => (
            <motion.a
              key={jet.name}
              href="/fleet"
              variants={item}
              className="group relative liquid-glass overflow-hidden rounded-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={jet.image}
                  alt={jet.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 p-6">
                <p className="mb-1 text-xs font-medium font-body uppercase tracking-wider text-white/40">
                  {jet.category}
                </p>
                <h3 className="mb-2 font-heading italic text-xl tracking-tight text-white">
                  {jet.name}
                </h3>
                <p className="text-sm font-body font-light leading-relaxed text-white/60">
                  {jet.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
