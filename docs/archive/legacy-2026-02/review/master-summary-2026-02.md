# Systematic Project Review — Master Summary

**Date:** 2026-02-12  
**Project:** agency-website (WE3)  
**Scope:** One-time review across code health, documentation, opportunities, and marketing best practices

---

## Executive Summary

The agency-website build is healthy and deployable. Documentation is significantly misaligned with the current single-site architecture. Highest-impact fixes: add token build to CI, fix documentation paths and sitemap, add Open Graph/Twitter meta tags. Content and tracking system decisions require human input.

---

## Findings by Severity

### Critical

None.

### High

| # | Issue | Phase | Fix |
|---|-------|-------|-----|
| 1 | Token pipeline not in CI | 1 | Add `pnpm run tokens:build` before `astro build` |
| 2 | Nimbalyst tracker structure missing | 0 | Create `nimbalyst-local/tracker/` or update commands |
| 3 | Nimbalyst mockup directories missing | 0 | Create dirs or update commands |
| 4 | User-specific file:// paths in docs | 2 | Replace with relative paths |
| 5 | Sitemap describes deprecated Codex structure | 2 | Rewrite to match actual routes |
| 6 | Agent onboarding describes multi-variant | 2 | Rewrite or retire |
| 7 | Open Graph / Twitter Cards missing | 4 | Add meta tags to Layout |

### Medium

| # | Issue | Phase | Fix |
|---|-------|-------|-----|
| 8 | Content collection dirs missing (build warnings) | 1 | Create `pages/` and `posts/` or remove config |
| 9 | tokens.draft.json referenced but missing | 2 | Update to tokens.json or create file |
| 10 | todo-brand references archived logo | 2 | Update to current logo paths |
| 11 | Broken cursor_branch_commit_comparison ref | 0, 2 | Remove from TODO.md |
| 12 | Brief form inputs lack explicit labels | 1 | Add aria-label using step prompt |
| 13 | Canonical URL missing | 4 | Add to Layout head |
| 14 | Placeholder case studies, testimonial, stats | 3, 4 | Human input: real content |

### Low

| # | Issue | Phase | Fix |
|---|-------|-------|-----|
| 15 | Duplicate path check (Layout.astro line 30) | 1 | Remove redundant `\|\| currentPath === "/"` |
| 16 | defualt.json typo | 1 | Rename to default.json |
| 17 | pnpm audit: 1 low (qs) | 1 | Update transitive deps |
| 18 | CI Node 20 vs Volta 22 | 1 | Align or document |
| 19 | Package layout (npm + pnpm) | 0 | Clarify or clean up |
| 20 | View Source buttons href="#" | 3 | Add real GitHub URLs |

---

## Phase Reports

| Phase | Report | Key Output |
|-------|--------|------------|
| 0 | [phase-0-findings-2026-02.md](phase-0-findings-2026-02.md) | Tracker mismatch, broken refs |
| 1 | [phase-1-findings-2026-02.md](phase-1-findings-2026-02.md) | Build OK, 1 vuln, token CI gap |
| 2 | [phase-2-findings-2026-02.md](phase-2-findings-2026-02.md) | Doc alignment, stale content |
| 3 | [phase-3-findings-2026-02.md](phase-3-findings-2026-02.md) | Improvement opportunities |
| 4 | [phase-4-findings-2026-02.md](phase-4-findings-2026-02.md) | Performance, SEO, marketing |

---

## Recommended Prioritization

### Immediate (can do now)

- Fix duplicate path check (1 min)
- Add token build to CI (30 min)
- Remove broken TODO reference (1 min)
- Create content collection dirs to silence warnings (2 min)

### Short-term (this sprint)

- Replace file:// paths in docs with relative paths
- Rewrite sitemap to match actual routes
- Add Open Graph and Twitter Card meta tags
- Add canonical URL

### Requires Human Input

- Nimbalyst: create tracker or update commands
- Plan doc: which is canonical?
- PRD: confirm v0.2 active
- Case studies, testimonial, stats: real content
- Currency ($ vs £) decision
- Token/site config decisions (body class, favicon)

### Manual Verification

- Run Lighthouse/PageSpeed on https://we3.io

---

## Decisions Needed

1. **Nimbalyst:** Active or retire? Create tracker or use TODO.md?
2. **Plan docs:** Canonical reference or archive all?
3. **PRD:** v0.2 confirmed active?
4. **Content:** Who provides case studies, testimonial, stats?
5. **Currency:** $ or £ for budget ranges?

---

## What Went Well

- Build succeeds; 13 pages generated
- File sizes under 64KB
- Contact form has proper labels
- Skip link and semantic HTML in place
- External links use noopener noreferrer
- Value proposition clear above fold
- Conversion paths (brief, contact) well structured
