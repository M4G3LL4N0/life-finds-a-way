# Life Finds A Way — project memory (build notes)

## Startup identity

- **Name:** Life Finds A Way  
- **Positioning:** The operating system for biological survival beyond Earth.  
- **Headline:** Intelligence for life in impossible environments.  
- **Thesis:** AI platform to **design, simulate, and optimize** biological survival systems—food, water, air, waste, crops, medicine, habitat biology—for **space and extreme Earth** environments.

## Product vision

Coupled models over siloed dashboards: closed-loop life support, space agriculture, microgravity medicine / biomanufacturing, Earth resilience, and long-horizon terraforming **research** (grounded, not fantasy). MVP today is **narrative + architecture + demo concept UI**; not a certified flight simulator.

## Website / app structure

| Route | Purpose |
|-------|---------|
| `/` | Full venture homepage (hero → problem → solution → pillars → MVP demo → use cases → investor thesis → roadmap → manifesto → CTA) |
| `/investors` | Investor thesis + deck-ready storyline |
| `/platform` | Pillars, MVP modules, user flow |
| `/demo` | Full-width MVP demo concept layout |

**Data-driven content:** `content/*.ts` (brand, platform, use-cases, investor, demo-preview). **Site config:** `lib/site.ts`.

## Design direction

- Dark cinematic base, **oxygen cyan** + **bio green** + **muted amber** accents (no neon spam).  
- **IBM Plex** Serif / Sans / Mono via `next/font`.  
- Glass panels, thin borders, subtle motion (`motion-reduce` respected in diagram).  
- **Avoid:** crypto aesthetic, cartoon sci-fi, generic SaaS template, fake metrics as “live” data.

## What was built (this pass)

- Marketing shell (header/footer/skip link), homepage sections per spec, MVP demo **concept** component (static illustrative values, clearly labeled).  
- Optional routes `/investors`, `/platform`, `/demo`.  
- `AUTOBUILDER_FOUNDATION.json`, `.autobuilder/*`, this file.  
- SEO metadata and keywords in `app/layout.tsx`; `.env.example` for public URLs/email.

## Current build status

Run locally:

```bash
cd /Users/joshuadavis/startups/life-finds-a-way
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```

Last verification: run the commands above after pulls (Autobuilder should re-run `pnpm build` after meaningful edits).

## Manual deploy (founder)

Do **not** automate deploy from Autobuilder unless explicitly requested.

```bash
cd /Users/joshuadavis/startups/life-finds-a-way
pnpm install
pnpm build
vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` in Vercel project settings for correct metadata and mailto targets.

## Next best tasks

See `.autobuilder/next-actions.json` (prioritized). Short list: interactive demo prototype, OG image, waitlist capture, scenario JSON expansion, accessibility audit pass on demo controls when they become real inputs.

## Autobuilder guardrails

Read **`.autobuilder/guardrails.md`** and **`AUTOBUILDER_FOUNDATION.json`** before changing positioning, stack, or deleting foundation files. Do not ship fake customer claims or “live” telemetry without real backends.
