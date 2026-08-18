"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FLYOVER_URL = "/video/imagine-flyover.mp4";

// Same inventory + timing as Hero — Motionsites stills craft, not a new language
const SLIDESHOW = [
  {
    src: "/jets/global-7500-golden-hour.jpg",
    alt: "Bombardier Global 7500 at golden hour",
  },
  {
    src: "/jets/global-7500-golden-side.jpg",
    alt: "Bombardier Global 7500 side profile over clouds",
  },
  {
    src: "/jets/challenger-350.jpg",
    alt: "Bombardier Challenger 350",
  },
  {
    src: "/jets/citation-latitude.jpg",
    alt: "Cessna Citation Latitude",
  },
  {
    src: "/jets/phenom-300e.jpg",
    alt: "Embraer Phenom 300E",
  },
  {
    src: "/jets/cabin-interior.jpg",
    alt: "NetJets cabin interior",
  },
  {
    src: "/jets/global-7500-side.jpg",
    alt: "Bombardier Global 7500 side profile",
  },
  {
    src: "/jets/global-7500-reference.jpg",
    alt: "Bombardier Global 7500 over clouds",
  },
] as const;

const SLIDE_MS = 5500;
const CROSSFADE_MS = 1800;

export default function ImagineFlyover() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [probed, setProbed] = useState(false);
  const [showStills, setShowStills] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function probe() {
      try {
        const res = await fetch(FLYOVER_URL, { method: "HEAD" });
        if (cancelled) return;
        if (res.ok) {
          setVideoSrc(FLYOVER_URL);
        } else {
          setShowStills(true);
        }
      } catch {
        if (!cancelled) setShowStills(true);
      } finally {
        if (!cancelled) setProbed(true);
      }
    }

    void probe();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!showStills) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [showStills]);

  const handoff = () => {
    setShowStills(true);
  };

  const failVideo = () => {
    setVideoSrc(null);
    setShowStills(true);
  };

  useEffect(() => {
    if (!showStills || !videoSrc) return;
    const t = window.setTimeout(() => setVideoSrc(null), CROSSFADE_MS);
    return () => window.clearTimeout(t);
  }, [showStills, videoSrc]);

  return (
    <section className="relative bg-[#0a0a0b] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/45">
            Global 7500
          </p>
          <h2 className="text-4xl font-normal tracking-tighter text-white md:text-5xl lg:text-6xl">
            Inspect the
            <br />
            <span className="text-white/60">aircraft.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/55">
            Orbit the proportions that define ultra-long-range. Drag to rotate.
            Scroll to zoom.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[21/10]">
            {videoSrc && (
              <video
                src={videoSrc}
                autoPlay
                muted
                playsInline
                onEnded={handoff}
                onError={failVideo}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out"
                style={{ opacity: showStills ? 0 : 1 }}
                aria-hidden="true"
              />
            )}

            <div
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: showStills ? 1 : 0 }}
            >
              {SLIDESHOW.map((slide, i) => (
                <div
                  key={slide.src}
                  className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
                  style={{
                    opacity: i === slideIndex ? 1 : 0,
                    backgroundImage: `url(${slide.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden={i !== slideIndex}
                  role="img"
                  aria-label={slide.alt}
                />
              ))}
            </div>

            {!probed && !showStills && !videoSrc && (
              <div className="absolute inset-0 bg-[#0a0a0b]" aria-hidden="true" />
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/8 px-6 py-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Bombardier Global 7500 · 7,700 nm · 111 ft · GE Passport
            </p>
            <p className="hidden text-xs text-white/30 sm:block">
              Drag to orbit · Scroll to zoom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

