# DTCG Token Specification: Domestic Theme

> Complete W3C DTCG v2025.10 specification for the Curated Collector "Domestic" theme.
> This document serves as the blueprint for converting `tokens/tokens.json` from Style Dictionary legacy format to DTCG format.

---

## Format Reference

W3C DTCG tokens use:
- `$value` instead of `value`
- `$type` on every leaf token (or inherited from a group)
- `$description` for documentation
- `$schema` at the root
- Aliases use `{path.to.token}` syntax (same as Style Dictionary)

---

## DTCG Types Used

| DTCG `$type` | Used For | Example |
|-------------|----------|---------|
| `color` | All color values | `#f4ede4`, `rgba(217, 107, 90, 0.18)` |
| `dimension` | Sizes, spacing, radii, font sizes | `20px`, `1rem`, `0.008em` |
| `fontFamily` | Font stack strings | `'Newsreader', serif` |
| `number` | Unitless values (weights, line heights, opacity, filter values) | `400`, `1.6`, `1.08` |
| `shadow` | Box shadow values | `0 22px 40px rgba(60, 49, 38, 0.14)` |
| `string` | Complex CSS values (gradients, blend modes) | `repeating-linear-gradient(...)` |

---

## Complete Token Structure

```json
{
  "$schema": "https://design-tokens.org/schemas/v2025.10/",
  "$description": "WE3 Design System — Curated Collector Domestic Theme",

  "color": {
    "$description": "All color tokens",

    "base": {
      "$description": "Raw palette values — the source of truth for all color aliases",
      "linen":          { "$value": "#f4ede4", "$type": "color" },
      "warm-white":     { "$value": "#fff7ef", "$type": "color" },
      "warm-stone":     { "$value": "#efe2d6", "$type": "color" },
      "smoked-ink":     { "$value": "#2e2a25", "$type": "color" },
      "muted-brown":    { "$value": "#6c645b", "$type": "color" },
      "border-neutral": { "$value": "#d7cfc2", "$type": "color" },
      "coral":          { "$value": "#d96b5a", "$type": "color" },
      "teal":           { "$value": "#3fb0a2", "$type": "color" },
      "marigold":       { "$value": "#e9b146", "$type": "color" },
      "cobalt":         { "$value": "#4a6aa5", "$type": "color" },
      "olive":          { "$value": "#7f8b6a", "$type": "color" },
      "clay":           { "$value": "#c08a6d", "$type": "color" },
      "deep-burgundy":  { "$value": "#5c2a2b", "$type": "color" },
      "peacock-blue":   { "$value": "#4a90a4", "$type": "color" },
      "burnt-orange":   { "$value": "#d96b5a", "$type": "color" }
    },

    "background": {
      "$description": "Semantic background colors",
      "primary":   { "$value": "{color.base.linen}",      "$type": "color" },
      "secondary": { "$value": "{color.base.warm-white}",  "$type": "color" },
      "tertiary":  { "$value": "{color.base.smoked-ink}",  "$type": "color" }
    },

    "text": {
      "$description": "Semantic text colors",
      "primary":   { "$value": "{color.base.smoked-ink}",  "$type": "color" },
      "secondary": { "$value": "{color.base.muted-brown}", "$type": "color" },
      "accent":    { "$value": "{color.base.coral}",       "$type": "color" }
    },

    "codex": {
      "$description": "Codex variant — light/dark semantic pairs",
      "bg": {
        "light": { "$value": "{color.base.linen}",      "$type": "color" },
        "dark":  { "$value": "{color.base.smoked-ink}",  "$type": "color" }
      },
      "surface": {
        "light": { "$value": "{color.base.warm-white}",    "$type": "color" },
        "dark":  { "$value": "{color.base.deep-burgundy}", "$type": "color" }
      },
      "ink": {
        "light": { "$value": "{color.base.smoked-ink}",  "$type": "color" },
        "dark":  { "$value": "{color.base.warm-white}",  "$type": "color" }
      },
      "muted": {
        "light": { "$value": "{color.base.muted-brown}", "$type": "color" },
        "dark":  { "$value": "{color.base.warm-stone}",  "$type": "color" }
      },
      "border": {
        "light": { "$value": "{color.base.border-neutral}", "$type": "color" },
        "dark":  { "$value": "{color.base.clay}",           "$type": "color" }
      },
      "accent": {
        "light": { "$value": "{color.base.coral}",    "$type": "color" },
        "dark":  { "$value": "{color.base.marigold}", "$type": "color" }
      },
      "highlight": {
        "light": { "$value": "{color.base.peacock-blue}", "$type": "color" },
        "dark":  { "$value": "{color.base.cobalt}",      "$type": "color" }
      }
    }
  },

  "typography": {
    "$description": "Typography tokens",

    "fontFamily": {
      "display": { "$value": "'Newsreader', serif",          "$type": "fontFamily" },
      "body":    { "$value": "'Work Sans', sans-serif",      "$type": "fontFamily" },
      "mono":    { "$value": "'IBM Plex Mono', monospace",   "$type": "fontFamily" }
    },

    "fontSize": {
      "small":  { "$value": "0.75rem",                       "$type": "dimension" },
      "base":   { "$value": "1rem",                          "$type": "dimension" },
      "large":  { "$value": "1.25rem",                       "$type": "dimension" },
      "xlarge": { "$value": "2.3rem",                        "$type": "dimension" },
      "hero":   { "$value": "clamp(2.3rem, 3.3vw, 3.6rem)", "$type": "dimension" }
    },

    "fontWeight": {
      "regular":  { "$value": 400, "$type": "number" },
      "medium":   { "$value": 500, "$type": "number" },
      "semibold": { "$value": 600, "$type": "number" }
    },

    "lineHeight": {
      "body":  { "$value": 1.6, "$type": "number" },
      "tight": { "$value": 1.2, "$type": "number" }
    },

    "letterSpacing": {
      "tight":  { "$value": "0.008em", "$type": "dimension" },
      "normal": { "$value": "0.01em",  "$type": "dimension" }
    }
  },

  "spacing": {
    "$description": "Spacing scale",
    "small":  { "$value": "1rem", "$type": "dimension" },
    "medium": { "$value": "2rem", "$type": "dimension" },
    "large":  { "$value": "4rem", "$type": "dimension" }
  },

  "effect": {
    "$description": "Visual effects — shadows, borders, radii, textures",

    "shadow": {
      "panel": { "$value": "0 22px 40px rgba(60, 49, 38, 0.14)", "$type": "shadow" },
      "image": { "$value": "0 18px 35px rgba(60, 49, 38, 0.2)",  "$type": "shadow" }
    },

    "border": {
      "width": { "$value": "1px", "$type": "dimension" }
    },

    "radius": {
      "large":  { "$value": "20px", "$type": "dimension" },
      "medium": { "$value": "12px", "$type": "dimension" }
    },

    "texture": {
      "paper": {
        "$value": "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0, rgba(0, 0, 0, 0.02) 1px, transparent 1px, transparent 10px)",
        "$type": "string"
      }
    }
  },

  "asset": {
    "$description": "Decorative assets — stripes, glows",

    "stripe": {
      "domestic": {
        "$value": "repeating-linear-gradient(90deg, #d96b5a 0 12px, #e9b146 12px 20px, #3fb0a2 20px 28px, #4a6aa5 28px 36px, #f4ede4 36px 42px, #2e2a25 42px 46px)",
        "$type": "string"
      }
    },

    "glow": {
      "primary":   { "$value": "rgba(217, 107, 90, 0.18)", "$type": "color" },
      "secondary": { "$value": "rgba(63, 176, 162, 0.16)", "$type": "color" }
    }
  }
}
```

