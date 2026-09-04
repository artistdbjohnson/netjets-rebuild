"use client";

import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type SyntheticEvent,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CABIN_INTERIOR_FALLBACK, type FleetJet } from "@/data/fleet";

export type FleetFlipCardProps = {
  jet: FleetJet;
  /** Show body copy under the model (fleet page). */
  showDescription?: boolean;
  /** Image aspect — preview uses 4/3, fleet page uses 16/10. */
  aspectClassName?: string;
  /** Padding density for chrome meta. */
  compact?: boolean;
  className?: string;
  /** Optional title link (e.g. home preview → /fleet). */
  titleHref?: string;
};

const spring = {
  type: "spring" as const,
  stiffness: 140,
  damping: 20,
  mass: 0.9,
};

function useFineHover(): boolean {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return fine;
}

/**
 * Liquid-glass inventory card: image area flips right→left (rotateY −180)
 * to reveal cabin. Chrome (glass shell + category/model/copy) stays put.
 */
export default function FleetFlipCard({
  jet,
  showDescription = false,
  aspectClassName = "aspect-[4/3]",
  compact = false,
  className = "",
  titleHref,
}: FleetFlipCardProps) {
  const reduceMotion = useReducedMotion();
  const fineHover = useFineHover();
  const labelId = useId();
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [interiorSrc, setInteriorSrc] = useState(jet.interior);
  const [showDarkPlaceholder, setShowDarkPlaceholder] = useState(false);

  useEffect(() => {
    setInteriorSrc(jet.interior);
    setShowDarkPlaceholder(false);
  }, [jet.interior]);

  const flipped = pinned || hovered;

  const togglePinned = useCallback(() => {
    setPinned((v) => !v);
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePinned();
      } else if (e.key === "Escape" && pinned) {
        e.preventDefault();
        setPinned(false);
      }
    },
    [pinned, togglePinned],
  );

  const onInteriorError = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      if (interiorSrc !== CABIN_INTERIOR_FALLBACK) {
        setInteriorSrc(CABIN_INTERIOR_FALLBACK);
        return;
      }
      setShowDarkPlaceholder(true);
      e.currentTarget.style.display = "none";
    },
    [interiorSrc],
  );

  const title = titleHref ? (
    <a
      href={titleHref}
      className="transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
      onClick={(e) => e.stopPropagation()}
    >
      {jet.name}
    </a>
  ) : (
    jet.name
  );

  return (
    <article
      className={`group/card liquid-glass rounded-2xl transition-all ${className}`.trim()}
    >
      <div
        className={`${aspectClassName} relative overflow-hidden bg-[#0a0a0b]`}
        style={{ perspective: reduceMotion ? undefined : 1200 }}
      >
        <button
          type="button"
          aria-pressed={flipped}
          aria-labelledby={labelId}
          aria-label={
            flipped
              ? `${jet.name} cabin interior — activate to show exterior`
              : `${jet.name} exterior — activate to show cabin interior`
          }
          onClick={togglePinned}
          onKeyDown={onKeyDown}
          onMouseEnter={() => {
            if (fineHover) setHovered(true);
          }}
          onMouseLeave={() => setHovered(false)}
          className="absolute inset-0 block h-full w-full cursor-pointer overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
        >
          {reduceMotion ? (
            <div className="absolute inset-0">
              <div
                className={`absolute inset-0 transition-opacity duration-200 ${
                  flipped ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
                aria-hidden={flipped}
              >
                <img
                  src={jet.exterior}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />
              </div>
              <div
                className={`absolute inset-0 transition-opacity duration-200 ${
                  flipped ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!flipped}
              >
                <CabinFace
                  src={interiorSrc}
                  showDarkPlaceholder={showDarkPlaceholder}
                  onError={onInteriorError}
                  category={jet.category}
                />
              </div>
            </div>
          ) : (
            <motion.div
              className="absolute inset-0 h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flipped ? -180 : 0 }}
              transition={spring}
              initial={false}
            >
              {/* Face A — exterior */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                aria-hidden={flipped}
              >
                <img
                  src={jet.exterior}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />
              </div>

              {/* Face B — cabin; local −180 pairs with parent −180 (R→L, no mirror) */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(-180deg)",
                }}
                aria-hidden={!flipped}
              >
                <CabinFace
                  src={interiorSrc}
                  showDarkPlaceholder={showDarkPlaceholder}
                  onError={onInteriorError}
                  category={jet.category}
                />
              </div>
            </motion.div>
          )}
        </button>
      </div>

      <div
        className={`relative z-10 ${compact ? "p-6" : "p-7"}`}
        id={labelId}
      >
        <p className="mb-1 text-xs font-medium font-body uppercase tracking-wider text-white/40">
          {jet.category}
        </p>
        <h3
          className={`font-heading italic tracking-tight text-white ${
            compact ? "mb-2 text-xl" : "mb-3 text-xl"
          }`}
        >
          {title}
        </h3>
        {showDescription && jet.description ? (
          <p className="text-sm font-body font-light leading-relaxed text-white/60">
            {jet.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function CabinFace({
  src,
  showDarkPlaceholder,
  onError,
  category,
}: {
  src: string;
  showDarkPlaceholder: boolean;
  onError: (e: SyntheticEvent<HTMLImageElement>) => void;
  category: string;
}) {
  return (
    <div className="relative h-full w-full bg-[#0c0c0e]">
      {showDarkPlaceholder ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-[#0a0a0b] to-[#121216]"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(26,115,232,0.06),transparent_50%)]" />
        </div>
      ) : (
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          onError={onError}
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3.5 pt-10">
        <p className="text-[11px] font-medium font-body uppercase tracking-[0.14em] text-white/70">
          Cabin
          <span className="mx-1.5 text-white/35" aria-hidden>
            ·
          </span>
          <span className="text-white/55">{category}</span>
        </p>
      </div>
    </div>
  );
}
