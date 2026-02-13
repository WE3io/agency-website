# ADR-0004: Analytics Scope and Privacy Model

## Status
Accepted

## Context
The agency website needs analytics to measure funnel performance (brief start/completion, contact conversion, CTA engagement) per PRD success metrics. Analytics must be privacy-first: no free-text or direct identifiers, explicit consent, and minimal scope.

## Decision

### Scope
**Minimal funnel.** Track only business-critical events:
- Brief: started, step completed, gap detected, gap resolved, completed, export (markdown/JSON)
- Contact: form submitted (subject only, no body)
- CTAs: clicked (label, source)
- Book a Call: clicked (source)

No page views, scroll depth, or broad instrumentation. Aligns with PRD success metrics.

### Consent
**Opt-in gated.** Analytics do not run until the user has given explicit consent. No tracking before consent. Consent state stored in localStorage; no cookies for analytics preference.

### Replay
**Disabled.** Session replay is not enabled. Replay would require separate approval and ADR.

### Retention
**12 months.** Event data retained for 12 months. Configurable in PostHog project settings.

### Environment Defaults
| Environment | Analytics |
|-------------|-----------|
| Local dev | Disabled by default. Enable via `PUBLIC_POSTHOG_KEY` + `PUBLIC_POSTHOG_DISABLED=false` |
| Staging | Enabled when key present; consent required |
| Production | Enabled when key present; consent required |

### PII Exclusions
The following must never be sent as event properties:
- `email`, `name`, `message`, `problem`, `users`, `successCriteria`, `constraints`
- Any free-text user input (brief answers, contact body)
- Direct identifiers (phone, address, IP-derived identifiers beyond session)

Allowlist enforcement: only approved event names and property shapes are emitted. Unknown properties are stripped.

### brief_gap_resolved Semantics
Fire when the user clicks "Start Over" after seeing gaps in the brief results. Captures intent to improve the brief.

## Consequences
- Funnel visibility without PII risk.
- Opt-in may reduce event volume; acceptable for privacy posture.
- Wrapper must enforce allowlist and consent check before any backend call.
- Runbook must document env setup and consent behavior for maintainers.
