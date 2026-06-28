export const ServiceAreaMap = (): React.ReactNode => (
  <svg
    viewBox="0 0 500 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="500" height="480" fill="url(#mapGlow)" />

    <path
      className="fill-brand-silver/[0.06] stroke-brand-silver/35 transition-[fill] duration-300 hover:fill-brand-silver/[0.08]"
      d="M 60 60 L 180 50 L 250 45 L 310 40 L 340 55 L 370 80 L 395 110 L 410 140 L 415 170 L 405 200 L 390 225 L 370 245 L 350 260 L 380 290 L 370 310 L 340 325 L 300 340 L 260 345 L 230 340 L 210 330 L 190 320 L 170 295 L 155 270 L 140 280 L 120 270 L 100 255 L 85 240 L 80 220 L 70 200 L 55 180 L 45 160 L 40 130 L 45 100 L 55 75 Z"
      strokeWidth="1"
    />

    <path
      className="fill-brand-silver/[0.04] stroke-brand-silver/20 transition-[fill] duration-300 hover:fill-brand-silver/[0.08]"
      d="M 210 330 L 240 325 L 280 320 L 320 315 L 360 318 L 400 325 L 440 340 L 470 355 L 480 365 L 460 375 L 420 372 L 380 368 L 340 365 L 300 355 L 260 348 L 225 342 L 210 338 Z"
      strokeWidth="1"
    />

    <path
      className="fill-brand-silver/[0.06] stroke-brand-silver/35 transition-[fill] duration-300 hover:fill-brand-silver/[0.08]"
      d="M 340 255 L 370 248 L 400 242 L 430 240 L 455 242 L 470 250 L 475 268 L 472 290 L 460 310 L 440 325 L 410 335 L 380 340 L 350 342 L 330 338 L 315 328 L 305 312 L 305 295 L 315 278 L 328 263 Z"
      strokeWidth="1"
    />

    <circle cx="300" cy="312" r="5" fill="#8B1118" />
    <circle cx="390" cy="280" r="4" fill="#8B1118" />
    <circle cx="210" cy="170" r="4" fill="#8B1118" />
    <circle cx="335" cy="308" r="3.5" fill="#C89B3C" opacity="0.8" />

    <circle
      cx="320"
      cy="290"
      r="130"
      fill="none"
      stroke="#C89B3C"
      strokeWidth="0.5"
      strokeOpacity="0.12"
      strokeDasharray="6,8"
    />

    <text
      x="200"
      y="200"
      fill="rgba(255,255,255,0.12)"
      fontSize="18"
      fontFamily="Inter,sans-serif"
      fontWeight="200"
      letterSpacing="4"
    >
      NEW YORK
    </text>
    <text
      x="368"
      y="302"
      fill="rgba(255,255,255,0.1)"
      fontSize="11"
      fontFamily="Inter,sans-serif"
      fontWeight="200"
      letterSpacing="3"
    >
      CT
    </text>
  </svg>
);
