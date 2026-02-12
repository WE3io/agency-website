1. Outcome
- Analytics collection behavior is aligned with chosen consent policy and privacy constraints.

2. Constraints & References
- Consent behavior must follow the analytics ADR decision.
- No analytics payload may include user-provided brief answers or contact body text.
- References: `docs/PRD.md`, `docs/contributing-docs.md`.

3. Acceptance Checks
- Consent state handling implemented per decision (opt-in or documented default).
- Wrapper enforces property sanitization for blocked keys/patterns.
- Session replay remains disabled unless separately approved.
- Privacy behavior is documented for maintainers.

4. Explicit Non-Goals
- Cookie banner design overhaul unrelated to analytics behavior.
