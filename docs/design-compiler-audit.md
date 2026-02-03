# Design Compiler Audit: Curated Collector Domestic Theme

> Gap analysis between the Curated Collector "Domestic" theme and the WE3 Design Compiler's current capabilities.

---

## A. Curated Collector Domestic — Complete Token Inventory

### A1. Base Palette (15 colors)

Source: `curated-collector.js` lines 97–133

| Group | Name | Hex | DTCG `$type` |
|-------|------|-----|-------------|
| **Foundations** | Linen | `#f4ede4` | `color` |
| | Warm White | `#fff7ef` | `color` |
| | Smoked Ink | `#2e2a25` | `color` |
| **Collected Accents** | Coral | `#d96b5a` | `color` |
| | Teal | `#3fb0a2` | `color` |
| | Marigold | `#e9b146` | `color` |
| **Unexpected Notes** | Cobalt | `#4a6aa5` | `color` |
| | Olive | `#7f8b6a` | `color` |
| | Clay | `#c08a6d` | `color` |
| **Rich Exploration** | Deep Burgundy | `#5c2a2b` | `color` |
| | Peacock Blue | `#4a90a4` | `color` |
| | Burnt Orange | `#d96b5a` | `color` |

Additional derived colors from `tokens.json`:

| Name | Hex | Purpose |
|------|-----|---------|
| Warm Stone | `#efe2d6` | Tertiary surface / surface-2 |
| Muted Brown | `#6c645b` | Secondary text |
| Border Neutral | `#d7cfc2` | Default border |

### A2. Semantic Color Mappings (8 system variables)

Source: `curated-collector.js` lines 135–143

| CSS Variable | Value | Role |
|-------------|-------|------|
| `--bg` | `#f4ede4` | Page background |
| `--surface` | `#fff7ef` | Card / panel fill |
| `--surface-2` | `#efe2d6` | Deeper surface (frames, boards) |
| `--text` | `#2e2a25` | Primary text |
| `--muted` | `#6c645b` | Secondary / muted text |
| `--border` | `#d7cfc2` | Borders and dividers |
| `--accent` | `#d96b5a` | Primary action / accent (Coral) |
| `--button-text` | `#fff7f2` | Button text on accent background |

### A3. Codex Dark Mode Pairs (7 semantic pairs)

Source: `tokens/tokens.json` lines 15–70

| Semantic Role | Light Value | Dark Value |
|--------------|-------------|------------|
| `codex.bg` | Linen (`#f4ede4`) | Smoked Ink (`#2e2a25`) |
| `codex.surface` | Warm White (`#fff7ef`) | Deep Burgundy (`#5c2a2b`) |
| `codex.ink` | Smoked Ink (`#2e2a25`) | Warm White (`#fff7ef`) |
| `codex.muted` | Muted Brown (`#6c645b`) | Warm Stone (`#efe2d6`) |
| `codex.border` | Border Neutral (`#d7cfc2`) | Clay (`#c08a6d`) |
| `codex.accent` | Coral (`#d96b5a`) | Marigold (`#e9b146`) |
| `codex.highlight` | Peacock Blue (`#4a90a4`) | Cobalt (`#4a6aa5`) |

### A4. Typography

Source: `curated-collector.js` lines 92–95, CSS file

**Font Families** (3 stacks):

| Role | Family | CSS Variable | DTCG `$type` |
|------|--------|-------------|-------------|
| Display | `'Newsreader', serif` | `--font-display` | `fontFamily` |
| Body | `'Work Sans', sans-serif` | `--font-body` | `fontFamily` |
| Accent / Mono | `'IBM Plex Mono', monospace` | `--font-accent` | `fontFamily` |

**Font Sizes** (5 named steps):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| small | `0.75rem` | `dimension` |
| base | `1rem` | `dimension` |
| large | `1.25rem` | `dimension` |
| xlarge | `2.3rem` | `dimension` |
| hero | `clamp(2.3rem, 3.3vw, 3.6rem)` | `dimension` |

**Font Weights** (3 values):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| regular | `400` | `number` |
| medium | `500` | `number` |
| semibold | `600` | `number` |

**Line Heights** (2 values):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| body | `1.6` | `number` |
| tight | `1.2` | `number` |

**Letter Spacing** (2 values):

