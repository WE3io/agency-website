# Color Alignment: Claude Variant to Domestic Palette

Status: In Progress
Last updated: 2026-01-29

## Completed

- [x] `--c-accent` — Sage green `#3a7f65` swapped to Coral `#d96b5a`
- [x] `--c-accent-gold` — `#e4b96c` swapped to Marigold `#e9b146`
- [x] `--c-accent-navy` — `#435f9c` swapped to Cobalt `#4a6aa5`
- [x] `--c-border` — `#d8d2c9` swapped to Border Neutral `#d7cfc2`
- [x] `--stripe` gradient — updated to use Coral, Marigold, Teal, Cobalt
- [x] `.btn--primary` box-shadow — sage rgba swapped to coral rgba
- [x] `.tool-card__status--sage` background — updated to coral rgba
- [x] `.tool-card__status--gold` — updated to marigold-derived values
- [x] `Contact.astro` highlighted gradient — sage rgba swapped to coral rgba
- [x] `Tools.astro` modal close fallback — sage hex swapped to coral hex
- [x] `--glow-sage` — already changed to burgundy `rgba(92, 42, 43, 0.18)` (rename pending)

## Remaining — Foundation Colors

These are close to palette values but not exact. Each is a small visual shift.
Test one at a time to check contrast and overall feel.

- [ ] `--c-bg: #f6f1e8` → Linen `#f4ede4`
  - Affects: entire page background, swatch cards
  - Risk: Low — slightly cooler/less yellow. Biggest surface area change.

- [ ] `--c-surface: #fffaf3` → Warm White `#fff7ef`
  - Affects: all cards, panels, form inputs
  - Risk: Low — marginally less warm

- [ ] `--c-surface-2: #f3ede2` → Warm Stone `#efe2d6`
  - Affects: secondary surfaces, ref-card thumbnails
  - Risk: Medium — most noticeable shift of the three, warmer/darker

- [ ] `--c-text: #1b1b1b` → Smoked Ink `#2e2a25`
  - Affects: all body text, headings
  - Risk: Medium — moves from near-black to warm brown-black. Check readability.

- [ ] `--c-muted: #6e6961` → Muted Brown `#6c645b`
  - Affects: secondary text, labels, descriptions
  - Risk: Low — very close

## Remaining — Accent & Decorative

- [ ] `--c-accent-terracotta: #c0715a` — Decide fate
  - Now very close to the primary accent Coral (`#d96b5a`). Either:
    - Swap to a different palette color (Teal? Burgundy?) for contrast
    - Remove if nothing uses it distinctly
  - Check usage across all pages first

- [ ] `--c-button-text: #fdfbf7` → Warm White `#fff7ef`
  - Risk: Low — check contrast against coral buttons (WCAG)

- [ ] `--glow-sage` variable name → rename to `--glow-burgundy`
  - Pure naming cleanup, no visual change

- [ ] `--glow-gold: rgba(228, 185, 108, 0.12)` → align to Marigold rgba
  - `rgba(233, 177, 70, 0.12)` to match `#e9b146`

## Remaining — Page-Specific Hardcoded Colors

- [ ] `NotFound.astro` — decorative picture frame uses custom golds/browns:
  - `#7a7068`, `#8a8078` (frame hardware)
  - `#d4a34a`, `#e4b96c`, `#f0d090`, `#c49340` (gold frame gradient)
  - `#2a2520` (frame mat)
  - These are decorative/illustrative — could stay as-is or be reworked with palette colors

- [ ] `ServerError.astro` — same frame treatment as NotFound, same colors

## Reference: Approved Domestic Palette

| Name | Hex | Role |
|------|-----|------|
| Linen | `#f4ede4` | Background |
| Warm White | `#fff7ef` | Surface |
| Warm Stone | `#efe2d6` | Surface alt |
| Smoked Ink | `#2e2a25` | Text |
| Muted Brown | `#6c645b` | Secondary text |
| Border Neutral | `#d7cfc2` | Borders |
| Coral | `#d96b5a` | Primary accent |
| Teal | `#3fb0a2` | Accent |
| Marigold | `#e9b146` | Accent |
| Cobalt | `#4a6aa5` | Accent |
| Olive | `#7f8b6a` | Accent |
| Clay | `#c08a6d` | Accent |
| Deep Burgundy | `#5c2a2b` | Rich accent |
| Peacock Blue | `#4a90a4` | Rich accent |
| Burnt Orange | `#d96b5a` | Rich accent |
