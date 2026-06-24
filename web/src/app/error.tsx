"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-accent-500 mb-4 text-sm font-semibold tracking-widest uppercase">
        Something went wrong
      </p>
      <h1 className="text-primary-950 mb-4 text-3xl leading-tight font-bold sm:text-4xl">
        An unexpected error occurred.
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
        Our team has been notified. Please try again, or{" "}
        <Link
          href="/contact"
          className="text-primary-950 font-semibold underline underline-offset-2"
        >
          contact us
        </Link>{" "}
        if the problem persists.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="bg-primary-950 text-primary-50 hover:bg-primary-800 rounded-md px-6 py-2.5 text-sm font-semibold transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border-primary-200 text-primary-700 hover:border-primary-400 rounded-md border px-6 py-2.5 text-sm font-semibold transition-colors"
        >
          Go to homepage
        </Link>
      </div>
    </Container>
  );
}