| Name | Value | CSS Variable | DTCG `$type` |
|------|-------|-------------|-------------|
| tight | `0.008em` | `--tracking` (Domestic) | `dimension` |
| normal | `0.01em` | — | `dimension` |

### A5. Spacing (3 named steps)

Source: `tokens/tokens.json` lines 188–197

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| small | `1rem` | `dimension` |
| medium | `2rem` | `dimension` |
| large | `4rem` | `dimension` |

### A6. Effects

**Shadows** (2 warm-toned):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| panel | `0 22px 40px rgba(60, 49, 38, 0.14)` | `shadow` |
| image | `0 18px 35px rgba(60, 49, 38, 0.2)` | `shadow` |

**Border Radius** (2 values):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| large | `20px` | `dimension` |
| medium | `12px` | `dimension` |

**Border Width**:

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| default | `1px` | `dimension` |

**Paper Texture**:

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| paper | `repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0, rgba(0, 0, 0, 0.02) 1px, transparent 1px, transparent 10px)` | `string` |

### A7. Decorative Assets

**Stripe Pattern**:

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| domestic | `repeating-linear-gradient(90deg, #d96b5a 0 12px, #e9b146 12px 20px, #3fb0a2 20px 28px, #4a6aa5 28px 36px, #f4ede4 36px 42px, #2e2a25 42px 46px)` | `string` |

**Glow Colors** (2 backdrop glows):

| Name | Value | DTCG `$type` |
|------|-------|-------------|
| primary | `rgba(217, 107, 90, 0.18)` | `color` |
| secondary | `rgba(63, 176, 162, 0.16)` | `color` |

### A8. Additional Decorative Variables (in Curated Collector, not yet in tokens.json)

These exist in `curated-collector.js` but are not in the current `tokens/tokens.json`:

| CSS Variable | Value | Purpose |
|-------------|-------|---------|
| `--vignette-shapes` | radial-gradient composition | Background decoration for vignette sections |
| `--vignette-bloom` | `radial-gradient(circle at 70% 20%, rgba(217, 107, 90, 0.28), transparent 70%)` | Warm bloom overlay |
| `--collection-shapes` | radial-gradient composition | Background decoration for collection boards |
| `--image-overlay` | radial-gradient composition | Color overlay on images |
| `--image-highlight` | `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35) 0 30%, transparent 60%)` | Specular highlight on images |
| `--image-highlight-opacity` | `0.45` | Highlight opacity |
| `--image-blend` | `soft-light` | CSS blend mode for images |
| `--image-shadow` | `0 18px 35px rgba(60, 49, 38, 0.2)` | Shadow on image cards |
| `--image-border` | `rgba(0, 0, 0, 0.14)` | Image frame border |
| `--image-saturation` | `1.08` | CSS filter saturation |
| `--image-contrast` | `1.03` | CSS filter contrast |
| `--hero-size` | `clamp(2.3rem, 3.3vw, 3.6rem)` | Responsive hero heading size |

---

## B. Design Compiler Capability Matrix

Source: `WE3-Design-Compiler/lib/design-tokens.ts` — `DesignTokens` interface (line 185) and `defaultTokens` (line 308)

### B1. Colors

| Curated Collector Token | Compiler Field | Status | Notes |
|------------------------|----------------|--------|-------|
| 15 base palette colors (4 groups) | `paletteGroups: PaletteGroup[]` | **Yes** | Structure matches — groups with swatches |
| `--bg` (page background) | `surface.pageBackground` | **Yes** | Direct mapping |
| `--surface` (card fill) | `surface.cardFill` | **Yes** | Direct mapping |
| `--surface-2` (deeper surface) | — | **No** | Not in `SurfaceTokens` interface |
| `--text` (primary text) | `surface.onSurfaceLight` | **Yes** | Direct mapping |
| `--muted` (secondary text) | — | **No** | Not in interface |
| `--border` | `surface.borderLight` | **Yes** | Direct mapping |
| `--accent` | `primaryColor` | **Yes** | Maps to primary |
| `--button-text` | — | **No** | Not in `ActionTokens` |
| Dark mode page bg | `surface.darkPageBackground` | **Yes** | Direct mapping |
| Dark mode card fill | `surface.darkCardFill` | **Yes** | Direct mapping |
| Dark mode text | `surface.onSurfaceDark` | **Yes** | Direct mapping |
| Dark mode border | `surface.borderDark` | **Yes** | Direct mapping |
| Error color | `form.errorColor` | **Yes** | In form tokens |
| Success color | `form.successColor` | **Yes** | In form tokens |

