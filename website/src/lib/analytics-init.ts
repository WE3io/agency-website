/**
 * Analytics initialization. Runs in browser.
 * Initializes PostHog when env is configured; exposes window.analytics for inline scripts.
 * Consent-gated per ADR-0004: events only sent when user has opted in.
 */

import posthog from 'posthog-js';
import { setAnalyticsForward, track } from './analytics';
import {
  hasAnalyticsConsent,
  setAnalyticsConsent,
} from './analytics-consent';

const key = import.meta.env.PUBLIC_POSTHOG_KEY as string | undefined;
const host = (import.meta.env.PUBLIC_POSTHOG_HOST as string) || 'https://eu.posthog.com';
const disabled = import.meta.env.PUBLIC_POSTHOG_DISABLED === 'true';
const isDev = import.meta.env.DEV;
const devExplicitlyEnabled = import.meta.env.PUBLIC_POSTHOG_DISABLED === 'false';

const enabled = Boolean(key) && !disabled && (!isDev || devExplicitlyEnabled);

if (enabled && key) {
  posthog.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
  });
  setAnalyticsForward((event, props) => {
    if (hasAnalyticsConsent()) {
      posthog.capture(event, props);
    }
  });
}

if (typeof window !== 'undefined') {
  (window as unknown as {
    analytics: {
      track: typeof track;
      setConsent: typeof setAnalyticsConsent;
      hasConsent: typeof hasAnalyticsConsent;
    };
  }).analytics = {
    track,
    setConsent: setAnalyticsConsent,
    hasConsent: hasAnalyticsConsent,
  };
}
