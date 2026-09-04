"use client";

import { motion } from "framer-motion";
import { DollarSign, Plane, Briefcase, Scale } from "lucide-react";

const benefits = [
  {
    title: "COST TRANSPARENCY, INVESTMENT CONFIDENCE",
    description: "Explore premium programs with predictable pricing",
    href: "/rates",
    icon: DollarSign,
  },
  {
    title: "80+ NEW AIRCRAFT ARRIVING IN 2026",
    description: "Tour the growing, global NetJets fleet",
    href: "/fleet",
    icon: Plane,
  },
  {
    title: "CORPORATE TRAVEL, PERFECTED",
    description: "Enhance your competitive edge",
    href: "/private-aviation-solutions",
    icon: Briefcase,
  },
  {
    title: "NETJETS VS. OTHERS",
    description: "See why NetJets is the only choice in private travel",
    href: "/programs",
    icon: Scale,
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
    <section className="relative bg-[var(--bed)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">
            FROM THE PIONEER OF FRACTIONAL AIRCRAFT OWNERSHIP
          </p>
          <h2 className="font-heading italic text-4xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-5xl lg:text-6xl">
            THE PINNACLE OF PRIVATE TRAVEL
          </h2>
          <p className="mt-6 max-w-2xl text-base font-body font-light leading-relaxed text-[var(--ink-muted)] md:text-lg">
            Expect the world with NetJets—the leading fractional aircraft company offering superior solutions favored by the most discerning travelers. Our vast, versatile private jet fleet, operational excellence, and proven business model ensure seamlessness and stability that is unmatched. Only NetJets®, a proud Berkshire Hathaway company, empowers luxury travel on your terms, marked by our resolute commitment to the highest safety standards, personalized service, and global access.
          </p>
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
              <motion.a
                key={b.title}
                href={b.href}
                variants={item}
                className="group liquid-glass rounded-2xl p-8 transition-colors"
              >
                <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full liquid-glass-strong">
                  <Icon className="h-4 w-4 text-[var(--ink)]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="relative z-10 mb-3 font-heading italic text-lg tracking-tight text-[var(--ink)]">
                  {b.title}
                </h3>
                <p className="relative z-10 text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
                  {b.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-10 liquid-glass rounded-2xl px-8 py-7 md:px-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="relative z-10 mb-2 text-xs font-medium font-body uppercase tracking-wider text-[var(--ink-subtle)]">
            UNSURPASSABLE LUXURY
          </p>
          <p className="relative z-10 text-base font-body font-light text-[var(--ink-muted)] md:text-lg">
            Flying with NetJets means seamless travel and personalized experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
