"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type NewsletterSignupProps = {
  className?: string;
};

export function NewsletterSignup({ className }: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  return (
    <div className={className}>
      <p className="text-primary-200 mb-3 text-sm font-semibold tracking-wide uppercase">
        Stay Informed
      </p>
      <p className="text-primary-300 mb-4 text-sm">
        Tax tips, deadline reminders, and regulatory updates — straight to your inbox.
      </p>
      {submitted ? (
        <p className="text-accent-400 text-sm font-medium">
          Thank you — you are now subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="your@email.co.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-primary-900 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
          />
          <Button type="submit" variant="secondary" size="sm" className="shrink-0">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
