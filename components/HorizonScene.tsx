/** Decorative dawn/horizon scene — no human figures. Hidden from AT as the hero copy is the content. */
export function HorizonScene() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="sun" cx="50%" cy="58%" r="42%">
          <stop offset="0%" stopColor="#E4CB8A" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#CC9752" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#9B3636" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="land" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2a1818" />
          <stop offset="100%" stopColor="#120e0c" />
        </linearGradient>
        <linearGradient id="root" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#CC9752" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#CC9752" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1440" height="820" fill="#14110f" />
      <circle cx="720" cy="430" r="300" fill="url(#sun)" />
      <path
        d="M0 548c120-28 240-48 360-42 150 8 240 52 390 48 160-4 250-50 400-58 110-6 210 10 290 28v296H0V548Z"
        fill="url(#land)"
      />
      <path
        d="M0 572c180-36 300-20 470-8 190 14 280-30 470-38 140-6 280 18 500 42v252H0V572Z"
        fill="#1a1210"
        opacity="0.9"
      />
      <g fill="none" stroke="url(#root)" strokeWidth="1.2">
        <path d="M430 590c-20 40-18 70-8 120" />
        <path d="M430 590c18 36 10 80-20 130" />
        <path d="M720 580c-12 50 8 90 4 150" />
        <path d="M720 580c22 44 18 96 40 140" />
        <path d="M980 598c-16 38 6 88-10 132" />
        <path d="M980 598c24 42 16 86 36 128" />
      </g>
      <g fill="#1c1412">
        <path d="M262 560c8-38 18-62 22-92 6 28 22 54 28 92h-50Z" />
        <path d="M1184 568c10-44 16-70 20-102 8 30 26 62 32 102h-52Z" />
      </g>
    </svg>
  );
}
