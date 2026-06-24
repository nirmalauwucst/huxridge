"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f8f7f4",
          color: "#1a2e4a",
        }}
      >
        <div
          style={{ textAlign: "center", padding: "2rem", maxWidth: "480px" }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#b8962e",
              marginBottom: "1rem",
            }}
          >
            Something went wrong
          </p>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            We&apos;re sorry — an unexpected error occurred.
          </h1>
          <p
            style={{
              color: "#64748b",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Our team has been notified. Please try again, or contact us at{" "}
            <a
              href="mailto:hello@huxridge.co.uk"
              style={{ color: "#1a2e4a", fontWeight: 600 }}
            >
              hello@huxridge.co.uk
            </a>{" "}
            if the problem persists.
          </p>
          <button
            onClick={reset}
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              backgroundColor: "#1a2e4a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
