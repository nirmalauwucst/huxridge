"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type ConsentPreferences } from "@/lib/cookie-consent";
import { useCookieConsent } from "./cookie-consent-provider";

function Toggle({
  checked,
  disabled,
  onChange,
  id,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`focus-visible:ring-primary-500 relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
        checked ? "bg-primary-600" : "bg-neutral-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

type CategoryRowProps = {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
};

function CategoryRow({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: CategoryRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div className="flex-1">
        <label
          htmlFor={id}
          className={`text-foreground text-sm font-semibold ${disabled ? "" : "cursor-pointer"}`}
        >
          {label}
          {disabled && (
            <span className="text-muted-foreground ml-2 text-xs font-normal">
              Always active
            </span>
          )}
        </label>
        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
          {description}
        </p>
      </div>
      <Toggle
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export function CookieModal() {
  const { isModalOpen, closeModal, savePreferences, preferences } =
    useCookieConsent();

  const [draft, setDraft] = useState<ConsentPreferences>(preferences);

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal();
      setDraft(preferences);
    }
  }

  function handleSave() {
    savePreferences(draft);
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-6 shadow-2xl focus:outline-none"
          aria-describedby="cookie-modal-description"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-foreground text-lg font-semibold">
                Cookie Preferences
              </Dialog.Title>
              <Dialog.Description
                id="cookie-modal-description"
                className="text-muted-foreground mt-1 text-sm"
              >
                Choose which cookies you allow us to use. You can change these
                settings at any time via the &ldquo;Manage preferences&rdquo;
                link in the footer.
              </Dialog.Description>
            </div>
            <Dialog.Close className="text-muted-foreground hover:text-foreground focus-visible:ring-primary-500 shrink-0 rounded-md p-1 focus-visible:ring-2 focus-visible:outline-none">
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>

          <div className="divide-border mt-2 divide-y">
            <CategoryRow
              id="consent-necessary"
              label="Strictly Necessary"
              description="Required for the website to function. These cannot be disabled. They enable core features like security, network management, and accessibility."
              checked={true}
              disabled={true}
              onChange={() => undefined}
            />
            <CategoryRow
              id="consent-analytics"
              label="Analytics"
              description="Help us understand how visitors interact with the site by collecting anonymous usage data. We use PostHog for privacy-friendly analytics."
              checked={draft.analytics}
              onChange={(v) => setDraft((p) => ({ ...p, analytics: v }))}
            />
            <CategoryRow
              id="consent-marketing"
              label="Marketing"
              description="Allow us to personalise content and ads, and to measure the effectiveness of our marketing campaigns."
              checked={draft.marketing}
              onChange={(v) => setDraft((p) => ({ ...p, marketing: v }))}
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close className="border-border text-foreground hover:bg-secondary-50 rounded-md border px-4 py-2 text-sm font-medium transition-colors">
              Cancel
            </Dialog.Close>
            <button
              onClick={handleSave}
              className="bg-primary-700 hover:bg-primary-800 focus-visible:ring-primary-500 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Save preferences
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
