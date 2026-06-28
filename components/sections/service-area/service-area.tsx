import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SiteImage } from "@/components/ui/site-image";
import { ServiceAreaMap } from "./service-area-map";

const states = [
  {
    icon: "🗺",
    name: "Connecticut",
    cities:
      "Greenwich · Stamford · Westport · Darien · New Canaan · Fairfield · Hartford · New Haven · Norwalk · Bridgeport",
  },
  {
    icon: "🗽",
    name: "New York",
    cities:
      "New York City · Westchester · Long Island · White Plains · Yonkers · Tarrytown · Scarsdale · Great Neck · The Hamptons",
  },
];

export const ServiceArea = (): React.ReactNode => (
  <section
    id="service-area"
    className="overflow-hidden bg-brand-bg-2 px-6 py-20 md:px-[60px] md:py-[120px]"
    aria-label="Service area"
  >
    <Reveal>
      <SectionLabel>Service Area</SectionLabel>
      <h2 className="text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-brand-white">
        Connecticut
        <br />
        &amp; <em className="italic text-brand-silver">New York.</em>
      </h2>
    </Reveal>

    <div className="mt-20 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
      <div className="relative h-[300px] overflow-hidden md:h-[480px]">
        <SiteImage
          index={24}
          alt="Prestige Auto Tints service area in Connecticut and New York"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-brand-bg-2/40" aria-hidden="true" />
        <div className="absolute inset-0">
          <ServiceAreaMap />
        </div>
      </div>

      <Reveal className="area-text">
        <div className="my-10 flex flex-col gap-7">
          {states.map((state) => (
            <div
              key={state.name}
              className="flex items-start gap-5 border-b border-brand-border pb-7 last:border-b-0"
            >
              <span className="text-2xl opacity-50" aria-hidden="true">
                {state.icon}
              </span>
              <div>
                <div className="mb-1.5 text-[1.2rem] font-light text-brand-white">
                  {state.name}
                </div>
                <div className="text-[0.75rem] leading-[1.6] tracking-[0.05em] text-brand-gray">
                  {state.cities}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2.5 text-[0.75rem] tracking-[0.1em] text-brand-silver opacity-70">
          <span className="block h-px w-5 bg-brand-silver/50" aria-hidden="true" />
          Mobile service available — we come to you
        </div>

        <p className="mt-7 text-[0.95rem] leading-[1.75] text-brand-silver">
          Not sure if we cover your area? Reach out — we travel for the right vehicle.
          Our mobile installation service brings professional-grade results directly to
          your home or office.
        </p>

        <div className="mt-9">
          <PrimaryButton href="#booking">Check Your Location</PrimaryButton>
        </div>
      </Reveal>
    </div>
  </section>
);
