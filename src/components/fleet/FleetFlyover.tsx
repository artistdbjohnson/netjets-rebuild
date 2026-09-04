"use client";

const FLYOVER_URL = "/video/imagine-flyover.mp4";
const POSTER = "/video/imagine-flyover-poster.jpg";

export default function FleetFlyover() {
  return (
    <div className="relative liquid-glass rounded-2xl bg-[var(--bed)]">
      <div className="relative aspect-[3/2] w-full">
        <img
          src={POSTER}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <video
          src={FLYOVER_URL}
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
