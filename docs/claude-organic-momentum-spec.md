# Claude Variant: Organic Momentum & Motion Effects — Specification

**Version:** 1.4  
**Scope:** WE3 agency-website, Claude variant (`/claude/*`)  
**Last updated:** 2026-02-02

---

## 1. Overview

The **Organic Momentum** UX blueprint defines how the Claude variant uses motion and layout to create a sense of “opening” and “aliveness”: the page feels like it’s drawing in and revealing content, and interactive elements (cards, numbers) respond with clear, intentional animation.

Principles:

- **Direct feedback** — Interactions (expand, scroll) cause visible, physical-feeling layout and motion.
- **Sophistication** — Easing (e.g. ease-out-expo) and timing (0.6s, 0.8s) feel premium, not bouncy.
- **Low latency** — `requestAnimationFrame` and passive scroll listeners keep animations in sync with refresh rate (60fps/120fps).

---

## 2. Motion Effects — Summary Table

| Effect | Trigger | Duration / Easing | Location |
|--------|---------|--------------------|----------|
| **Liquid Pour** strip | Page load (200ms delay after nav) | 1.2s, cubic-bezier(0.85, 0, 0.15, 1), animation-delay 0.2s | Masthead |
| Hero line stagger | After strip completes (1500ms delay) | 1.2s opacity, 1.4s spring per line, stagger 0.1s–0.7s | Home hero |
| **Cutive typewriter** | When parent `.reveal-up` gets `.active` | 1s steps(40), delay 0.4s | Labels / eyebrows inside reveal-up |
| Reveal on scroll | IntersectionObserver + random delay 0–250ms | 1.2s opacity, 1.4s spring (cubic-bezier 0.23, 1.25, 0.46, 1) | Sections, cards |
| Floating nav show/hide | Scroll ≥ 200px | 0.35s, cubic-bezier(0.22, 1, 0.36, 1) | Layout |
| **Magnetic Rectangle Snap Cursor** | Mouse move / hover / click | Lerp 0.15 for pos + size; morphs to target w/h/radius | Layout (Claude only) |
| **MetaLab Card Expansion** | Click / tap on work-card | 0.8s card, 0.7s details-pane; full-width on expand | Work page cards |
| Satellite parallax | Scroll | 3n+2 cards move at 1.05× scroll (translateY) | Work page `.satellite` |
| Meta-Expand (card) | Click / tap on card | Toggle `.is-expanded`; layout script | Work page cards |
| Odometer count-up | In-view or on expand | 2s, ease-out-expo | Work page `.text-data` |

---

## 3. Page Entry & Masthead

### 3.1 Background & Strip Palette

- **Default background:** Cream (`--color-bg-cream` / `--c-bg`).
- **Five-stripe palette (masthead/footer):**  
  `--retro-yellow`, `--retro-orange`, `--retro-red`, `--retro-magenta`, `--retro-purple`.
- **Strip gradient:** `--stripe-stacked` — vertical `linear-gradient` with five equal bands (20% each). Used for `.stripe--masthead` and `.stripe--footer`.
- **Strip dimensions (rest state):** Height `80px`, `border-radius: 0` (flush to edges).

### 3.2 Load Order (Nav → Strip → Page)

- **Sequence:** (1) Nav and header are visible immediately. (2) Strip animates left-to-right then eases down. (3) Hero and rest of page reveal after strip completes.
- **Strip delay:** `animation-delay: 0.2s` so the strip starts after the nav has painted (nav loads first).
- **Hero delay:** Script adds `.active` to hero `.reveal-up` elements at **1500ms** (after strip: 200ms delay + 1200ms animation).

### 3.3 Liquid Pour Strip Animation (Page Load)

- **Class:** `.stripe--masthead.momentum-entry`
- **Behavior:** On load, the masthead stripe “shoots” across then “pours” down elastically:
  1. **Shoot:** Height 4px; scale from 0 to 1 on X (origin: left). ~35% of duration.
  2. **Pour:** Height animates from 4px to 80px (elastic settle).
- **Keyframes:** `momentum-strip-draw` (1.2s total), `cubic-bezier(0.85, 0, 0.15, 1)`, **animation-delay 0.2s**.
- **Cleanup:** After 1500ms, `.momentum-entry` is removed so it doesn’t re-run on navigation.

**CSS (global.css):**

