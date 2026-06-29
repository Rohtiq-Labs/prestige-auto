"use client";

import Link from "next/link";
import { useEffect } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export const MobileMenu = ({
  open,
  onClose,
  links,
}: MobileMenuProps): React.ReactNode => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[1001] bg-brand-bg/80 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-[1002] flex w-full max-w-md flex-col bg-brand-bg transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-silver/35 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand-silver/20 via-brand-border to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-1 flex-col px-8 pb-10 pt-28">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-silver/40" aria-hidden="true" />
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-brand-silver">
              Navigation
            </span>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="list-none">
              {links.map((link, index) => (
                <li
                  key={link.href}
                  className={`border-b border-brand-border transition-all duration-500 ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-center gap-6 py-6 no-underline"
                  >
                    <span className="w-6 text-[0.6rem] font-normal tabular-nums tracking-[0.2em] text-brand-gray transition-colors duration-300 group-hover:text-brand-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(1.75rem,6vw,2.25rem)] font-extralight tracking-[-0.02em] text-brand-white transition-colors duration-300 group-hover:text-brand-silver">
                      {link.label}
                    </span>
                    <span
                      className="ml-auto text-brand-silver/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-silver/80"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`mt-auto space-y-8 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <div className="border-t border-brand-border pt-8">
              <p className="mb-4 text-[0.6rem] uppercase tracking-[0.22em] text-brand-gray">
                Get in touch
              </p>
              <a
                href="https://www.instagram.com/prestigeauto.tints/"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="text-sm font-light tracking-[0.06em] text-brand-silver no-underline transition-colors duration-300 hover:text-brand-white"
              >
                @prestigeauto.tints
              </a>
            </div>

            <Link
              href="#booking"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="block bg-brand-silver px-8 py-4 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-bg no-underline transition-all duration-300 hover:bg-brand-silver-hover"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
