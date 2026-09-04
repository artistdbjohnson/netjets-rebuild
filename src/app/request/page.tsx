"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">Request Information</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              The conversation<br /><span className="text-[var(--ink-muted)]">starts here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-[var(--ink-muted)]">
              An Owner Services representative will map your travel pattern and recommend the structure that fits — without pressure, without a generic rate card.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-xl px-6 md:px-8">
          <div className="liquid-glass rounded-2xl p-8 md:p-10">
            <p className="mb-6 text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
              Call or reach out through the official NetJets request channel. The first step is understanding how you fly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+18773565823"
                className="inline-flex justify-center rounded-full bg-[var(--cta-bg)] px-8 py-3.5 text-sm font-semibold font-body text-[var(--cta-fg)] transition-colors hover:opacity-90"
              >
                Call +1.877.356.5823
              </a>
              <a
                href="https://www.netjets.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-semibold font-body text-[var(--ink)] transition-colors hover:bg-white/5"
              >
                Official NetJets Site
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
