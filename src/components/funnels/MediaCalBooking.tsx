"use client";

import posthog from "posthog-js";
import { useEffect, useRef, useState } from "react";

const CAL_LINK = "tieko-media-ltd-qjqmt3/15min";
const CAL_URL = `https://cal.com/${CAL_LINK}`;
const CAL_NAMESPACE = "tieko-media-intro-call";

type BookingState = "idle" | "confirmed" | "requested";

type CalBookingData = {
  uid?: string;
  startTime?: string;
  eventTypeId?: number | null;
  status?: string;
};

type CalEvent = CustomEvent<{
  data: CalBookingData;
}>;

type CalApi = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[][];
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

function getCalApi() {
  if (window.Cal) return window.Cal;

  const push = (api: CalApi, args: unknown[]) => api.q.push(args);
  const cal = function (...args: unknown[]) {
    if (!cal.loaded) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      document.head.appendChild(script);
      cal.loaded = true;
    }

    if (args[0] === "init") {
      const namespace = args[1];
      const scopedApi = function (...scopedArgs: unknown[]) {
        push(scopedApi, scopedArgs);
      } as CalApi;
      scopedApi.q = [];
      scopedApi.ns = {};

      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] ?? scopedApi;
        push(cal.ns[namespace], args);
        push(cal, ["initNamespace", namespace]);
      } else {
        push(cal, args);
      }
      return;
    }

    push(cal, args);
  } as CalApi;

  cal.q = [];
  cal.ns = {};
  window.Cal = cal;
  return cal;
}

export default function MediaCalBooking() {
  const [bookingState, setBookingState] = useState<BookingState>("idle");
  const handledBookings = useRef(new Set<string>());

  useEffect(() => {
    let active = true;

    const handleBooking = (event: CalEvent) => {
      if (!active) return;

      const booking = event.detail.data;
      const bookingKey = booking.uid ?? `${booking.eventTypeId}-${booking.startTime}`;

      if (handledBookings.current.has(bookingKey)) return;
      handledBookings.current.add(bookingKey);

      const status = booking.status?.toLowerCase() ?? "unknown";
      const isConfirmed = status === "accepted";

      posthog.capture(
        isConfirmed
          ? "media_services_booking_confirmed"
          : "media_services_booking_requested",
        {
          booking_status: status,
          event_type_id: booking.eventTypeId ?? undefined,
          source: "cal_inline_embed",
        },
      );

      setBookingState(isConfirmed ? "confirmed" : "requested");
    };

    const cal = getCalApi();
    cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });
    const calApi = cal.ns[CAL_NAMESPACE];

    calApi("inline", {
      elementOrSelector: "#tieko-media-cal",
      calLink: CAL_LINK,
      config: { layout: "month_view", theme: "light" },
    });
    calApi("ui", {
      theme: "light",
      layout: "month_view",
      styles: {
        branding: { brandColor: "#b42318" },
        body: { background: "#f4efe6" },
      },
    });
    calApi("on", {
      action: "bookingSuccessfulV2",
      callback: handleBooking,
    });

    return () => {
      active = false;
      calApi("off", {
        action: "bookingSuccessfulV2",
        callback: handleBooking,
      });
    };
  }, []);

  return (
    <div className="media-cal-panel">
      <div className="media-cal-heading">
        <div>
          <span>Confirmed appointment</span>
          <h3>Choose your 15-minute call time.</h3>
        </div>
        <p>Cal.com shows the available times in your local time zone and sends the appointment details by email.</p>
      </div>

      {bookingState === "confirmed" && (
        <div className="media-cal-status media-cal-status-confirmed" role="status" aria-live="polite">
          <strong>Your call is confirmed.</strong>
          <span>Check your email for the appointment details. Tieko Media will initiate the call.</span>
        </div>
      )}

      {bookingState === "requested" && (
        <div className="media-cal-status" role="status" aria-live="polite">
          <strong>Your booking request was received.</strong>
          <span>It is not confirmed yet. Please check your email for the final status from Cal.com.</span>
        </div>
      )}

      <div className="media-cal-embed" aria-label="Tieko Media 15-minute call calendar">
        <div id="tieko-media-cal" />
      </div>

      <p className="media-cal-fallback">
        Calendar not loading? <a href={CAL_URL} target="_blank" rel="noreferrer">Open the secure booking page</a>.
      </p>
    </div>
  );
}
