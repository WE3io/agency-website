# TODO — Post v0 Launch

Items to revisit after the initial site launch. Nothing here is blocking v0.

---

## Session Summary (4 Feb 2026)

### Where we landed
v0 of the WE3 agency website is built and pushed to `gp-02-02-2026`. The site is a single Astro build (no variant system) with 12 pages, a design token pipeline (Style Dictionary), and a config-driven logo variant system.

### What was done this session
- **Logo variant system** — SVG logos in `public/images/logos/` (`warm.svg`, `claude.svg`). Active variant controlled by `SITE.logo` in `src/lib/site.ts`. Layout.astro derives the path dynamically for nav and footer. One-line swap.
- **Velvet hover effect** — CSS filter on both logo `<img>` tags transitions to velvet (`#720A63`) on hover, using `var(--sys-motion-fast)`.
- **Archived dead files** — Old logo files (`we3-logo-claude.svg`, `we3-logo.svg`, `logo-placeholder.svg`) moved to `_archive/images/`. Old multi-variant `content/` directory moved to `_archive/content/`.
- **READMEs rewritten** — Root `README.md` updated (Vercel, page inventory, key systems). `website/README.md` replaced old A/B variant docs with current single-site architecture.
- **This TODO file** created to capture everything for the next phase.

### Key context for next session
- **Site config**: `website/src/lib/site.ts` — single source of truth, currently just `logo: 'warm'`
- **Layout**: `website/src/layouts/Layout.astro` — shell for all pages (nav, footer, floating dock, scripts, cursor)
- **Tokens**: Generated via `pnpm run tokens:build` → `src/styles/tokens.generated.css`. 15 derived tokens are hand-written in `global.css` (stripes, glows, shadows). 17 bonus tokens exist in JSON but aren't consumed yet.
- **Content collections**: `src/content/config.ts` defines `pages` and `posts` schemas but nothing uses them yet. Goal is to wire up markdown-driven content so copy can be edited without touching components.
- **Body class**: `variant-claude` is hardcoded on `<body>` — controls the magnetic cursor. Doesn't follow `SITE.logo`. Decision needed.
- **Public dir**: `../public` relative to `website/`, set in `astro.config.mjs`
- **Archive**: `_archive/` at project root holds old content and images. Safe to ignore or delete.

---

## Pre-Deploy (do before first production deploy)

### Fix Vercel install command
`vercel.json` uses `npm install` but the project uses pnpm. Update `installCommand` to `pnpm install` or remove it entirely so Vercel auto-detects from `pnpm-lock.yaml`. **This could break the production build.**

### Set production site URL
`astro.config.mjs` line 4 is `site: "http://localhost:4321"`. Change to the real production domain before deploy. Affects canonical URLs and any future sitemap/RSS generation.

### Dependabot vulnerabilities
GitHub flagged 16 vulnerabilities (3 high, 11 moderate, 2 low) on the default branch. Run `pnpm audit` and address the high-severity ones before launch.

---

## Design Tokens

### Hand-written derived tokens (15 "missing" from JSON)
The 15 variables not in `tokens/tokens.json` are **intentionally hand-authored** in `global.css`: stripe gradients (`--s1`..`--s5`), the stacked/repeating stripe backgrounds, warm glow, gold glow, and shadow values. These are compositional — they combine primitives in ways that don't map cleanly to a flat token file. Decide later whether to:
- Leave them hand-written (current, works fine)
- Promote them to a second token file (e.g. `tokens/derived.json`) with a custom Style Dictionary transform
- Accept the split as a feature, not a bug

### Bonus tokens (17 extras from JSON)
The token JSON introduced z-index, breakpoint, and additional spacing/radius values that aren't yet consumed in CSS. They're harmless (generated but unused). Decide whether to:
- Wire them into components as the design evolves
- Prune unused ones from the JSON to keep the token file honest

---

## Site Config & Variant System

### `variant-claude` body class is hardcoded
`Layout.astro:51` has `<body class="variant-claude">`. This controls the custom magnetic cursor and any variant-specific CSS in `global.css`. It doesn't track `SITE.logo`. Decide:
- Make it dynamic (`variant-${SITE.logo}`) so cursor and other variant styles follow the logo choice
- Or keep it pinned to `claude` if the cursor behaviour is meant to persist regardless of logo

### Favicon not tied to logo variant system
`public/favicon.svg` is its own thing — a simplified WE3 mark. It could stay independent or eventually be generated per-variant. Low priority.

---

## SEO & Meta

### Open Graph / Twitter Card tags
No `og:title`, `og:description`, `og:image`, or Twitter Card meta tags. Social shares will render with defaults. Add to `Layout.astro` props and head.

### Astro site URL hardcoded to localhost
`astro.config.mjs` line 4: `site: "http://localhost:4321"`. Should be the production domain. Affects canonical URLs, sitemap generation, and any absolute URL helpers.

### Sitemap and robots.txt
Neither exists. Astro has a `@astrojs/sitemap` integration that generates both at build time.

---

## Build & Deploy

### Vercel config uses npm instead of pnpm
`vercel.json` specifies `npm install` but the project uses pnpm. May cause issues. Update `installCommand` to `pnpm install` or remove it and let Vercel auto-detect from the lockfile.

### Token build not in CI pipeline
`pnpm run tokens:build` is manual. Generated CSS is committed. If tokens change, someone has to remember to regenerate. Consider chaining it before `astro build` or adding a pre-build script.

---

## Content & Structure

### Wire up Astro content collections as a lightweight CMS
`src/content/config.ts` already defines `pages` and `posts` collections with schemas. The old markdown files have been archived to `_archive/content/` — they were from the multi-variant era and don't match the current site structure. The goal is to:
- Create fresh markdown files in `src/content/pages/` matching the current page inventory (story, model, engagements, work, contact, etc.)
- Refactor `.astro` pages to pull copy from `getCollection()` / `getEntry()` instead of hardcoding it
- This turns the site into a markdown-driven CMS: update copy by editing `.md` files, no need to touch component code
- The `work/index.astro` page is the best candidate to start with — it already has a comment noting case studies "would typically come from content collections"
- Posts collection could power a blog/insights section later

---

## Performance & Polish

### Self-host fonts
Currently loading Inter, IBM Plex Mono, and League Gothic from Google Fonts. Self-hosting would eliminate the external dependency and improve first-paint. Fonts are already preconnected, so this is a nice-to-have.

### Environment variables
No `.env` or `.env.example`. Will need one before adding analytics, API keys, or per-environment config.

---

## Future Ideas (not urgent)

- Logo variant could include a dark-mode alternative
- Error pages (404/500) inline SVGs could optionally pull colours from tokens for consistency, though their bespoke art direction is part of the charm
- Brief engine could surface results in a modal or dedicated results page rather than just export
- Work page could pull from a content collection for easier updates
