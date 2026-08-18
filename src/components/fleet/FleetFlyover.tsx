"use client";

import { useEffect, useRef, useState } from "react";

const FLYOVER_URL = "/video/imagine-flyover.mp4";
const HOLD_S = 2.8;
const FADE_MS = 2400;
const FADE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const SLIDESHOW = [
  { src: "/jets/global-7500-golden-side.jpg", alt: "Bombardier Global 7500 side profile over clouds", pos: "center 40%" },
  { src: "/jets/global-7500-golden-hour.jpg", alt: "Bombardier Global 7500 at golden hour", pos: "center 40%" },
  { src: "/jets/global-7500-reference.jpg", alt: "Bombardier Global 7500 over clouds", pos: "20% 40%" },
  { src: "/jets/challenger-350.jpg", alt: "Bombardier Challenger 350", pos: "center 40%" },
  { src: "/jets/citation-latitude.jpg", alt: "Cessna Citation Latitude", pos: "center 40%" },
  { src: "/jets/phenom-300e.jpg", alt: "Embraer Phenom 300E", pos: "center 40%" },
  { src: "/jets/cabin-interior.jpg", alt: "NetJets cabin interior", pos: "center 40%" },
  { src: "/jets/global-7500-side.jpg", alt: "Bombardier Global 7500 side profile", pos: "center 40%" },
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
    const el = videoRef.current;
    if (el) el.currentTime = 0;
  }, []);

  useEffect(() => {
    if (phase !== "stills") return;
    const delay = slideIndex < 3 ? 8000 : 5500;
    const timer = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, delay);
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
            poster="/jets/global-7500-golden-side.jpg"
        autoPlay
            muted
            playsInline
            onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.currentTime = 0;
            }}
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
              backgroundPosition: slide.pos,
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
