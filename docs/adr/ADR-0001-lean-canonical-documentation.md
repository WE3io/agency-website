# ADR-0001: Lean Canonical Documentation Set

## Status
Accepted

## Context
Documentation had overlapping plan-era and variant-era files with no clear active boundary. This increased drift and slowed onboarding.

## Decision
Adopt a lean canonical docs set in `docs/`:
- `README.md`
- `PRD.md`
- `architecture.md`
- `sitemap.md`
- `contributing-docs.md`
- `adr/`

Historical documents remain accessible in an archive path and are non-authoritative.

## Consequences
- Canonical maintenance burden decreases.
- Historical context remains available without polluting active guidance.
- New top-level docs require explicit justification and likely an ADR.
