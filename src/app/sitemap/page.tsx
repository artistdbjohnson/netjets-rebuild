"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const links = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Fleet", href: "/fleet" },
  { label: "Rates", href: "/rates" },
  { label: "Benefits", href: "/benefits" },
  { label: "FAQ", href: "/faq" },
  { label: "Locations", href: "/locations" },
  { label: "Solutions", href: "/private-aviation-solutions" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Request", href: "/request" },
  { label: "Privacy", href: "/privacy-main" },
  { label: "CCPA", href: "/ccpa-privacy-policy" },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Nav variant="solid" />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex liquid-glass rounded-full px-3.5 py-1 text-xs font-medium font-body text-white">Sitemap</p>
            <h1 className="max-w-3xl font-heading italic text-5xl tracking-tight leading-[0.9] text-white md:text-6xl lg:text-7xl">
              Site map
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-body font-light text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
