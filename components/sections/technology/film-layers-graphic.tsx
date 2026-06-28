export const FilmLayersGraphic = (): React.ReactNode => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 500"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 z-[1] flex items-center justify-center"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="layer1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="layer2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6090C0" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#6090C0" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="layer3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="layer4Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    <rect x="40" y="380" width="320" height="60" rx="2" fill="url(#layer4Grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <text x="200" y="414" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle" letterSpacing="4" fontFamily="Inter,sans-serif">PAINT SURFACE</text>

    <rect x="40" y="300" width="320" height="70" rx="2" fill="url(#layer3Grad)" stroke="rgba(200,155,60,0.2)" strokeWidth="1" />
    <text x="200" y="330" fill="rgba(200,155,60,0.6)" fontSize="10" textAnchor="middle" letterSpacing="4" fontFamily="Inter,sans-serif">ADHESIVE LAYER</text>

    <rect x="40" y="180" width="320" height="110" rx="2" fill="url(#layer2Grad)" stroke="rgba(96,144,192,0.35)" strokeWidth="1" />
    <text x="200" y="228" fill="rgba(150,190,230,0.7)" fontSize="10" textAnchor="middle" letterSpacing="4" fontFamily="Inter,sans-serif">TPU FILM CORE</text>

    <rect x="40" y="100" width="320" height="70" rx="2" fill="url(#layer1Grad)" stroke="rgba(200,155,60,0.45)" strokeWidth="1" />
    <text x="200" y="130" fill="rgba(200,155,60,0.8)" fontSize="10" textAnchor="middle" letterSpacing="4" fontFamily="Inter,sans-serif">CLEAR COAT</text>

    <line x1="100" y1="30" x2="120" y2="100" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3,4" />
    <line x1="160" y1="20" x2="170" y2="100" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3,4" />
    <line x1="230" y1="25" x2="225" y2="100" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3,4" />
    <text x="160" y="18" fill="rgba(200,155,60,0.3)" fontSize="8" textAnchor="middle" letterSpacing="2" fontFamily="Inter,sans-serif">UV / HEAT / IMPACT</text>
  </svg>
);
