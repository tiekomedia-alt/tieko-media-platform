import BookingForm from "@/components/forms/BookingForm";

type CalBookingEmbedProps = {
  bookingUrl?: string;
  initialService: string;
};

export default function CalBookingEmbed({ bookingUrl, initialService }: CalBookingEmbedProps) {
  if (
    !bookingUrl ||
    !bookingUrl.startsWith("https://") ||
    bookingUrl.includes("your-username")
  ) {
    return <BookingForm initialService={initialService} />;
  }

  const separator = bookingUrl.includes("?") ? "&" : "?";
  const embedUrl = `${bookingUrl}${separator}embed=true&layout=month_view&theme=light`;

  return (
    <div className="cal-booking-panel">
      <div className="cal-booking-heading">
        <div>
          <p className="funnel-kicker">Live availability</p>
          <h2>Choose a time that works for you.</h2>
        </div>
        <p>Your selected time is confirmed through Cal.com and added directly to the connected calendar.</p>
      </div>
      <div className="cal-booking-frame-wrap">
        <iframe
          className="cal-booking-frame"
          src={embedUrl}
          title="Book a Tieko Media consultation"
          loading="lazy"
          allow="camera; microphone; fullscreen; payment"
        />
      </div>
      <p className="cal-booking-fallback">
        Calendar not loading? <a href={bookingUrl} target="_blank" rel="noreferrer">Open the secure booking page</a>.
      </p>
    </div>
  );
}
