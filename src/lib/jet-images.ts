import { img_cabin_interior } from "./imgs/cabin_interior";
import { img_challenger_350 } from "./imgs/challenger_350";
import { img_citation_latitude } from "./imgs/citation_latitude";
import { img_global_7500_golden_hour } from "./imgs/global_7500_golden_hour";
import { img_global_7500_golden_side } from "./imgs/global_7500_golden_side";
import { img_global_7500_reference } from "./imgs/global_7500_reference";
import { img_global_7500_side } from "./imgs/global_7500_side";
import { img_phenom_300e } from "./imgs/phenom_300e";

export const jetImages = {
  "cabin-interior.jpg": img_cabin_interior,
  "challenger-350.jpg": img_challenger_350,
  "citation-latitude.jpg": img_citation_latitude,
  "global-7500-golden-hour.jpg": img_global_7500_golden_hour,
  "global-7500-golden-side.jpg": img_global_7500_golden_side,
  "global-7500-reference.jpg": img_global_7500_reference,
  "global-7500-side.jpg": img_global_7500_side,
  "phenom-300e.jpg": img_phenom_300e,
} as const;

export type JetImageName = keyof typeof jetImages;
