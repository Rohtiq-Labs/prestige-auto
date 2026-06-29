"use client";

import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteImage } from "@/components/ui/site-image";

type FeaturedSlide = {
  id: string;
  make: string;
  model: string;
  specs: { label: string; value: string }[];
  imageIndex: number;
};

const slides: FeaturedSlide[] = [
  {
    id: "porsche",
    make: "Porsche — 2023",
    model: "911 GT3\nTouring",
    imageIndex: 11,
    specs: [
      { label: "Service", value: "Full PPF" },
      { label: "Film", value: "XPEL Ultimate Plus" },
      { label: "Coverage", value: "Full Vehicle" },
      { label: "Finish", value: "Gloss" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
  {
    id: "tesla",
    make: "Tesla — 2024",
    model: "Model S\nPlaid",
    imageIndex: 12,
    specs: [
      { label: "Service", value: "PPF + Tint" },
      { label: "Film", value: "XPEL Stealth" },
      { label: "Coverage", value: "Full Vehicle" },
      { label: "Finish", value: "Matte" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
  {
    id: "lamborghini",
    make: "Lamborghini — 2023",
    model: "Urus\nPerformante",
    imageIndex: 13,
    specs: [
      { label: "Service", value: "Full PPF + Ceramic" },
      { label: "Film", value: "XPEL Ultimate Plus" },
      { label: "Coating", value: "XPEL Fusion Plus" },
      { label: "Finish", value: "High Gloss" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
  {
    id: "bmw",
    make: "BMW — 2024",
    model: "M4\nCompetition",
    imageIndex: 14,
    specs: [
      { label: "Service", value: "Ceramic + Tint" },
      { label: "Film", value: "XPEL Prime XR Plus" },
      { label: "Coverage", value: "Full Vehicle" },
      { label: "Finish", value: "Gloss" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
];

export const Featured = (): React.ReactNode => {
  const [current, setCurrent] = useState(0);

  const changeSlide = useCallback((dir: number): void => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 5000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <section id="featured" className="overflow-hidden bg-brand-bg" aria-label="Featured builds">
      <Reveal className="px-6 pb-[60px] pt-[60px] md:px-[60px] md:pt-[120px]">
        <SectionLabel>Featured Builds</SectionLabel>
        <h2 className="text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-brand-white">
          Signature
          <br />
          <em className="italic text-brand-silver">Installations</em>
        </h2>
      </Reveal>

      <div className="relative min-h-[680px] md:h-[70vh] md:min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col transition-opacity duration-800 md:flex-row ${
              index === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="relative h-[280px] w-full shrink-0 overflow-hidden md:h-auto md:min-h-0 md:flex-1">
              <SiteImage
                index={slide.imageIndex}
                alt={`${slide.make} ${slide.model.replace("\n", " ")} featured installation`}
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-bg/20"
                aria-hidden="true"
              />
            </div>
            <div className="flex w-full flex-col justify-center border-l border-brand-border bg-brand-bg-2 p-8 md:w-[380px] md:p-[60px_50px]">
              <div className="mb-3 text-[0.6rem] uppercase tracking-[0.25em] text-brand-gray">
                {slide.make}
              </div>
              <div className="mb-7 whitespace-pre-line text-[2.4rem] font-extralight leading-[1.1] tracking-[-0.02em] text-brand-white">
                {slide.model}
              </div>
              <div className="mb-10 flex flex-col gap-4 border-t border-brand-border pt-7">
                {slide.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between">
                    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-brand-gray">
                      {spec.label}
                    </span>
                    <span className="text-[0.8rem] font-normal text-brand-silver">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-end gap-3">
                <button
                  type="button"
                  className="slide-btn flex h-11 w-11 items-center justify-center border border-brand-border bg-transparent text-base text-brand-gray transition-colors duration-300 hover:border-brand-silver/40 hover:bg-brand-bg-3 hover:text-brand-silver"
                  onClick={() => changeSlide(-1)}
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="slide-btn flex h-11 w-11 items-center justify-center border border-brand-border bg-transparent text-base text-brand-gray transition-colors duration-300 hover:border-brand-silver/40 hover:bg-brand-bg-3 hover:text-brand-silver"
                  onClick={() => changeSlide(1)}
                  aria-label="Next slide"
                >
                  →
                </button>
                <div className="ml-auto self-end text-[0.65rem] tracking-[0.15em] text-brand-gray">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
