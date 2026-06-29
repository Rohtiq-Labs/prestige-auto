"use client";

import { useEffect, useRef, useState } from "react";
import { GhostButton } from "@/components/ui/ghost-button";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SiteImage } from "@/components/ui/site-image";

export const Hero = (): React.ReactNode => {
  const visualRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const handleScroll = (): void => {
      visual.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative grid h-screen min-h-[700px] grid-rows-[auto_1fr] overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={visualRef}
          className="relative h-[120%] w-full will-change-transform"
        >
          <SiteImage
            index={1}
            alt="Luxury vehicle with XPEL paint protection film installation"
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 62% 42%, rgba(194,194,194,0.04) 0%, transparent 60%), linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.65) 55%, rgba(10,10,10,1) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] h-20 shrink-0 md:h-24" aria-hidden="true" />

      <div className="relative z-[2] flex min-h-0 flex-col justify-end pb-20 md:pb-[100px]">
        <div
          className={`w-full max-w-[820px] px-6 transition-all duration-1000 ease-out md:px-[60px] ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="block h-px w-10 bg-brand-silver/50" aria-hidden="true" />
            <span className="text-[0.65rem] font-normal uppercase tracking-[0.25em] text-brand-silver">
              Certified XPEL Installer — CT & NY
            </span>
          </div>

          <h1 className="hero-title mb-7 max-w-[12ch] text-[clamp(2.5rem,5.5vw,6.5rem)] font-extralight leading-[0.98] tracking-[-0.03em] text-brand-white">
            <span className="block">Where</span>
            <span className="block">
              Precision<em className="italic text-brand-silver"> Meets</em>
            </span>
            <span className="block">Protection.</span>
          </h1>

          <p className="mb-12 max-w-[420px] text-[0.85rem] leading-[1.8] tracking-[0.06em] text-brand-gray">
            Paint protection film, ceramic coating, and premium window tint for
            discerning owners who demand nothing less than perfection.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <PrimaryButton href="#booking">Request a Quote</PrimaryButton>
            <GhostButton href="#portfolio" icon="→">
              View Our Work
            </GhostButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2">
        <div
          className="h-[50px] w-px animate-scroll-line bg-gradient-to-b from-brand-silver to-transparent opacity-40"
          aria-hidden="true"
        />
        <span className="text-[0.55rem] uppercase tracking-[0.2em] text-brand-gray">
          Scroll
        </span>
      </div>
    </section>
  );
};
