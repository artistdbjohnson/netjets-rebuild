"use client";

import { useEffect, useState } from "react";

const FLYOVER_URL = "/video/imagine-flyover.mp4";

const SLIDESHOW = [
  { src: "/jets/global-7500-golden-hour.jpg", alt: "Bombardier Global 7500 at golden hour" },
  { src: "/jets/global-7500-golden-side.jpg", alt: "Bombardier Global 7500 side profile over clouds" },
  { src: "/jets/challenger-350.jpg", alt: "Bombardier Challenger 350" },
  { src: "/jets/citation-latitude.jpg", alt: "Cessna Citation Latitude" },
  { src: "/jets/phenom-300e.jpg", alt: "Embraer Phenom 300E" },
  { src: "/jets/cabin-interior.jpg", alt: "NetJets cabin interior" },
  { src: "/jets/global-7500-side.jpg", alt: "Bombardier Global 7500 side profile" },
  { src: "/jets/global-7500-reference.jpg", alt: "Bombardier Global 7500 over clouds" },
] as const;

export default function FleetFlyover() {
  const [hasVideo, setHasVideo] = useState(false);
  const [videoDone, setVideoDone] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function probe() {
      try {
        const res = await fetch(FLYOVER_URL, { method: "HEAD" });
        if (cancelled) return;
        if (res.ok || res.status === 405) setHasVideo(true);
        else setVideoDone(true);
      } catch {
        if (!cancelled) setVideoDone(true);
      }
    }
    void probe();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!videoDone) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [videoDone]);

  const failVideo = () => {
    setHasVideo(false);
    setVideoDone(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b]">
      <div className="relative aspect-[16/10] w-full md:aspect-[21/10]">
        {hasVideo && (
          <video
            src={FLYOVER_URL}
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoDone(true)}
            onError={failVideo}
            className="absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: videoDone ? 0 : 1 }}
            aria-hidden="true"
          />
        )}
        {SLIDESHOW.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{
              opacity: videoDone && i === slideIndex ? 1 : 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={!(videoDone && i === slideIndex)}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
    </div>
  );
}

