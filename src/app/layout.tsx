import type { Metadata } from "next";
import { Instrument_Serif, Barlow } from "next/font/google";
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

export const metadata: Metadata = {
  title: "NetJets | World's Leading Private Jet Company",
  description: "NetJets is the world's leading private jet company. Explore fractional ownership, leases, and jet card programs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${barlow.variable} h-full antialiased`}>
      <head>
        {/* Raw Motionsites glass — bypasses lightningcss which drops unprefixed backdrop-filter */}
        <link rel="stylesheet" href="/liquid-glass.css" />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
