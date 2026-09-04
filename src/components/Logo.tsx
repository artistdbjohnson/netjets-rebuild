type LogoProps = {
  className?: string;
  variant?: "light" | "dark" | "theme";
  themeAware?: boolean;
};

export default function Logo({ className = "", variant = "light", themeAware = false }: LogoProps) {
  const effective = themeAware ? "theme" : variant;
  const color =
    effective === "theme"
      ? "text-[var(--logo-ink)]"
      : effective === "light"
        ? "text-white"
        : "text-[#262524]";
  return (
    <a href="/" className={`inline-flex items-center ${className}`} aria-label="NetJets home">
      <span className={`font-logo text-[1.05rem] font-medium italic uppercase leading-none tracking-[0.14em] sm:text-lg ${color}`}>
        Net<span className="logo-j">J</span>ets
      </span>
    </a>
  );
}
