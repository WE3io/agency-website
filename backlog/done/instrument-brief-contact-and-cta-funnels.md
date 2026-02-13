1. Outcome
- High-intent funnel events are instrumented across brief, contact, and primary CTA paths.

2. Constraints & References
- Track only approved events and non-PII properties.
- Prioritize business-critical flow visibility over broad page instrumentation.
- References: `docs/PRD.md`, `website/src/pages/brief.astro`, `website/src/pages/contact.astro`, `website/src/layouts/Layout.astro`.

3. Acceptance Checks
- Implemented event set includes:
  - `brief_started`
  - `brief_step_completed`
  - `brief_gap_detected`
  - `brief_gap_resolved`
  - `brief_completed`
  - `brief_export_markdown`
  - `brief_export_json`
  - `book_call_clicked`
  - `contact_submitted`
  - `cta_clicked`
- Each event has a documented property contract and no free-text payloads.
- Instrumentation paths are covered by manual test checklist.

4. Explicit Non-Goals
- Session replay instrumentation.
