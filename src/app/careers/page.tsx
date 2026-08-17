"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Careers</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              The people behind<br /><span className="text-white/55">the standard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              Flight operations, Owner Services, maintenance, and corporate teams -- held to the same standard that defines every flight.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-sm transition-colors hover:border-white/18 md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 text-2xl font-medium tracking-tight text-white">Open roles</h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/55">
              View current openings and apply through the official NetJets careers experience.
            </p>
            <a
              href="https://www.netjets.com/en-us/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-white/90"
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
