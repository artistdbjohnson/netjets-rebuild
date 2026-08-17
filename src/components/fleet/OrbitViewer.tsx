"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Global7500Scene = dynamic(() => import("./Global7500Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="h-9 w-9 animate-spin rounded-full border border-white/15 border-t-white/50" />
      <p className="text-xs uppercase tracking-wider text-white/30">Loading aircraft</p>
    </div>
  ),
});

export default function OrbitViewer() {
  return (
    <section className="relative bg-[#0a0a0b] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
            Global 7500
          </p>
          <h2 className="text-4xl font-normal tracking-tighter text-white md:text-5xl lg:text-6xl">
            Inspect the
            <br />
            <span className="text-white/60">aircraft.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/55">
            Orbit the proportions that define ultra-long-range. Drag to rotate.
            Scroll to zoom.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[21/10]">
            <Global7500Scene />
          </div>

          <div className="flex items-center justify-between border-t border-white/8 px-6 py-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Bombardier Global 7500 · 7,700 nm · 111 ft · GE Passport
            </p>
            <p className="hidden text-xs text-white/30 sm:block">
              Drag to orbit · Scroll to zoom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
