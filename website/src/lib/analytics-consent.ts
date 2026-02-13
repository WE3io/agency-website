/**
 * Analytics consent state. ADR-0004: opt-in gated.
 * Stored in localStorage; no cookies for consent preference.
 */

const CONSENT_KEY = 'we3_analytics_consent';

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAnalyticsConsent(consented: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_KEY, consented ? 'true' : 'false');
  } catch {
    /* ignore */
  }
}
