# Codex Progress Update — 2026-01-27

## Snapshot
We focused exclusively on the Codex variant and brought the baseline into compliance: deterministic local brief builder, token-first styling, variant-scoped CSS, explicit theme control, and PostHog hooks without PII.

## Decisions Locked (Codex)
- **IA**: Single‑page narrative with anchored sections + `/codex/brief` route that scrolls to the brief builder.
- **Brief Builder**: Local/deterministic, no external AI, exports human summary + JSON.
- **Theme**: Explicit `data-theme="light|dark"` (no prefers‑color‑scheme).
- **Tokens**: All visuals use `tokens.generated.css`; Codex has semantic color tokens for light/dark.
- **CSS Isolation**: All selectors scoped under `body[data-variant="codex"]`.
- **Analytics**: PostHog only; no PII; dev‑disabled.

## New/Updated Files (Codex)
- `website/src/variants/codex/layouts/CodexLayout.astro`
- `website/src/variants/codex/styles/codex.css`
- `website/src/variants/codex/components/Hero.astro`
- `website/src/variants/codex/components/Section.astro`
- `website/src/variants/codex/components/BriefBuilder.astro`
- `website/src/variants/codex/pages/Home.astro`
- `website/src/variants/codex/pages/Brief.astro`
- `website/src/pages/codex/index.astro`
- `website/src/pages/codex/brief.astro`

## Content (Codex)
Located at `website/src/content/pages/codex/*.md`:
- hero, why‑we3, who‑we‑serve, triad‑model, three‑layer‑team, engagement‑modes, pricing, case‑studies, community, values, contact.

## Token Changes
Updated `tokens/tokens.json` and regenerated:
- Added `color.codex.*` semantic tokens with light/dark values.
- Added typography weights and line heights.
- Added border width token.
- Regenerated `website/src/styles/tokens.generated.css` and `website/src/tokens/tokens.generated.ts`.

## Analytics (PostHog)
Integrated in `CodexLayout` with guardrails:
- Requires `PUBLIC_POSTHOG_KEY`.
- Defaults to EU host (`PUBLIC_POSTHOG_HOST` optional).
- Disabled in dev or if `PUBLIC_POSTHOG_DISABLED=true`.
- Autocapture off; only explicit events.

Events (no PII):
- `codex_brief_step_next`
- `codex_brief_step_back`
- `codex_brief_generated`
- `codex_brief_demo_loaded`
- `codex_brief_copy_summary`
- `codex_brief_download_json`

## Important Fix
Astro content collections error fixed by removing symlinked `src/content/pages` and `src/content/posts`.
- Now using real directories at `website/src/content/pages` and `website/src/content/posts`.
- Content copied in from repo‑level `content/`.
- `website/src/content/config.ts` updated to allow missing `title` frontmatter.

## Sitemap
- `docs/sitemap.md` created with Codex anchors + `/codex/brief` + `/codex/share/:token` stub.

## To Resume Next Time
1) Restart dev server (content directory change).
2) Review Codex UI and copy for polish.
3) Tighten fit‑check rules if needed (still deterministic).
4) Add a theme toggle UI for `data-theme` if desired.

