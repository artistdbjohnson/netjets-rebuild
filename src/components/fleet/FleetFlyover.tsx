"use client";

import { useEffect, useRef, useState } from "react";

const FLYOVER_URL = "/video/imagine-flyover.mp4";
const HOLD_S = 2.8;
const FADE_MS = 2400;
const FADE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const SLIDESHOW = [
  { src: "/jets/global-7500-golden-side.jpg", alt: "Bombardier Global 7500 side profile over clouds" },
  { src: "/jets/global-7500-golden-hour.jpg", alt: "Bombardier Global 7500 at golden hour" },
  { src: "/jets/global-7500-reference.jpg", alt: "Bombardier Global 7500 over clouds" },
  { src: "/jets/challenger-350.jpg", alt: "Bombardier Challenger 350" },
  { src: "/jets/citation-latitude.jpg", alt: "Cessna Citation Latitude" },
  { src: "/jets/phenom-300e.jpg", alt: "Embraer Phenom 300E" },
  { src: "/jets/cabin-interior.jpg", alt: "NetJets cabin interior" },
  { src: "/jets/global-7500-side.jpg", alt: "Bombardier Global 7500 side profile" },
] as const;

type Phase = "clip" | "dissolve" | "stills";

export default function FleetFlyover() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(false);
  const [phase, setPhase] = useState<Phase>("clip");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function probe() {
      try {
        const res = await fetch(FLYOVER_URL, { method: "HEAD" });
        if (cancelled) return;
        if (res.ok || res.status === 405) setHasVideo(true);
        else setPhase("stills");
      } catch {
        if (!cancelled) setPhase("stills");
      }
    }
    void probe();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPhase("stills");
  }, []);

  useEffect(() => {
    if (phase !== "stills") return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const hold = setTimeout(() => {
      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
      }, 5500);
    }, 8000);
    return () => {
      clearTimeout(hold);
      if (interval) clearInterval(interval);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "dissolve") return;
    const timer = setTimeout(() => setPhase("stills"), FADE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const startDissolve = () => {
    setPhase((prev) => (prev === "clip" ? "dissolve" : prev));
  };

  const finishToStills = () => setPhase("stills");

  const failVideo = () => {
    setHasVideo(false);
    setPhase("stills");
  };

  const onTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.currentTime >= HOLD_S) startDissolve();
  };

  const showStills = phase !== "clip";
  const videoOpacity = phase === "stills" ? 0 : 1;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b]">
      <div className="relative aspect-[3/2] w-full">
        {hasVideo && (
          <video
            ref={videoRef}
            src={FLYOVER_URL}
            autoPlay
            muted
            playsInline
            onTimeUpdate={onTimeUpdate}
            onEnded={finishToStills}
            onError={failVideo}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: videoOpacity,
              objectPosition: "center 40%",
              transition: `opacity ${FADE_MS}ms ${FADE_EASE}`,
            }}
            aria-hidden="true"
          />
        )}
        {SLIDESHOW.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: showStills && i === slideIndex ? 1 : 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              transition: `opacity ${FADE_MS}ms ${FADE_EASE}`,
            }}
            aria-hidden={!(showStills && i === slideIndex)}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
    </div>
  );
}
