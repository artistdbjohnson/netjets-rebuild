type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const color = variant === "light" ? "text-white" : "text-[#202124]";
  return (
    <a href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`text-xl font-semibold tracking-tight ${color}`}>
        NetJets
      </span>
    </a>
  );
}
