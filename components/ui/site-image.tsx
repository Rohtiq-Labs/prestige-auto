import Image from "next/image";
import { siteImagePath } from "@/lib/site-images";

type SiteImageProps = {
  index: number;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export const SiteImage = ({
  index,
  alt,
  className = "object-cover",
  priority = false,
  sizes = "100vw",
  fill = true,
}: SiteImageProps): React.ReactNode => (
  <Image
    src={siteImagePath(index)}
    alt={alt}
    fill={fill}
    className={className}
    priority={priority}
    sizes={sizes}
  />
);
