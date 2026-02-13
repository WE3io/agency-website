1. Outcome
- A typed analytics wrapper and strict event schema are implemented so app code can only emit approved events and properties.

2. Constraints & References
- Wrapper is the only analytics entrypoint used by app code.
- Enforce an event/property allowlist; drop unknown properties.
- References: `docs/PRD.md`, `docs/contributing-docs.md`.

3. Acceptance Checks
- `website/src/lib/analytics.ts` (or equivalent) exists with:
  - `track(event, props)` API
  - strongly-typed event names and property shapes
  - schema/version field support
- Unknown event properties are rejected or stripped.
- Wrapper contains guards preventing PII-like keys (`email`, `name`, `message`, etc.).

4. Explicit Non-Goals
- No funnel event placement in pages/components.
