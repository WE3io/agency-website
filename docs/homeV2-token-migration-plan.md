# Token Migration Plan: Primitives-First Cleanup

**Date:** February 4, 2026
**Status:** Draft — Awaiting Review
**Goal:** Build a proper 3-tier token system (`reference → system → component`), then update `global.css` to replace every hardcoded value with token-backed CSS custom properties. Keep the V1 structure and layout — just swap primitives and clean the plumbing.

---

## 1. What Changed From the Previous Plan

The previous plan proposed a separate `HomeV2.astro` and a new "Vinyl-First" visual direction. That's been scrapped. Instead:

- **No new pages.** We update `global.css` in place. The V1 Home structure stays.
- **No dramatic visual overhaul.** The site should still feel like itself, just driven by proper tokens instead of hardcoded hex values.
- **3-tier token architecture.** Following the structure from `latestproject.tokens.json`: `reference` (primitives) → `system` (semantics) → `component` (specific elements).
- **StyleGuideV2 stripped back.** The token draft has been reduced to core primitives only — no system layer yet. We need to build that out.

---

## 2. The Primitives We Have

From the updated `tokens/tokens.draft.json`:

### Neutral Pathway (light → dark, 6 stops)
| Token | Value | Role |
|:---|:---|:---|
| `neutral.linen` | `color-mix(in srgb, #F4EAD0, #FFF 60%)` | Effective white. Page background. |
| `neutral.bone` | `color-mix(in srgb, #F4EAD0, #FFF 30%)` | Light surface. Cards, panels. |
| `neutral.vanilla` | `#F4EAD0` | Base warm. Alt surfaces. |
| `neutral.studio-clay` | `color-mix(in srgb, #F4EAD0, #E2C397 50%)` | Mid / transitional. Section alternates, hover bg. |
| `neutral.cork` | `#E2C397` | Warm structure. Borders, dividers. |
| `neutral.ink` | `#29004B` | Effective black. Text, structural. |

### Primitive Spectrum (accent + action)
| Token | Value | Role |
|:---|:---|:---|
| `primitive.surf` | `#5BA79C` | Subtle accent — form elements, data numbers |
| `primitive.harvest` | `#FEBE27` | Subtle accent — form elements, data numbers |
| `primitive.sunset` | `#FF6B33` | Secondary CTA |
| `primitive.rocket` | `#EF2337` | Primary CTA |
| `primitive.punch` | `#D02365` | Motion accent |
| `primitive.velvet` | `#720A63` | Interaction highlight (cursor, hover, focus) |

### Spacing
| Token | Value |
|:---|:---|
| `spacing.xs` | 9px |
| `spacing.sm` | 15px |
| `spacing.md` | 24px |
| `spacing.lg` | 30px |
| `spacing.xl` | 48px |
| `spacing.xxl` | 66px |

### Radius (new values — larger than V1)
| Token | Value | V1 was |
|:---|:---|:---|
| `radius.sm` | 15px | 8px |
| `radius.md` | 30px | 14px |
| `radius.lg` | 60px | 18px |
| `radius.full` | 999px | 999px |

### Typography (families + scale already aligned)
- Display: `League Gothic` — headlines, big numbers
- Body: `Inter` — body, UI, labels
- Mono: `IBM Plex Mono` — technical
- Scale: 12 / 15 / 18 / 24 / 48 / 72 / 110 px

### Motion (already aligned)
- Fast: 150ms ease
- Base: 220ms ease
- Slow: 350ms ease

---

## 3. Neutral Pathway — Resolved

Studio-Clay is a single token: `color-mix(in srgb, #F4EAD0, #E2C397 50%)` — the midpoint between Vanilla and Cork. Already in `tokens.draft.json`. This gives us 6 neutral stops with no gaps.

