"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">Solutions</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              Private aviation<br /><span className="text-[var(--ink-muted)]">solutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-[var(--ink-muted)]">
              Programs, fleet access, and services designed around real travel patterns — not generic packages.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {["Share", "Lease", "Hour-based access"].map((title) => (
              <div key={title} className="liquid-glass rounded-2xl p-8 transition-colors">
                <h2 className="mb-3 font-heading italic text-lg tracking-tight text-[var(--ink)]">{title}</h2>
                <p className="text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
                  Structured access to the NetJets fleet with the same safety and service standard across every program type.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="/programs" className="inline-flex liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium font-body text-[var(--ink)] transition-colors hover:bg-white/5">
              Explore Programs
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
