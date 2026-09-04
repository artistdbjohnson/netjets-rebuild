"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-[var(--bed)]">
      <Nav variant="solid" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-[var(--ink)]">
              Rates & Pricing
            </p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-[var(--ink)] md:text-6xl lg:text-7xl">
              Access is the
              <br />
              <span className="text-[var(--ink-muted)]">product.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-body font-light text-[var(--ink-muted)]">
              There is no rate card. Every structure is built from how you fly --
              aircraft, hours, geography, and the services that remove friction
              from the journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.06 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="liquid-glass rounded-2xl p-8 transition-colors"
            >
              <h2 className="mb-4 font-heading italic text-xl tracking-tight text-[var(--ink)]">
                What determines cost
              </h2>
              <ul className="space-y-3 text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
                <li>• Structure — Share, Lease, or hour-based access</li>
                <li>• Aircraft category and cabin volume</li>
                <li>• Annual hours and peak-day demand</li>
                <li>• Domestic versus international focus</li>
                <li>• Ground transport, security, and concierge</li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="liquid-glass rounded-2xl p-8 transition-colors"
            >
              <h2 className="mb-4 font-heading italic text-xl tracking-tight text-[var(--ink)]">
                How the quote is formed
              </h2>
              <p className="mb-6 text-sm font-body font-light leading-relaxed text-[var(--ink-muted)]">
                Owner Services maps your actual travel pattern, then designs
                the most efficient structure. The number is confidential,
                specific, and built around certainty — not a brochure.
              </p>
              <a
                href="/request"
                className="inline-flex rounded-full bg-[var(--cta-bg)] px-7 py-3 text-sm font-semibold font-body text-[var(--cta-fg)] transition-colors hover:opacity-90"
              >
                Request a Quote
              </a>
            </motion.div>
          </motion.div>

          <p className="mt-12 max-w-2xl text-sm font-body font-light text-[var(--ink-subtle)]">
            NetJets does not publish fixed public rates. Pricing is
            individualized. The conversation begins with your schedule.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
