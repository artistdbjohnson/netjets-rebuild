"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">Careers</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              The people behind<br /><span className="text-[var(--ink-muted)]">the standard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-[var(--ink-muted)]">
              Flight operations, Owner Services, maintenance, and corporate teams — held to the same standard that defines every flight.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="liquid-glass rounded-2xl p-10 text-center transition-colors md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 font-heading italic text-2xl tracking-tight text-[var(--ink)]">Open roles</h2>
            <p className="mx-auto mb-8 max-w-lg text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
              View current openings and apply through the official NetJets careers experience.
            </p>
            <a
              href="https://www.netjets.com/en-us/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[var(--cta-bg)] px-8 py-3.5 text-sm font-semibold font-body text-[var(--cta-fg)] transition-colors hover:opacity-90"
            >
              View Careers at NetJets
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
