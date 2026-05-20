# Xanthus × MEXC AI Brand

Take-home brand identity assignment for MEXC's AI sub-brand.

**Concept:** Xanthus — Achilles' immortal divine horse from the *Iliad*, granted the gift of prophetic speech to counsel his master. The original "AI advisor" in classical mythology. Greek Ξάνθος meaning *golden.*

**Casual form:** "X" (e.g., *"Hey X, what's BTC doing?"*)

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 4** — styling
- **Framer Motion** — IP character state animations
- **Lottie React** — After Effects export pipeline
- **Geist Sans / Mono** (Next.js default) + **Cormorant** (Google Font, classical serif placeholder for the Xanthus wordmark)

## Repo Structure

```
/app                    Next.js routes — live prototype pages
/components/brand       Xanthus mark, IP character, motion components
/lib                    Brand tokens (single source of truth for colors/fonts/motion)
/public/brand           Logo SVGs, brand asset exports
/public/motion          Lottie JSONs, looping MP4s
/design                 Source design files
  /figma                Working .fig files (gitignored if heavy)
  /after-effects        .aep projects
  /exports              PNG/PDF exports
/motion                 Motion source assets
  /lottie               JSON exports
  /video                MP4 / MOV renders
/research               Competitive research, mood board, screenshots
  /competitors          Aurora, Amy, Kia, GetAgent — competitor AI screens
  /moodboard            Visual references
/deck                   Final PDF deliverable
```

## Brand Tokens

Canonical values in `lib/brand-tokens.ts`. Import from there — never hardcode hexes.

```ts
import { colors, gradients, typography, motion } from "@/lib/brand-tokens";
```

**Color philosophy:** MEXC owns blue (Blue Ribbon `#1463FE` — the platform). Xanthus owns flame (the spark of prophecy, intelligence in motion). Always paired on every surface — flame in isolation disconnects the sub-brand from the master.

**Why flame, not gold:** Gold is wealth at rest. Fire is intelligence in motion. The moment Xanthus spoke prophecy to Achilles was a moment of *divine fire* — the spark of insight igniting, the Promethean flame of reason. An AI thinking is active, not static. The color story should match.

**MEXC's official palette:**
- Blue Ribbon `#1463FE` — primary brand blue
- Shakespeare `#509AD0` — secondary, softer blue
- Black `#000000`

## Development

```bash
npm run dev          # Local dev (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

## Deliverables Checklist

- [ ] Brand analysis report (PDF, `/deck`)
- [ ] AI brand IP extension — Idle, Generating, Output states
- [ ] Logo system — construction, variations, sizes
- [ ] Color system — full palette with usage rules
- [ ] Typography system
- [ ] Application mockups — splash, chat header, Services tile
- [ ] Motion preview — at minimum the Idle state (Lottie or MP4)
- [ ] Bilingual deck (中文 + English)

## Status

Naming locked: **Xanthus** (formal) / **X** (casual)
Visual system: in progress
Motion: pending
