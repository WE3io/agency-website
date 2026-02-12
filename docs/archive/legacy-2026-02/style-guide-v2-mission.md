# Style Guide V2: The Clean Slate Mission
**Date:** February 3, 2026
**Status:** Active Foundation for V2

## Executive Summary
Version 2 of the Agency Website Style Guide represents a pivot from "aesthetic exploration" to "systematic maturity." The primary goal is to eliminate visual noise—specifically the overuse of high-contrast accents like Harvest and Sage—and re-anchor the entire system in a disciplined **Vinyl First** foundation.

This document outlines the core pillars of the V2 mission and the rules governing the new "Clean Slate" aesthetic.

---

## 1. The "Vinyl First" Discipline
The most significant shift in V2 is the demotion of accents. In V1, Harvest (Yellow) and Sage (Teal) were used as structural borders and primary text colors, creating a "noisy" and unrefined interface.

**The New Rule:**
> **Vinyl (#29004B) is the backbone.** It is the only color permitted for structural borders, primary text, and standard component backgrounds.

- **Primary System Color:** `system.color.primary` is now **Ink (Vinyl)**.
- **Accents:** Harvest and Sage are strictly **Sparse Technical Accents**. They are used *only* for toasts, data visualization, and specific "pull quote" moments. Scarcity equals impact.
- **Interaction:** Velvet (#720A63) is reserved exclusively for **Intent**. It marks the "active" layer (cursors, hover states, progress bars) and never appears as passive decoration.

## 2. Rhythmic Containers
V2 introduces a strict "Container Rhythm" to organize content density and visual hierarchy. We have codified four explicit container types in `tokens.draft.json`, moving away from ad-hoc styling.

| Type | Name | Purpose | Token Signature |
| :--- | :--- | :--- | :--- |
| **Type A** | **Backdrop Exposure** | Immersive intros. Content sits directly on the atmospheric background. | `system.container.backdrop` |
| **Type B** | **Full Bleed Plane** | The "Vanilla Deck." Standard reading and utility workspace. | `system.container.plane` |
| **Type C** | **Text Container** | Standard Card. Discrete information grouping with a defined border. | `system.container.card` |
| **Type D** | **Nested Component** | Compound layouts. Linen sub-cards on a Vanilla base. | `system.container.nested` |

## 3. Atmospheric Warmth
While the structure is disciplined (Vinyl), the atmosphere remains "Warm & Curious." We achieve this by:
- Replacing the "Clinical Teal" (Sage) glows with **Harvest/Sunset** gradients in the `studio-backdrop`.
- Using **Linen** and **Bone** for nested backgrounds instead of distinct greys, maintaining a "paper-like" tactility.
- Ensuring all shadows are tinted with **Vinyl** (`rgba(41, 0, 75, ...)`), not generic black, to keep the shadows rich and warm.

## 4. Technical Maturity (W3C DTCG)
The `tokens.draft.json` file is now the single source of truth for the design system. It follows the W3C Design Tokens Community Group (DTCG) specification, strictly separating:
- **Reference Tokens:** The raw values (Palette, Grid, Spacing).
- **System Tokens:** The semantic application (Background, Surface, Border).

This separation allows us to "theme" the application (e.g., swapping `system.color.primary` to a different reference) without breaking the component logic.

---

## Next Steps: The Claude V2 Projection
We are now ready to project this "Clean Slate" system onto the **Claude** variant of the agency home page. This involves:
1.  **Auditing current components** to identify "Harvest noise."
2.  **Mapping variables** to the new `system.container` tokens.
3.  **Refining the atmosphere** to match the V2 warmth.
