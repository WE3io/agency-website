# WE3 Website

Single-site Astro build. No variant system — one codebase, one output.

## Architecture

```
website/
  src/
    layouts/Layout.astro    — Shell: nav, footer, floating dock, scripts
    lib/site.ts             — Site config (logo variant, etc.)
    lib/brief-engine.ts     — Brief form logic
    pages/                  — Route files (.astro)
    styles/
      global.css            — Hand-authored styles
      tokens.generated.css  — Auto-generated from Style Dictionary
  astro.config.mjs          — publicDir: "../public"

../public/                  — Static assets (one level up, shared)
  images/logos/             — Logo SVG variants (claude.svg, warm.svg, ...)
  favicon.svg
```

## Key Systems

### Site Config (`src/lib/site.ts`)
Single source of truth for site-wide settings. Currently controls which logo variant is used:
```typescript
export const SITE = {
  logo: 'warm',   // change to 'claude' or any filename in public/images/logos/
} as const;
```
Layout.astro imports this and derives the logo path. Changing the value swaps nav and footer logos site-wide.

### Design Tokens (Style Dictionary)
Tokens are defined in `sd.config.js` and compiled to `src/styles/tokens.generated.css`:
```sh
pnpm run tokens:build
```

### Logo Variants
SVG logos live in `public/images/logos/`. Add a new variant by dropping an SVG there and updating `SITE.logo` in `src/lib/site.ts`.

Current variants:
- `warm` — Orange/yellow/red warm palette (default)
- `claude` — Retro purple (#662D91)

### Tools Pages
- `/style-guide` — Design system reference modal
- `/logo-iterator` — Logo iteration/generation tool

### Error Pages
- `404.astro` — Custom "not found" with inline SVG and drift animations
- `500.astro` — Custom "server error" with inline SVG and flicker animations

These use bespoke inline SVGs with their own animations — they are decorative art, not brand logos, and are independent of the logo variant system.

### Floating Nav Dock
A frosted-glass pill nav appears after 200px scroll. On desktop, it docks into the footer stripe with bar-pop contact animations. On mobile, it hides near the footer instead.

## Pages

| Route | File |
|-------|------|
| `/` | `index.astro` |
| `/story` | `story.astro` |
| `/model` | `model.astro` |
| `/engagements` | `engagements.astro` |
| `/work` | `work/index.astro` |
| `/contact` | `contact.astro` |
| `/brief` | `brief.astro` |
| `/tools` | `tools.astro` |
| `/style-guide` | `style-guide.astro` |
| `/logo-iterator` | `logo-iterator.astro` |

## Public Directory

Static assets live in `../public` relative to `website/`, configured in `astro.config.mjs` line 5:
```js
publicDir: "../public"
```

## Scripts

```sh
pnpm run dev          # Dev server (port 4321)
pnpm run build        # Production build → dist/
pnpm run preview      # Serve built site locally
pnpm run tokens:build # Regenerate design tokens
```
