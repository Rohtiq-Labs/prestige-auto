const MAPS_URL = "https://maps.app.goo.gl/1ryknmahVPqPFV327";
const LOCATION_LAT = 40.9664118;
const LOCATION_LNG = -73.7102523;
const LOCATION_NAME = "Prestige Auto Salon Plus Inc.";

const embedSrc = `https://maps.google.com/maps?q=${LOCATION_LAT},${LOCATION_LNG}&z=16&output=embed`;

export const BookingMap = (): React.ReactNode => (
  <div className="relative mt-10 h-52 overflow-hidden border border-brand-border md:h-56">
    <div className="booking-map-layer absolute inset-0 scale-[1.02]">
      <iframe
        title={`Map showing ${LOCATION_NAME}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>

    <div
      className="pointer-events-none absolute inset-0 bg-brand-bg/25 mix-blend-multiply"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent"
      aria-hidden="true"
    />

    <div
      className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full"
      aria-hidden="true"
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute h-8 w-8 animate-ping rounded-full bg-brand-red/30" />
        <span className="relative h-3 w-3 rounded-full border border-brand-white/40 bg-brand-red shadow-[0_0_12px_rgba(139,17,24,0.6)]" />
      </span>
      <span className="mx-auto mt-1 block h-2 w-0.5 bg-brand-red/80" />
    </div>

    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-[1] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-brand-silver/50"
      aria-label={`Open ${LOCATION_NAME} in Google Maps`}
    />
  </div>
);

export const BOOKING_MAPS_URL = MAPS_URL;
