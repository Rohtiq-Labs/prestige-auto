"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteImage } from "@/components/ui/site-image";

type PortfolioItem = {
  id: string;
  vehicle: string;
  service: string;
  imageIndex: number;
  overlayAlwaysVisible?: boolean;
};

const filters = ["All", "PPF", "Ceramic", "Tint"];

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    vehicle: "Porsche 911 GT3",
    service: "Full PPF — XPEL Ultimate Plus",
    imageIndex: 2,
  },
  {
    id: "2",
    vehicle: "BMW M4 Competition",
    service: "Ceramic Coating + Tint",
    imageIndex: 3,
  },
  {
    id: "3",
    vehicle: "Mercedes GLE 63 AMG",
    service: "XPEL Prime XR Tint",
    imageIndex: 4,
  },
  {
    id: "4",
    vehicle: "Lamborghini Urus",
    service: "Full PPF + Ceramic",
    imageIndex: 5,
  },
  {
    id: "5",
    vehicle: "Tesla Model S Plaid",
    service: "Stealth PPF Wrap",
    imageIndex: 6,
  },
  {
    id: "6",
    vehicle: "+140 More Projects",
    service: "View Full Gallery",
    imageIndex: 7,
    overlayAlwaysVisible: true,
  },
  {
    id: "7",
    vehicle: "Ferrari F8 Tributo",
    service: "Partial Front PPF",
    imageIndex: 8,
  },
  {
    id: "8",
    vehicle: "Audi RS6 Avant",
    service: "Ceramic Coating",
    imageIndex: 9,
  },
  {
    id: "9",
    vehicle: "Range Rover SVR",
    service: "Full PPF + Tint Combo",
    imageIndex: 10,
  },
];

export const Portfolio = (): React.ReactNode => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="portfolio" className="bg-brand-bg py-[60px] md:py-[120px]" aria-label="Portfolio">
      <div className="flex flex-col gap-5 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-[60px] md:pb-[60px]">
        <Reveal>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-brand-white">
            Completed
            <br />
            <em className="italic text-brand-silver">Installations</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="filter-btn flex flex-wrap gap-7">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-btn border-none bg-transparent font-sans text-[0.65rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  activeFilter === filter
                    ? "border-b border-brand-red pb-0.5 text-brand-silver"
                    : "text-brand-gray hover:text-brand-silver"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="masonry-grid flex flex-wrap gap-[3px] px-[3px] md:grid md:grid-cols-12 md:grid-rows-[80px] md:flex-none">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="masonry-item group relative min-h-[180px] flex-[1_1_calc(50%-3px)] overflow-hidden md:min-h-0 md:flex-none"
          >
            <div className="masonry-item-bg relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105">
              <SiteImage
                index={item.imageIndex}
                alt={`${item.vehicle} — ${item.service}`}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div
              className={`absolute inset-0 flex items-end p-6 transition-opacity duration-400 ${
                item.overlayAlwaysVisible
                  ? "bg-gradient-to-t from-brand-bg/95 via-brand-bg/30 to-transparent opacity-100"
                  : "bg-gradient-to-t from-brand-bg/92 via-transparent to-transparent opacity-0 group-hover:opacity-100"
              }`}
            >
              <div>
                <div
                  className={`mb-1 font-light text-brand-white ${
                    item.overlayAlwaysVisible ? "text-[0.7rem] text-brand-silver" : "text-[0.9rem]"
                  }`}
                >
                  {item.vehicle}
                </div>
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-brand-silver">
                  {item.service}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
