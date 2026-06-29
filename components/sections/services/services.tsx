"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteImage } from "@/components/ui/site-image";

type Service = {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
  imageIndex: number;
};

const services: Service[] = [
  {
    id: "ppf",
    num: "01",
    icon: "🛡",
    title: "Paint Protection Film",
    description:
      "XPEL ULTIMATE PLUS™ self-healing film. Guards against rock chips, road debris, and environmental contaminants. Near-invisible protection with a lifetime warranty.",
    imageIndex: 15,
  },
  {
    id: "ceramic",
    num: "02",
    icon: "✦",
    title: "Ceramic Coating",
    description:
      "XPEL Fusion Plus ceramic coating delivers unmatched hydrophobic performance, UV resistance, and deep gloss enhancement that lasts years.",
    imageIndex: 16,
  },
  {
    id: "tint",
    num: "03",
    icon: "◈",
    title: "Window Tint",
    description:
      "XPEL PRIME XR Plus™ ceramic window film. Blocks 98% of infrared heat while maintaining optical clarity. Legal in CT & NY.",
    imageIndex: 17,
  },
  {
    id: "ppf-tint",
    num: "04",
    icon: "◉",
    title: "PPF + Tint Combo",
    description:
      "Our most popular package. Full-vehicle PPF coverage paired with ceramic window tint — the definitive luxury protection suite.",
    imageIndex: 18,
  },
  {
    id: "wrap",
    num: "05",
    icon: "◐",
    title: "Vinyl Wrap",
    description:
      "Transform your vehicle's appearance with premium 3M or AVERY vinyl wrap. Color changes, accents, and full-vehicle transformations with precision finish.",
    imageIndex: 19,
  },
];

export const Services = (): React.ReactNode => {
  const [activeId, setActiveId] = useState<string>(services[0].id);

  const handlePanelActivate = (id: string): void => {
    setActiveId(id);
  };

  return (
    <section id="services" className="relative bg-brand-bg-2" aria-label="Services">
      <div className="flex flex-col items-start justify-between gap-5 border-b border-brand-border px-6 pb-10 pt-[60px] md:flex-row md:items-end md:px-[60px] md:pb-20 md:pt-[120px]">
        <Reveal className="max-w-[500px]">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-brand-white">
            Every surface.
            <br />
            Every detail.
          </h2>
        </Reveal>
        <Reveal
          delay={2}
          className="max-w-[280px] text-right text-xs leading-[1.7] tracking-[0.06em] text-brand-gray md:text-[0.75rem]"
        >
          Select a service to view details and example work. On desktop, you can also hover
          to preview each option.
        </Reveal>
      </div>

      <div
        className="service-panels flex h-auto flex-col md:h-[500px] md:flex-row"
        role="list"
        aria-label="Service options"
      >
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <button
              key={service.id}
              type="button"
              role="listitem"
              className={`service-panel group relative flex-1 cursor-pointer overflow-hidden border-b border-brand-border text-left md:border-b-0 md:border-r md:last:border-r-0 ${
                isActive ? "is-active" : ""
              }`}
              onClick={() => handlePanelActivate(service.id)}
              aria-expanded={isActive}
              aria-controls={`service-panel-content-${service.id}`}
            >
              <div
                className="service-panel-bg absolute inset-0 opacity-0 transition-opacity duration-500"
                aria-hidden="true"
              >
                <SiteImage
                  index={service.imageIndex}
                  alt={`${service.title} installation example`}
                  sizes="20vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-brand-bg/75" />
              </div>

              <div className="relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden p-8 md:min-h-0 md:p-10 md:px-10 md:py-12">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[0.6rem] font-normal uppercase tracking-[0.2em] text-brand-gray">
                      {service.num}
                    </div>
                    <div className="service-panel-icon mt-2 text-[2rem] opacity-20 transition-opacity duration-400">
                      {service.icon}
                    </div>
                  </div>
                  <span
                    className={`service-panel-toggle flex h-7 w-7 shrink-0 items-center justify-center border text-[0.8rem] transition-all duration-300 ${
                      isActive
                        ? "rotate-45 border-brand-red text-brand-silver"
                        : "border-brand-border text-brand-gray"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>

                <div id={`service-panel-content-${service.id}`}>
                  <h3 className="mb-3 whitespace-nowrap text-[1.4rem] font-light tracking-[-0.01em] text-brand-white">
                    {service.title}
                  </h3>
                  <p className="service-panel-hint mb-3 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-brand-silver/70 md:hidden">
                    Tap to explore
                    <span aria-hidden="true">→</span>
                  </p>
                  <p className="service-panel-hint mb-3 hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-brand-silver/70 md:inline-flex">
                    Click to explore
                    <span aria-hidden="true">→</span>
                  </p>
                  <p className="service-panel-desc max-w-[280px] translate-y-2.5 text-[0.78rem] leading-[1.7] text-brand-gray opacity-0 transition-all duration-400 delay-100">
                    {service.description}
                  </p>
                  <Link
                    href="#booking"
                    className="service-panel-link mt-5 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-brand-silver no-underline opacity-0 transition-opacity duration-400 delay-150 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-brand-red"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
