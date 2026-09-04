import type { Metadata } from "next";
import { Instrument_Serif, Barlow, Work_Sans } from "next/font/google";
import { THEME_FOUC_SCRIPT } from "@/lib/theme";
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

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NetJets | World's Leading Private Jet Company",
  description:
    "World's largest private jet company offering fractional aircraft ownership, private jet leases, and jet card programs. A Berkshire Hathaway company.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${instrumentSerif.variable} ${barlow.variable} ${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_FOUC_SCRIPT }} />
        <link rel="stylesheet" href="/liquid-glass.css" />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
