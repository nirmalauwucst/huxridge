"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

type NewsletterSignupProps = {
  className?: string;
};

type State = "idle" | "submitting" | "success" | "error" | "duplicate";

export function NewsletterSignup({ className }: NewsletterSignupProps) {
  const [state, setState] = React.useState<State>("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const result = await subscribeToNewsletter(formData);
      if (result.success) {
        setState(result.alreadySubscribed ? "duplicate" : "success");
      } else {
        setErrorMsg(result.error);
        setState("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={className}>
        <p className="text-primary-200 mb-3 text-sm font-semibold tracking-wide uppercase">Stay Informed</p>
        <p className="text-accent-400 text-sm font-medium">
          Thank you! Please check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  if (state === "duplicate") {
    return (
      <div className={className}>
        <p className="text-primary-200 mb-3 text-sm font-semibold tracking-wide uppercase">Stay Informed</p>
        <p className="text-primary-300 text-sm">You are already subscribed — thank you!</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-primary-200 mb-3 text-sm font-semibold tracking-wide uppercase">
        Stay Informed
      </p>
      <p className="text-primary-300 mb-4 text-sm">
        Tax tips, deadline reminders, and regulatory updates — straight to your inbox.
      </p>

      {state === "error" && (
        <p className="mb-3 text-xs text-red-400">{errorMsg}</p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="your@email.co.uk"
          required
          disabled={state === "submitting"}
          className="text-primary-900 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 disabled:opacity-60"
        />
        <Button
          type="submit"
          variant="secondary"
          size="sm"
          className="shrink-0"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "…" : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
