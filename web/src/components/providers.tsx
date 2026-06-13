"use client";

import * as React from "react";
import posthog from "posthog-js";

let posthogInitialised = false;

function initPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";
  if (!key || posthogInitialised) return;

  posthog.init(key, {
    api_host: host,
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") ph.debug();
    },
    capture_pageview: true,
    persistence: "localStorage+cookie",
    opt_out_capturing_by_default: false,
  });
  posthogInitialised = true;
}

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Check if analytics consent was already given
    try {
      const raw = localStorage.getItem("huxridge_cookie_consent");
      if (raw) {
        const consent = JSON.parse(raw) as { analytics?: boolean };
        if (consent.analytics) initPostHog();
      }
    } catch {
      // ignore
    }

    // Listen for consent updates from the banner
    function handleConsentUpdate(e: Event) {
      const detail = (e as CustomEvent<{ analytics: boolean }>).detail;
      if (detail.analytics) {
        initPostHog();
      } else {
        posthog.opt_out_capturing();
      }
    }

    window.addEventListener("cookie-consent-updated", handleConsentUpdate);
    return () => window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
  }, []);

  return <>{children}</>;
}
