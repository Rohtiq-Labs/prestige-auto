"use client";

import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";

type PrimaryButtonProps = {
  href?: string;
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export const PrimaryButton = ({
  href,
  children,
  type = "button",
  className = "",
  onClick,
}: PrimaryButtonProps): ReactNode => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent): void => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = (): void => {
    const btn = ref.current;
    if (btn) btn.style.transform = "";
  };

  const classes = `group relative inline-block overflow-hidden bg-brand-silver px-9 py-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-bg transition-all duration-300 hover:-translate-y-px hover:bg-brand-silver-hover hover:shadow-[0_8px_32px_rgba(194,194,194,0.12)] ${className}`;

  const shine = (
    <span
      className="absolute inset-y-0 left-[-100%] w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-[left] duration-500 group-hover:left-[160%]"
      aria-hidden="true"
    />
  );

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {shine}
        <span className="relative">{children}</span>
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {shine}
      <span className="relative">{children}</span>
    </button>
  );
};
