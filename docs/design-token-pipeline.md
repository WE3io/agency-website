# Design Token Pipeline

> How design tokens flow from authoring to consumption in the WE3 agency website.

---

## Pipeline Overview

```
Design Compiler (UI Tool)
  │  Next.js app at playgrounds/WE3-Design-Compiler/
  │  Authoring interface for colors, typography, spacing, motion, etc.
  │  Exports via toDtcgTokens() in lib/design-tokens.ts
  │
  ▼
tokens.json (W3C DTCG v2025.10 format)
  │  Lives at: _studio/agency-website/tokens/tokens.json
  │  53 tokens across color, typography, spacing, effects, and decorative assets
  │  Currently in Style Dictionary legacy format (needs conversion to DTCG)
  │
  ▼
Style Dictionary v5.2.0
  │  Config at: website/sd.config.js
  │  Reads: ../tokens/**/*.json
  │  Transforms token tree into platform-specific outputs
  │  Run via: pnpm run tokens:build
  │
  ├──▶ CSS Custom Properties
  │      Output: website/src/styles/tokens.generated.css
  │      68 lines, :root selector, auto-generated
  │
  └──▶ TypeScript Constants
         Output: website/src/tokens/tokens.generated.ts
         68 lines, named ES6 exports, auto-generated
  │
  ▼
Astro Pages & Variant Stylesheets
  │  Style guide: website/src/variants/shared-resources/pages/StyleGuide.astro
  │  Variants: claude/, antigravity/, codex/, original/
  │  Each variant's CSS imports the generated tokens
  │
  ▼
Browser
```

---

## Step-by-Step: Running the Pipeline

### 1. Author tokens

Currently: Edit `tokens/tokens.json` by hand.

Future: Use the Design Compiler UI to configure values visually, then export DTCG JSON via the "Export Tokens" action (calls `toDtcgTokens()` in `lib/design-tokens.ts`).

### 2. Generate platform outputs

```bash
cd _studio/agency-website/website
pnpm run tokens:build
```

This runs Style Dictionary, which:
- Reads all `.json` files under `../tokens/`
- Applies the `css` transform group (resolves aliases, converts to CSS-safe values)
- Writes `src/styles/tokens.generated.css`
- Applies the `js` transform group
- Writes `src/tokens/tokens.generated.ts`

### 3. Verify output

After generation, the CSS file should contain 68 CSS custom properties under `:root`. Spot check:
- Color aliases resolve to hex values (e.g., `{color.base.coral}` becomes `#d96b5a`)
- Font families retain quotes (e.g., `'Newsreader', serif`)
- Dimensions keep units (e.g., `20px`, `1rem`, `0.008em`)
- Complex values pass through as-is (gradients, shadow strings)

### 4. Dev server

```bash
pnpm run dev
```

Visit `/style-guide` to see tokens rendered in the style guide. Check variant pages (`/claude`, `/codex`, `/antigravity`) for visual consistency.

---

## Current Style Dictionary Config

File: `website/sd.config.js`

```js
export default {
    source: ['../tokens/**/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'src/styles/',
            files: [{
                destination: 'tokens.generated.css',
                format: 'css/variables'
            }]
        },
        typescript: {
            transformGroup: 'js',
            buildPath: 'src/tokens/',
            files: [{
                destination: 'tokens.generated.ts',
                format: 'javascript/es6'
            }]
        }
    }
};
```

### What needs to change for DTCG

Style Dictionary v5.2.0 supports DTCG natively but needs to be told to use the DTCG parser. When `tokens.json` is converted to DTCG format (using `$value` and `$type` instead of `value`), the config needs one addition:

```js
export default {
    parsers: ['dtcg'],           // <-- Add this line
    source: ['../tokens/**/*.json'],
    // ... rest stays the same
};
```

With this change, Style Dictionary will:
- Recognize `$value` as the token value
- Recognize `$type` as the token type
- Strip `$schema`, `$description`, and other `$`-prefixed metadata
- Resolve `{alias}` references identically to the legacy format

The generated CSS variable names and values should be identical before and after the conversion.

---

## How CSS Variable Names Are Derived

Style Dictionary joins token path segments with hyphens and prefixes with `--`:

```
Token path:     color.base.coral
CSS variable:   --color-base-coral

Token path:     typography.fontFamily.display
CSS variable:   --typography-font-family-display

Token path:     effect.shadow.panel
CSS variable:   --effect-shadow-panel
```

Note: Style Dictionary applies `camelCase → kebab-case` conversion automatically via the `css` transform group. So `fontFamily` becomes `font-family`, `fontSize` becomes `font-size`, etc.

