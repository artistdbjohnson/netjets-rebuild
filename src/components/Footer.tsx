"use client";

import Logo from "./Logo";
import { footerData } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0b] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="mb-6 text-white" />
            <p className="mb-5 max-w-xs text-sm font-body font-light leading-relaxed text-white/60">{footerData.tagline}</p>
            <a href={footerData.phoneHref} className="block text-lg font-medium font-body tracking-tight text-white transition-colors hover:text-white/80">{footerData.phone}</a>
            <p className="mt-3 text-sm font-body font-light leading-relaxed text-white/45">{footerData.address}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-medium font-body uppercase tracking-wider text-white/40">Explore</h3>
            <ul className="space-y-3">{footerData.explore.map((item) => (<li key={item.name}><a href={item.href} className="text-sm font-body font-light text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-medium font-body uppercase tracking-wider text-white/40">Resources</h3>
            <ul className="space-y-3">{footerData.resources.map((item) => (<li key={item.name}><a href={item.href} className="text-sm font-body font-light text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-medium font-body uppercase tracking-wider text-white/40">Other Companies</h3>
            <ul className="space-y-3">{footerData.otherCompanies.map((c) => (<li key={c.name}><a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-body font-light text-white/70 transition-colors hover:text-white">{c.name}</a></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-medium font-body uppercase tracking-wider text-white/40">Legal</h3>
            <ul className="space-y-3">{footerData.legal.map((item) => (<li key={item.name}><a href={item.href} className="text-sm font-body font-light text-white/70 transition-colors hover:text-white">{item.name}</a></li>))}</ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs font-body font-light text-white/40">© {new Date().getFullYear()} NetJets Inc. All rights reserved.</p>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-6">
            <p className="text-xs font-body font-light text-white/40">NetJets is a Berkshire Hathaway company.</p>
            <a
              href="https://www.douglxss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body font-light text-white/40 transition-colors hover:text-white/70"
            >
              built by dglxss
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
