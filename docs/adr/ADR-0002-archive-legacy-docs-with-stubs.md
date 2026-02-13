# ADR-0002: Archive Legacy Docs with Stubs

## Status
Accepted

## Context
Legacy files were heavily referenced and included outdated architecture assumptions. Hard deletion would break known entry points and lose context.

## Decision
Move legacy docs to `docs/archive/legacy-2026-02/` and create short stubs at high-traffic legacy paths that redirect readers to canonical docs.

## Consequences
- Readers can still resolve old links.
- Archive remains searchable for project history.
- Active docs stay concise and current.
