declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function isAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    !!GA_ID
  );
}

export function gaPageView(path: string, title?: string): void {
  if (!isAvailable()) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    send_to: GA_ID,
  });
}

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean | undefined>,
): void {
  if (!isAvailable()) return;
  window.gtag("event", eventName, { ...parameters, send_to: GA_ID });
}

export function trackContactFormSubmit(serviceInterest?: string): void {
  trackEvent("contact_form_submit", { service_interest: serviceInterest });
}

export function trackBookingCtaClick(location?: string): void {
  trackEvent("booking_cta_click", { location });
}

export function trackPhoneClick(): void {
  trackEvent("phone_click");
}

export function trackEmailClick(): void {
  trackEvent("email_click");
}

export function trackNewsletterSignup(): void {
  trackEvent("newsletter_signup");
}

export function trackServicePageView(slug: string, title: string): void {
  trackEvent("service_page_view", { service_slug: slug, service_title: title });
}

export function trackIndustryPageView(slug: string, title: string): void {
  trackEvent("industry_page_view", {
    industry_slug: slug,
    industry_title: title,
  });
}

export function trackResourceDownloadClick(slug: string, title: string): void {
  trackEvent("resource_download_click", {
    resource_slug: slug,
    resource_title: title,
  });
}

export function trackCalculatorViewed(slug: string): void {
  trackEvent("calculator_viewed", { calculator_slug: slug });
}

export function trackCalculatorStarted(slug: string): void {
  trackEvent("calculator_started", { calculator_slug: slug });
}

export function trackCalculatorCompleted(slug: string): void {
  trackEvent("calculator_completed", { calculator_slug: slug });
}

export function trackCalculatorCtaClicked(slug: string, ctaType: string): void {
  trackEvent("calculator_cta_clicked", {
    calculator_slug: slug,
    cta_type: ctaType,
  });
}
