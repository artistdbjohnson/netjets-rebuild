# Logo / brand font note

## Live site (netjets.com)
- UI / marketing typeface: **GT Zirkon** (Grilli Type) via `@font-face` WOFF2 under `/static/GT-Zirkon-*.woff2`.
- Confirmed from https://www.netjets.com/en-us HTML (inline `@font-face`, family `'GT-Zirkon'`).
- **License:** commercial (Grilli Type). We do **not** self-host or pirate these files.

## Wordmark
- Official NetJets logotype is custom lettering (italic all-caps sans, distinctive long **J** descender) — not a retail cut we can legally redistribute.
- Closest free Google Font stand-in for the live GT Zirkon brand sans + wordmark slant: **Work Sans** (OFL), italic, medium weight, all-caps, modest tracking.
- Applied as `--font-logo` / `font-logo` on header wordmarks (`Logo.tsx` → Hero + Nav).
- The capital **J** is wrapped (`.logo-j`) with slight vertical scale so the descender reads closer to the legacy mark.

## If NetJets supplies a webfont license later
- Drop licensed WOFF2 into `public/fonts/`, wire `@font-face` in `globals.css`, and swap `--font-logo` to that family.
