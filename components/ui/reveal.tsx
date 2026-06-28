"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
};

const delayClasses: Record<number, string> = {
  0: "",
  1: "delay-100",
  2: "delay-200",
  3: "delay-300",
  4: "delay-[400ms]",
};

export const Reveal = ({
  children,
  className = "",
  delay = 0,
}: RevealProps): ReactNode => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-[30px]");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-[30px] transition-all duration-700 ease-out ${delayClasses[delay]} ${className}`}
    >
      {children}
    </div>
  );
};
