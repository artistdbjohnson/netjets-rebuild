"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const benefits = [
  { title: "Safety without compromise", description: "One of the most rigorous safety cultures in private aviation. Expert crews, continuous training, and a fleet maintained to the highest standard on every flight." },
  { title: "Access when it matters", description: "The scale of the world's largest private jet fleet means aircraft availability is not a hope — it is the product." },
  { title: "Programs built around you", description: "Share, Lease, or hour-based access. Every structure is designed around how you actually fly, not how a brochure wants you to." },
  { title: "Service that disappears", description: "Dedicated Owner Services, ground arrangements, and optional security so the only thing you notice is how little you have to think about." },
  { title: "Global reach", description: "Domestic or international — consistent service standards and operational support across the network." },
  { title: "Additional services", description: "Ground transportation, security, and concierge options can be arranged to keep the journey seamless door to door." },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">Benefits</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-white md:text-6xl lg:text-7xl">
              Why owners<br /><span className="text-white/55">choose NetJets.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-white/60">
              Safety, access, service, and flexibility — delivered consistently across every program and every flight.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="liquid-glass rounded-2xl p-8 transition-colors">
                <h2 className="mb-3 font-heading italic text-lg tracking-tight text-white">{b.title}</h2>
                <p className="text-sm font-body font-light leading-relaxed text-white/60">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
