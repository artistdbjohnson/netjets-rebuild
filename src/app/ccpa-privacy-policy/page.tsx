"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CCPAPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">CCPA</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              California privacy<br /><span className="text-white/55">notice.</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-white/55">
              California Consumer Privacy Act disclosures are maintained on the official NetJets site.
            </p>
            <a href="https://www.netjets.com/en-us/ccpa-privacy-policy" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-medium text-white/80 underline-offset-4 hover:underline">
              View official CCPA Privacy Policy
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
