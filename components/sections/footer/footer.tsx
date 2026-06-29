import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";

const serviceLinks = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Window Tint",
  "Vinyl Wrap",
  "PPF + Tint Combo",
];

const exploreLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#featured", label: "Featured Builds" },
  { href: "#technology", label: "Technology" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#service-area", label: "Service Areas" },
];

const connectLinks = [
  { href: "#booking", label: "Book Consultation" },
  {
    href: "https://www.instagram.com/prestigeauto.tints/",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://maps.app.goo.gl/1ryknmahVPqPFV327",
    label: "Google Maps",
    external: true,
  },
  { href: "#service-area", label: "Mobile Service" },
];

export const Footer = (): React.ReactNode => (
  <footer className="relative overflow-hidden bg-brand-bg" aria-label="Site footer">
    <div
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-silver/35 to-transparent"
      aria-hidden="true"
    />

    <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
      <SiteImage
        index={29}
        alt=""
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/95 to-brand-bg" />
    </div>

    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[38%] select-none whitespace-nowrap text-[clamp(5rem,18vw,14rem)] font-extralight tracking-[-0.04em] text-brand-silver/[0.025]"
      aria-hidden="true"
    >
      PRESTIGE
    </div>

    <div className="relative z-[1] px-6 pt-20 md:px-[60px] md:pt-28">
      <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12 md:gap-8 md:pb-20">
        <div className="md:col-span-4">
          <Link
            href="#"
            className="mb-5 inline-block text-[0.7rem] font-normal uppercase tracking-[0.22em] text-brand-white no-underline"
          >
            Prestige <span className="text-brand-silver">Auto</span> Tints
          </Link>
          <p className="max-w-xs text-[0.75rem] leading-[1.75] text-brand-gray">
            Where precision meets protection. Serving discerning owners across
            Connecticut and New York.
          </p>
        </div>

        <FooterColumn title="Services" className="md:col-span-2 md:col-start-6">
          {serviceLinks.map((link) => (
            <li key={link}>
              <FooterLink href="#services">{link}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Explore" className="md:col-span-2">
          {exploreLinks.map((link) => (
            <li key={link.label}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact" className="md:col-span-2">
          {connectLinks.map((link) => (
            <li key={link.label}>
              <FooterLink href={link.href} external={link.external}>
                {link.label}
              </FooterLink>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="flex flex-col gap-6 border-t border-brand-border py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-brand-gray/70">
          © {new Date().getFullYear()} Prestige Auto Tints. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <span className="hidden h-px w-8 bg-brand-silver/20 md:block" aria-hidden="true" />
          <FooterLink href="https://www.instagram.com/prestigeauto.tints/" external>
            Instagram
          </FooterLink>
          <FooterLink href="https://maps.app.goo.gl/1ryknmahVPqPFV327" external>
            Google Maps
          </FooterLink>
          <FooterLink href="#booking">Request a Quote</FooterLink>
        </div>
      </div>
    </div>
  </footer>
);

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const FooterColumn = ({
  title,
  children,
  className = "",
}: FooterColumnProps): React.ReactNode => (
  <div className={className}>
    <h4 className="mb-6 flex items-center gap-3 text-[0.6rem] font-normal uppercase tracking-[0.22em] text-brand-silver">
      {title}
      <span className="h-px flex-1 bg-brand-border" aria-hidden="true" />
    </h4>
    <ul className="flex list-none flex-col gap-3.5">{children}</ul>
  </div>
);

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

const FooterLink = ({
  href,
  children,
  external = false,
}: FooterLinkProps): React.ReactNode => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group relative inline-block text-[0.78rem] font-light tracking-[0.03em] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-white"
  >
    {children}
    <span
      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />
  </Link>
);
