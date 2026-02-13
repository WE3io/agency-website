# Documentation Workflow

## Principles
- Keep one canonical source for each durable topic.
- Prefer links over duplicated explanations.
- Archive historical context rather than deleting it.

## When to Update Docs
Update canonical docs whenever you change:
- Public routes or page responsibilities.
- Product scope, goals, or non-goals.
- Build/release assumptions.
- Team workflow for decisions or backlog handling.

## When to Create an ADR
Create an ADR in `docs/adr/` when a change:
- Alters architecture boundaries.
- Changes canonical documentation policy.
- Introduces or retires a workflow convention.
- Locks in a decision with long-lived tradeoffs.

## ADR Format
Each ADR file must include:
- `# ADR-XXXX: Title`
- `## Status`
- `## Context`
- `## Decision`
- `## Consequences`

## Backlog Lifecycle
- New executable work items are standalone markdown files in `backlog/active/`.
- Completed items move to `backlog/done/` with no additional tracker system.
- Each work item must use exactly four sections:
  1. Outcome
  2. Constraints & References
  3. Acceptance Checks
  4. Explicit Non-Goals

## Done Definition for Documentation Changes
A documentation task is done only when:
- Canonical docs are updated.
- Affected links resolve.
- Needed ADRs are added or updated.
- Any superseded docs are archived or stubbed.