**Surface mapping with Studio-Clay:**
| Surface Role | Current CSS Var | Token |
|:---|:---|:---|
| Page background | `--c-bg` | `neutral.linen` |
| Card / panel fill | `--c-surface` | `neutral.bone` |
| Alt section background | `--c-surface-2` | `neutral.vanilla` |
| Hover / transitional bg | (new) | `neutral.studio-clay` |
| Borders / dividers | `--c-border` | `neutral.cork` |
| Text / structural | `--c-text` | `neutral.ink` |

---

## 4. The Variable Mapping: Current → Token

This is the core of the work. Every `--c-*` / `--space-*` / `--radius-*` / `--text-*` variable in `global.css` gets remapped to a token primitive.

### Colors

| Current CSS Var | Current Value | Maps To | New Value | Notes |
|:---|:---|:---|:---|:---|
| `--color-bg-cream` | `#F7F3E9` | `ref.neutral.linen` | `color-mix(#F4EAD0, #FFF 60%)` | Linen = effective white |
| `--c-bg` | `var(--color-bg-cream)` | `sys.surface.pageBackground` → linen | same | Semantic alias |
| `--c-surface` | `#fffaf3` | `sys.surface.cardFill` → `ref.neutral.bone` | `color-mix(#F4EAD0, #FFF 30%)` | Cards, panels |
| `--c-surface-2` | `#f0ebe0` | `sys.surface.altFill` → `ref.neutral.vanilla` | `#F4EAD0` | Alt section bg |
| (new: hover bg) | — | `sys.surface.hoverFill` → `ref.neutral.studio-clay` | `color-mix(#F4EAD0, #E2C397 50%)` | Transitional / hover |
| `--c-text` | `#1A1A1B` | `sys.color.onSurface` → `ref.neutral.ink` | `#29004B` | Vinyl as text |
| `--c-muted` | `#6e6961` | `sys.color.onSurfaceMuted` → `color-mix(ink, vanilla 55%)` | derived | See note below |
| `--c-border` | `#d7cfc2` | `sys.surface.border` → `ref.neutral.cork` | `#E2C397` | Cork = structural border |
| `--c-accent` | `#d96b5a` (coral) | **Drops.** Usage splits: | | See breakdown below |
| `--c-accent-gold` | `#e9b146` | `ref.primitive.harvest` | `#FEBE27` | Subtle accent |
| `--c-accent-terracotta` | `#c0715a` | **Drops.** | | Redundant with coral |
| `--c-accent-navy` | `#4a6aa5` | **Drops.** | | Not in palette |
| `--c-cta` / `--c-action-3` | `#E04E39` | `sys.color.actionPrimary` → `ref.primitive.rocket` | `#EF2337` | Primary CTA |
| `--c-action-2` | `#EC8844` | `sys.color.actionSecondary` → `ref.primitive.sunset` | `#FF6B33` | Secondary CTA |
| `--c-action-1` | `#F8D572` | `sys.color.actionTertiary` → `ref.primitive.harvest` | `#FEBE27` | |
| `--c-action-4` | `#BC3D78` | `ref.primitive.punch` | `#D02365` | Motion accent |
| `--c-action-5` | `#7F2F6C` | `ref.primitive.velvet` | `#720A63` | Interaction layer |
| `--c-button-text` | `#fdfbf7` | `sys.color.onAction` → `ref.neutral.linen` | linen | Light text on action buttons |
| `--retro-*` (s1–s5) | various | Harvest, Sunset, Rocket, Punch, Velvet | direct swap | Stripe + decorative |
| `--glow-sage` | `rgba(92,42,43,0.18)` | Derive from Velvet or Punch | | Backdrop gradient |
| `--glow-gold` | `rgba(228,185,108,0.12)` | Derive from Harvest | `rgba(254,190,39,0.12)` | Backdrop gradient |

#### Where Coral Usage Goes

