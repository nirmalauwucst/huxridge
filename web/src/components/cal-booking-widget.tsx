"use client";

import * as React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarDays } from "lucide-react";

const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK ?? "";

export function CalBookingWidget() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!CAL_LINK) return;

    void (async () => {
      const cal = await getCalApi({ namespace: "huxridge-consultation" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setReady(true);
    })();
  }, []);

  if (!CAL_LINK) {
    return (
      <div className="bg-background rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center shadow-sm">
        <CalendarDays className="text-primary-300 mx-auto mb-4 h-14 w-14" aria-hidden="true" />
        <p className="text-primary-900 text-xl font-semibold">Booking Calendar</p>
        <p className="text-muted-foreground mt-2 text-sm">
          Set <code className="bg-secondary-100 rounded px-1 text-xs">NEXT_PUBLIC_CALCOM_LINK</code> to your Cal.com event slug to activate the live booking calendar.
        </p>
        <p className="text-muted-foreground mt-1 text-xs">
          Example: <code className="bg-secondary-100 rounded px-1">your-team/free-consultation</code>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background overflow-hidden rounded-2xl shadow-card">
      {!ready && (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" aria-label="Loading calendar" />
        </div>
      )}
      <Cal
        namespace="huxridge-consultation"
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
