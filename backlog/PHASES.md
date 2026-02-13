# Backlog Phasing Plan

This file chunks `backlog/active` work items into implementation phases with dependency order.

## Phase 0: Documentation Foundation (Completed)
Purpose: Establish canonical docs, archive legacy material, and lock documentation governance.

Work items:
1. `backlog/active/create-canonical-docs-ia.md`
2. `backlog/active/author-merged-prd.md`
3. `backlog/active/write-architecture-and-sitemap.md`
4. `backlog/active/establish-adr-system.md`
5. `backlog/active/archive-legacy-docs-and-add-stubs.md`
6. `backlog/active/remove-nimbalyst-artifacts.md`
7. `backlog/active/normalize-doc-links-and-validate.md`
8. `backlog/active/publish-doc-governance.md`

Exit criteria:
- Canonical docs exist and are linked from `docs/README.md`.
- Legacy docs are archived and stubs are present for high-traffic paths.
- Removed workflow references are absent from active docs/backlog.

## Phase 1: Analytics Decisions and Technical Foundation
Purpose: Lock analytics policy and implement the reusable instrumentation base.

Work items:
1. `backlog/active/decide-analytics-scope-and-privacy-model.md`
2. `backlog/active/implement-analytics-wrapper-and-event-schema.md`
3. `backlog/active/integrate-posthog-env-gated.md`

Dependencies:
- Item 1 must complete before Items 2 and 3 are finalized.
- Item 2 (wrapper/schema) should be in place before item 3 wiring is considered complete.

Exit criteria:
- ADR exists for analytics scope/consent/replay/retention.
- Typed wrapper exists with allowlist enforcement.
- PostHog is env-gated and disabled by default in local dev.

## Phase 2: Privacy Enforcement and Funnel Instrumentation
Purpose: Implement approved event tracking with explicit privacy guardrails.

Work items:
1. `backlog/active/add-consent-and-privacy-guards-for-analytics.md`
2. `backlog/active/instrument-brief-contact-and-cta-funnels.md`

Dependencies:
- Requires Phase 1 completion.
- Consent behavior must follow analytics ADR from Phase 1.

Exit criteria:
- Consent and sanitization controls are active.
- Core funnel events are instrumented through wrapper only.
- No free-text or direct identifier payloads are emitted.

## Phase 3: Validation and Operations
Purpose: Verify event correctness and make analytics supportable by maintainers.

Work items:
1. `backlog/active/validate-analytics-events-and-create-operator-runbook.md`

Dependencies:
- Requires Phase 2 completion.

Exit criteria:
- Event checklist passes in production-like config.
- Negative PII tests pass.
- Runbook exists and is linked from canonical docs.

## Recommended Execution Sequence
1. Complete all open tasks in Phase 1.
2. Complete both tasks in Phase 2.
3. Complete Phase 3 validation/runbook.
4. Move finished items from `backlog/active` to `backlog/done` as each item closes.

## Notes
- Phase 0 items are already implemented in the repo and can be moved to `backlog/done` in a follow-up housekeeping pass.
- Avoid parallel work on Phase 1 and Phase 2 items that could diverge event schema decisions.
