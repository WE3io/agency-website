# Phase 2: Documentation Alignment — Findings

**Date:** 2026-02-12  
**Status:** Complete

## Summary

Documentation has significant misalignment with the current single-site architecture. User-specific paths, stale sitemap and onboarding, missing token file reference, and orphaned asset references. Apply Documentation Lens: single source of truth, avoid duplication, position the reader.

---

## Issues

### 1. User-specific file:// paths [High]

| File | Paths |
|------|-------|
| [docs/README.md](../README.md) | `file:///Users/chadcribbins/Work/WE3io/_studio/agency-website/docs/...` |
| [agency-build-plan-gemini.md](../agency-build-plan-gemini.md) | `file:///Users/chadcribbins/Work/WE3io/_studio/agency-website/website/...` |
| [agency-build-plan-claude.md](../agency-build-plan-claude.md) | `cd /Users/chadcribbins/Work/WE3io/_studio/agency-website/website` |
| [claude-variant-progress.md](../claude-variant-progress.md) | Same |
| [antigravity-build-task-list.md](../antigravity-build-task-list.md) | Same |
| [antigravity-build-walkthrough.md](../antigravity-build-walkthrough.md) | Image paths with chadcribbins |

**Recommendation:** Replace with relative paths, e.g. `[WE3-PRD-v0.2.md](WE3-PRD-v0.2.md)`. For commands, use `cd website` (relative to project root).

---

### 2. Sitemap describes deprecated architecture [High]

| Item | Detail |
|------|--------|
| **Location** | [sitemap.md](../sitemap.md) |
| **Issue** | Describes Codex single-page structure: `/codex/` with anchored sections (#why-we3, #who-we-serve, etc.), `/codex/brief`, `/codex/share/:token` |
| **Actual** | Multi-page site: `/`, `/story`, `/model`, `/engagements`, `/work`, `/contact`, `/brief`, `/tools`, `/style-guide`, `/logo-iterator`, `/404`, `/500` |
| **Recommendation** | Rewrite sitemap to match [README.md](../../README.md) pages table |

---

### 3. Agent onboarding describes multi-variant structure [High]

| Item | Detail |
|------|--------|
| **Location** | [agent-onboarding.md](../agent-onboarding.md) |
| **Issue** | Describes Claude/Codex variants, `src/variants/`, `src/pages/[agent-name]/` |
| **Actual** | Single-build site. No `src/variants/`. Flat page structure in `website/src/pages/` |
| **Recommendation** | Rewrite for current single-site architecture or retire and replace with current onboarding |

---

### 4. tokens.draft.json does not exist [Medium]

| Item | Detail |
|------|--------|
| **Location** | [style-guide-v2-mission.md](../style-guide-v2-mission.md) |
| **Issue** | References `tokens.draft.json` as "single source of truth" for design system |
| **Actual** | File not found. Project uses `tokens/tokens.json` and Style Dictionary |
| **Recommendation** | Update reference to `tokens/tokens.json` or create `tokens.draft.json` if V2 tokens are separate |

---

### 5. todo-brand.md references archived asset [Medium]

| Item | Detail |
|------|--------|
| **Location** | [todo-brand.md](../todo-brand.md) |
| **Issue** | "Logo: `public/images/logo-placeholder.svg`" |
| **Actual** | Asset archived to `_archive/images/logo-placeholder.svg`. Current logos: `public/images/logos/claude.svg`, `warm.svg` |
| **Recommendation** | Update to current logo paths or remove placeholder reference |

---

### 6. Broken reference in TODO.md [Medium]

| Item | Detail |
|------|--------|
| **Location** | [TODO.md](../../TODO.md) Reference section |
| **Issue** | Links to `cursor_branch_commit_comparison.md` — file does not exist |
| **Recommendation** | Remove reference or restore file |

---

### 7. Plan docs: which is canonical? [Decision]

| Doc | Content |
|-----|---------|
| agency-build-plan-claude.md | Claude variant build plan |
| agency-build-plan-codex.md | Codex variant build plan |
| agency-build-plan-gemini.md | Gemini variant build plan |
| plan-adjustments-claude.md | Adjustments |
| plan-adjustments-codex.md | Adjustments |
| plan-adjustments-gemini.md | Adjustments |

**Issue:** Three variant plans. Current site is single-build. Unclear which (if any) reflects shipped implementation.

**Recommendation:** Decide: archive all as historical, or designate one as canonical reference for future work.

---

### 8. PRD version [Decision]

| Doc | Status |
|-----|--------|
| WE3-PRD-v0.1.md | Earlier |
| WE3-PRD-v0.2.md | Later, "Draft" |

**Recommendation:** Confirm v0.2 as active. Update or remove v0.1 if superseded.

---

## Documentation Lens Alignment

Apply principle: *"Document to position the reader, state only durable contracts, include detail when long-term value exceeds maintenance cost."*

| Signal | Finding |
|--------|---------|
| Possible duplication | Multiple plan docs (claude, codex, gemini) overlap. Plan-adjustments docs add another layer. |
| Misplacement | agent-onboarding.md lives in docs/ but describes architecture that no longer exists |
| Verbosity | Some plan docs may have low long-term value if superseded by implementation |

---

## Claude Commands vs Project State

| Command | References | Exists? |
|---------|-------------|---------|
| track.md | nimbalyst-local/tracker/ | No |
| track-bug.md | nimbalyst-local/tracker/bugs.md | No |
| track-idea.md | nimbalyst-local/tracker/ideas.md | No |
| mockup.md | nimbalyst-local/existing-screens/, mockups/ | No |
| plan.md | nimbalyst-local/plans/ | Yes (plans/.gitkeep only) |

**Recommendation:** Align commands with project state (Phase 0).

---

## Canonical Documentation Strategy

1. **Replace** all `file:///Users/chadcribbins/...` with relative paths.
2. **Update** sitemap.md to match actual routes.
3. **Rewrite or retire** agent-onboarding.md.
4. **Update** style-guide-v2-mission.md tokens reference.
5. **Update** todo-brand.md logo reference.
6. **Remove** broken cursor_branch_commit_comparison reference from TODO.md.
7. **Decide** canonical plan doc and PRD version.

---

## Decisions Needed

- Which plan doc (if any) is canonical?
- Is WE3-PRD-v0.2 the active PRD?
- Nimbalyst: create tracker structure or update commands?

---

## Next Phase

Proceed to Phase 3: Improvement Opportunities.
