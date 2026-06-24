import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Suppress build output unless running in CI
  silent: !process.env.CI,
  // Upload a larger set of source maps for better stack traces
  widenClientFileUpload: true,
  // Remove Sentry debug logs from the production bundle
  disableLogger: true,
  // Don't set up Vercel Cron Monitors automatically
  automaticVercelMonitors: false,
});
