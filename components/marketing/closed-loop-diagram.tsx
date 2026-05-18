export function ClosedLoopDiagram() {
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(16,185,129,0.1),transparent_50%)]" />
      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full text-sky-300/90"
        role="img"
        aria-labelledby="closed-loop-svg-title"
      >
        <title id="closed-loop-svg-title">
          Closed-loop habitat schematic showing atmosphere, hydrology, biomass,
          and energy exchange
        </title>
        <defs>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(125 211 252)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(45 212 191)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="animate-[spin_68s_linear_infinite] motion-reduce:animate-none"
          opacity="0.55"
        />
        <circle
          cx="200"
          cy="200"
          r="132"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.35"
          className="animate-[spin_48s_linear_infinite_reverse] motion-reduce:animate-none"
        />
        <circle
          cx="200"
          cy="200"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.25"
          className="animate-[spin_32s_linear_infinite] motion-reduce:animate-none"
        />
        <g filter="url(#glow)">
          <path
            d="M200 64 C118 64 64 118 64 200 C64 282 118 336 200 336 C282 336 336 282 336 200 C336 118 282 64 200 64"
            fill="none"
            stroke="rgb(56 189 248)"
            strokeWidth="1.25"
            strokeOpacity="0.55"
          />
        </g>
        <g fontSize="11" fill="rgb(226 232 240)" letterSpacing="0.08em">
          <text x="200" y="42" textAnchor="middle">
            ATMOSPHERE
          </text>
          <text x="348" y="210" textAnchor="end">
            HYDROLOGY
          </text>
          <text x="52" y="210" textAnchor="start">
            BIOMASS
          </text>
          <text x="200" y="372" textAnchor="middle">
            ENERGY
          </text>
        </g>
        <circle cx="200" cy="200" r="6" fill="rgb(45 212 191)" opacity="0.85" />
      </svg>
      <figcaption className="sr-only">
        Conceptual diagram of mass and energy coupling across atmosphere,
        hydrology, biomass, and power subsystems.
      </figcaption>
    </figure>
  );
}
