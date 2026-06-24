import * as Sentry from "@sentry/nextjs";

// Read consent cookie without importing from React — this file runs before hydration.
function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const match = document.cookie.match(/(?:^|; )huxridge_consent=([^;]*)/);
    if (!match) return false;
    const prefs = JSON.parse(decodeURIComponent(match[1] ?? "")) as {
      analytics?: boolean;
    };
    return prefs?.analytics === true;
  } catch {
    return false;
  }
}

const analyticsConsented = hasAnalyticsConsent();

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,

  // Performance: sample 10% of requests in production, all in dev.
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Session Replay requires analytics consent (records user interactions).
  // Rates apply only when the user has previously accepted analytics cookies.
  replaysSessionSampleRate: analyticsConsented ? 0.1 : 0,
  replaysOnErrorSampleRate: analyticsConsented ? 1.0 : 0,

  integrations: [
    Sentry.browserTracingIntegration(),
    ...(analyticsConsented
      ? [
          Sentry.replayIntegration({
            // Mask all text and inputs by default — important for an accountancy site.
            maskAllText: true,
            maskAllInputs: true,
            blockAllMedia: false,
          }),
        ]
      : []),
  ],
});
