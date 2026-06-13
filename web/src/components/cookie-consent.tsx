"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "huxridge_cookie_consent";

function readConsent(): ConsentCategories | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentCategories;
  } catch {
    return null;
  }
}

function writeConsent(consent: ConsentCategories) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  document.cookie = `${CONSENT_KEY}=${JSON.stringify(consent)}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function useCookieConsent() {
  const [consent, setConsent] = React.useState<ConsentCategories | null>(null);

  React.useEffect(() => {
    React.startTransition(() => {
      setConsent(readConsent());
    });
  }, []);

  function accept(categories: ConsentCategories) {
    writeConsent(categories);
    setConsent(categories);
  }

  return { consent, accept };
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [showPreferences, setShowPreferences] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);

  React.useEffect(() => {
    const existing = readConsent();
    React.startTransition(() => {
      if (!existing) setVisible(true);
    });
  }, []);

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true });
    setVisible(false);
    // Dispatch event so analytics can initialise
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: { analytics: true, marketing: true } }));
  }

  function acceptNecessary() {
    writeConsent({ analytics: false, marketing: false });
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: { analytics: false, marketing: false } }));
  }

  function savePreferences() {
    const consent = { analytics, marketing };
    writeConsent(consent);
    setVisible(false);
    setShowPreferences(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {!showPreferences ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-primary-900 text-sm font-semibold">We use cookies</p>
              <p className="text-muted-foreground mt-1 text-sm">
                We use essential cookies to make our site work. With your consent, we also use analytics cookies to improve your experience. See our{" "}
                <Link href="/privacy-policy" className="text-primary-700 underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button variant="ghost" size="sm" onClick={() => setShowPreferences(true)}>
                Manage preferences
              </Button>
              <Button variant="outline" size="sm" onClick={acceptNecessary}>
                Necessary only
              </Button>
              <Button variant="primary" size="sm" onClick={acceptAll}>
                Accept all
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-lg">
            <p className="text-primary-900 mb-4 font-semibold">Cookie Preferences</p>
            <div className="space-y-3">
              <PreferenceRow
                id="consent-necessary"
                label="Necessary cookies"
                description="Required for the site to work. Cannot be disabled."
                checked
                disabled
              />
              <PreferenceRow
                id="consent-analytics"
                label="Analytics cookies"
                description="Help us understand how visitors use the site (PostHog)."
                checked={analytics}
                onChange={setAnalytics}
              />
              <PreferenceRow
                id="consent-marketing"
                label="Marketing cookies"
                description="Used for targeted advertising and retargeting."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowPreferences(false)}>
                Back
              </Button>
              <Button variant="primary" size="sm" onClick={savePreferences}>
                Save preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreferenceRow({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-gray-300"
      />
      <label htmlFor={id} className="cursor-pointer text-sm">
        <span className="text-primary-900 font-medium">{label}</span>
        <span className="text-muted-foreground ml-2">{description}</span>
      </label>
    </div>
  );
}
