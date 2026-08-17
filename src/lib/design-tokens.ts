export const colors = {
  royalBlue: "#1A73E8",
  shark: "#202124",
  nearBlack: "#0a0a0b",
  white: "#FFFFFF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",
} as const;

export const glass = {
  bg: "rgba(255, 255, 255, 0.06)",
  bgStrong: "rgba(255, 255, 255, 0.10)",
  bgDark: "rgba(10, 10, 11, 0.75)",
  border: "rgba(255, 255, 255, 0.12)",
  borderStrong: "rgba(255, 255, 255, 0.18)",
  blur: "20px",
  blurStrong: "28px",
  shadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
} as const;

export const brand = {
  name: "NetJets",
  phone: "+1.877.356.5823",
  phoneHref: "tel:+18773565823",
  address: "4151 Bridgeway Ave, Columbus, OH 43219",
  tagline: "World's Leading Private Jet Company",
} as const;

export const typography = {
  display: "font-normal tracking-tighter leading-none",
  heading: "font-semibold tracking-tight",
  body: "font-normal leading-relaxed",
  label: "text-sm font-semibold uppercase tracking-wider",
} as const;

export const spacing = {
  sectionY: "py-24 md:py-32",
  container: "mx-auto max-w-7xl px-6 md:px-8",
} as const;
