type MediaFrameProps = {
  /** Public path, e.g. /media/home/cost-transparency-hero.jpg */
  src?: string;
  alt?: string;
  className?: string;
  label?: string;
};

/** Dark frame — image when src present, labeled placeholder otherwise */
export default function MediaFrame({
  src,
  alt = "",
  className = "",
  label,
}: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#121214] ring-1 ring-white/10 ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="aspect-[16/10] h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent"
          aria-hidden="true"
        >
          <span className="text-[10px] font-body uppercase tracking-[0.2em] text-white/25">
            {label ?? "media pending"}
          </span>
        </div>
      )}
    </div>
  );
}