### B2. Typography

| Curated Collector Token | Compiler Field | Status | Notes |
|------------------------|----------------|--------|-------|
| Display font (`Newsreader`) | `fontFamily: string` | **Partial** | Compiler has ONE font field, not three |
| Body font (`Work Sans`) | — | **No** | No separate body font field |
| Accent/Mono font (`IBM Plex Mono`) | — | **No** | No accent font field |
| 5 named font sizes | `scaleRatio: number` | **No** | Compiler uses a ratio multiplier, not discrete steps |
| 3 font weights | — | **No** | Not in interface |
| 2 line heights | `typography.lineHeight: number` | **Partial** | Single value (0.8–2.0), not named scale |
| 2 letter spacings | `typography.letterSpacing: number` | **Partial** | Single value in px, not em; no named scale |
| Hero size (clamp) | — | **No** | No responsive sizing concept |
| Heading alignment | `typography.headingAlignment` | **Yes** | Supported |

### B3. Spacing & Layout

| Curated Collector Token | Compiler Field | Status | Notes |
|------------------------|----------------|--------|-------|
| 3 named spacing steps | `spacingUnit: number` | **No** | Compiler has single unit, not named scale (small/medium/large) |
| Border radius (large: 20px) | `radiusUnit: number` | **Partial** | Single value, no named scale |
| Border radius (medium: 12px) | — | **No** | Only one radius value |
| Border width (1px) | — | **No** | Not a standalone token |
| Grid columns | `layout.columns` | **Yes** | Supported |
| Mobile columns | `layout.mobileColumns` | **Yes** | Supported |
| Gutter size | `layout.gutterSize` | **Yes** | Supported |
| Page padding | `layout.pagePadding` | **Yes** | Supported |
| Card padding | `layout.cardPadding` | **Yes** | Supported |

### B4. Effects & Decorative

| Curated Collector Token | Compiler Field | Status | Notes |
|------------------------|----------------|--------|-------|
| Panel shadow (warm-toned) | `component.elevation` (0–4 levels) | **No** | Compiler uses generic `rgba(0,0,0,...)` shadows via `getElevationShadow()`, not custom warm shadows |
| Image shadow | — | **No** | No separate image shadow |
| Paper texture | — | **No** | No decorative texture support |
| Stripe pattern | — | **No** | No stripe/gradient pattern support |
| Glow primary | — | **No** | No backdrop glow support |
| Glow secondary | — | **No** | No backdrop glow support |
| Vignette shapes | — | **No** | Complex radial gradients, not in scope |
| Vignette bloom | — | **No** | Not in scope |
| Collection shapes | — | **No** | Not in scope |
| Image overlay | — | **No** | Not in scope |
| Image highlight | — | **No** | Not in scope |
| Image blend mode | — | **No** | `ImageryTokens` has `radiusMatch`, `grayscale`, `aspectRatio` only |
| Image saturation | — | **No** | Not in `ImageryTokens` |
| Image contrast | — | **No** | Not in `ImageryTokens` |

### B5. Motion & Components

| Curated Collector Token | Compiler Field | Status | Notes |
|------------------------|----------------|--------|-------|
| Motion duration | `motion.duration` | **Yes** | Supported |
| Motion easing | `motion.easing` | **Yes** | Supported |
| Motion cubic-bezier | `motion.cubicBezier` | **Yes** | Supported |
| Button radius | `button.radius` | **Yes** | Supported |
| Button padding | `button.padding` | **Yes** | Supported |
| Button height | `button.height` | **Yes** | Supported |
| Button font size | `button.fontSize` | **Yes** | Supported |
| Input height | `component.inputHeight` | **Yes** | Supported |
| Form input radius | — | **Partial** | Uses global `radiusUnit`, not specific |
| Z-index layers | `zIndex.*` | **Yes** | Full support |
| WCAG target | `accessibility.wcagTarget` | **Yes** | Supported |
| Text gradient | `textGradient.*` | **Yes** | Supported |

---

## C. Gap Summary

### Critical Gaps (block full Domestic token capture)

