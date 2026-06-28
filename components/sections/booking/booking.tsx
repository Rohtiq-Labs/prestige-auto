import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SiteImage } from "@/components/ui/site-image";

const contactItems = [
  {
    icon: "📷",
    label: "@prestigeauto.tints",
    href: "https://www.instagram.com/prestigeauto.tints/",
    external: true,
  },
  {
    icon: "📍",
    label: "View on Google Maps",
    href: "https://maps.app.goo.gl/Nv1toNk2z31agVrv8",
    external: true,
  },
  { icon: "⏱", label: "Response within 24 hours" },
  { icon: "🚗", label: "Mobile service available" },
];

const serviceOptions = [
  "Paint Protection Film (PPF)",
  "Ceramic Coating",
  "Window Tint",
  "PPF + Tint Combo",
  "Vinyl Wrap",
  "Full Protection Package",
  "Not Sure — Need Consultation",
];

export const Booking = (): React.ReactNode => (
  <section
    id="booking"
    className="relative overflow-hidden bg-brand-bg px-6 py-20 md:px-[60px] md:py-[140px]"
    aria-label="Book a consultation"
  >
    <div
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-silver/30 to-transparent"
      aria-hidden="true"
    />

    <div className="mt-20 grid grid-cols-1 items-start gap-[60px] md:grid-cols-2 md:gap-[100px]">
      <Reveal>
        <div className="mb-5 text-[0.6rem] uppercase tracking-[0.25em] text-brand-gray">
          Start Your Project
        </div>
        <h2 className="mb-8 text-[3.5rem] font-extralight leading-none tracking-[-0.03em] text-brand-white">
          Book a
          <br />
          <em className="italic text-brand-silver">Consultation.</em>
        </h2>
        <p className="mb-10 max-w-[380px] text-[0.8rem] leading-[1.75] text-brand-gray">
          Every project begins with a conversation. Tell us about your vehicle and your
          goals — we&apos;ll recommend the right protection package and provide a detailed
          quote within 24 hours.
        </p>

        <div className="flex flex-col gap-4">
          {contactItems.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3.5 text-[0.8rem] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
              >
                <span className="text-[0.9rem] opacity-50" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-center gap-3.5 text-[0.8rem] text-brand-gray"
              >
                <span className="text-[0.9rem] opacity-50" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ),
          )}
        </div>

        <div className="relative mt-10 hidden h-56 overflow-hidden md:block">
          <SiteImage
            index={25}
            alt="Recent Prestige Auto Tints installation"
            sizes="400px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" aria-hidden="true" />
        </div>
      </Reveal>

      <Reveal delay={2}>
        <form className="booking-form" aria-label="Consultation inquiry form">
          <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField label="First Name" id="firstName" placeholder="James" />
            <FormField label="Last Name" id="lastName" placeholder="Thornton" />
          </div>
          <FormField
            label="Email Address"
            id="email"
            type="email"
            placeholder="james@example.com"
          />
          <FormField
            label="Phone Number"
            id="phone"
            type="tel"
            placeholder="+1 (203) 555-0100"
          />
          <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormField label="Vehicle Make" id="make" placeholder="Porsche" />
            <FormField label="Vehicle Model" id="model" placeholder="911 GT3" />
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="service"
              className="mb-2.5 block text-[0.6rem] uppercase tracking-[0.2em] text-brand-gray"
            >
              Service Interest
            </label>
            <select
              id="service"
              defaultValue=""
              className="w-full appearance-none border border-brand-border border-b-brand-silver/20 bg-brand-bg-2 px-[18px] py-3.5 font-sans text-[0.9rem] font-light text-brand-gray outline-none transition-colors duration-300 focus:border-brand-silver/25 focus:border-b-brand-red focus:bg-brand-bg-3"
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="relative mb-6">
            <label
              htmlFor="notes"
              className="mb-2.5 block text-[0.6rem] uppercase tracking-[0.2em] text-brand-gray"
            >
              Additional Notes
            </label>
            <textarea
              id="notes"
              rows={5}
              placeholder="Tell us about your vehicle, timeline, or any specific concerns..."
              className="min-h-[120px] w-full resize-y border border-brand-border border-b-brand-silver/20 bg-brand-bg-2 px-[18px] py-3.5 font-sans text-[0.9rem] font-light text-brand-white outline-none placeholder:text-brand-gray/50 transition-colors duration-300 focus:border-brand-silver/25 focus:border-b-brand-red focus:bg-brand-bg-3"
            />
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <PrimaryButton type="submit">Send Inquiry →</PrimaryButton>
            <p className="max-w-[280px] text-[0.65rem] leading-[1.6] text-brand-gray opacity-70">
              We respond within 24 hours. Your information is never shared.
            </p>
          </div>
        </form>
      </Reveal>
    </div>
  </section>
);

type FormFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
};

const FormField = ({
  label,
  id,
  placeholder,
  type = "text",
}: FormFieldProps): React.ReactNode => (
  <div className="relative mb-6 md:mb-0">
    <label
      htmlFor={id}
      className="mb-2.5 block text-[0.6rem] uppercase tracking-[0.2em] text-brand-gray"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full border border-brand-border border-b-brand-silver/20 bg-brand-bg-2 px-[18px] py-3.5 font-sans text-[0.9rem] font-light text-brand-white outline-none placeholder:text-brand-gray/50 transition-colors duration-300 focus:border-brand-silver/25 focus:border-b-brand-red focus:bg-brand-bg-3"
    />
  </div>
);
