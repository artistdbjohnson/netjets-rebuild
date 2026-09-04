# Nia — Homepage transplant layout brief
Domain: UI/UX — Marketing rebuild. Motionsites seed: dark-liquid-glass-agency
HARD LOCK: restyle not rebrand. Exact Wren/live words only. Mobile-first. Off Hero.

## Stack order (after dark glass hero — Kit strip: jet + Request/Call Us only)
1. ContactUtility — CONTACT US + Request Information + +1.877.356.5823
2. Pinnacle — eybrows + H2 + body
3. CostTransparency — media | linked card
4. NewAircraft — linked card | media (swap on md+)
5. UnsurpassableLuxury — full-bleed band (media + type)
6. CorporateTravel — media | linked card
7. NetJetsVsOthers — linked card | media (swap on md+)
8. NewsLink — media + “See all NetJets News” only (no teaser)
9. ExplorePossibilities — Explore the Possibilities + dual CTA
10. ContactPhone — consult line + phone
11. Footer

## Type / spacing (Motionsites dark chassis)
| Token | Mobile (320–414) | sm+ | md+ |
|---|---|---|---|
| Section py | py-12 / pinnacle+explore py-16 | sm:py-16–24 | md:py-24–32 |
| Page px | px-5 | sm:px-6 | md:px-8 |
| Card pad | p-7 | sm:p-8 | md:p-10 |
| H2 editorial | text-[1.35rem] leading-[0.95] italic | sm:text-2xl | md:text-3xl lg:text-4xl |
| Pinnacle / Explore H2 | text-[1.75rem] leading-[0.92] | sm:text-4xl | md:text-5xl lg:text-6xl |
| Body | text-sm text-white/60 | sm:text-base | md:text-lg |
| Eyebrow | text-[11px] tracking-[0.14em] | sm:text-xs | — |
| CTA min-h | min-h-11 / min-h-12 | — | — |
| Media | aspect-[16/10] rounded-2xl ring-white/10 | — | — |

## Card craft
- Dark liquid plate: `rounded-2xl border border-white/10 bg-[#0a0a0b]/80 backdrop-blur-xl`
- Whole card is the link (no invented button labels)
- Alternating media|type / type|media on md+; media first on mobile always for scan

## Exact strings (Wren — do not change)
See `/workspace/wt/wren-copy/netjets-home-copy.md` sections H–K.
- Cost mobile breaks: COST TRANSPARENCY, / INVESTMENT, / CONFIDENCE
- No invented: Explore Pricing, Tour the Fleet, Business Solutions, Compare Services, news teasers

## Media wired (public/media/home/)
| Section | src |
|---|---|
| CostTransparency | /media/home/cost-transparency.jpg |
| NewAircraft | /media/home/new-aircraft.jpg |
| UnsurpassableLuxury | /media/home/unsurpassable-luxury.jpg (from midsize-maximized-ascend until Lux dedicated) |
| CorporateTravel | /media/home/corporate-travel.jpg |
| NetJetsVsOthers | /media/home/netjets-vs-others.jpg |
| NewsLink | /media/home/news.jpg (from safety-insights-hero until Lux dedicated) |

Lux originals also mirrored with long names in same folder.

## Chassis href map (note for Kit)
| Card | Wren live | Chassis now |
|---|---|---|
| Cost | /en-us/private-jet-cost-pricing | /rates |
| Aircraft | /en-us/compare-luxury-private-jets | /fleet |
| Corporate | /en-us/business-jet-travel | /private-aviation-solutions |
| Vs others | /en-us/private-aviation-services | /programs |
| News | /en-us/news | /news |
| Explore | request + tel | /request + tel:+18773565823 |

## Out of lane
- Hero.tsx / Nav.tsx — Kit only
- Copy invent / paraphrase — Wren only
- New stills — Lux (need dedicated luxury + news if CRO wants exact frames)
- No push to main

## Files touched (Nia)
`src/components/sections/*` (all 11 shells) — Motionsites spacing/type + exact strings + media srcs.
`page.tsx` composition already correct from Kit.
