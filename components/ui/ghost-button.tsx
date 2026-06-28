import Link from "next/link";
import type { ReactNode } from "react";

type GhostButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
};

export const GhostButton = ({
  href,
  children,
  icon,
}: GhostButtonProps): ReactNode => (
  <Link
    href={href}
    className="inline-flex items-center gap-2.5 border border-brand-silver/20 px-7 py-[15px] text-[0.65rem] font-normal uppercase tracking-[0.2em] text-brand-silver transition-colors duration-300 hover:border-brand-silver/30 hover:bg-brand-bg-3 hover:text-brand-white"
  >
    {children}
    {icon && <span className="text-[1.1rem]">{icon}</span>}
  </Link>
);
