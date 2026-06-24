"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./cookie-consent-provider";
import { gaPageView } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalyticsProvider() {
  const { preferences } = useCookieConsent();
  const pathname = usePathname();
  const initialized = useRef(false);

  // On mount: if gtag was already loaded in a previous session (same page load),
  // fire the initial page view immediately.
  useEffect(() => {
    if (!preferences.analytics || !GA_ID) return;
    if (typeof window.gtag === "function" && !initialized.current) {
      initialized.current = true;
      gaPageView(window.location.pathname, document.title);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Track subsequent client-side route changes.
  useEffect(() => {
    if (!preferences.analytics || !initialized.current) return;
    gaPageView(pathname, document.title);
  }, [pathname, preferences.analytics]);

  if (!preferences.analytics || !GA_ID) return null;

  return (
    <>
      {/* Define gtag stub before the async script so queued commands are captured */}
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: false });
      `}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          initialized.current = true;
          gaPageView(window.location.pathname, document.title);
        }}
      />
    </>
  );
}
