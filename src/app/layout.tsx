import type { Metadata } from "next";
import { Instrument_Serif, Barlow, Work_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/* Closest free alternative to live GT Zirkon / NetJets wordmark — see FONT-NOTE.md */
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NetJets | World's Leading Private Jet Company",
  description: "NetJets is the world's leading private jet company. Explore fractional ownership, leases, and jet card programs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${barlow.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        {/* Raw Motionsites glass — bypasses lightningcss which drops unprefixed backdrop-filter */}
        <link rel="stylesheet" href="/liquid-glass.css" />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
