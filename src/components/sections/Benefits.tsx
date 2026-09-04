"use client";

import { motion } from "framer-motion";
import { Shield, Plane, LayoutGrid, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Safety without compromise",
    description:
      "One of the most rigorous safety cultures in private aviation. Expert crews, continuous training, and a fleet maintained to the highest standard on every flight.",
    icon: Shield,
  },
  {
    title: "Access when it matters",
    description:
      "The scale of the world's largest private jet fleet means aircraft availability is not a hope — it is the product.",
    icon: Plane,
  },
  {
    title: "Programs built around you",
    description:
      "Share, Lease, or hour-based access. Every structure is designed around how you actually fly, not how a brochure wants you to.",
    icon: LayoutGrid,
  },
  {
    title: "Service that disappears",
    description:
      "Dedicated Owner Services, ground arrangements, and optional security so the only thing you notice is how little you have to think about.",
    icon: Sparkles,
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
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">
            Why NetJets
          </p>
          <h2 className="font-heading italic text-4xl tracking-tight leading-[0.9] text-white md:text-5xl lg:text-6xl">
            Excellence in
            <br />
            <span className="text-white/60">every detail.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={item}
                className="group liquid-glass rounded-2xl p-8 transition-colors"
              >
                <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full liquid-glass-strong">
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="relative z-10 mb-3 font-heading italic text-lg tracking-tight text-white">
                  {b.title}
                </h3>
                <p className="relative z-10 text-sm font-body font-light leading-relaxed text-white/60">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
