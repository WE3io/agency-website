# Adjustments to Gemini Plan for WE3 Website Experiment (Post-Conversation Baseline)

## 1) Updated Baseline (Applies to all variants)

- **Repo Arch**: Single Astro repo with side-by-side variant routes (e.g., /antigravity, /claude, /codex, /original) and matching folders under src/pages/<variant>/ and src/variants/<variant>/ (already in README).
- **Content Structure**: Use Astro-friendly collections-first layout.
  - `src/content/pages/{original,claude,codex,antigravity}/...`
  - `src/content/posts/{original,claude,codex,antigravity}/...` (if/when needed)
  - Optional shared truth: `src/content/shared/...`
  - Keep `src/content/config.ts` at the root.
  Promotion workflow stays simple: rename the winning variant folder to `original`, optionally keep others for future A/B but hide them in prod.

- **Styling**: Vanilla CSS only, tokens-first. tokens/tokens.json is the ONLY editable source. No hard-coded colors/spacing/type/radius in CSS.
- **Tokens Pipeline**: Use Style Dictionary now to generate and COMMIT outputs: src/styles/tokens.generated.css (CSS vars for light/dark) and src/tokens/tokens.generated.ts.
- **Themes**: Only light + dark themes. Align visual direction to Curated Collector Domestic.
- **Guardrails vs Creative Freedom**:
  - Baseline visual direction is **Curated Collector → Domestic** as a starting reference, not a confinement.
  - Each variant may extend with adjacent sub-themes and novel feature concepts (within WE3 spirit), as long as:
    - Any new visual ideas are expressed by **extending tokens** in `tokens/tokens.json` (no hard-coded CSS values).
    - Tokens remain semantic (intent-based) and support **light + dark** modes.
  - Keep the stack and isolation rules unchanged (vanilla CSS + tokens, scoped per variant, responsive across breakpoints).

- **Brief Builder**: V0 is deterministic and local (no external LLM/API). Must feel real with dummy data plumbed through. Full autonomy on steps/questions and output formats, but must export 1 human-readable artifact + 1 JSON artifact.
- **Pricing**: Public: fixed time, fixed price, fixed set of people (WE3), booked weekly; can mention parallel teams and successive weeks. Private until after brief: numeric weekly rate and detailed breakdown.
- **Case Studies**: Full autonomy on proof format and illustrative case studies, but must clearly label as illustrative; no real client logos/brands or implied real outcomes.
- **Analytics**: Integrate PostHog across all variants (same instance/project). Each variant may track different events and funnels because flows/pages differ. Guard rails: no PII in events or properties (no free text answers, names, emails); keep analytics privacy-friendly and configurable (easy to disable in dev).

- **A11Y**: No accessibility requirement for this experiment, but site must be responsive across common breakpoints.
- **Imagery**: Autonomy per variant, but no brand marks/client logos; prefer original/abstract/diagram/royalty-free.
- **Css Isolation**: Required: scope ALL variant CSS under a variant root selector/attribute so styles do not leak across variants.

## 2) What to change in this plan

1. In “Decisions & Recommendations”: remove the global decision to integrate PostHog; change to **analytics autonomy per variant** (no PII; ideally disabled by default in V0).
2. Remove/park the “External API / OpenAI / consent UI” plan for V0. Replace with: **no external AI calls**, deterministic local flow with dummy rules and outputs.
3. Styling: remove Tailwind/React assumptions. Set to **vanilla CSS + tokens** with Style Dictionary pipeline (tokens.json → committed CSS vars + TS tokens).
4. Sharing links: keep as optional future enhancement, but mark as **out of scope for V0** unless it can be done fully client-side without violating the privacy stance.
5. Fit Check proposal: replace budget-based table with WE3‑aligned logic (weekly booking, fixed team) and ensure numeric weekly rate is not shown. Output can state “pricing confirmed after brief.”
6. Content: update “shared content collection” assumption to variant content folders: `src/content/pages/<variant>/...` for easy promotion and deletion.
7. Add explicit **CSS isolation** requirement for antigravity variant (prefixed selectors under variant root).
8. Verification plan: keep responsive checks as required; accessibility checks can be deferred.

## 3) Suggested wording to paste into the LLM prompt

Use this plan as the starting point, but update it to match the baseline above.
Focus on design and narrative novelty, while keeping the stack consistent:
Astro + TypeScript, vanilla CSS powered by generated token variables (light/dark),
deterministic brief builder with dummy data, variant CSS isolation, and pricing posture
(fixed team/week, numeric rate after brief).

## 4) Checklist for the updated plan

- [ ] Includes tokens pipeline tasks (Style Dictionary) and committed generated outputs.
- [ ] Calls out content folder structure per variant (`src/content/pages/<variant>`).
- [ ] Defines brief builder as local/deterministic with dummy data and export requirement (human + JSON).
- [ ] States pricing posture correctly (fixed people public, numeric weekly rate private).
- [ ] Requires responsive design across breakpoints.
- [ ] Requires variant CSS isolation strategy.
- [ ] Allows autonomy on tone, IA, case study format, imagery, analytics instrumentation.