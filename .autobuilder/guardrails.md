# Autobuilder guardrails — Life Finds A Way

## What this startup is

- An **AI platform** for **biological survival systems** in **extreme environments** (space habitats, lunar/Mars contexts, closed-loop life support, harsh Earth agriculture, microgravity medicine / biomanufacturing, terraforming **research**).
- Positioned as the **operating system for biological survival beyond Earth**, with **dual-use** credibility (Earth analogs + flight paths).

## What it is not

- Not crypto, not space tourism marketing fluff, not a generic “AI SaaS” productivity clone.  
- Not a marketplace for random farm products.  
- Not claiming **flight certification**, **fake customers**, or **live mission telemetry** without real integrations.

## Public positioning

- **Premium, scientific, cinematic, investor-grade.**  
- Honest about MVP: **simulation architecture and narrative first**; engine and sensors are phased.  
- Demo metrics must read as **illustrative** unless backed by real data pipelines.

## Do not expose

- Internal Autobuilder automation secrets, private founder data, unreleased partner names, or credentials.  
- “Internal only” roadmaps that contradict public `AUTOBUILDER_FOUNDATION.json` without an explicit update to both.

## Do not delete

- `app/`, `components/`, `lib/`, `content/`, `public/` assets in use, `package.json`, `pnpm-lock.yaml`, configs, `.env.example`, `RECOVERY_NOTES.md`, `AUTOBUILDER_FOUNDATION.json`, `.autobuilder/*`.

## Do not drift toward

- Generic chatbot wrappers, crypto aesthetics, cartoon sci-fi HUDs, over-neon palettes, fake enterprise clutter, or **terraforming fantasy** without scientific framing.

## Safe improvements

- Copy polish, typography tuning, responsive fixes, SEO, performance, expanding **data-driven** content files, improving **demo UI** while keeping values honest, accessibility fixes.

## Risky improvements

- Adding **auth**, **database**, or **heavy animation libs** without a concrete product reason.  
- Changing **core identity** or tone without founder alignment.  
- Removing or splitting foundation files without replacement.

## Build rules

- **pnpm only** (no npm).  
- Run **`pnpm build`** after meaningful source changes.  
- **Deploy:** manual `vercel --prod` only unless explicitly instructed otherwise.  
- Keep **dependencies lean**; justify new packages in RECOVERY_NOTES or PR description.
