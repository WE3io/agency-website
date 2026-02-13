# Phase 3: Improvement Opportunities — Findings

**Date:** 2026-02-12  
**Status:** Complete

## Summary

Prioritized improvements from TODO.md, architecture gaps, and design/UX alignment. Content collections and token decisions are the highest-leverage opportunities.

---

## From TODO.md

### Infrastructure

| Item | Priority | Effort | Notes |
|------|----------|--------|-------|
| Token build in CI | High | 30 min | Add `pnpm run tokens:build` before `astro build` in workflow |
| Sitemap and robots.txt | Medium | 1–2 hours | Add `@astrojs/sitemap` integration |
| Open Graph / Twitter Cards | Medium | 2–4 hours | Add og:title, og:description, og:image, twitter:card to Layout |
| Environment variables setup | Low | 30 min | Create `.env.example` for future analytics/API |

### Content

| Item | Priority | Effort | Notes |
|------|----------|--------|-------|
| Content collections wiring | High | 8–16 hours | Create `src/content/pages/` and `posts/`, refactor pages to use `getCollection()` |
| Replace placeholder case studies | Medium | 4–8 hours | Human input: real content |
| Replace placeholder testimonial | Medium | 30 min | Human input: real testimonial or remove |
| Verify stats accuracy | Medium | 30 min | Human input: verify "50+ Projects", "12 Ventures", etc. |
| Currency decision ($ vs £) | Medium | 30 min | Human input: choose $ or £ and update all |

### UX

| Item | Priority | Effort | Notes |
|------|----------|--------|-------|
| Button active state obfuscates text | Medium | 1–2 hours | Fix :active state in global.css |
| Floating nav icons | Medium | 2–4 hours | Add icons to match top nav |
| Tool card buttons cursor | Medium | 1–2 hours | Fix magnetic cursor selector for nested buttons |
| View Source buttons (tools page) | Low | 5 min | Replace href="#" with actual GitHub URLs |
| Duplicate path check | Low | 1 min | Layout.astro line 30 |
| Nav items equal width | Low | 1–2 hours | Optional polish |

---

## Architecture

### Content Collections

| Item | Detail |
|------|--------|
| **Current** | `src/content/config.ts` defines `pages` and `posts` schemas. Directories don't exist. Nothing uses them. |
| **Opportunity** | Wire up markdown-driven content. Start with `work/index.astro` (case studies). Copy edited via .md files, not components. |
| **Effort** | 8–16 hours |
| **Dependency** | Content strategy and copy |

### Design Tokens

| Item | Detail |
|------|--------|
| **Current** | 15 hand-written vars in global.css (stripes, glows, shadows). 17 tokens in JSON not consumed. |
| **Decision** | Leave as-is, promote to token file, or accept split. |
| **Opportunity** | Wire unused tokens into components as design evolves, or prune from JSON. |

### Site Config

| Item | Detail |
|------|--------|
| **Current** | `variant-claude` body class hardcoded. Doesn't track SITE.logo. Favicon not tied to logo variant. |
| **Decision** | Make body class dynamic (`variant-${SITE.logo}`) or keep pinned. Favicon variant approach. |

---

## Design and UX

### Style Guide V2 Alignment

| Item | Detail |
|------|--------|
| **Document** | [style-guide-v2-mission.md](../style-guide-v2-mission.md) |
| **Guidance** | Vinyl First, sparse accents, container rhythm, tokens.draft.json |
| **Current** | Site uses tokens.json. Some hand-written CSS. V2 tokens/file not present. |
| **Opportunity** | Audit components for "Harvest noise"; map to system.container tokens when tokens.draft.json exists |

### Brand Consistency

| Item | Detail |
|------|--------|
| **Document** | [todo-brand.md](../todo-brand.md) |
| **Placeholders** | Colour palette, typography, photography, iconography, motion, Open Graph image |
| **Current** | Tokens in use. No og-placeholder.png. |
| **Opportunity** | Fill placeholders; create og:image for social shares |

---

## Prioritization

**Quick wins (low effort):**
- Duplicate path fix (1 min)
- Token build in CI (30 min)
- View Source buttons (5 min)
- Remove broken TODO reference (1 min)

**High impact (medium effort):**
- Token build in CI
- Content collections (start with work page)
- Open Graph tags
- Sitemap integration

**Human input required:**
- Case study content
- Testimonial
- Stats verification
- Currency decision
- Token/site config decisions

---

## Next Phase

Proceed to Phase 4: Performance, Page Speed & Best Practices.
