export type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = "huxridge_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export function readConsentCookie(): ConsentPreferences | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`),
  );
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1] ?? "")) as ConsentPreferences;
  } catch {
    return null;
  }
}

export function writeConsentCookie(prefs: ConsentPreferences): void {
  const value = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

export function hasConsentCookie(): boolean {
  return readConsentCookie() !== null;
}
