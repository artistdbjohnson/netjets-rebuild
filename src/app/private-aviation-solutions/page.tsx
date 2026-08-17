"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Solutions</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              Private aviation<br /><span className="text-white/55">solutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              Programs, fleet access, and services designed around real travel patterns -- not generic packages.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {["Share", "Lease", "Hour-based access"].map((title) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-white/18">
                <h2 className="mb-3 text-lg font-medium tracking-tight text-white">{title}</h2>
                <p className="text-sm leading-relaxed text-white/55">
                  Structured access to the NetJets fleet with the same safety and service standard across every program type.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="/programs" className="inline-flex rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
              Explore Programs
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