```css
body.variant-claude .site-header .stripe--masthead.momentum-entry {
  height: 4px !important;
  transform-origin: left center;
  animation: momentum-strip-draw 1.2s cubic-bezier(0.85, 0, 0.15, 1) 0.2s forwards;
}

@keyframes momentum-strip-draw {
  0%   { transform: scaleX(0); height: 4px; }
  35%  { transform: scaleX(1); height: 4px; }
  100% { transform: scaleX(1); height: 80px; }
}
```

---

## 4. Hero Stagger Reveal (Home)

### 4.1 Markup

- Hero content lives in a container with class **`momentum-hero`**.
- Each line or block that should reveal gets **`reveal-up`** plus an optional stagger class: **`stagger-1`** … **`stagger-5`**.

Example (Home.astro):

- Eyebrow: `reveal-up stagger-1`
- H1 line 1: `reveal-up stagger-2`
- H1 line 2: `reveal-up stagger-3`
- Lead paragraph: `reveal-up stagger-4`
- Actions (buttons): `reveal-up stagger-5`

### 4.2 Behavior

- **Initial state:** `.reveal-up` → `opacity: 0`, `transform: translateY(80px) rotate(1.5deg) scale(0.96)` (spring physics).
- **Active state:** `.reveal-up.active` → `opacity: 1`, `transform: translateY(0) rotate(0deg) scale(1)`.
- **Trigger:** Script in layout runs after **1500ms** (after strip finishes) and adds `.active` to all `.reveal-up` inside `.momentum-hero`, so the rest of the page reveals after the strip.
- **Stagger:** Transition delays — `stagger-1` 0.1s through `stagger-5` 0.7s — so lines appear in sequence.
- **Transition:** Opacity 1.2s ease-out; transform 1.4s `cubic-bezier(0.23, 1.25, 0.46, 1)` (spring easing).

---

## 5. Reveal on Scroll (Sections & Cards)

### 5.1 Usage

- Any section or card that should “reveal” when scrolled into view uses class **`reveal-up`** (same as hero; hero is excluded by being inside `.momentum-hero`).
- Used on: problem statement, model intro, **Work page case cards** (`.case-card.reveal-up`), etc.

### 5.2 IntersectionObserver

- **Root margin:** `0px 0px -50px 0px` (bottom cutoff 50px).
- **Threshold:** `0.1` (10% visible).
- **Action:** When an element is intersecting and **not** inside `.momentum-hero` and not already `.active`, add class **`.active`** after a **random delay 0–250ms** (staggered “pop”).
- **Result:** Same spring transition as hero (1.2s opacity, 1.4s transform) so the “reveal-up” motion is consistent site-wide.

### 5.3 Cutive Typewriter (Labels Inside Reveal-up)

- **Targets:** `.section-header__label`, `.eyebrow`, `.card-label` **inside** a `.reveal-up` (so only labels in reveal sections/cards are affected).
- **Initial:** `width: 0`, `opacity: 0`, `overflow: hidden`, `white-space: nowrap`, `display: inline-block`, font **Cutive**.
- **When parent gets `.active`:** `opacity: 1`, animation **`typing`** 1s `steps(40, end)` forwards, **animation-delay 0.4s** (waits for card/section to settle).
- **Keyframes:** `from { width: 0 }` → `to { width: 100% }`. Draws the eye to the category (e.g. “The WE3 Story”) before the headline.

### 5.4 12-Column Scatter Grid

- **Grid:** `.fluid-grid` — `grid-template-columns: repeat(12, 1fr)`, `gap: 6vw 4vw`, `align-items: start`.
- **Repeating 3-card pattern:**
  - **Type A (Anchor):** `nth-child(3n+1)` — `grid-column: 1 / span 8`, `margin-top: 0` (left-aligned, wide).
  - **Type B (Satellite):** `nth-child(3n+2)` — `grid-column: 8 / span 5`, `margin-top: 18vh` (right-aligned, floating high).
  - **Type C (Center-Weight):** `nth-child(3n+3)` — `grid-column: 3 / span 8`, `margin-top: -5vh`, `margin-bottom: 12vh` (middle, offset low).
- **Mobile (≤768px):** `display: flex`, `flex-direction: column`, `gap: 40px`; all cards `margin: 0`, `width: 100%`.
- **Reveal:** Final transform for cards is `translateY(0) rotate(0deg) scale(1)` (no extra offset; scatter is from grid placement).

---

## 6. Masthead Scroll-away & Floating Nav

### 6.1 Masthead

- **Position:** `position: relative` (not sticky). The header scrolls away with the page.

