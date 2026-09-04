type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Wordmark: Work Sans italic caps — free stand-in for GT Zirkon / custom NetJets mark.
 * See FONT-NOTE.md. Do not self-host GT-Zirkon without a Grilli Type license.
 */
export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const color = variant === "light" ? "text-white" : "text-[#202124]";
  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="NetJets home"
    >
      <span
        className={`font-logo text-[1.05rem] font-medium italic uppercase leading-none tracking-[0.14em] sm:text-lg ${color}`}
      >
        Net
        <span className="logo-j">J</span>
        ets
      </span>
    </a>
  );
}
