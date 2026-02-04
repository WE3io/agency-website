# TODO — WE3 Agency Website

---

## Session Context

**Last Updated**: 2026-02-04

**Current Focus**: Restructuring TODO.md for AI collaboration and consolidating all tasks from investigation findings.

### Session Summary (4 Feb 2026)

#### Where we landed
v0 of the WE3 agency website is built and pushed to `gp-02-02-2026`. The site is a single Astro build (no variant system) with 12 pages, a design token pipeline (Style Dictionary), and a config-driven logo variant system.

#### What was done this session
- **Logo variant system** — SVG logos in `public/images/logos/` (`warm.svg`, `claude.svg`). Active variant controlled by `SITE.logo` in `src/lib/site.ts`. Layout.astro derives the path dynamically for nav and footer. One-line swap.
- **Velvet hover effect** — CSS filter on both logo `<img>` tags transitions to velvet (`#720A63`) on hover, using `var(--sys-motion-fast)`.
- **Archived dead files** — Old logo files (`we3-logo-claude.svg`, `we3-logo.svg`, `logo-placeholder.svg`) moved to `_archive/images/`. Old multi-variant `content/` directory moved to `_archive/content/`.
- **READMEs rewritten** — Root `README.md` updated (Vercel, page inventory, key systems). `website/README.md` replaced old A/B variant docs with current single-site architecture.
- **This TODO file** created to capture everything for the next phase.

#### Key context for next session
- **Site config**: `website/src/lib/site.ts` — single source of truth, currently just `logo: 'warm'`
- **Layout**: `website/src/layouts/Layout.astro` — shell for all pages (nav, footer, floating dock, scripts, cursor)
- **Tokens**: Generated via `pnpm run tokens:build` → `src/styles/tokens.generated.css`. 15 derived tokens are hand-written in `global.css` (stripes, glows, shadows). 17 bonus tokens exist in JSON but aren't consumed yet.
- **Content collections**: `src/content/config.ts` defines `pages` and `posts` schemas but nothing uses them yet. Goal is to wire up markdown-driven content so copy can be edited without touching components.
- **Body class**: `variant-claude` is hardcoded on `<body>` — controls the magnetic cursor. Doesn't follow `SITE.logo`. Decision needed.
- **Public dir**: `../public` relative to `website/`, set in `astro.config.mjs`
- **Archive**: `_archive/` at project root holds old content and images. Safe to ignore or delete.

---

## Current Focus

*No items currently in focus. Move tasks here when starting work.*

---

## Critical Priority

### Pre-Deploy

- [ ] Fix Vercel install command #task[id:task_01HQABCD1234EFGH5678IJKL status:to-do priority:critical created:2026-02-04]
  - **Location**: `vercel.json`
  - **Issue**: Uses `npm install` but project uses pnpm. Could break production build.
  - **Fix**: Update `installCommand` to `pnpm install` or remove to auto-detect from `pnpm-lock.yaml`
  - **Est**: 5 min

- [ ] **🔴 Human Input Required**: Set production site URL #task[id:task_01HQABCD1234EFGH5678IJKM status:to-do priority:critical created:2026-02-04]
  - **Location**: `website/astro.config.mjs` line 4
  - **Issue**: Hardcoded to `"http://localhost:4321"`. Affects canonical URLs and sitemap generation.
  - **Fix**: Change to production domain name
  - **Est**: 2 min (after domain provided)
  - **Human Input**: Decision - Requires actual production domain name

- [ ] Fix Dependabot vulnerabilities #task[id:task_01HQABCD1234EFGH5678IJKN status:to-do priority:critical created:2026-02-04]
  - **Location**: GitHub flagged 16 vulnerabilities (3 high, 11 moderate, 2 low)
  - **Issue**: Security vulnerabilities on default branch
  - **Fix**: Run `pnpm audit` and address high-severity ones before launch
  - **Est**: 30-60 min

- [ ] **🔴 Human Input Required**: Contact form backend API #task[id:task_01HQABCD1234EFGH5678IJKO status:to-do priority:critical created:2026-02-04]
  - **Location**: `website/src/pages/contact.astro` line 72
  - **Issue**: Form has no `action` attribute or submission handler. Comment says "in production, this would submit to an API"
  - **Fix**: Implement backend API endpoint + form submission handler
  - **Est**: 4-8 hours (after service selected)
  - **Human Input**: Decision - Choose service (Vercel serverless, Formspree, Netlify Forms, custom API)

---

## High Priority

### UX Fixes

- [ ] Mobile floating nav rendering #task[id:task_01HQABCD1234EFGH5678IJKP status:to-do priority:high created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` lines 935-942
  - **Issue**: Floating nav may overflow or break layout on mobile
  - **Fix**: Improve mobile responsive styles for floating nav
  - **Est**: 2-4 hours

