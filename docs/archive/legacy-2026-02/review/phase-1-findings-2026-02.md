# Phase 1: Code and Build Health — Findings

**Date:** 2026-02-12  
**Status:** Complete

## Summary

Build succeeds. One low dependency vulnerability. Duplicate path check confirmed. File sizes under 64KB. Accessibility: skip link and contact form labels OK; brief form inputs lack explicit labels.

---

## Issues

### 1. Duplicate path check [Low]

| Item | Detail |
|------|--------|
| **Location** | [Layout.astro](../../website/src/layouts/Layout.astro) line 30 |
| **Issue** | `currentPath === "/" || currentPath === "/"` — redundant condition |
| **Fix** | Remove duplicate: `currentPath === "/"` |

---

### 2. Typo: defualt.json [Low]

| Item | Detail |
|------|--------|
| **Location** | `logo iterator/defualt.json` |
| **Issue** | Filename typo — should be `default.json` |
| **Fix** | Rename file. Update any references in logo iterator. |

---

### 3. pnpm audit: 1 low vulnerability [Low]

| Item | Detail |
|------|--------|
| **Package** | qs (transitive) |
| **Issue** | qs <=6.14.1 — arrayLimit bypass in comma parsing (DoS) |
| **Patched** | >=6.14.2 |
| **Fix** | Run `pnpm update` or ensure transitive deps use patched version |

---

### 4. Content collection directories missing [Medium]

| Item | Detail |
|------|--------|
| **Location** | Build output |
| **Issue** | Warnings: `src/content/posts/` and `src/content/pages/` do not exist |
| **Impact** | Content collections are configured but unused. Warnings on every build. |
| **Fix** | Create directories (even empty) or remove collections from config if not yet used |

---

### 5. CI: Token pipeline not run [High]

| Item | Detail |
|------|--------|
| **Location** | [.github/workflows/build.yml](../../.github/workflows/build.yml) |
| **Issue** | CI runs `pnpm run build` only. Does not run `pnpm run tokens:build` before build |
| **Impact** | If tokens change, generated CSS must be committed manually. CI could pass with stale tokens. |
| **Fix** | Add `pnpm run tokens:build` before `astro build` in CI, or add prebuild script |

---

### 6. CI: Node version mismatch [Low]

| Item | Detail |
|------|--------|
| **Location** | package.json volta node 22.22.0 vs CI Node 20 |
| **Issue** | Volta pins Node 22; CI uses Node 20 |
| **Impact** | Build works on both. Minor version drift. |
| **Fix** | Align CI to Node 22 if desired, or document Node 20 as minimum |

---

## Accessibility

| Check | Status | Notes |
|-------|--------|-------|
| Skip link | Pass | `#main-content` exists in Layout.astro line 168; all pages use Layout |
| Contact form labels | Pass | All inputs have `label for="id"` |
| Brief form labels | Gap | Dynamic textarea/select use `id="inputField"`; no `<label>` or `aria-label`. Question text in chat bubble provides context but not formal association |
| Semantic HTML | Pass | `main`, `nav`, `header`, `footer`; `aria-label` on nav |

**Recommendation:** Add `aria-label` to brief form inputs using the step's prompt text for better screen reader support.

---

## File Sizes (64KB guidance)

| File | Size | Status |
|------|------|--------|
| Layout.astro | ~30 KB | OK |
| global.css | ~23 KB | OK |
| brief.astro | ~29 KB | OK |

---

## Security

| Check | Status |
|-------|--------|
| Hardcoded secrets | None found |
| .gitignore env | .gitignore does not explicitly list .env; consider adding |
| pnpm audit | 1 low (qs) |

---

## Build Verification

- **Build:** Success (13 pages)
- **Output:** dist/ contains expected routes (index, story, model, engagements, work, contact, brief, tools, style-guide, logo-iterator, 404, 500, 503)

---

## Decisions Needed

- None blocking. Token pipeline in CI is a clear fix.

---

## Next Phase

Proceed to Phase 2: Documentation Alignment.