### 6.2 Floating Nav

- **Position:** Fixed, bottom center (`bottom: 1.5rem`, `left: 50%`, `transform: translateX(-50%)`).
- **Style:** Pill shape (`border-radius: 9999px`), frosted glass (`backdrop-filter: blur(20px)`), light border and shadow.
- **Default:** `opacity: 0`, `pointer-events: none`.
- **Trigger:** When `window.scrollY >= 200`, add class **`is-visible`** → `opacity: 1`, `pointer-events: auto`.
- **Scroll handling:** Passive scroll listener; updates gated with `requestAnimationFrame` and a simple “ticking” flag to avoid layout thrash.
- **Transition:** 0.35s, `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 7. Magnetic Square Cursor

### 7.1 Purpose

- On the Claude variant, the system cursor is **hidden** and replaced by a **custom square cursor** that follows the pointer with smooth interpolation (lerp) and **magnetically** snaps toward the center of interactive elements (links, buttons, work cards). This creates a tactile, editorial feel and a “scanning lens” effect over cards.

### 7.2 Scope

- **Only when** `body` has class **`variant-claude`**; script exits early otherwise.
- **Hide system cursor:** `body.variant-claude`, `a`, `button`, `.case-card`, `[role="button"]` → `cursor: none !important`.

### 7.3 Cursor Element (`#custom-cursor`)

- **Created by script:** A single `<div id="custom-cursor">` is appended to `body` on `DOMContentLoaded`.
- **Base state:** 12×12px square, `background-color: var(--retro-purple)`, `position: fixed`, `pointer-events: none`, `z-index: 9999`. Positioned with `transform: translate3d(x, y, 0) translate(-50%, -50%)` (hardware-accelerated).
- **Transitions:** Width/height 0.4s `cubic-bezier(0.19, 1, 0.22, 1)`; background/border 0.3s ease; opacity 0.2s ease.

### 7.4 States (CSS Classes)

- **Default:** Small purple square (12×12px) following smoothed mouse position; size lerped in script.
- **`.is-hovering`:** Cursor **morphs** to target element size: `targetPos` includes `w`, `h`, `r` (width, height, border-radius from `getBoundingClientRect` + `getComputedStyle`). Frame padding +10px. `background-color: rgba(102, 45, 145, 0.03)`; `border: 1px solid var(--retro-purple)`. “Rectangle lock-in” over buttons/links/cards.
- **`.is-clicking`:** `scale(0.7)` applied in script; `background-color: var(--retro-red)`, `border-color: var(--retro-red)` (click feedback).
- **`.is-outside`:** `opacity: 0` when pointer leaves the window (`mouseleave` on `document`).

### 7.5 Script Behavior (ClaudeLayout.astro)

- **Mouse tracking:** `mousemove` updates `mouse.x`, `mouse.y` and removes `is-outside`; `mouseleave` adds `is-outside`.
- **Animation loop:** `requestAnimationFrame` loop. **Position:** destination = `targetPos.x/y` when over a target, else `mouse.x/y`. **Size:** destination = `targetPos.w/h` (+10px padding) when over a target, else 12×12. **Lerp:** `pos.x`, `pos.y`, `pos.w`, `pos.h` all use factor **0.15**. **Border radius:** set from `targetPos.r` (from `getComputedStyle(el).borderRadius`). Cursor `width`, `height`, `borderRadius`, and `transform` are updated each frame so the cursor “swallows” the target.
- **Magnetism:** **Event delegation** on `document`. **Targets:** `a`, `button`, `.case-card`, `.work-card`, `[role="button"]`. On `mouseover` → add `is-hovering`, set `targetPos = { x, y, w: rect.width + 10, h: rect.height + 10, r }`. On `mouseout` → remove `is-hovering` and clear `targetPos` only when not entering another target.
- **Click:** `mousedown` adds `is-clicking`; `mouseup` removes it; scale(0.7) applied in transform inside the loop.

### 7.6 File Reference

- **CSS:** `website/src/variants/claude/styles/global.css` (section “Magnetic Square Cursor”).
- **Script:** `website/src/variants/claude/layouts/ClaudeLayout.astro` (script block “Magnetic Square Cursor”).

---

## 8. Work Page: MetaLab Expansion & Meta-Expand

### 8.1 Purpose

- Case study cards on the Work page **expand in place** (MetaLab-style): when expanded, the card **morphs** to full width, siblings shift with spring-like reflow, and the details pane slides down. The card “breathes” rather than only growing downward.

