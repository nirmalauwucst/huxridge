"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions/contact";
import { services } from "@/lib/site";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export function ContactForm() {
  const [state, setState] = React.useState<FormState>({ status: "idle" });
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });

    const formData = new FormData(e.currentTarget);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setState({ status: "success" });
        formRef.current?.reset();
      } else {
        setState({
          status: "error",
          message: result.error,
          fieldErrors: result.fieldErrors,
        });
      }
    } catch {
      setState({ status: "error", message: "Something went wrong. Please try again." });
    }
  }

  const isSubmitting = state.status === "submitting";

  function fieldError(field: string) {
    if (state.status !== "error") return null;
    const errs = state.fieldErrors?.[field];
    if (!errs?.length) return null;
    return <p className="mt-1 text-xs text-red-600">{errs[0]}</p>;
  }

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 p-10 text-center shadow-card">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-primary-900 text-xl font-semibold">Message Sent</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Thank you for getting in touch. We will respond within one business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setState({ status: "idle" })}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-2xl p-8 shadow-card">
      <h2 className="text-primary-900 mb-6 text-xl font-semibold">Send Us a Message</h2>

      {state.status === "error" && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-primary-800 mb-1.5 block text-sm font-medium">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              disabled={isSubmitting}
              className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
              placeholder="Jane Smith"
            />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="email" className="text-primary-800 mb-1.5 block text-sm font-medium">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              disabled={isSubmitting}
              className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
              placeholder="jane@example.co.uk"
            />
            {fieldError("email")}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-primary-800 mb-1.5 block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            disabled={isSubmitting}
            className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
            placeholder="+44 (0)7700 000000"
          />
        </div>

        <div>
          <label htmlFor="service" className="text-primary-800 mb-1.5 block text-sm font-medium">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            disabled={isSubmitting}
            className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-primary-800 mb-1.5 block text-sm font-medium">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={isSubmitting}
            className="border-border focus:border-primary-500 focus:ring-primary-500 w-full resize-y rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
            placeholder="Tell us a little about your business and what you need help with…"
          />
          {fieldError("message")}
        </div>

        <div>
          <label htmlFor="source" className="text-primary-800 mb-1.5 block text-sm font-medium">
            How did you hear about us?
          </label>
          <select
            id="source"
            name="source"
            disabled={isSubmitting}
            className="border-border focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none disabled:opacity-60"
          >
            <option value="">Select…</option>
            <option value="google">Google search</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral from a friend or colleague</option>
            <option value="accountant-directory">Accountant directory</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Cloudflare Turnstile — loads only when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set */}
        <TurnstileWidget />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-muted-foreground text-xs">
          By submitting this form you agree to our{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

function TurnstileWidget() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey) return null;

  return (
    <div
      className="cf-turnstile"
      data-sitekey={siteKey}
      data-theme="light"
    />
  );
}
