import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteImage } from "@/components/ui/site-image";

type WhyItem = {
  num: string;
  title: string;
  text: string;
  tag: string;
  side: "left" | "right";
  imageIndex: number;
};

const whyItems: WhyItem[] = [
  {
    num: "01",
    title: "Certified XPEL Installer",
    text: "We are among an exclusive network of XPEL-certified installers in Connecticut and New York. This certification isn't handed out — it's earned through demonstrated mastery of material, process, and outcome.",
    tag: "XPEL Authorized",
    side: "left",
    imageIndex: 26,
  },
  {
    num: "02",
    title: "Precision Installation",
    text: "Every film and coating application is performed in a controlled, climate-regulated environment. We use computer-cut patterns specific to your vehicle's exact geometry — no bulk trimming, no compromises.",
    tag: "Zero Compromise",
    side: "right",
    imageIndex: 27,
  },
  {
    num: "03",
    title: "Lifetime Performance",
    text: "XPEL ULTIMATE PLUS™ comes with a lifetime manufacturer warranty for yellowing, cracking, peeling, and delamination. We stand behind every installation with our own workmanship guarantee.",
    tag: "Warranted for Life",
    side: "left",
    imageIndex: 28,
  },
  {
    num: "04",
    title: "Mobile Service Available",
    text: "We bring our full expertise directly to your driveway or garage. Available across Connecticut and New York — your vehicle never needs to leave its home.",
    tag: "CT & NY",
    side: "right",
    imageIndex: 29,
  },
];

const TimelineDot = (): React.ReactNode => (
  <div className="hidden items-center justify-center md:flex">
    <div className="relative h-2.5 w-2.5 rounded-full border border-brand-silver/40 bg-brand-bg-2 after:absolute after:inset-[3px] after:rounded-full after:bg-brand-silver after:opacity-60" />
  </div>
);

export const WhyUs = (): React.ReactNode => (
  <section
    id="why"
    className="relative overflow-hidden bg-brand-bg-2 px-6 py-20 md:px-[60px] md:py-[140px]"
    aria-label="Why choose us"
  >
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] font-extralight tracking-[-0.05em] text-brand-silver/[0.018]"
      aria-hidden="true"
    >
      PRESTIGE
    </div>

    <Reveal>
      <SectionLabel>Why Choose Us</SectionLabel>
      <h2 className="text-[clamp(2.5rem,5vw,6rem)] font-extralight leading-none tracking-[-0.03em] text-brand-white">
        The standard
        <br />
        we set for
        <br />
        <em className="italic text-brand-silver">ourselves.</em>
      </h2>
    </Reveal>

    <div className="relative z-[1] mx-auto mt-20 max-w-[1100px]">
      {whyItems.map((item, index) => (
        <div key={item.num}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr]">
            {item.side === "left" ? (
              <>
                <Reveal className="border-b border-brand-border py-10 md:border-b-0 md:p-[60px] md:text-right">
                  <WhyItemContent item={item} />
                </Reveal>
                <TimelineDot />
                <div className="hidden md:block" />
              </>
            ) : (
              <>
                <div className="hidden md:block" />
                <TimelineDot />
                <Reveal
                  delay={(index % 3) as 0 | 1 | 2}
                  className="border-b border-brand-border py-10 md:border-b-0 md:p-[60px] md:text-left"
                >
                  <WhyItemContent item={item} />
                </Reveal>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-silver/25 to-transparent md:block" aria-hidden="true" />
    </div>
  </section>
);

const WhyItemContent = ({ item }: { item: WhyItem }): React.ReactNode => (
  <>
    <div className="relative mb-6 h-32 w-full overflow-hidden md:mb-8 md:h-40">
      <SiteImage
        index={item.imageIndex}
        alt={`${item.title} — Prestige Auto Tints`}
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-2 via-brand-bg-2/20 to-transparent" aria-hidden="true" />
    </div>
    <div className="mb-[-10px] text-[5rem] font-extralight leading-none tracking-[-0.05em] text-brand-silver/[0.05]">
      {item.num}
    </div>
    <h3 className="mb-4 text-[1.8rem] font-light tracking-[-0.02em] text-brand-white">
      {item.title}
    </h3>
    <p className="text-[0.85rem] leading-[1.75] text-brand-gray">{item.text}</p>
    <span className="mt-5 inline-block border border-brand-silver/20 px-3.5 py-1.5 text-[0.55rem] uppercase tracking-[0.2em] text-brand-silver">
      {item.tag}
    </span>
  </>
);
