# TODO — Post v0 Launch

Items to revisit after the initial site launch. Nothing here is blocking v0.

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
