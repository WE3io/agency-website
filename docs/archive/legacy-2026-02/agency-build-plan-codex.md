# Agency Build Plan — Codex (Updated Baseline)

## Purpose
Build three presentable Astro variants (A/B/C) of the WE3 agency front desk that align to PRD v0.2, with a deterministic local Brief Builder, tokens-first styling, and isolated CSS per variant.

## Baseline Decisions (Locked)
- **Repo Architecture:** One Astro repo with side‑by‑side variant routes (`/antigravity`, `/claude`, `/codex`, `/original`) and matching folders under `src/pages/<variant>/` and `src/variants/<variant>/`.
- **Content Structure:** Collections‑first.
  - `src/content/pages/{original,claude,codex,antigravity}/...`
  - `src/content/posts/{original,claude,codex,antigravity}/...` (if needed)
  - Optional shared truth: `src/content/shared/...`
  - `src/content/config.ts` at repo root.
  - Promotion workflow: rename winning variant folder to `original`.
- **Styling:** Vanilla CSS only; tokens‑first. **No hard‑coded colors/spacing/type/radius** in CSS.
- **Tokens Pipeline:** Source of truth in `tokens/tokens.json`. Use Style Dictionary to generate and **commit**:
  - `src/styles/tokens.generated.css` (light/dark CSS vars)
  - `src/tokens/tokens.generated.ts`
- **Themes:** Light + dark only. Visual direction anchored to **Curated Collector → Domestic** as the baseline.
  - Variants may **extend** the baseline with adjacent sub‑themes, experimental layouts, and novel feature concepts.
  - Any new visual ideas must be expressed via **token extensions** (still in `tokens/tokens.json`) rather than hard‑coded CSS.
- **Brief Builder (v0):** Local, deterministic, rules‑only flow with **dummy data** plumbed through. Must export **1 human‑readable artifact + 1 JSON artifact**.
- **Pricing Posture:** Publicly state fixed time, fixed price, fixed WE3 team booked weekly (optionally parallel teams/successive weeks). Numeric weekly rate + detailed breakdown are **private until after brief**.
- **Case Studies:** Illustrative only; **no real logos/brands**, clearly labeled as illustrative.
- **Analytics:** PostHog integrated across all variants (same instance). Variant‑owned events allowed. **No PII** (no free‑text answers, names, or emails in events). Must be easy to disable in dev.
- **A11Y:** Not a requirement for this experiment, but **responsive across breakpoints** is required.
- **Imagery:** Autonomy per variant; no brand marks/client logos; prefer original/abstract/diagram/royalty‑free.
- **CSS Isolation:** Required. Scope all variant CSS under a variant root selector/attribute to prevent cross‑variant leakage.

## Guardrails vs Creative Freedom
- **Guardrails:** Curated Collector → Domestic is the shared mood, tokens‑first, CSS isolation, deterministic Brief Builder, and pricing posture are non‑negotiable.
- **Creative Freedom:** Variants can push into adjacent sub‑themes (gallery / refined / playful / editorial), invent novel sections for unrealized features, and introduce new component patterns **as long as** they are token‑driven and align with the clarity‑first story.

## Phase 1 — Information Architecture
- Define core narrative sections (per PRD):
  - Why WE3 exists + market shift
  - Triad + three‑layer team model
  - Engagement modes
  - Proof / case studies
  - Community engagement
  - Values
  - Brief Builder CTA + flow
- Decide page structure (single narrative page vs multi‑page with `/brief`).

Deliverable: Mermaid sitemap in `docs/sitemap.md` and PRD appendix updated to repo‑relative link.

**Codex decision:** single‑page narrative with anchored sections, plus `/codex/brief` as a dedicated entry that lands on the brief flow.

## Phase 2 — Variant Architecture
- Confirm routing + folder conventions.
- Add content folders per variant under `src/content/pages/<variant>/...`.
- Define shared vs variant‑specific assets.

Deliverable: `docs/variant-architecture.md` or a section in this plan.

## Phase 3 — Visual Direction (Per Variant)
- A (Gemini/Antigravity): Curated Collector → Domestic interpretation, with optional gallery/refined extensions.
- B (Claude): Curated Collector → Domestic with narrative/editorial tilt and experimental story sections.
- C (Codex): Curated Collector → Domestic with system/tool clarity and novel feature exploration.

Deliverable: per‑variant visual brief (type, palette, rhythm, imagery rules).

## Phase 4 — Tokens & Component Inventory
- Build tokens in `tokens/tokens.json`.
- Run Style Dictionary → commit generated CSS/TS.
- Define component inventory:
  - Hero, narrative blocks, triad diagram, engagement cards, proof cards, CTA, brief flow components.

Deliverable: token pipeline + component list per variant.

## Phase 5 — Brief Builder Definition (Deterministic)
- Define step sequence + gap checks (autonomy allowed).
- Define output format + export targets (human artifact + JSON).
- Define pricing disclosure (public teaser + private numeric post‑brief).

Deliverable: rules‑only flow spec + stubbed UI.

## Phase 6 — Implementation Backlog
- Build variants in Astro with isolated CSS:
  1) Shell + navigation + global tokens
  2) Narrative sections (story/model/engagements)
  3) Proof/case studies (illustrative)
  4) Brief Builder (local)
  5) Export + fit‑check rendering
  6) Privacy + pricing copy
  7) Analytics hooks (optional; variant‑owned)

Deliverable: prioritized tasks + dependencies.

## Acceptance Criteria (Experiment)
- Three presentable variants live under `/antigravity`, `/claude`, `/codex`.
- Each variant tells the WE3 story, model, and engagement modes clearly.
- Brief Builder feels real (deterministic + dummy data), exports human + JSON artifacts.
- Pricing posture is correctly handled (public teaser, private numeric rate after brief).
- Responsive across common breakpoints.
- Variant CSS isolation confirmed.

## Open Questions (to resolve as we go)
1) Single‑page vs multi‑page structure per variant?
2) Where does the brief flow live (`/brief` vs embedded)?
3) What illustrative proof formats do we want to standardize (if any)?
4) Which analytics events are variant‑specific vs shared?
5) Any shared components or tokens across variants?
