"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">About</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              The standard<br /><span className="text-white/55">the industry is measured against.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="grid gap-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-base leading-relaxed text-white/60">
                NetJets is the world's largest private jet company. Fractional ownership, lease programs, and hour-based access -- built on one foundation: a rigorously maintained fleet, expert crews, and service that treats every detail as non-negotiable.
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/60">
                From light jets to ultra-long-range aircraft, the experience stays consistent whether the mission is a short domestic leg or an intercontinental flight. Safety is the operating culture. Flexibility is the product.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-white/18">
              <h2 className="mb-4 text-lg font-medium tracking-tight text-white">At a glance</h2>
              <ul className="space-y-3 text-sm text-white/55">
                <li>• World's largest private jet fleet operator</li>
                <li>• A Berkshire Hathaway company</li>
                <li>• Headquarters in Columbus, Ohio</li>
                <li>• Global operations and international capability</li>
                <li>• Safety, service, and sustainability at the core</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
