type SectionLabelProps = {
  children: React.ReactNode;
};

export const SectionLabel = ({ children }: SectionLabelProps): React.ReactNode => (
  <div className="mb-4 flex items-center gap-4">
    <span className="text-[0.65rem] font-normal uppercase tracking-[0.25em] text-brand-silver">
      {children}
    </span>
    <span className="h-px w-10 shrink-0 bg-brand-border" aria-hidden="true" />
  </div>
);
