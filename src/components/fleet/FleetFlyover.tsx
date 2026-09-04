"use client";

import { useEffect, useRef, useState } from "react";

const FLYOVER_URL = "/video/imagine-flyover.mp4";
const HOLD_S = 2.8;
const FADE_MS = 2400;
const FADE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const SLIDESHOW = [
  {
    src: "/jets/global-7500-golden-side.jpg",
    alt: "Bombardier Global 7500 side profile over clouds",
    pos: "center 40%",
  },
  {
    src: "/jets/global-7500-reference.jpg",
    alt: "Bombardier Global 7500 over clouds",
    pos: "20% 10%",
  },
] as const;

type Phase = "clip" | "dissolve" | "stills";

export default function FleetFlyover() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("clip");
  const [slideIndex, setSlideIndex] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPhase("stills");
  }, []);

  useEffect(() => {
    if (phase !== "stills") return;
    const timer = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [phase, slideIndex]);

  useEffect(() => {
    if (phase === "clip") return;
    const timer = setTimeout(() => setBaseIndex(slideIndex), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase, slideIndex]);

  useEffect(() => {
    if (phase !== "dissolve") return;
    const timer = setTimeout(() => setPhase("stills"), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const startDissolve = () => {
    setPhase((prev) => (prev === "clip" ? "dissolve" : prev));
  };

  const finishToStills = () => setPhase("stills");

  const onVideoError = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const mediaError = event.currentTarget.error;
    if (!mediaError || mediaError.code === MediaError.MEDIA_ERR_ABORTED) return;
    finishToStills();
  };

  const onTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.currentTime >= HOLD_S) startDissolve();
  };

  const showStills = phase !== "clip";
  const videoOpacity = phase === "stills" ? 0 : 1;

  return (
    <div className="relative overflow-hidden liquid-glass rounded-2xl bg-[#0a0a0b]">
      <div className="relative aspect-[3/2] w-full">
        <video
          ref={videoRef}
          src={FLYOVER_URL}
          poster="/video/imagine-flyover-poster.jpg"
          autoPlay
          muted
          playsInline
          preload="metadata"
          onTimeUpdate={onTimeUpdate}
          onEnded={finishToStills}
          onError={onVideoError}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: videoOpacity,
            objectPosition: "center 40%",
            transition: `opacity ${FADE_MS}ms ${FADE_EASE}`,
          }}
          aria-hidden="true"
        />
        {SLIDESHOW.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: showStills && (i === slideIndex || i === baseIndex) ? 1 : 0,
              zIndex: i === slideIndex ? 2 : i === baseIndex ? 1 : 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: slide.pos,
              transition: i === slideIndex ? `opacity ${FADE_MS}ms ${FADE_EASE}` : "none",
            }}
            aria-hidden={!(showStills && i === slideIndex)}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
