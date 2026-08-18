"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Safety without compromise",
    description:
      "One of the most rigorous safety cultures in private aviation. Expert crews, continuous training, and a fleet maintained to the highest standard on every flight.",
  },
  {
    title: "Access when it matters",
    description:
      "The scale of the world's largest private jet fleet means aircraft availability is not a hope -- it is the product.",
  },
  {
    title: "Programs built around you",
    description:
      "Share, Lease, or hour-based access. Every structure is designed around how you actually fly, not how a brochure wants you to.",
  },
  {
    title: "Service that disappears",
    description:
      "Dedicated Owner Services, ground arrangements, and optional security so the only thing you notice is how little you have to think about.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
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

export default function Benefits() {
  return (
    <section className="relative bg-[#0a0a0b] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
            Why NetJets
          </p>
          <h2 className="text-4xl font-normal tracking-tighter text-white md:text-5xl lg:text-6xl">
            Excellence in
            <br />
            <span className="text-white/60">every detail.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
            >
              <h3 className="mb-3 text-lg font-medium tracking-tight text-white">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