- [ ] Contact form client-side handler #task[id:task_01HQABCD1234EFGH5678IJKQ status:to-do priority:high created:2026-02-04]
  - **Location**: `website/src/pages/contact.astro` line 72
  - **Issue**: Form has no client-side validation or submission handler
  - **Fix**: Add form submission handler with client-side validation
  - **Est**: 2-4 hours

- [ ] Safari cursor performance #task[id:task_01HQABCD1234EFGH5678IJKR status:to-do priority:high created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` lines 512, 539-550; `website/src/styles/global.css` lines 861-877
  - **Issue**: Cursor feels laggy/dragging on Safari. RAF + `translate3d` causes performance issues. Low LERP (0.15) makes cursor feel laggy.
  - **Fix**: Increase LERP to 0.25-0.3, add Safari detection and use `translate()` instead of `translate3d()`, add `will-change: transform` to cursor CSS, consider throttling RAF updates
  - **Est**: 2-4 hours

- [ ] Engagement fit cards links #task[id:task_01HQABCD1234EFGH5678IJKS status:to-do priority:high created:2026-02-04]
  - **Location**: `website/src/pages/engagements.astro` lines 275-297
  - **Issue**: Fit cards in "NOT SURE WHICH IS RIGHT FOR YOU?" section have no links - just badges
  - **Fix**: Add links to fit cards (likely to `/brief` or engagement sections)
  - **Est**: 2-4 hours

### Content

- [ ] British English spelling fixes #task[id:task_01HQABCD1234EFGH5678IJKT status:to-do priority:high created:2026-02-04]
  - **Location**: `website/src/pages/story.astro` lines 31, 262; `website/src/pages/model.astro` lines 278, 279
  - **Issue**: "organizations" → "organisations" (2 instances), "recognize/recognized" → "recognise/recognised" (2 instances)
  - **Fix**: Simple find/replace to British English spelling
  - **Est**: 5 min

---

## Medium Priority

### UX/Polish

- [ ] Button active state obfuscates text #task[id:task_01HQABCD1234EFGH5678IJKU status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/styles/global.css` lines 290-327
  - **Issue**: `:active` pseudo-class likely uses a dark background that hides text
  - **Fix**: Adjust `:active` state colors or add text color override
  - **Est**: 1-2 hours

- [ ] Content reveal timing sync #task[id:task_01HQABCD1234EFGH5678IJKV status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` line 467; `website/src/styles/global.css` line 476
  - **Issue**: Content reveal starts when stripe finishes (2.6s), but reveal takes 2.1s (longest stagger), so content finishes ~2.1s after stripe. They should finish together.
  - **Fix**: Start reveal earlier (~1.2s when stripe is ~50% done) or reduce transform duration to 1.0s and start at 1.6s
  - **Est**: 1-2 hours

- [ ] Floating nav icons #task[id:task_01HQABCD1234EFGH5678IJKW status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` lines 168-200
  - **Issue**: Floating nav is text-only, top nav has icons. Layout doesn't match.
  - **Fix**: Add icons to floating nav items (same structure as top nav)
  - **Est**: 2-4 hours

- [ ] Tool card buttons cursor #task[id:task_01HQABCD1234EFGH5678IJKX status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` line 555
  - **Issue**: Cursor selector may not include nested buttons properly. Buttons within tools cards don't work with magnetic pointer.
  - **Fix**: Update selector to properly target buttons inside `.tool-card`
  - **Est**: 1-2 hours

- [ ] View Source buttons #task[id:task_01HQABCD1234EFGH5678IJKY status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/pages/tools.astro` lines 47, 65
  - **Issue**: `href="#"` - placeholders, buttons don't work
  - **Fix**: Update hrefs to actual GitHub/source URLs
  - **Est**: 5 min

### Content

- [ ] **🔴 Human Input Required**: Replace placeholder case studies #task[id:task_01HQABCD1234EFGH5678IJKZ status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/pages/work/index.astro` lines 5-46
  - **Issue**: All 4 case studies are placeholder data. Comment says "Placeholder case studies - these would typically come from content collections"
  - **Fix**: Replace with real case study content. Consider Signals, AI-assisted builds, EdTech project.
  - **Est**: 4-8 hours (after content provided)
  - **Human Input**: Content - Requires writing/creating real case study content

- [ ] **🔴 Human Input Required**: Replace placeholder testimonial #task[id:task_01HQABCD1234EFGH5678IJL0 status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/pages/work/index.astro` line 239
  - **Issue**: "Sarah Chen, CTO, Fintech Startup (Series B)" — placeholder name
  - **Fix**: Replace with real testimonial or remove if not available
  - **Est**: 30 min (after content provided)
  - **Human Input**: Content/Approval - Requires real testimonial or decision to remove

