"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "How is NetJets different from charter?",
    a: "NetJets is structured ownership and access -- Share, Lease, or hour-based programs -- with a dedicated fleet, consistent crews, and guaranteed availability patterns. Charter is transactional flight-by-flight. The product is certainty, not a one-off booking.",
  },
  {
    q: "Do you publish rates?",
    a: "No fixed public rate card. Pricing is individualized from aircraft category, hours, geography, and structure. Owner Services builds a quote from how you actually fly.",
  },
  {
    q: "What aircraft are in the fleet?",
    a: "Light jets through ultra-long-range, including Phenom 300E, Citation Latitude, Challenger 350, and Global 7500 -- among others. Every aircraft is maintained to the same operational standard.",
  },
  {
    q: "Can I fly internationally?",
    a: "Yes. Long-range aircraft and operational support cover intercontinental missions with the same service standard as domestic legs.",
  },
  {
    q: "How do I get started?",
    a: "Request information or call Owner Services. The first step is mapping your travel pattern -- then the right structure follows.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">FAQ</p>
            <h1 className="max-w-3xl text-5xl font-normal tracking-tighter text-white md:text-6xl lg:text-7xl">
              Clear answers<br /><span className="text-white/55">before the call.</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/18">
                <h2 className="mb-3 text-base font-medium tracking-tight text-white">{item.q}</h2>
                <p className="text-sm leading-relaxed text-white/55">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
