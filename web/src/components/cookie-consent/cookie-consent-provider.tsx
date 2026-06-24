"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  type ConsentPreferences,
  hasConsentCookie,
  readConsentCookie,
  writeConsentCookie,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  hasConsented: boolean;
  preferences: ConsentPreferences;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: ConsentPreferences) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return ctx;
}

const DEFAULT_PREFS: ConsentPreferences = { analytics: false, marketing: false };

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  type State = { hasConsented: boolean; preferences: ConsentPreferences };
  const [{ hasConsented, preferences }, setConsent] = useState<State>({
    hasConsented: false,
    preferences: DEFAULT_PREFS,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = readConsentCookie();
    if (saved) {
      // document.cookie is only available on the client; effect is the correct sync point
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent({ hasConsented: true, preferences: saved });
    }
  }, []);

  const persist = useCallback((prefs: ConsentPreferences) => {
    writeConsentCookie(prefs);
    setConsent({ hasConsented: true, preferences: prefs });
    setIsModalOpen(false);
  }, []);

  const acceptAll = useCallback(
    () => persist({ analytics: true, marketing: true }),
    [persist],
  );

  const rejectAll = useCallback(
    () => persist({ analytics: false, marketing: false }),
    [persist],
  );

  const savePreferences = useCallback(
    (prefs: ConsentPreferences) => persist(prefs),
    [persist],
  );

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsented,
        preferences,
        acceptAll,
        rejectAll,
        savePreferences,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export { hasConsentCookie };