- [ ] **🔴 Human Input Required**: Verify/update stats accuracy #task[id:task_01HQABCD1234EFGH5678IJL1 status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/pages/work/index.astro` lines 179-194
  - **Issue**: "50+ Projects", "12 Ventures", "95% Satisfaction", "3 Exits" — may be placeholders
  - **Fix**: Verify accuracy and update if needed
  - **Est**: 30 min (after verification)
  - **Human Input**: Verification - Requires human to verify stats are accurate

- [ ] **🔴 Human Input Required**: Currency decision #task[id:task_01HQABCD1234EFGH5678IJL2 status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/pages/contact.astro` lines 63-66, 192; `website/src/pages/brief.astro` lines 71, 574-578, 790-794
  - **Issue**: Uses $ instead of £ for British context. Examples: "$25k", "$75k", "$200k", "$500k"
  - **Fix**: Choose $ (international) or £ (British) and update all instances
  - **Est**: 30 min (after decision)
  - **Human Input**: Decision - Choose $ (international) or £ (British) and update all instances

### Infrastructure

- [ ] Token build in CI pipeline #task[id:task_01HQABCD1234EFGH5678IJL3 status:to-do priority:medium created:2026-02-04]
  - **Location**: Build pipeline
  - **Issue**: `pnpm run tokens:build` is manual. Generated CSS is committed. If tokens change, someone has to remember to regenerate.
  - **Fix**: Add `pnpm run tokens:build` before `astro build` or add pre-build script
  - **Est**: 30 min

- [ ] Open Graph/Twitter Card tags #task[id:task_01HQABCD1234EFGH5678IJL4 status:to-do priority:medium created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro`
  - **Issue**: No `og:title`, `og:description`, `og:image`, or Twitter Card meta tags. Social shares will render with defaults.
  - **Fix**: Add to `Layout.astro` props and head
  - **Est**: 2-4 hours

- [ ] Sitemap and robots.txt #task[id:task_01HQABCD1234EFGH5678IJL5 status:to-do priority:medium created:2026-02-04]
  - **Location**: Build output
  - **Issue**: Neither exists. Astro has a `@astrojs/sitemap` integration that generates both at build time.
  - **Fix**: Add `@astrojs/sitemap` integration to `astro.config.mjs`
  - **Est**: 1-2 hours

---

## Low Priority

### Polish

- [ ] Nav items equal width #task[id:task_01HQABCD1234EFGH5678IJL6 status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` lines 64-123
  - **Issue**: Nav links have variable widths based on text content
  - **Fix**: Add `min-width` or `width` to `.nav__link` or use flexbox with equal distribution
  - **Est**: 1-2 hours

- [ ] Duplicate path check #task[id:task_01HQABCD1234EFGH5678IJL7 status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` line 30
  - **Issue**: `currentPath === "/" || currentPath === "/"` — redundant check
  - **Fix**: Remove duplicate condition
  - **Est**: 1 min

### Architecture

- [ ] Iframe cursor handling #task[id:task_01HQABCD1234EFGH5678IJL8 status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` cursor script lines 500-587
  - **Issue**: Cursor script can't detect mouse events inside iframes (cross-origin limitation). Magnetic pointer doesn't work on iframes.
  - **Fix**: Detect iframe hover, disable cursor inside iframes, or use overlay approach
  - **Est**: 4-8 hours

- [ ] Iframe modal UX improvement #task[id:task_01HQABCD1234EFGH5678IJL9 status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/pages/tools.astro` lines 180-201
  - **Issue**: Tools page uses iframes in modals - not ideal UX. Modal with iframe loading `/style-guide` and `/logo-iterator`.
  - **Fix**: Consider replacing with direct navigation (no modal), use embed/component approach instead of iframe, or keep modal but improve mobile experience
  - **Est**: 4-8 hours

- [ ] View transitions #task[id:task_01HQABCD1234EFGH5678IJLA status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro`, `website/astro.config.mjs`
  - **Issue**: No view transition API usage found in codebase. Not implemented correctly.
  - **Fix**: Implement View Transitions API for smooth page transitions. Add `@astrojs/view-transitions` integration.
  - **Est**: 4-8 hours

### Future

- [ ] Self-host fonts #task[id:task_01HQABCD1234EFGH5678IJLB status:to-do priority:low created:2026-02-04]
  - **Location**: Font loading
  - **Issue**: Currently loading Inter, IBM Plex Mono, and League Gothic from Google Fonts. Self-hosting would eliminate external dependency and improve first-paint.
  - **Fix**: Download fonts and serve locally. Fonts are already preconnected, so this is a nice-to-have.
  - **Est**: 2-4 hours

