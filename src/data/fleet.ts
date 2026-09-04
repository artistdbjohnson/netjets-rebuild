export type FleetJet = {
  slug: string;
  name: string;
  category: string;
  description?: string;
  exterior: string;
  /** Per-slug cabin still — async Lux drops: public/jets/<slug>-interior.jpg */
  interior: string;
};

export const featuredFleet: FleetJet[] = [
  {
    slug: "global-7500",
    name: "Bombardier Global 7500/8000",
    category: "Ultra Long-Range",
    exterior: "/jets/global-7500-golden-hour.jpg",
    interior: "/jets/global-7500-interior.jpg",
  },
  {
    slug: "challenger-350",
    name: "Bombardier Challenger 350/3500",
    category: "Super-Midsize",
    exterior: "/jets/challenger-350.jpg",
    interior: "/jets/challenger-350-interior.jpg",
  },
  {
    slug: "citation-latitude",
    name: "Cessna Citation Latitude",
    category: "Midsize",
    exterior: "/jets/citation-latitude.jpg",
    interior: "/jets/citation-latitude-interior.jpg",
  },
  {
    slug: "phenom-300e",
    name: "Embraer Phenom 300/E",
    category: "Light Jet",
    description:
      "NetJets’ legendary elegance and speed to virtually any airport or fixed-base operator (FBO).",
    exterior: "/jets/phenom-300e.jpg",
    interior: "/jets/phenom-300e-interior.jpg",
  },
];

/**
 * Additional types. When `exterior` (+ slug) is set, they promote to full flip cards.
 * Interior defaults to `/jets/<slug>-interior.jpg`.
 */
export type AdditionalFleetEntry =
  | string
  | {
      name: string;
      category?: string;
      slug?: string;
      exterior?: string;
      interior?: string;
      description?: string;
    };

export const additionalFleet: AdditionalFleetEntry[] = [
  {
    name: "Bombardier Global 5000/5500",
    category: "Large Cabin",
    slug: "global-5000-5500",
    exterior: "/jets/global-5000-5500.jpg",
  },
  {
    name: "Bombardier Global 6000",
    category: "Ultra Long-Range",
    slug: "global-6000",
    exterior: "/jets/global-6000.jpg",
  },
  {
    name: "Bombardier Challenger 650",
    category: "Large Cabin",
    slug: "challenger-650",
    exterior: "/jets/challenger-650.jpg",
  },
  {
    name: "Cessna Citation Longitude",
    category: "Super-Midsize",
    slug: "citation-longitude",
    exterior: "/jets/citation-longitude.jpg",
  },
  {
    name: "Cessna Citation XLS",
    category: "Midsize",
    slug: "citation-xls",
    exterior: "/jets/citation-xls.jpg",
  },
  {
    name: "Cessna Citation Ascend",
    category: "Midsize",
    slug: "citation-ascend",
    exterior: "/jets/citation-ascend.jpg",
  },
  {
    name: "Cessna Citation Sovereign",
    category: "Super-Midsize",
    slug: "citation-sovereign",
    exterior: "/jets/citation-sovereign.jpg",
  },
  {
    name: "Embraer Praetor 500",
    category: "Super-Midsize",
    slug: "praetor-500",
    exterior: "/jets/praetor-500.jpg",
  },
];

export const CABIN_INTERIOR_FALLBACK = "/jets/cabin-interior.jpg";

export function interiorPath(slug: string): string {
  return `/jets/${slug}-interior.jpg`;
}

export function promotedAdditionalFleet(): FleetJet[] {
  const out: FleetJet[] = [];
  for (const entry of additionalFleet) {
    if (typeof entry === "string") continue;
    if (!entry.slug || !entry.exterior) continue;
    out.push({
      slug: entry.slug,
      name: entry.name,
      category: entry.category ?? "Fleet",
      description: entry.description,
      exterior: entry.exterior,
      interior: entry.interior ?? interiorPath(entry.slug),
    });
  }
  return out;
}

export function chipAdditionalFleet(): string[] {
  return additionalFleet
    .map((entry) => {
      if (typeof entry === "string") return entry;
      if (entry.slug && entry.exterior) return null;
      return entry.name;
    })
    .filter((n): n is string => Boolean(n));
}
