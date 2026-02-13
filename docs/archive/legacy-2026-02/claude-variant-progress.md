# Claude Variant Implementation Progress

**Last Updated:** 2026-01-27
**Status:** In Progress (~85% complete)

---

## Summary

Implementing the Claude (Variant B) website following the "Curated Collector" design direction. This is a warm, editorial, gallery-like aesthetic for the WE3 agency website.

---

## Completed Tasks

### 1. Folder Structure ✅
Created the variant folder structure:
```
src/variants/claude/
├── layouts/
├── pages/
├── components/
├── styles/
└── lib/
```

### 2. Design Tokens & Styles ✅
**File:** `src/variants/claude/styles/global.css`

- Curated Collector color palette (warm beige, sage green, gold, terracotta, navy)
- Typography: Cormorant Garamond (display), Work Sans (body), IBM Plex Mono (accent)
- Spacing, shadows, border radius tokens
- Base component styles (buttons, cards, panels, forms, badges)
- Utility classes

### 3. Layout ✅
**File:** `src/variants/claude/layouts/ClaudeLayout.astro`

- Responsive navigation with mobile hamburger menu
- Footer with nav links, CTA, and variant switcher
- Google Fonts integration
- Skip link for accessibility
- Decorative stripe element

### 4. Pages Created ✅

| Page | File | Status |
|------|------|--------|
| Home | `src/variants/claude/pages/Home.astro` | ✅ Complete |
| Story | `src/variants/claude/pages/Story.astro` | ✅ Complete |
| Model | `src/variants/claude/pages/Model.astro` | ✅ Complete |
| Engagements | `src/variants/claude/pages/Engagements.astro` | ✅ Complete |
| Work | `src/variants/claude/pages/Work.astro` | ✅ Complete |
| Brief | `src/variants/claude/pages/Brief.astro` | ✅ Complete |
| Contact | `src/variants/claude/pages/Contact.astro` | ✅ Complete |

### 5. Brief Engine ✅
**File:** `src/variants/claude/lib/brief-engine.ts`

- 6-step prompt flow (problem, users, success criteria, constraints, budget, timeline)
- Gap detection rules (vague criteria, missing budget, timeline mismatch)
- Fit check calculation (engagement type, crew shape, cost band)
- Markdown and JSON export functions

### 6. Route Updated ✅
**File:** `src/pages/claude/index.astro`

- Updated to import from variant (was placeholder "Claude is thinking...")

---

## Remaining Tasks

### 1. Create Route Proxy Files 🔲
Need to create route files for all pages in `src/pages/claude/`:

```bash
# Files to create:
src/pages/claude/story.astro
src/pages/claude/model.astro
src/pages/claude/engagements.astro
src/pages/claude/work/index.astro
src/pages/claude/work/[slug].astro  # Dynamic route for case studies
src/pages/claude/brief.astro
src/pages/claude/contact.astro
```

Each route file follows this pattern:
```astro
---
import Page from "../../variants/claude/pages/PageName.astro";
---
<Page />
```

### 2. Case Study Dynamic Route 🔲
The Work page has placeholder case studies. Need to:
- Create `src/pages/claude/work/[slug].astro` for dynamic routing
- Either use content collections or create individual case study pages
- Add actual case study content to `/content/pages/claude/` or similar

### 3. Testing & Verification 🔲
Run the dev server and verify:
```bash
cd /Users/chadcribbins/Work/WE3io/_studio/agency-website/website
pnpm dev
```

Check:
- [ ] `/claude` - Home page loads
- [ ] `/claude/story` - Story page loads
- [ ] `/claude/model` - Model page loads
- [ ] `/claude/engagements` - Engagements page loads
- [ ] `/claude/work` - Work page loads
- [ ] `/claude/brief` - Brief builder is functional
- [ ] `/claude/contact` - Contact form works
- [ ] Navigation works between pages
- [ ] Mobile responsive
- [ ] Fonts load correctly

---

## Key Files Reference

### Styles
- **Global CSS:** `src/variants/claude/styles/global.css`
- **Design tokens reference:** `design-exploration/curated-collector.css`

### Layout
- **Main layout:** `src/variants/claude/layouts/ClaudeLayout.astro`

### Pages (all in `src/variants/claude/pages/`)
- `Home.astro` - Landing page with hero, model preview, engagements, values
- `Story.astro` - Full narrative, values grid, community section
- `Model.astro` - Three-layer team visualization, cost bands
- `Engagements.astro` - Four engagement modes with anchor links
- `Work.astro` - Case studies gallery (placeholder data)
- `Brief.astro` - Interactive brief builder with chat UI
- `Contact.astro` - Contact form, FAQ, contact options

### Logic
- **Brief engine:** `src/variants/claude/lib/brief-engine.ts`

### Routes (in `src/pages/claude/`)
- `index.astro` ✅ (updated)
- `story.astro` 🔲 (needs creation)
- `model.astro` 🔲 (needs creation)
- `engagements.astro` 🔲 (needs creation)
- `work/index.astro` 🔲 (needs creation)
- `work/[slug].astro` 🔲 (needs creation)
- `brief.astro` 🔲 (needs creation)
- `contact.astro` 🔲 (needs creation)

---

## Design Direction Notes

**"The Curated Collector" Aesthetic:**
- Warm, confident, curious, slightly unexpected
- Gallery/eclectic interior inspiration
- Ideas treated as objects in a collection
- Craft before cleverness

**Color Palette:**
- `--c-bg: #f6f1e8` (warm beige background)
- `--c-surface: #fffaf3` (warm white)
- `--c-accent: #3a7f65` (sage green - primary)
- `--c-accent-gold: #e4b96c` (gold highlights)
- `--c-accent-terracotta: #c0715a` (warmth)
- `--c-accent-navy: #435f9c` (depth)

**Typography:**
- Display: Cormorant Garamond (serif, editorial)
- Body: Work Sans (sans-serif, clean)
- Accent: IBM Plex Mono (monospace, technical)

---

## Commands to Resume

```bash
# Navigate to project
cd /Users/chadcribbins/Work/WE3io/_studio/agency-website/website

# Install dependencies (if needed)
pnpm install

# Run dev server
pnpm dev

# Visit Claude variant
open http://localhost:4321/claude
```

---

## Next Steps (Priority Order)

1. **Create remaining route files** - Quick task, just proxy files
2. **Test all pages** - Run dev server and click through
3. **Fix any styling issues** - Responsive, fonts, spacing
4. **Add real case study content** - Replace placeholder data
5. **Wire up contact form** - Currently client-side only

---

## Content Sources

- **Story content:** `docs/Small Teams for Big Challenges.md`
- **PRD:** `docs/WE3-PRD-v0.2.md`
- **Design brief:** `design-exploration/brief_the-curated-collector.md`
- **CSS reference:** `design-exploration/curated-collector.css`

---

## Notes for Next Session

- The Brief Builder uses inline JavaScript (not importing from brief-engine.ts) because Astro static builds don't support runtime TS imports in the same way. The logic is duplicated in the `<script>` tag of Brief.astro.
- Case studies in Work.astro are hardcoded placeholders - need to integrate with content collections or create actual case study pages.
- Contact form currently just logs to console and shows success message - needs real backend integration for production.
- The variant uses `class="variant-claude"` on body for CSS scoping, following the antigravity pattern.