### 8.2 Markup (Work.astro)

- **Card container:** `.case-card.work-card`, `data-work-card`, `tabindex="0"`, `role="button"` (for keyboard and a11y). Cards at **3n+2** get class **`.satellite`** for scroll parallax.
- **Details block:** `.details-pane` — contains heading “Project Impact” and **`.data-row`** items; laid out as a **2-column grid** (1fr 1fr, gap 40px) when expanded.
- **Odometer elements:** Each value is a **`.text-data`** span with `data-value`, `data-suffix`; initial text e.g. `0 kg/yr`.

### 8.3 MetaLab Card State (global.css)

- **Base:** `.work-card` — `position: relative`, `transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1)`, `transform-origin: center center`, `z-index: 1`.
- **Expanded:** `.work-card.is-expanded` — **`grid-column: 1 / -1`** (full width in `.fluid-grid`), `margin-top: 4rem`, `margin-bottom: 4rem`, `z-index: 10`. Siblings shift with the grid.
- **Details pane (collapsed):** `.work-card .details-pane` — `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 40px`, `max-height: 0`, `opacity: 0`, `overflow: hidden`, `transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1)`.
- **Details pane (expanded):** `.work-card.is-expanded .details-pane` — `max-height: 1000px`, `opacity: 1`, `padding: 60px 0`.

### 8.4 Interaction

- **Trigger:** Click or Enter/Space on the card (or the element with `role="button"`); clicks on inner links do not toggle.
- **Action:** Toggle class **`is-expanded`** on the `.work-card` (script in ClaudeLayout.astro).
- **Layout:** Expanded card spans all 12 columns; grid reflows with spring-like feel.

### 8.5 Satellite Parallax

- **Targets:** Cards with class **`.satellite`** (every 2nd card in the 3-card pattern, i.e. `3n+2`); added in Work.astro when `i % 3 === 1`.
- **Behavior:** On scroll, `.satellite.reveal-up.active` cards get **`transform: translateY(scrollY * 0.05px) rotate(0deg) scale(1)`** so they move slightly faster (1.05×) than the page, creating a layered “Anti-Gravity” feel. Script in ClaudeLayout.astro; passive scroll + requestAnimationFrame.
- **Grid:** Satellite cards use **`margin-top: 15vh`** (Type B in the 12-column scatter grid).

---

## 9. Work Page: Odometer Count-up (`.text-data`)

### 9.1 Purpose

- Numeric impact values (e.g. “12,500 kg/yr”) **count up from 0** to the target instead of snapping. Ease-out-expo gives a “premium” slowdown near the end.

### 9.2 Data Attributes

- **`data-value`** — integer target (e.g. `12500`).
- **`data-suffix`** — string after the number (e.g. `" kg/yr"`). Optional; default `""`.
- **`data-animated`** — set to `"true"` after first run so the animation runs only once.

### 9.3 Animation Function

- **Signature:** `animateValue(obj, start, end, duration, suffix)`  
  - `obj` — DOM element whose `innerHTML` is updated.
  - `start` / `end` — number range (typically `0` to `data-value`).
  - `duration` — ms (e.g. 2000).
  - `suffix` — string appended after the number (e.g. `" kg/yr"`).

- **Loop:** `requestAnimationFrame` until `progress >= 1`.
- **Progress:** `progress = min((timestamp - startTimestamp) / duration, 1)`.
- **Easing:** Ease-out-expo: `easeProgress = 1 - Math.pow(2, -10 * progress)`.
- **Current value:** `currentVal = floor(easeProgress * (end - start) + start)`.
- **Display:** `obj.innerHTML = currentVal.toLocaleString() + suffix`.

### 9.4 Trigger (Choose One or Both)

1. **IntersectionObserver:** When a `.text-data` element enters view (e.g. threshold 0.5), if not yet `data-animated`, run `animateValue(el, 0, value, 2000, suffix)` and set `data-animated="true"`.
2. **On expand:** When a `.work-card` gains `.is-expanded`, run the count-up for each `.text-data` inside that card (if not already animated). Ensures numbers animate when the user opens the card even if they’re already in view.

---

## 10. Visual & Theming Constraints (Claude)

