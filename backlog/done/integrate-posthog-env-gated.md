1. Outcome
- PostHog is integrated behind environment flags with safe defaults and explicit initialization controls.

2. Constraints & References
- Default posture: analytics disabled in local dev unless explicitly enabled.
- `autocapture` must be disabled.
- References: `website/package.json`, `website/src/layouts/Layout.astro`, `docs/contributing-docs.md`.

3. Acceptance Checks
- PostHog dependency added and initialized via wrapper pathway.
- Environment variables documented and wired (key, host, enabled/disabled flag).
- Initialization is no-op when disabled or missing key.
- No inline analytics snippet bypassing wrapper.

4. Explicit Non-Goals
- No event dashboard or reporting configuration.
