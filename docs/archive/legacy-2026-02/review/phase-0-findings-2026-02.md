# Phase 0: Cross-Cutting Review — Findings

**Date:** 2026-02-12  
**Status:** Complete

## Summary

Phase 0 surfaces integration points that affect multiple phases. Key findings: Nimbalyst tracker structure is missing, TODO references a non-existent file, and package layout uses two package managers.

---

## Issues

### 1. Nimbalyst tracker structure missing [High]

| Item | Detail |
|------|--------|
| **Location** | `.claude/commands/track.md`, `track-bug.md`, `track-idea.md` |
| **Issue** | Commands reference `nimbalyst-local/tracker/bugs.md`, `ideas.md`, `tasks.md`, `decisions.md` — directory does not exist |
| **Actual** | Only `nimbalyst-local/plans/.gitkeep` exists |
| **Impact** | Track commands will fail when creating items in global tracker |

**Recommendation:** Either create `nimbalyst-local/tracker/` with the expected files, or update commands to use `TODO.md` (which uses different inline syntax).

---

### 2. Nimbalyst mockup directories missing [High]

| Item | Detail |
|------|--------|
| **Location** | `.claude/commands/mockup.md`, `plan.md` |
| **Issue** | References `nimbalyst-local/existing-screens/`, `nimbalyst-local/mockups/` — directories do not exist |
| **Impact** | Mockup and plan commands may fail when creating files |

**Recommendation:** Create directories if Nimbalyst integration is active; otherwise mark commands as deprecated or update paths.

---

### 3. Broken reference in TODO.md [Medium]

| Item | Detail |
|------|--------|
| **Location** | [TODO.md](../TODO.md) line 293 |
| **Issue** | Links to `cursor_branch_commit_comparison.md` — file does not exist |
| **Impact** | Dead link in Reference section |

**Recommendation:** Remove the reference or add the file if it exists elsewhere.

---

### 4. Package layout [Low]

| Item | Detail |
|------|--------|
| **Location** | Project root |
| **Issue** | Root has `package-lock.json` (npm); `website/` has `package.json` and `pnpm-lock.yaml` (pnpm) |
| **Impact** | Two package managers. Root lockfile is minimal. Website is the primary app. |

**Recommendation:** Clarify intended setup. Consider removing root `package-lock.json` if unused, or document why both exist.

---

## Decisions Needed

- **Nimbalyst integration**: Is Nimbalyst active? If yes, create tracker/mockup directories. If no, update or retire commands.
- **Tracking system**: Standardize on `TODO.md` inline format or Nimbalyst tracker structure.

---

## Next Phase

Proceed to Phase 1: Code and Build Health.
