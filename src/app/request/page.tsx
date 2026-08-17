"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Request Information</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              The conversation<br /><span className="text-white/55">starts here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              An Owner Services representative will map your travel pattern and recommend the structure that fits -- without pressure, without a generic rate card.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-xl px-6 md:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
            <p className="mb-6 text-sm leading-relaxed text-white/55">
              Call or reach out through the official NetJets request channel. The first step is understanding how you fly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+18773565823"
                className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-white/90"
              >
                Call +1.877.356.5823
              </a>
              <a
                href="https://www.netjets.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
