"use client";

/** CONTACT US utility — Wren exact. */
export default function ContactUtility() {
  return (
    <section
      aria-label="Contact utility"
      className="relative border-b"
      style={{ background: "var(--contact-bar)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-3.5 sm:flex-row sm:items-center sm:px-6 md:px-8">
        <p
          className="text-[11px] font-body font-medium uppercase tracking-[0.18em] sm:text-xs"
          style={{ color: "var(--contact-ink-muted)" }}
        >
          CONTACT US
        </p>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href="/request"
            className="inline-flex min-h-11 items-center justify-center rounded-full liquid-glass px-4 py-2.5 pr-5 text-[11px] font-medium font-body uppercase tracking-wider transition-opacity hover:opacity-90 sm:min-h-0 sm:text-xs"
            style={{ color: "var(--contact-ink)" }}
          >
            Request Information
          </a>
          <a
            href="tel:+1.877.356.5823"
            className="text-xs font-body font-medium tracking-wide transition-opacity hover:opacity-100"
            style={{ color: "var(--contact-ink)" }}
          >
            +1.877.356.5823
          </a>
        </div>
      </div>
    </section>
  );
}
