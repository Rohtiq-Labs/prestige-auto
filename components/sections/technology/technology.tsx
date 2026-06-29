"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

type TechTab = {
  id: string;
  title: string;
  text: string;
  stat?: { value: string; label: string };
  bar?: { label: string; value: string; width: string };
};

const techTabs: TechTab[] = [
  {
    id: "heat",
    title: "Heat Rejection",
    text: "XPEL PRIME XR Plus™ ceramic window film rejects up to 98% of infrared heat before it enters the cabin — without compromising optical clarity or signal transparency for modern vehicles.",
    bar: { label: "IR REJECTION", value: "98%", width: "98%" },
  },
  {
    id: "uv",
    title: "UV Protection",
    text: "Blocks 99.9% of harmful UV-A and UV-B rays. Protects both your vehicle's interior surfaces and your skin from cumulative sun damage — year round in all weather conditions.",
    bar: { label: "UV REJECTION", value: "99.9%", width: "99.9%" },
  },
  {
    id: "self-healing",
    title: "Self-Healing Technology",
    text: "XPEL ULTIMATE PLUS™ PPF features an elastomeric polymer top coat. Light surface swirls and scuffs vanish on their own through heat activation — from sunlight or warm water — restoring a flawless finish.",
    stat: { value: "~70°F", label: "ACTIVATION TEMP" },
  },
  {
    id: "clarity",
    title: "Optical Clarity",
    text: "XPEL film achieves near-perfect optical clarity — invisible to the eye and without any orange-peel texture. Once installed, the film disappears into the paint. Protection you can't see.",
    stat: { value: "99.5%", label: "LIGHT TRANSMISSION (CLEAR)" },
  },
  {
    id: "hydrophobic",
    title: "Hydrophobic Performance",
    text: "XPEL Fusion Plus ceramic coating creates a nano-ceramic bond with contact angles exceeding 110°. Water, mud, and contaminants sheet off effortlessly — keeping your vehicle cleaner, longer.",
    stat: { value: "110°", label: "CONTACT ANGLE" },
  },
];

export const Technology = (): React.ReactNode => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setBarsAnimated(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-bg-2 px-6 py-20 md:px-[60px] md:py-[140px]"
      aria-label="Film technology"
    >
      <Reveal>
        <SectionLabel>Film Technology</SectionLabel>
        <h2 className="text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-brand-white">
          Engineered
          <br />
          to <em className="italic text-brand-silver">Endure.</em>
        </h2>
      </Reveal>

      <div className="mt-10 w-full md:mt-20">
        <div className="flex w-full flex-col">
          {techTabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`tech-tab border-b border-brand-border py-8 transition-[padding] duration-300 first:border-t ${
                activeTab === index ? "active" : ""
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setActiveTab(index)}
                aria-expanded={activeTab === index}
              >
                <span
                  className={`text-[1.1rem] font-light tracking-[-0.01em] transition-colors duration-300 ${
                    activeTab === index ? "text-brand-white" : "text-brand-silver"
                  }`}
                >
                  {tab.title}
                </span>
                <span
                  className={`flex h-7 w-7 items-center justify-center border text-[0.8rem] transition-all duration-300 ${
                    activeTab === index
                      ? "rotate-45 border-brand-red text-brand-silver"
                      : "border-brand-border text-brand-gray"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeTab === index ? "max-h-[200px] pt-5" : "max-h-0"
                }`}
              >
                <p className="text-[0.85rem] leading-[1.75] text-brand-gray">{tab.text}</p>
                {tab.bar && (
                  <>
                    <div className="relative mt-3 h-px overflow-hidden bg-brand-border">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-silver to-brand-silver/50 transition-[width] duration-[1200ms] ease-out"
                        style={{ width: barsAnimated ? tab.bar.width : "0" }}
                      />
                    </div>
                    <div className="mt-1.5 flex justify-between">
                      <span className="text-[0.6rem] tracking-[0.1em] text-brand-gray">
                        {tab.bar.label}
                      </span>
                      <span className="text-[0.6rem] text-brand-silver">{tab.bar.value}</span>
                    </div>
                  </>
                )}
                {tab.stat && (
                  <div className="mt-4 inline-flex items-baseline gap-1 text-[1.8rem] font-extralight text-brand-silver">
                    {tab.stat.value}
                    <small className="text-[0.7rem] tracking-[0.1em] text-brand-gray">
                      {tab.stat.label}
                    </small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