Coral (`#d96b5a`) is currently `--c-accent` and appears in:
- **Link color** (`a { color: var(--c-accent) }`) → swap to **Ink** (links as structural text, underline on hover)
- **Emphasis text** (`.problem-statement__lead em`, `.values-list li strong`) → swap to **Surf** or **Ink bold**
- **Engagement card numbers** (`.engagement-card__number`) → swap to **Harvest** (chunky number accent)
- **Model card icons** (`.model-card__icon`) → swap to **Surf**
- **Badge accent** (`.badge--accent`) → swap to **Surf**
- **CTA graphic card** (`.cta-graphic-card--3 background`) → swap to **Rocket** (it's a CTA)
- **Form focus ring** → swap to **Velvet**

#### Iconography Colors

| Icon Context | Color | Token |
|:---|:---|:---|
| Default / structural | Ink | `sys.color.onSurface` |
| Informational accent | Surf | `sys.color.accentSubtle` |
| Decorative accent | Harvest | `sys.color.accentBrand` |
| Interactive / clickable | Velvet | `sys.color.highlight` |
| On action buttons | Linen | `sys.color.onAction` |
| On dark surfaces | Bone | `ref.neutral.bone` |

Surf and Harvest are the two sparse accent colors — used sparingly on icons to maintain impact. Rocket and Punch stay reserved for CTAs and motion respectively; they don't appear on icons.

#### Muted Text

No direct "muted" primitive exists. Recommendation: define it in the system layer as a `color-mix`:
```css
--sys-color-onSurfaceMuted: color-mix(in srgb, var(--ref-neutral-ink), var(--ref-neutral-vanilla) 55%);
```
This gives a warm muted purple-brown that's on-brand. If it doesn't look right, we tune the mix percentage.

### Spacing

| Current CSS Var | Current Value | Maps To | New Value |
|:---|:---|:---|:---|
| `--space-xs` | `0.5rem` (8px) | `ref.spacing.xs` | 9px |
| `--space-sm` | `1rem` (16px) | `ref.spacing.sm` | 15px |
| `--space-md` | `1.5rem` (24px) | `ref.spacing.md` | 24px ✓ |
| `--space-lg` | `2rem` (32px) | `ref.spacing.lg` | 30px |
| `--space-xl` | `3rem` (48px) | `ref.spacing.xl` | 48px ✓ |
| `--space-2xl` | `4rem` (64px) | `ref.spacing.xxl` | 66px |
| `--space-section` | `clamp(3rem, 6vw, 5rem)` | Keep as system token, anchored to xl/xxl | `clamp(48px, 6vw, 66px)` |

### Radius

| Current CSS Var | Current Value | Maps To | New Value |
|:---|:---|:---|:---|
| `--radius-sm` | 8px | `ref.radius.sm` | **15px** |
| `--radius-md` | 14px | `ref.radius.md` | **30px** |
| `--radius-lg` | 18px | `ref.radius.lg` | **60px** |
| `--radius-full` | 999px | `ref.radius.full` | 999px ✓ |

These are noticeably larger. Cards will feel softer/rounder. The `--radius-md` jump (14→30) is the most visible — every card and panel uses it.

### Type Scale

| Current CSS Var | Current Value | Maps To | New Value |
|:---|:---|:---|:---|
| `--text-xs` | `0.72rem` (~11.5px) | `ref.typography.scale.xs` | 12px |
| `--text-sm` | `0.85rem` (~13.6px) | `ref.typography.scale.sm` | 15px |
| `--text-base` | `1rem` (16px) | `ref.typography.scale.base` | 18px |
| `--text-lg` | `1.15rem` (~18.4px) | No direct token — **use base** (18px) or define in system | 18px |
| `--text-xl` | `1.35rem` (~21.6px) | `ref.typography.scale.md` | 24px |
| `--text-2xl` | `1.75rem` (28px) | No direct token — gap between md(24) and lg(48) | See note |
| `--text-3xl` | `clamp(2rem, 3vw, 2.5rem)` | `ref.typography.scale.lg` | 48px |
| `--text-hero` | `clamp(2.6rem, 4vw, 4rem)` | `ref.typography.scale.xl` | 72px |

**Type scale gap — resolved:** The reference scale stays clean at 7 stops (12/15/18/24/48/72/110). The 24→48 gap is bridged in the **system layer** with a derived `h3Size` token at **36px** (= md × 1.5). This follows the 1.5× ratio the upper scale already uses (48→72) and gives a controlled 1.33× step from h3 (36px) to h2 (48px). No awkward naming in the reference layer — the system layer handles real-world heading needs.

| Heading | Current Size | Token Source | New Size |
|:---|:---|:---|:---|
| h1 (hero) | `clamp(2.6rem, 4vw, 4rem)` | `ref.typography.scale.xl` | 72px |
| h2 | `clamp(2rem, 3vw, 2.5rem)` | `ref.typography.scale.lg` | 48px |
| h3 | `1.75rem` (28px) | `sys.typography.h3Size` (derived) | **36px** |
| h4 | `1.35rem` (~21.6px) | `ref.typography.scale.md` | 24px |

---

## 5. Token File: Building System + Component Layers

The current `tokens.draft.json` only has `reference`. We need to add `system` and `component` layers following the `latestproject.tokens.json` structure.

### System Layer (to add to `tokens.draft.json`)

```json
"system": {
  "color": {
    "primary":      { "$value": "{reference.palette.neutral.ink}" },
    "secondary":    { "$value": "{reference.palette.neutral.cork}" },
    "onSurface":    { "$value": "{reference.palette.neutral.ink}" },
    "onSurfaceMuted": { "$value": "color-mix(in srgb, {reference.palette.neutral.ink}, {reference.palette.neutral.vanilla} 55%)" },
    "onAction":     { "$value": "{reference.palette.neutral.linen}" },
    "actionPrimary":  { "$value": "{reference.palette.primitive.rocket}" },
    "actionSecondary": { "$value": "{reference.palette.primitive.sunset}" },
    "actionTertiary":  { "$value": "{reference.palette.primitive.harvest}" },
    "actionHover":  { "$value": "{reference.palette.primitive.punch}" },
    "accentSubtle": { "$value": "{reference.palette.primitive.surf}" },
    "accentBrand":  { "$value": "{reference.palette.primitive.harvest}" },
    "highlight":    { "$value": "{reference.palette.primitive.velvet}" },
    "error":        { "$value": "#EF4444" },
    "success":      { "$value": "#22C55E" }
  },
  "surface": {
    "pageBackground": { "$value": "{reference.palette.neutral.linen}" },
    "cardFill":       { "$value": "{reference.palette.neutral.bone}" },
    "altFill":        { "$value": "{reference.palette.neutral.vanilla}" },
    "hoverFill":      { "$value": "{reference.palette.neutral.studio-clay}" },
    "border":         { "$value": "{reference.palette.neutral.cork}" }
  },
  "typography": {
    "fontFamily":     { "$value": "{reference.typography.family.body}" },
    "displayFamily":  { "$value": "{reference.typography.family.display}" },
    "monoFamily":     { "$value": "{reference.typography.family.mono}" },
    "lineHeight":     { "$value": "{reference.typography.leading.loose}" },
    "letterSpacing":  { "$value": "0.01em" },
    "h1Size":         { "$value": "{reference.typography.scale.xl}", "$comment": "72px — hero" },
    "h2Size":         { "$value": "{reference.typography.scale.lg}", "$comment": "48px — section heading" },
    "h3Size":         { "$value": "36px", "$comment": "Derived: ref.scale.md × 1.5 — bridges md→lg gap" },
    "h4Size":         { "$value": "{reference.typography.scale.md}", "$comment": "24px — subsection" }
  },
  "spacing": {
    "spacingUnit":  { "$value": "{reference.spacing.md}" },
    "gutterSize":   { "$value": "{reference.grid.gutter}" },
    "pagePadding":  { "$value": "{reference.grid.padding}" },
    "cardPadding":  { "$value": "{reference.spacing.md}" },
    "sectionPadding": { "$value": "{reference.spacing.xxl}" },
    "radiusUnit":   { "$value": "{reference.radius.sm}" }
  },
  "layout": {
    "columns":       { "$value": "{reference.grid.columns}" },
    "mobileColumns": { "$value": "{reference.grid.mobileColumns}" },
    "container":     { "$value": "{reference.grid.container}" }
  },
  "motion": {
    "fast":  { "$value": "{reference.motion.fast}" },
    "base":  { "$value": "{reference.motion.base}" },
    "slow":  { "$value": "{reference.motion.slow}" }
  },
  "zIndex": {
    "base":     { "$value": 0 },
    "dropdown": { "$value": 100 },
    "sticky":   { "$value": 200 },
    "modal":    { "$value": 300 },
    "popover":  { "$value": 400 },
    "toast":    { "$value": 500 },
    "cursor":   { "$value": 9999 }
  }
}
```

### Component Layer (to add to `tokens.draft.json`)

```json
"component": {
  "button": {
    "height":    { "$value": "44px" },
    "padding":   { "$value": "{reference.spacing.md}" },
    "radius":    { "$value": "{reference.radius.full}" },
    "fontSize":  { "$value": "{reference.typography.scale.sm}" },
    "primaryBg": { "$value": "{system.color.actionPrimary}" },
    "secondaryBg": { "$value": "transparent" },
    "secondaryBorder": { "$value": "{system.surface.border}" },
    "ghostBg":   { "$value": "transparent" }
  },
  "card": {
    "background": { "$value": "{system.surface.cardFill}" },
    "border":     { "$value": "none" },
    "radius":     { "$value": "{reference.radius.md}" },
    "padding":    { "$value": "{reference.spacing.lg}" }
  },
  "panel": {
    "background": { "$value": "{system.surface.cardFill}" },
    "border":     { "$value": "none" },
    "radius":     { "$value": "{reference.radius.lg}" },
    "padding":    { "$value": "{reference.spacing.xl}" }
  },
  "input": {
    "height":     { "$value": "44px" },
    "padding":    { "$value": "{reference.spacing.sm}" },
    "radius":     { "$value": "{reference.radius.sm}" },
    "borderColor": { "$value": "{system.surface.border}" },
    "focusRing":  { "$value": "{system.color.highlight}" }
  },
  "badge": {
    "background": { "$value": "{system.surface.altFill}" },
    "border":     { "$value": "{system.surface.border}" },
    "radius":     { "$value": "{reference.radius.full}" },
    "fontSize":   { "$value": "{reference.typography.scale.xs}" }
  },
  "stripe": {
    "colors": ["harvest", "sunset", "rocket", "punch", "velvet"],
    "height":  { "$value": "80px" }
  },
  "cursor": {
    "color":      { "$value": "{system.color.highlight}" },
    "size":       { "$value": "12px" },
    "hoverBorder": { "$value": "{system.color.highlight}" }
  },
  "icon": {
    "strokeWidth":    { "$value": 1.5 },
    "default":        { "$value": "{system.color.onSurface}", "$comment": "Ink — structural, matches text" },
    "accentSurf":     { "$value": "{system.color.accentSubtle}", "$comment": "Surf — informational, data-adjacent" },
    "accentBrand":    { "$value": "{system.color.accentBrand}", "$comment": "Harvest — sparse decorative accent" },
    "interactive":    { "$value": "{system.color.highlight}", "$comment": "Velvet — clickable affordances" },
    "onAction":       { "$value": "{system.color.onAction}", "$comment": "Linen — inside action buttons" },
    "onDark":         { "$value": "{reference.palette.neutral.bone}", "$comment": "Bone — on dark surfaces" }
  }
}
```

---

## 6. Implementation Steps

### Phase 1: Update Token File
1. Add `system` and `component` layers to `tokens.draft.json`
2. ~~Resolve the "Studio-Clay" neutral question~~ — resolved, already in token file
3. ~~Decide on the `--text-2xl` gap~~ — resolved: 36px derived in `system.typography.h3Size`

### Phase 2: Update `global.css`
This is the core work. Line by line through `global.css`:

1. **`:root` block (lines 8–120):** Replace every hardcoded value with a CSS custom property that maps to a token. The naming convention:
   - Reference tokens: `--ref-{category}-{name}` (e.g., `--ref-neutral-linen`)
   - System tokens: `--sys-{category}-{name}` (e.g., `--sys-surface-page`)
   - Component tokens: `--comp-{element}-{property}` (e.g., `--comp-button-radius`)
   - All current `--c-*` vars become aliases pointing at `--sys-*` vars (backward compat)

2. **Component rules (lines ~125–870):** Swap hardcoded values to var() references. The main targets:
   - `.panel` / `.card` — use component tokens for bg, border, radius, padding
   - `.btn` variants — use component tokens
   - `.field` / inputs — use component tokens
   - `.badge` — use component tokens
   - `.stripe` — rebuild gradient from primitive spectrum
   - `#custom-cursor` — use component cursor token

3. **Claude variant overrides (lines ~148–203):** Clean up. The font override block should just point at `--sys-typography-*`. The hardcoded "League Gothic" strings become `var(--ref-family-display)`.

4. **Retro strip colors:** Replace `--s1` through `--s5` with `var(--ref-primitive-harvest)` through `var(--ref-primitive-velvet)`.

5. **Glow vars:** Derive from token primitives:
   ```css
   --glow-warm: rgba(from var(--ref-primitive-velvet) r g b / 0.18);
   --glow-gold: rgba(from var(--ref-primitive-harvest) r g b / 0.12);
   ```

### Phase 3: Update Home.astro Scoped Styles
The scoped `<style>` in `Home.astro` (lines 256–604) has its own hardcoded values. Same treatment:
- Replace `var(--c-*)` with `var(--sys-*)` equivalents
- Replace any remaining hardcoded colors
- Update radii references

### Phase 4: Verify
1. Run dev server, check `/claude`
2. Spot-check other pages (they share `global.css` so they'll shift too)
3. Test contrast ratios for Ink text on all surface colors
4. Test the larger radii — do cards at 30px radius look right?
5. Check the retro stripe with new hex values

---

## 7. Files Involved

| File | Action |
|:---|:---|
| `tokens/tokens.draft.json` | **Edit** — add system + component layers |
| `src/variants/claude/styles/global.css` | **Edit** — replace hardcoded values with token vars |
| `src/variants/claude/pages/Home.astro` | **Edit** — update scoped styles to use token vars |
| `src/variants/claude/layouts/ClaudeLayout.astro` | **Check** — may have hardcoded values to clean |
| Other page files (`Story`, `Brief`, etc.) | **Audit** — likely have hardcoded values in scoped styles too; out of scope for now but flagged |

---

## 8. What This Plan Does NOT Cover

- Migrating other page scoped styles (Story, Model, Work, etc.) — those come after Home is clean
- Dark mode / theming — the 3-tier architecture supports it but not in scope
- Token build pipeline (Style Dictionary, etc.) — currently hand-mapped
- Container rhythm system (backdrop/plane/card/nested) — the old plan had this; may revisit later
- Elevation / shadows — not in the stripped-down token draft; revisit if wanted

---

## 9. Success Criteria

- [ ] `tokens.draft.json` has all three layers (reference, system, component)
- [ ] Every CSS custom property in `:root` traces to a token
- [ ] No orphaned hex codes in `global.css` `:root` block
- [ ] Home.astro scoped styles use only `var(--sys-*)` or `var(--ref-*)` references
- [ ] The retro stripe uses token primitive colors
- [ ] The site still looks cohesive — warmer neutrals, proper accents, larger radii
- [ ] Contrast passes WCAG AA for body text (Ink on Linen, Ink on Bone, Ink on Vanilla)
