export const SITE_IMAGE_COUNT = 29;

export const siteImagePath = (index: number): string => {
  const padded = String(index).padStart(2, "0");
  return `/assets/images/img-${padded}.jpg`;
};

export const siteImages = Array.from({ length: SITE_IMAGE_COUNT }, (_, i) =>
  siteImagePath(i + 1),
);
