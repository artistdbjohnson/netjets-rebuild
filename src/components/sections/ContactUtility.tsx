"use client";

/**
 * CONTACT US utility strip — Wren exact strings only.
 */
export default function ContactUtility() {
  return (
    <section
      aria-label="Contact utility"
      className="relative border-b border-white/10 bg-[#0a0a0b]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-4 sm:flex-row sm:items-center md:px-8">
        <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-white/45">
          CONTACT US
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/request"
            className="liquid-glass rounded-full px-4 py-2 text-xs font-medium font-body uppercase tracking-wider text-white transition-colors hover:bg-white/5"
          >
            REQUEST INFORMATION
          </a>
          <a
            href="tel:+18773565823"
            className="text-xs font-body font-medium tracking-wide text-white/80 transition-colors hover:text-white"
          >
            +1.877.356.5823
          </a>
        </div>
      </div>
    </section>
  );
}
