"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#technology", label: "Technology" },
  { href: "#service-area", label: "Areas" },
];

export const Navbar = (): React.ReactNode => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = (): void => setMenuOpen(false);
  const toggleMenu = (): void => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1003] flex items-center justify-between px-6 py-5 transition-all duration-500 md:px-[60px] md:py-7 ${
          scrolled || menuOpen
            ? "border-b border-brand-border bg-brand-bg/95 py-4 backdrop-blur-2xl md:py-[18px]"
            : ""
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="relative z-[1] text-xs font-normal uppercase tracking-[0.2em] text-brand-white no-underline"
          onClick={closeMenu}
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
          className="relative z-[1] flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="relative block h-[15px] w-7" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-full origin-center bg-brand-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                menuOpen ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full origin-center bg-brand-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full origin-center bg-brand-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={closeMenu} links={navLinks} />
    </>
  );
};
