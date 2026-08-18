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
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
              The Fleet
            </p>
            <h2 className="text-4xl font-normal tracking-tighter text-white md:text-5xl lg:text-6xl">
              Aircraft for
              <br />
              <span className="text-white/60">every mission.</span>
            </h2>
          </div>
          <a
            href="/fleet"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            View Full Fleet
          </a>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {jets.map((jet) => (
            <motion.a
              key={jet.name}
              href="/fleet"
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all hover:border-white/15"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={jet.image}
                  alt={jet.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                  {jet.category}
                </p>
                <h3 className="mb-2 text-xl font-medium tracking-tight text-white">
                  {jet.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
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
