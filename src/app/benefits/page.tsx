"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "COST TRANSPARENCY, INVESTMENT CONFIDENCE",
    description: "Explore premium programs with predictable pricing",
    href: "/rates",
  },
  {
    title: "80+ NEW AIRCRAFT ARRIVING IN 2026",
    description: "Tour the growing, global NetJets fleet",
    href: "/fleet",
  },
  {
    title: "CORPORATE TRAVEL, PERFECTED",
    description: "Enhance your competitive edge",
    href: "/private-aviation-solutions",
  },
  {
    title: "NETJETS VS. OTHERS",
    description: "See why NetJets is the only choice in private travel",
    href: "/about",
  },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">
              Benefits
            </p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              THE PINNACLE OF PRIVATE TRAVEL
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-body font-light text-[var(--ink-muted)]">
              Expect the world with NetJets—the leading fractional aircraft company offering superior solutions favored by the most discerning travelers. Our vast, versatile private jet fleet, operational excellence, and proven business model ensure seamlessness and stability that is unmatched. Only NetJets®, a proud Berkshire Hathaway company, empowers luxury travel on your terms, marked by our resolute commitment to the highest safety standards, personalized service, and global access.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <a
                key={b.title}
                href={b.href}
                className="liquid-glass rounded-2xl p-8 transition-colors hover:bg-white/[0.03]"
              >
                <h2 className="mb-3 font-heading italic text-lg tracking-tight text-[var(--ink)]">{b.title}</h2>
                <p className="text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">{b.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="liquid-glass rounded-2xl p-8 md:p-10">
            <h2 className="font-heading italic text-2xl tracking-tight text-[var(--ink)] md:text-3xl">
              UNSURPASSABLE LUXURY
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-body font-light text-[var(--ink-muted)] md:text-base">
              Flying with NetJets means seamless travel and personalized experiences.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
