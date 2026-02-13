1. Outcome
- A locked analytics decision set exists for event scope, consent model, replay policy, and retention window.

2. Constraints & References
- Use explicit-event model only; avoid collection of free-text inputs and direct identifiers.
- References: `docs/PRD.md`, `docs/contributing-docs.md`, `docs/adr/README.md`.

3. Acceptance Checks
- A new ADR captures decisions for:
  - scope: minimal funnel vs full funnel
  - consent behavior: immediate vs opt-in gated
  - replay policy: disabled vs conditional
  - retention period target
- Decision includes default env behavior for dev/staging/production.
- Decision explicitly states PII exclusions.

4. Explicit Non-Goals
- No SDK installation or code instrumentation in this item.
