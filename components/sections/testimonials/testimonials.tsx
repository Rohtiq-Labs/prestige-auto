"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteImage } from "@/components/ui/site-image";

type Testimonial = {
  id: string;
  text: string;
  author: string;
  vehicle: string;
  imageIndex: number;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Prestige did a full XPEL wrap on my 911 GT3 RS. The attention to detail was extraordinary — every edge, every curve was perfect. This is the only shop I'll ever use.",
    author: "Michael R.",
    vehicle: "Porsche 911 GT3 RS — Full PPF",
    imageIndex: 20,
  },
  {
    id: "2",
    text: "I've had multiple cars tinted over the years. Nothing compares to the XPEL Prime XR Plus on my Urus. Crystal clear, keeps the cabin cool, and I had zero bubbles. Flawless.",
    author: "Sophia L.",
    vehicle: "Lamborghini Urus — XPEL Tint",
    imageIndex: 21,
  },
  {
    id: "3",
    text: "They came to my driveway in Greenwich, wrapped the entire Model S in stealth PPF, and left it looking like a factory matte finish. Professional, fast, and genuinely passionate about the craft.",
    author: "James T.",
    vehicle: "Tesla Model S — Stealth PPF",
    imageIndex: 22,
  },
];

const SWIPE_THRESHOLD = 50;
const AUTO_ADVANCE_MS = 6000;

export const Testimonials = (): React.ReactNode => {
  const [current, setCurrent] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoAdvance = useCallback((): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  const goToTestimonial = useCallback(
    (index: number): void => {
      setCurrent(index);
      resetAutoAdvance();
    },
    [resetAutoAdvance],
  );

  const goToNext = useCallback((): void => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetAutoAdvance();
  }, [resetAutoAdvance]);

  const goToPrev = useCallback((): void => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoAdvance();
  }, [resetAutoAdvance]);

  useEffect(() => {
    resetAutoAdvance();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetAutoAdvance]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    if (!touch) return;

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    if (!touchStartRef.current) return;

    const touch = event.changedTouches[0];
    if (!touch) return;

    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
      return;
    }

    goToPrev();
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-bg px-6 py-20 md:px-[60px] md:py-[120px]"
      aria-label="Client testimonials"
    >
      {testimonials.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-20" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <SiteImage
            index={item.imageIndex}
            alt=""
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-bg/85" />
        </div>
      ))}

      <div className="relative z-[1]">
        <Reveal className="mb-5">
          <SectionLabel>Client Testimonials</SectionLabel>
        </Reveal>

        <div
          className="relative flex min-h-[300px] touch-pan-y items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`w-full transition-all duration-600 ease-out ${
                index === current
                  ? "relative translate-x-0 opacity-100"
                  : "pointer-events-none absolute translate-x-10 opacity-0"
              }`}
              aria-hidden={index !== current}
            >
              <div className="mb-6 flex items-start gap-6">
                <div className="relative hidden h-20 w-20 shrink-0 overflow-hidden md:block">
                  <SiteImage
                    index={item.imageIndex}
                    alt={`Vehicle for ${item.author}`}
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[0.8rem] text-brand-silver opacity-70">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="mb-5 text-[8rem] font-extralight leading-[0.5] text-brand-silver opacity-[0.08]"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="mb-10 max-w-[900px] text-[clamp(1.4rem,2.5vw,2.2rem)] font-extralight leading-[1.3] tracking-[-0.02em] text-brand-white">
                {item.text}
              </p>
              <div className="flex items-center gap-5">
                <div className="h-px w-10 bg-brand-silver/30" aria-hidden="true" />
                <div>
                  <div className="text-[0.8rem] font-normal text-brand-silver">
                    {item.author}
                  </div>
                  <div className="text-[0.7rem] tracking-[0.1em] text-brand-gray">
                    {item.vehicle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-nav mt-[50px] flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-dot h-0.5 transition-all duration-300 ${
                index === current
                  ? "w-12 bg-brand-silver"
                  : "w-6 bg-brand-border hover:bg-brand-red"
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