1. **Triple font stack** — The Compiler has one `fontFamily: string` field. The Curated Collector requires three: display (`Newsreader`), body (`Work Sans`), accent (`IBM Plex Mono`). The downstream `tokens.json` already expects `typography.fontFamily.display`, `.body`, `.mono`.

2. **Named font size scale** — The Compiler uses a `scaleRatio` multiplier to derive sizes. The Curated Collector defines 5 discrete named sizes (`small` through `hero`) including responsive `clamp()` values. No way to author these in the Compiler.

3. **Surface-2 color** — The Compiler's `SurfaceTokens` has `cardFill` and `pageBackground` but no third surface level. The Curated Collector's `--surface-2` (`#efe2d6`) is used extensively for frames, boards, and deeper containers.

4. **Custom shadow strings** — The Compiler generates generic shadows via `getElevationShadow()` using `rgba(0,0,0,...)`. The Curated Collector uses warm-toned shadows (`rgba(60, 49, 38, 0.14)`) that are integral to the aesthetic. No way to author custom shadow values.

### Medium Gaps (limit expressiveness)

5. **Named spacing scale** — Compiler has `spacingUnit` (single number). Curated Collector needs `small` (1rem), `medium` (2rem), `large` (4rem).

6. **Multiple border radii** — Compiler has `radiusUnit` (single number). Curated Collector needs `large` (20px) and `medium` (12px).

7. **Letter spacing in em units** — Compiler stores `letterSpacing` in pixels. Curated Collector uses `em` values (`0.008em`, `0.01em`).

8. **Font weight tokens** — Compiler has no explicit weight tokens. Curated Collector defines `regular` (400), `medium` (500), `semibold` (600).

9. **Muted text color** — Compiler has no secondary/muted text token. Curated Collector's `--muted` (`#6c645b`) is used throughout.

10. **Button text color** — Compiler's `ActionTokens` has `defaultBg`, `hoverBg`, `activeBg` but no `textColor`. The Curated Collector's `--button-text` (`#fff7f2`) is distinct from the surface text.

### Low Gaps (decorative / advanced)

11. **Paper texture** — CSS gradient string for subtle paper grain. No Compiler equivalent.

12. **Stripe pattern** — Multicolor repeating gradient for dividers. No Compiler equivalent.

13. **Backdrop glows** — Two rgba glow colors for ambient lighting. No Compiler equivalent.

14. **Image treatment tokens** — Blend mode, saturation, contrast, overlay, highlight. Compiler's `ImageryTokens` only covers `radiusMatch`, `grayscale`, `aspectRatio`.

15. **Vignette/collection decorative gradients** — Complex radial gradient compositions. These are highly theme-specific and may be best kept as CSS rather than tokens.

### What Already Works

The Compiler successfully handles:
- Full palette group system (4 groups, N swatches each)
- Primary/secondary/tertiary colors
- Page and card background colors (light + dark)
- Text and border colors (light + dark)
- Grid layout (columns, gutters, padding)
- Motion (duration, easing, cubic-bezier)
- Button geometry (height, padding, radius, font size)
- Form tokens (input height, error/success colors)
- Z-index layers
- Accessibility (WCAG target, contrast checking)
- Text gradient
- Dark mode toggle

---

## D. Recommendations for Future Compiler Updates

Ordered by value/effort ratio:

1. **Add `displayFont`, `bodyFont`, `accentFont` fields** — Replace single `fontFamily`. Minimal UI change (3 dropdowns instead of 1). Unblocks proper typography authoring.

2. **Add `surface.secondarySurface` field** — One new color picker. Unblocks three-tier surface model.

3. **Add `action.textColor` field** — One new color picker. Allows button text to differ from surface text.

4. **Add `surface.mutedText` field** — One new color picker. Allows secondary text color authoring.

5. **Add named spacing/radius scales** — Replace single `spacingUnit` with `small/medium/large`. Replace single `radiusUnit` with `large/medium`. Requires UI governor changes.

6. **Support custom shadow strings** — Allow authoring warm-toned shadows instead of only generic elevation levels.

7. **Add font size discrete steps** — Move from ratio-based to explicit named sizes with optional `clamp()` values.

8. **Add decorative token namespace** — Stripe, glow, texture. Could auto-generate stripe from palette colors to reduce manual effort.

9. **Extend imagery tokens** — Add `blendMode`, `saturation`, `contrast` to `ImageryTokens`.
