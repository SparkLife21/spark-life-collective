export function FaithPillars() {
  const pillars = [
    { letter: "F", name: "Facilitating", icon: "hands" },
    { letter: "A", name: "Authentic", icon: "fingerprint" },
    { letter: "I", name: "Impactful", icon: "bolt" },
    { letter: "T", name: "Transcendent", icon: "hourglass" },
    { letter: "H", name: "Healing", icon: "caduceus" },
  ] as const;

  return (
    <section aria-label="F.A.I.T.H. pillars">
      <p className="eyebrow text-gold-light">The SLC lens</p>
      <h2 className="mt-2 font-serif text-4xl tracking-wide text-paper">
        F.A.I.T.H.
      </h2>
      <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.letter}
            className="flex flex-col items-center text-center lg:border-l lg:border-gold/20 lg:first:border-l-0 lg:px-3"
          >
            <span className="font-serif text-sm tracking-[0.35em] text-gold">
              {pillar.letter}
            </span>
            <div className="mt-5 text-gold-light" aria-hidden="true">
              <PillarIcon name={pillar.icon} />
            </div>
            <p className="mt-5 font-serif text-xl text-paper">{pillar.name}</p>
            <span className="sr-only">
              {index + 1} of 5: {pillar.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PillarIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" role="img">
      {name === "hands" ? (
        <g {...common}>
          <path d="M18 34c-2 0-5 3-5 7 0 6 5 11 11 13" />
          <path d="M13 41c3 1 7 1 10-2" />
          <path d="M22 28c0-3 2-6 5-6 2 0 3 1 4 3 1-3 3-5 6-5 4 0 6 4 6 8 0 7-4 12-8 16" />
          <path d="M46 34c2 0 5 3 5 7 0 6-5 11-11 13" />
          <path d="M51 41c-3 1-7 1-10-2" />
          <path d="M28 44c2 6 6 9 4 9" />
        </g>
      ) : null}
      {name === "fingerprint" ? (
        <g {...common}>
          <path d="M22 22c6-6 14-6 20 0" />
          <path d="M18 28c8-8 20-8 28 0" />
          <path d="M16 36c4-10 28-10 32 2" />
          <path d="M20 44c3-8 21-8 24 2" />
          <path d="M26 50c2-6 10-6 12 1" />
          <path d="M32 18v2" />
        </g>
      ) : null}
      {name === "bolt" ? (
        <g {...common}>
          <path d="M30 10 18 34h13l-5 20 22-30H34l6-14H30Z" />
          <path d="M26 38 32 32" />
          <path d="M36 24 42 18" />
        </g>
      ) : null}
      {name === "hourglass" ? (
        <g {...common}>
          <path d="M24 16h16v4c0 5-4 8-8 10-4 2-8 5-8 10v4h16v-4c0-5-4-8-8-10-4-2-8-5-8-10v-4Z" />
          <path d="M32 20v3" />
          <path d="M44 14c2-1 4 1 3 3-2 1-4-1-3-3Z" />
          <circle cx="48" cy="22" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="18" r="1" fill="currentColor" stroke="none" />
          <circle cx="18" cy="46" r="1.1" fill="currentColor" stroke="none" />
        </g>
      ) : null}
      {name === "caduceus" ? (
        <g {...common}>
          <path d="M32 14v40" />
          <path d="M26 14c0-5 12-5 12 0" />
          <path d="M24 16c-4 0-6 4-4 8 4 6 16 6 20 0 2-4 0-8-4-8" />
          <path d="M20 30c6 8 18 8 24 0" />
          <path d="M22 38c6 8 14 8 20 0" />
        </g>
      ) : null}
    </svg>
  );
}
