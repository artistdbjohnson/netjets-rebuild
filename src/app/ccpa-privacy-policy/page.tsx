"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CCPAPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">CCPA</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              California privacy<br /><span className="text-[var(--ink-muted)]">notice.</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="liquid-glass rounded-2xl p-8">
            <p className="text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
              California Consumer Privacy Act disclosures are maintained on the official NetJets site.
            </p>
            <a href="https://www.netjets.com/en-us/ccpa-privacy-policy" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-medium text-[var(--ink-soft)] underline-offset-4 hover:underline">
              View official CCPA Privacy Policy
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
