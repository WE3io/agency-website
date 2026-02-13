/**
 * WE3 Analytics Wrapper
 *
 * Typed, allowlist-enforced analytics. App code must use this as the only entrypoint.
 * Unknown properties are stripped. PII-like keys are blocked.
 *
 * See ADR-0004 for scope, consent, and privacy model.
 */

const SCHEMA_VERSION = '1';

/** PII-like key tokens that must never be sent. ADR-0004. */
const PII_BLOCKLIST = new Set([
  'email',
  'name',
  'message',
  'problem',
  'users',
  'successCriteria',
  'constraints',
  'phone',
  'address',
]);

const PII_BLOCK_PATTERNS: RegExp[] = [
  /email/i,
  /name/i,
  /message/i,
  /problem/i,
  /users?/i,
  /success[-_ ]?criteria/i,
  /constraints?/i,
  /phone/i,
  /address/i,
];

/** Allowed event names. Extend when adding new events. */
export type AnalyticsEvent =
  | 'brief_started'
  | 'brief_step_completed'
  | 'brief_gap_detected'
  | 'brief_gap_resolved'
  | 'brief_completed'
  | 'brief_export_markdown'
  | 'brief_export_json'
  | 'book_call_clicked'
  | 'contact_submitted'
  | 'cta_clicked';

type AnalyticsPropsByEvent = {
  brief_started: Record<string, never>;
  brief_step_completed: { stepId: string; stepIndex: number };
  brief_gap_detected: { gapCount: number; gapTypes: string[] };
  brief_gap_resolved: Record<string, never>;
  brief_completed: { engagement: string; confidence: string };
  brief_export_markdown: Record<string, never>;
  brief_export_json: Record<string, never>;
  book_call_clicked: { source: string };
  contact_submitted: { subject: string };
  cta_clicked: { label: string; source: string };
};

/** Allowed property keys per event. Unknown keys are stripped. */
const EVENT_PROP_ALLOWLIST: Record<AnalyticsEvent, Set<string>> = {
  brief_started: new Set(),
  brief_step_completed: new Set(['stepId', 'stepIndex', 'schema']),
  brief_gap_detected: new Set(['gapCount', 'gapTypes', 'schema']),
  brief_gap_resolved: new Set(['schema']),
  brief_completed: new Set(['engagement', 'confidence', 'schema']),
  brief_export_markdown: new Set(['schema']),
  brief_export_json: new Set(['schema']),
  book_call_clicked: new Set(['source', 'schema']),
  contact_submitted: new Set(['subject', 'schema']),
  cta_clicked: new Set(['label', 'source', 'schema']),
};

function isBlockedKey(key: string): boolean {
  const normalized = key.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (PII_BLOCKLIST.has(normalized)) return true;
  return PII_BLOCK_PATTERNS.some((pattern) => pattern.test(key));
}

function sanitizeProps(
  event: string,
  props?: Record<string, unknown>
): Record<string, unknown> {
  if (!props || typeof props !== 'object') return { schema: SCHEMA_VERSION };

  const allowlist =
    EVENT_PROP_ALLOWLIST[event as AnalyticsEvent];
  if (!allowlist) return { schema: SCHEMA_VERSION };

  const out: Record<string, unknown> = { schema: SCHEMA_VERSION };

  for (const [key, value] of Object.entries(props)) {
    if (isBlockedKey(key)) continue;
    if (!allowlist.has(key)) continue;
    if (value !== undefined && value !== null) {
      out[key] = value;
    }
  }

  return out;
}

/** Forward function. Set by init when PostHog is enabled. */
let forward: ((event: string, props: Record<string, unknown>) => void) | null =
  null;

/**
 * Set the forward function. Called by init when analytics backend is ready.
 * @internal
 */
export function setAnalyticsForward(
  fn: (event: string, props: Record<string, unknown>) => void
): void {
  forward = fn;
}

/**
 * Track an analytics event. Properties are validated and sanitized.
 * Unknown or PII-like properties are stripped.
 */
export function track<E extends AnalyticsEvent>(
  event: E,
  props?: AnalyticsPropsByEvent[E]
): void {
  const sanitized = sanitizeProps(event, props as Record<string, unknown> | undefined);
  forward?.(event, sanitized);
}