- **No shadows:** All `--shadow-*` and `--effect-shadow-panel` / `--effect-shadow-image` set to `none`. Global override: `body.variant-claude .panel, .card, .case-card, …` → `box-shadow: none !important; border: none !important;`.
- **Logo:** Claude uses **`/images/we3-logo-claude.svg`** in nav and footer — fill `#662D91` (retro-purple), stroke `#1A1A1B`, filter glow `#662D91`.
- **Section labels:** `.section-header__label` uses font **Inter** (technical label style).
- **All numbers League Gothic:** **League Gothic** applied to `.text-data`, `.stat__number`, `.engagement-card__number`, `.benefit__number`, `.cost-card__duration`, `.engagement-number .mono` (stats, engagement numbers, benefit numbers, cost duration, etc.).
- **No content overlay:** `main#main-content` and its direct children use `position: relative` and stacking so sections do not overlap; content flows in document order.

---

## 11. Accessibility & Performance

- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — set `transition-duration` and `animation-duration` to `0.01ms` so motion is effectively disabled.
- **Keyboard:** Work cards are focusable (`tabindex="0"`) and actionable (`role="button"`); expand should trigger on Enter/Space.
- **Scroll:** Floating nav uses passive scroll listener where possible.
- **Animation:** Prefer `requestAnimationFrame` for count-up and scroll-driven updates to stay in sync with refresh rate.

---

## 12. File Reference

| Concern | File(s) |
|---------|--------|
| Layout, nav, floating nav, hero/reveal script, momentum strip cleanup, **Magnetic Rectangle Snap Cursor** script, **work-card expand toggle**, **Satellite parallax** | `website/src/variants/claude/layouts/ClaudeLayout.astro` |
| Global tokens, strip animation, reveal-up, fluid-grid, **MetaLab work-card expansion**, no-shadow overrides, typography, **Magnetic Cursor CSS** | `website/src/variants/claude/styles/global.css` |
| Home hero stagger markup | `website/src/variants/claude/pages/Home.astro` |
| Work cards: work-card, details-pane, text-data markup; **.satellite** class (3n+2); impact data | `website/src/variants/claude/pages/Work.astro` |
| Odometer + expand toggle script | `ClaudeLayout.astro` (expand toggle present; odometer to be wired as per spec) |

---

## 13. Changelog

- **1.4** — **Load order:** Nav visible first; strip animates with **animation-delay 0.2s** (left-to-right then ease down); hero and page content reveal at **1500ms** (after strip). **Logo:** Claude uses `we3-logo-claude.svg` (retro purple #662D91, stroke #1A1A1B) in nav and footer. **Numbers:** All numeric UI (stats, engagement, benefit, cost, text-data) use **League Gothic**; added `.stat__number` to global list. **No overlay:** `main#main-content` and children use `position: relative` so content does not overlap.
- **1.3** — **MetaLab Expansion:** `.work-card` morphs on expand (full width `grid-column: 1 / -1`, 4rem margin, z-index 10); `.details-pane` 2-col grid, 0.7s cubic-bezier, 60px padding. **Magnetic Rectangle Snap Cursor:** cursor morphs to target element size (width, height, border-radius from getBoundingClientRect + getComputedStyle), +10px padding, lerp 0.15 for pos and size. **Satellite parallax:** `.satellite` (3n+2) cards get translateY(scrollY × 0.05) when revealed; margin-top 15vh. **Work-card expand toggle** and keyboard (Enter/Space) in ClaudeLayout.astro. Fluid-grid gap 8vw 4vw.
- **1.2** — Magnetic Square Cursor: hide system cursor on Claude; custom `#custom-cursor` with lerp (0.15), magnetism on `a`, `button`, `.case-card`, `.work-card`, `[role="button"]`; states `.is-hovering` (frame), `.is-clicking` (scale + red), `.is-outside` (opacity 0); event delegation; `translate3d` for hardware acceleration.
- **1.1** — Liquid Pour strip (1.2s, 35% keyframe, cubic-bezier 0.85/0/0.15/1); Cutive typewriter on labels/eyebrows inside or as `.reveal-up`; 12-column scatter grid (Anchor/Satellite/Center-Weight); Spring Physics reveal (translateY 80px, rotate 1.5deg, scale 0.96, spring easing); IntersectionObserver random delay 0–250ms, rootMargin -50px; page-header sections get `.reveal-up` for typewriter (Story, Work, Engagements, Brief, Contact, Model).
- **1.0** — Initial spec: page entry, hero stagger, reveal-on-scroll, fluid grid, floating nav, Meta-Expand behavior, Odometer behavior, theming, a11y, file reference.
