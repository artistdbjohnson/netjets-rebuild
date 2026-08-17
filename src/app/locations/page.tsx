"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Locations</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              A network<br /><span className="text-white/55">built for reach.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              Aircraft and support across a global network of fixed-base operators. The same standards whether the destination is domestic or international.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <h2 className="mb-3 text-lg font-medium tracking-tight text-white">North America</h2>
              <p className="text-sm leading-relaxed text-white/55">
                Extensive coverage across the United States and Canada, with access to primary airports and preferred FBOs throughout the network.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <h2 className="mb-3 text-lg font-medium tracking-tight text-white">International</h2>
              <p className="text-sm leading-relaxed text-white/55">
                Long-range aircraft and operational support for intercontinental missions, with consistent service standards beyond domestic borders.
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm text-white/40">
            For the full locations directory, see the official NetJets locations experience or speak with Owner Services.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
