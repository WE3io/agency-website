# Analytics Runbook

Operational guide for WE3 agency website analytics. See [ADR-0004](adr/ADR-0004-analytics-scope-and-privacy.md) for scope and privacy decisions.

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PUBLIC_POSTHOG_KEY` | Yes (to enable) | — | PostHog project API key |
| `PUBLIC_POSTHOG_HOST` | No | `https://eu.posthog.com` | PostHog API host |
| `PUBLIC_POSTHOG_DISABLED` | No | `false` | Set to `true` to force-disable analytics |

## Enable/Disable

- **Local dev:** Analytics disabled by default (`import.meta.env.DEV`). To test locally, set `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_DISABLED=false`.
- **Staging/Production:** Analytics enabled when `PUBLIC_POSTHOG_KEY` is set and `PUBLIC_POSTHOG_DISABLED` is not `true`.
- **Force disable:** Set `PUBLIC_POSTHOG_DISABLED=true` in any environment.

## Consent (Opt-In)

Per ADR-0004, analytics are opt-in. No events are sent until the user clicks "Accept" in the consent notice.

- **Storage:** Consent stored in `localStorage` under `we3_analytics_consent` (`true` = accepted, `false` = declined).
- **No cookies** for the consent preference itself.
- **Session replay:** Disabled. Not enabled regardless of consent.

## Property Sanitization

The wrapper strips unknown properties and blocks PII-like keys. See ADR-0004 for the full blocklist. Only allowlisted properties per event are sent.

## Event Catalog

| Event | Props | Trigger |
|-------|-------|---------|
| `brief_started` | — | User lands on brief page, first step shown |
| `brief_step_completed` | `stepId`, `stepIndex` | User completes a brief step |
| `brief_gap_detected` | `gapCount`, `gapTypes` | Brief results show gaps (warnings/critical) |
| `brief_gap_resolved` | — | User clicks "Start Over" after seeing gaps |
| `brief_completed` | `engagement`, `confidence` | Brief flow completes, results shown |
| `brief_export_markdown` | — | User copies brief as Markdown |
| `brief_export_json` | — | User downloads brief as JSON |
| `book_call_clicked` | `source` | User clicks Book a Call / Schedule Call link |
| `contact_submitted` | `subject` | User submits contact form (validation passed) |
| `cta_clicked` | `label`, `source` | User clicks Start Your Brief, Contact, Email Us, etc. |

## Manual Verification Checklist

With `PUBLIC_POSTHOG_KEY` set and consent accepted:

1. **brief_started** — Open `/brief`, confirm event in PostHog.
2. **brief_step_completed** — Complete one step, confirm `stepId` and `stepIndex`.
3. **brief_gap_detected** — Complete brief with short problem/success criteria, confirm `gapCount` and `gapTypes`.
4. **brief_gap_resolved** — With gaps shown, click "Start Over", confirm event.
5. **brief_completed** — Complete brief, confirm `engagement` and `confidence`.
6. **brief_export_markdown** — Click "Copy as Markdown", confirm event.
7. **brief_export_json** — Click "Download JSON", confirm event.
8. **book_call_clicked** — Click Book a Call (brief or contact), confirm `source`.
9. **contact_submitted** — Submit contact form, confirm `subject` only (no PII).
10. **cta_clicked** — Click Start Your Brief, Contact, or Email Us, confirm `label` and `source`.

## Negative Tests (PII Blocking)

In browser console with consent accepted:

```javascript
window.analytics?.track('contact_submitted', { subject: 'project', email: 'test@example.com' });
```

Confirm in PostHog: event has `subject` but not `email`. Repeat for `name`, `message`, `problem`, `users`, `successCriteria`, `constraints`.

## Troubleshooting

| Issue | Check |
|-------|-------|
| No events in PostHog | Consent accepted? `localStorage.getItem('we3_analytics_consent') === 'true'` |
| No events in PostHog | `PUBLIC_POSTHOG_KEY` set in build env? |
| No events in dev | Analytics disabled in dev by default. Set `PUBLIC_POSTHOG_DISABLED=false` and ensure key is set. |
| Wrong host | `PUBLIC_POSTHOG_HOST` — default `https://eu.posthog.com` |
| Events but wrong props | Check allowlist in `website/src/lib/analytics.ts` |