---

## How Variants Consume Tokens

### CSS Import Pattern

Each variant's global CSS file imports the generated tokens:

```css
/* In any variant's styles */
body {
  font-family: var(--typography-font-family-body);
  color: var(--color-text-primary);
  background: var(--color-background-primary);
}

h1, h2, h3 {
  font-family: var(--typography-font-family-display);
}

code, .mono {
  font-family: var(--typography-font-family-mono);
}
```

### TypeScript Import Pattern

For programmatic access (used in StyleGuide.astro for rendering token tables):

```typescript
import {
  ColorBaseCoral,
  TypographyFontFamilyDisplay,
  SpacingMedium
} from '../tokens/tokens.generated';
```

### Codex Variant: Theme Switching

The Codex variant uses semantic token pairs for light/dark mode:

```css
[data-variant="codex"] {
  --bg: var(--color-codex-bg-light);
  --surface: var(--color-codex-surface-light);
  --ink: var(--color-codex-ink-light);
}

[data-variant="codex"][data-theme="dark"] {
  --bg: var(--color-codex-bg-dark);
  --surface: var(--color-codex-surface-dark);
  --ink: var(--color-codex-ink-dark);
}
```

---

## Generated Output Reference

### CSS (68 properties)

The full generated CSS file contains these categories:

| Category | Count | Example Variable |
|----------|-------|-----------------|
| Color: base palette | 15 | `--color-base-linen: #f4ede4` |
| Color: background semantic | 3 | `--color-background-primary: #f4ede4` |
| Color: text semantic | 3 | `--color-text-primary: #2e2a25` |
| Color: codex pairs | 14 | `--color-codex-bg-light: #f4ede4` |
| Typography: font families | 3 | `--typography-font-family-display: 'Newsreader', serif` |
| Typography: font sizes | 5 | `--typography-font-size-hero: clamp(2.3rem, 3.3vw, 3.6rem)` |
| Typography: font weights | 3 | `--typography-font-weight-regular: 400` |
| Typography: line heights | 2 | `--typography-line-height-body: 1.6` |
| Typography: letter spacing | 2 | `--typography-letter-spacing-tight: 0.008em` |
| Spacing | 3 | `--spacing-medium: 2rem` |
| Effect: shadows | 2 | `--effect-shadow-panel: 0 22px 40px rgba(60, 49, 38, 0.14)` |
| Effect: border | 1 | `--effect-border-width: 1px` |
| Effect: radius | 2 | `--effect-radius-large: 20px` |
| Effect: texture | 1 | `--effect-texture-paper: repeating-linear-gradient(...)` |
| Asset: stripe | 1 | `--asset-stripe-domestic: repeating-linear-gradient(...)` |
| Asset: glow | 2 | `--asset-glow-primary: rgba(217, 107, 90, 0.18)` |
| **Total** | **62** | |

*Note: Aliases resolve to their final values in the CSS output. The 53 source tokens include aliases that point to base colors, but the CSS output inlines resolved values for all 62 unique variable paths.*

---

## Key File Locations

| File | Purpose |
|------|---------|
| `playgrounds/WE3-Design-Compiler/lib/design-tokens.ts` | Token authoring model, `toDtcgTokens()` export, `applyDtcgTokens()` import |
| `_studio/agency-website/tokens/tokens.json` | Source token file (currently SD legacy, to be converted to DTCG) |
| `_studio/agency-website/website/sd.config.js` | Style Dictionary config (sources, platforms, output paths) |
| `_studio/agency-website/website/src/styles/tokens.generated.css` | Generated CSS custom properties (do not edit) |
| `_studio/agency-website/website/src/tokens/tokens.generated.ts` | Generated TypeScript constants (do not edit) |
| `_studio/agency-website/website/src/variants/shared-resources/pages/StyleGuide.astro` | Style guide page consuming tokens |
| `_studio/agency-website/website/package.json` | Contains `tokens:build` script |

---

## Future: Multi-Theme Pipeline

When additional Curated Collector themes are added (Gallery, Domestic Rich, Playful, Refined), the pipeline can be extended:

1. One DTCG file per theme under `tokens/` (e.g., `tokens/gallery.json`, `tokens/domestic.json`)
2. SD config updated to build per-theme CSS files with `[data-theme="gallery"]` selectors
3. Style guide gains a theme switcher loading the appropriate CSS
4. The Design Compiler would load/save presets per theme

This extension requires no architectural changes — just multiple source files and SD config entries.
