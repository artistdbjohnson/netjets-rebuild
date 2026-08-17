"use client";

import Logo from "./Logo";
import { footerData } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0b] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="mb-6 text-white" />
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/60">{footerData.tagline}</p>
            <a href={footerData.phoneHref} className="block text-lg font-medium tracking-tight text-white transition-colors hover:text-white/80">{footerData.phone}</a>
            <p className="mt-3 text-sm leading-relaxed text-white/45">{footerData.address}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Explore</h3>
            <ul className="space-y-3">{footerData.explore.map((item) => (<li key={item.name}><a href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Resources</h3>
            <ul className="space-y-3">{footerData.resources.map((item) => (<li key={item.name}><a href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Other Companies</h3>
            <ul className="space-y-3">{footerData.otherCompanies.map((c) => (<li key={c.name}><a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 transition-colors hover:text-white">{c.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Legal</h3>
            <ul className="space-y-3">{footerData.legal.map((item) => (<li key={item.name}><a href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} NetJets Inc. All rights reserved.</p>
          <p className="text-xs text-white/35">NetJets is a Berkshire Hathaway company.</p>
        </div>
      </div>
    </footer>
  );
}
