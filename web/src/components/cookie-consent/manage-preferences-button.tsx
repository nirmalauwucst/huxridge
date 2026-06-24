"use client";

import { useCookieConsent } from "./cookie-consent-provider";

export function ManagePreferencesButton({ className }: { className?: string }) {
  const { openModal } = useCookieConsent();

  return (
    <button onClick={openModal} className={className} type="button">
      Cookie preferences
    </button>
  );
}
