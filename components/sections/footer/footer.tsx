import Link from "next/link";

const serviceLinks = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Window Tint",
  "Vinyl Wrap",
  "PPF + Tint Combo",
];

const companyLinks = [
  { href: "#why", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#technology", label: "Technology" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#service-area", label: "Service Areas" },
];

const contactLinks = [
  { href: "#booking", label: "Book Consultation" },
  {
    href: "https://www.instagram.com/prestigeauto.tints/",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://maps.app.goo.gl/Nv1toNk2z31agVrv8",
    label: "Find Us",
    external: true,
  },
  { href: "#service-area", label: "Mobile Service" },
];

export const Footer = (): React.ReactNode => (
  <footer className="border-t border-brand-border bg-brand-bg-2 px-6 pb-8 pt-[60px] md:px-[60px] md:pb-10 md:pt-20">
    <div className="mb-10 grid grid-cols-1 gap-10 border-b border-brand-border pb-[60px] md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-[60px]">
      <div>
        <div className="mb-4 text-2xl font-extralight uppercase tracking-[0.08em] text-brand-white">
          Prestige <span className="text-brand-silver">Auto</span> Tints
        </div>
        <p className="max-w-[240px] text-[0.75rem] leading-[1.7] text-brand-gray">
          Certified XPEL installer serving Connecticut and New York with
          uncompromising precision.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {["XPEL Certified", "CT & NY", "Mobile Service"].map((badge) => (
            <span
              key={badge}
              className="border border-brand-border bg-brand-bg-3 px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.15em] text-brand-gray"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <FooterColumn title="Services">
        {serviceLinks.map((link) => (
          <li key={link}>
            <Link
              href="#services"
              className="text-[0.8rem] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
            >
              {link}
            </Link>
          </li>
        ))}
      </FooterColumn>

      <FooterColumn title="Company">
        {companyLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[0.8rem] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </FooterColumn>

      <FooterColumn title="Contact">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[0.8rem] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </FooterColumn>
    </div>

    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className="text-[0.7rem] text-brand-gray opacity-60">
        © 2025 Prestige Auto Tints. All rights reserved. CT &amp; NY Licensed.
      </div>
      <div className="flex gap-5">
        <Link
          href="https://www.instagram.com/prestigeauto.tints/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
        >
          Instagram
        </Link>
        <Link
          href="https://maps.app.goo.gl/Nv1toNk2z31agVrv8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-gray no-underline transition-colors duration-300 hover:text-brand-silver"
        >
          Google Maps
        </Link>
      </div>
    </div>
  </footer>
);

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps): React.ReactNode => (
  <div>
    <h4 className="mb-5 text-[0.6rem] font-normal uppercase tracking-[0.2em] text-brand-silver opacity-70">
      {title}
    </h4>
    <ul className="flex list-none flex-col gap-2.5">{children}</ul>
  </div>
);
