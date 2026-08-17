"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const programs = [
  {
    name: "NetJets Share",
    tagline: "Fractional Ownership",
    description:
      "Own a fraction of an aircraft. Guaranteed access, predictable costs, and the full NetJets experience -- without the capital weight of whole aircraft ownership.",
  },
  {
    name: "NetJets Lease",
    tagline: "Lease Programs",
    description:
      "The same elevated service and safety standards, structured for a defined term. Ideal when your horizon is clear but ownership is not the priority.",
  },
  {
    name: "25-Hour Programs",
    tagline: "Hour-Based Access",
    description:
      "Enter the fleet with a defined number of hours. The same aircraft, the same crews, the same standard -- calibrated for those who fly less often.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">Programs</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              Structures built<br /><span className="text-white/55">around how you fly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              Share, Lease, or hour-based access. Every program delivers the same fleet, crews, and service standard.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-white/18">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">{p.tagline}</p>
                <h2 className="mb-3 text-xl font-medium tracking-tight text-white">{p.name}</h2>
                <p className="text-sm leading-relaxed text-white/55">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/request" className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0b] transition-colors hover:bg-white/90">
              Request Information
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
