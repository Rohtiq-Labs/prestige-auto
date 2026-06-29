"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#technology", label: "Technology" },
  { href: "#service-area", label: "Areas" },
];

export const Navbar = (): React.ReactNode => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-6 py-5 transition-all duration-500 md:px-[60px] md:py-7 ${
        scrolled
          ? "border-b border-brand-border bg-brand-bg/95 py-4 backdrop-blur-2xl md:py-[18px]"
          : ""
      }`}
      aria-label="Main navigation"
    >
      <Link
        href="#"
        className="text-xs font-normal uppercase tracking-[0.2em] text-brand-white no-underline"
      >
        Prestige <span className="text-brand-silver">Auto</span> Tints
      </Link>

      <ul className="hidden list-none items-center gap-10 lg:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative text-[0.7rem] font-normal uppercase tracking-[0.18em] text-brand-gray no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:text-brand-white hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#booking"
        className="hidden border border-brand-silver/25 px-[22px] py-2.5 text-[0.65rem] font-normal uppercase tracking-[0.18em] text-brand-silver no-underline transition-all duration-300 hover:border-brand-silver hover:bg-brand-silver hover:text-brand-bg lg:inline-block"
      >
        Book Consultation
      </Link>

      <button
        type="button"
        className="relative block h-4 w-7 lg:hidden"
        aria-label="Open menu"
      >
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
          <line x1="0" y1="1" x2="28" y2="1" stroke="#F5F5F5" strokeWidth="1.5" />
          <line x1="8" y1="8" x2="28" y2="8" stroke="#F5F5F5" strokeWidth="1.5" />
          <line x1="4" y1="15" x2="28" y2="15" stroke="#F5F5F5" strokeWidth="1.5" />
        </svg>
      </button>
    </nav>
  );
};
