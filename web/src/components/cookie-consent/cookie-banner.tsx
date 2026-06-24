"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCookieConsent } from "./cookie-consent-provider";

export function CookieBanner() {
  const { hasConsented, acceptAll, rejectAll, openModal } = useCookieConsent();

  return (
    <AnimatePresence>
      {!hasConsented && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
          className="bg-primary-950 text-primary-100 fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 shadow-2xl"
        >
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-white">
                    We use cookies{" "}
                  </span>
                  to improve your experience, analyse site usage, and support
                  our marketing. You can choose which categories to allow.{" "}
                  <a
                    href="/privacy-policy"
                    className="text-accent-300 hover:text-accent-200 underline underline-offset-2"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <button
                  onClick={rejectAll}
                  className="text-primary-200 rounded-md border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:border-white/40 hover:text-white"
                >
                  Reject all
                </button>
                <button
                  onClick={openModal}
                  className="text-primary-200 rounded-md border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:border-white/40 hover:text-white"
                >
                  Manage preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="bg-accent-400 text-primary-950 hover:bg-accent-300 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