---

## Token Path to CSS Variable Mapping

Style Dictionary transforms token paths into CSS custom property names by joining path segments with hyphens. This table confirms the DTCG paths produce the same CSS variable names as the current legacy format.

| DTCG Token Path | Generated CSS Variable | Current Variable | Match? |
|----------------|----------------------|------------------|--------|
| `color.base.linen` | `--color-base-linen` | `--color-base-linen` | Yes |
| `color.base.warm-white` | `--color-base-warm-white` | `--color-base-warm-white` | Yes |
| `color.base.warm-stone` | `--color-base-warm-stone` | `--color-base-warm-stone` | Yes |
| `color.base.smoked-ink` | `--color-base-smoked-ink` | `--color-base-smoked-ink` | Yes |
| `color.base.muted-brown` | `--color-base-muted-brown` | `--color-base-muted-brown` | Yes |
| `color.base.border-neutral` | `--color-base-border-neutral` | `--color-base-border-neutral` | Yes |
| `color.base.coral` | `--color-base-coral` | `--color-base-coral` | Yes |
| `color.base.teal` | `--color-base-teal` | `--color-base-teal` | Yes |
| `color.base.marigold` | `--color-base-marigold` | `--color-base-marigold` | Yes |
| `color.base.cobalt` | `--color-base-cobalt` | `--color-base-cobalt` | Yes |
| `color.base.olive` | `--color-base-olive` | `--color-base-olive` | Yes |
| `color.base.clay` | `--color-base-clay` | `--color-base-clay` | Yes |
| `color.base.deep-burgundy` | `--color-base-deep-burgundy` | `--color-base-deep-burgundy` | Yes |
| `color.base.peacock-blue` | `--color-base-peacock-blue` | `--color-base-peacock-blue` | Yes |
| `color.base.burnt-orange` | `--color-base-burnt-orange` | `--color-base-burnt-orange` | Yes |
| `color.background.primary` | `--color-background-primary` | `--color-background-primary` | Yes |
| `color.background.secondary` | `--color-background-secondary` | `--color-background-secondary` | Yes |
| `color.background.tertiary` | `--color-background-tertiary` | `--color-background-tertiary` | Yes |
| `color.text.primary` | `--color-text-primary` | `--color-text-primary` | Yes |
| `color.text.secondary` | `--color-text-secondary` | `--color-text-secondary` | Yes |
| `color.text.accent` | `--color-text-accent` | `--color-text-accent` | Yes |
| `color.codex.bg.light` | `--color-codex-bg-light` | `--color-codex-bg-light` | Yes |
| `color.codex.bg.dark` | `--color-codex-bg-dark` | `--color-codex-bg-dark` | Yes |
| `color.codex.surface.light` | `--color-codex-surface-light` | `--color-codex-surface-light` | Yes |
| `color.codex.surface.dark` | `--color-codex-surface-dark` | `--color-codex-surface-dark` | Yes |
| `color.codex.ink.light` | `--color-codex-ink-light` | `--color-codex-ink-light` | Yes |
| `color.codex.ink.dark` | `--color-codex-ink-dark` | `--color-codex-ink-dark` | Yes |
| `color.codex.muted.light` | `--color-codex-muted-light` | `--color-codex-muted-light` | Yes |
| `color.codex.muted.dark` | `--color-codex-muted-dark` | `--color-codex-muted-dark` | Yes |
| `color.codex.border.light` | `--color-codex-border-light` | `--color-codex-border-light` | Yes |
| `color.codex.border.dark` | `--color-codex-border-dark` | `--color-codex-border-dark` | Yes |
| `color.codex.accent.light` | `--color-codex-accent-light` | `--color-codex-accent-light` | Yes |
| `color.codex.accent.dark` | `--color-codex-accent-dark` | `--color-codex-accent-dark` | Yes |
| `color.codex.highlight.light` | `--color-codex-highlight-light` | `--color-codex-highlight-light` | Yes |
| `color.codex.highlight.dark` | `--color-codex-highlight-dark` | `--color-codex-highlight-dark` | Yes |
| `typography.fontFamily.display` | `--typography-font-family-display` | `--typography-font-family-display` | Yes |
| `typography.fontFamily.body` | `--typography-font-family-body` | `--typography-font-family-body` | Yes |
| `typography.fontFamily.mono` | `--typography-font-family-mono` | `--typography-font-family-mono` | Yes |
| `typography.fontSize.small` | `--typography-font-size-small` | `--typography-font-size-small` | Yes |
| `typography.fontSize.base` | `--typography-font-size-base` | `--typography-font-size-base` | Yes |
| `typography.fontSize.large` | `--typography-font-size-large` | `--typography-font-size-large` | Yes |
| `typography.fontSize.xlarge` | `--typography-font-size-xlarge` | `--typography-font-size-xlarge` | Yes |
| `typography.fontSize.hero` | `--typography-font-size-hero` | `--typography-font-size-hero` | Yes |
| `typography.fontWeight.regular` | `--typography-font-weight-regular` | `--typography-font-weight-regular` | Yes |
| `typography.fontWeight.medium` | `--typography-font-weight-medium` | `--typography-font-weight-medium` | Yes |
| `typography.fontWeight.semibold` | `--typography-font-weight-semibold` | `--typography-font-weight-semibold` | Yes |
| `typography.lineHeight.body` | `--typography-line-height-body` | `--typography-line-height-body` | Yes |
| `typography.lineHeight.tight` | `--typography-line-height-tight` | `--typography-line-height-tight` | Yes |
| `typography.letterSpacing.tight` | `--typography-letter-spacing-tight` | `--typography-letter-spacing-tight` | Yes |
| `typography.letterSpacing.normal` | `--typography-letter-spacing-normal` | `--typography-letter-spacing-normal` | Yes |
| `spacing.small` | `--spacing-small` | `--spacing-small` | Yes |
| `spacing.medium` | `--spacing-medium` | `--spacing-medium` | Yes |
| `spacing.large` | `--spacing-large` | `--spacing-large` | Yes |
| `effect.shadow.panel` | `--effect-shadow-panel` | `--effect-shadow-panel` | Yes |
| `effect.shadow.image` | `--effect-shadow-image` | `--effect-shadow-image` | Yes |
| `effect.border.width` | `--effect-border-width` | `--effect-border-width` | Yes |
| `effect.radius.large` | `--effect-radius-large` | `--effect-radius-large` | Yes |
| `effect.radius.medium` | `--effect-radius-medium` | `--effect-radius-medium` | Yes |
| `effect.texture.paper` | `--effect-texture-paper` | `--effect-texture-paper` | Yes |
| `asset.stripe.domestic` | `--asset-stripe-domestic` | `--asset-stripe-domestic` | Yes |
| `asset.glow.primary` | `--asset-glow-primary` | `--asset-glow-primary` | Yes |
| `asset.glow.secondary` | `--asset-glow-secondary` | `--asset-glow-secondary` | Yes |

All 53 current tokens map 1:1. The DTCG conversion is a format-only change with zero path/naming impact.

---

## Conversion Notes

### Alias Syntax
- Current (SD legacy): `{ "value": "{color.base.coral}" }`
- DTCG: `{ "$value": "{color.base.coral}", "$type": "color" }`

Style Dictionary v5.2 resolves `{path}` references identically in both formats. No alias rewriting needed.

### Shadow Type
The DTCG spec defines a structured `shadow` type with `offsetX`, `offsetY`, `blur`, `spread`, `color` fields. However, Style Dictionary v5 also accepts shadow values as plain strings. We use the string representation for simplicity and compatibility with the existing generated CSS.

### String Type for Gradients
Tokens like `effect.texture.paper` and `asset.stripe.domestic` contain CSS gradient values. There is no DTCG primitive for gradients, so these use `$type: "string"`. Style Dictionary passes them through as-is, which is exactly what we need for CSS variable output.

### Number vs. Dimension
- Font weights and line heights are unitless: `$type: "number"`
- Letter spacing and font sizes have units: `$type: "dimension"`
- Image filter values (saturation, contrast) would be unitless: `$type: "number"` (not yet in token set)