- [ ] Environment variables setup #task[id:task_01HQABCD1234EFGH5678IJLC status:to-do priority:low created:2026-02-04]
  - **Location**: Project root
  - **Issue**: No `.env` or `.env.example`. Will need one before adding analytics, API keys, or per-environment config.
  - **Fix**: Create `.env.example` with template variables and document usage
  - **Est**: 30 min

- [ ] **🔴 Human Input Required**: Design token decisions - hand-written tokens #task[id:task_01HQABCD1234EFGH5678IJLD status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/styles/global.css`, `tokens/tokens.json`
  - **Issue**: 15 variables not in `tokens/tokens.json` are intentionally hand-authored in `global.css`: stripe gradients (`--s1`..`--s5`), stacked/repeating stripe backgrounds, warm glow, gold glow, shadow values. These are compositional — they combine primitives in ways that don't map cleanly to a flat token file.
  - **Fix**: Decide whether to leave them hand-written (current, works fine), promote them to a second token file (e.g. `tokens/derived.json`) with a custom Style Dictionary transform, or accept the split as a feature
  - **Est**: 1 hour (after decision)
  - **Human Input**: Decision - Hand-written tokens approach: leave as-is, promote to token file, or accept split

- [ ] **🔴 Human Input Required**: Design token decisions - unused tokens #task[id:task_01HQABCD1234EFGH5678IJLE status:to-do priority:low created:2026-02-04]
  - **Location**: `tokens/tokens.json`
  - **Issue**: Token JSON introduced z-index, breakpoint, and additional spacing/radius values that aren't yet consumed in CSS. They're harmless (generated but unused).
  - **Fix**: Decide whether to wire them into components as the design evolves or prune unused ones from the JSON to keep the token file honest
  - **Est**: 1 hour (after decision)
  - **Human Input**: Decision - Unused tokens approach: wire into components or prune from JSON

- [ ] **🔴 Human Input Required**: Site config decisions #task[id:task_01HQABCD1234EFGH5678IJLF status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/layouts/Layout.astro` line 51, `public/favicon.svg`
  - **Issue**: `variant-claude` body class is hardcoded on `<body>` — controls the magnetic cursor. Doesn't track `SITE.logo`. Favicon not tied to logo variant system.
  - **Fix**: Decide whether to make body class dynamic (`variant-${SITE.logo}`) so cursor and other variant styles follow the logo choice, or keep it pinned to `claude` if cursor behaviour is meant to persist regardless of logo. Decide favicon variant system approach.
  - **Est**: 2-4 hours (after decision)
  - **Human Input**: Decision - Make body class dynamic vs keep pinned to `claude`; favicon variant system approach

- [ ] Wire up Astro content collections as lightweight CMS #task[id:task_01HQABCD1234EFGH5678IJLG status:to-do priority:low created:2026-02-04]
  - **Location**: `website/src/content/config.ts`, `.astro` pages
  - **Issue**: `src/content/config.ts` already defines `pages` and `posts` collections with schemas but nothing uses them yet. Old markdown files archived to `_archive/content/` — they were from multi-variant era and don't match current site structure.
  - **Fix**: Create fresh markdown files in `src/content/pages/` matching current page inventory (story, model, engagements, work, contact, etc.). Refactor `.astro` pages to pull copy from `getCollection()` / `getEntry()` instead of hardcoding it. This turns the site into a markdown-driven CMS: update copy by editing `.md` files, no need to touch component code. The `work/index.astro` page is the best candidate to start with.
  - **Est**: 8-16 hours

- [ ] **🔴 Human Input Required**: Future ideas prioritization #task[id:task_01HQABCD1234EFGH5678IJLH status:to-do priority:low created:2026-02-04]
  - **Location**: Various
  - **Issue**: Multiple future ideas identified: logo variant dark-mode alternative, error pages (404/500) inline SVGs pulling colours from tokens, brief engine results in modal or dedicated page rather than just export
  - **Fix**: Prioritize which ideas to pursue
  - **Est**: Variable (after prioritization)
  - **Human Input**: Prioritization - Requires human to prioritize which future ideas to pursue

---

## Blocked/Waiting

*Tasks blocked by dependencies or awaiting human input. Move here when blocked.*

---

## Completed

*Completed tasks will be archived monthly to `TODO-archive-YYYY-MM.md`*

---

## Reference

- [Investigation Notes](cursor_branch_commit_comparison.md) - Detailed findings from branch comparison investigation
- [Issue Templates](.github/ISSUE_TEMPLATE/) - Bug and content request templates
- [Tracking System](.claude/commands/track.md) - Inline tracker syntax documentation
