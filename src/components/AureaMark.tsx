interface Props {
  className?: string;
  gold?: string;
  navy?: string;
}

/**
 * Aurea sunburst mark derived from the brand logo.
 * Pure SVG so it stays crisp and inherits colors.
 */
export function AureaMark({ className, gold = "#c9a84c", navy = "#0f1b3d" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={gold} strokeWidth="0.6" fill="none">
        <circle cx="50" cy="50" r="30" strokeDasharray="0.5 1.5" />
        <circle cx="50" cy="50" r="36" opacity="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const x1 = 50 + Math.cos(a) * 20;
          const y1 = 50 + Math.sin(a) * 20;
          const x2 = 50 + Math.cos(a) * 32;
          const y2 = 50 + Math.sin(a) * 32;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {[0, 90, 180, 270].map((deg) => (
          <polygon
            key={deg}
            points="50,10 52,20 50,18 48,20"
            transform={`rotate(${deg} 50 50)`}
            fill={gold}
            stroke="none"
          />
        ))}
      </g>
      {/* Central lotus */}
      <g fill={navy}>
        <path d="M50 42 C 46 46, 46 52, 50 56 C 54 52, 54 46, 50 42 Z" />
        <path
          d="M42 50 C 44 46, 48 46, 50 50 C 48 54, 44 54, 42 50 Z"
          opacity="0.85"
        />
        <path
          d="M58 50 C 56 46, 52 46, 50 50 C 52 54, 56 54, 58 50 Z"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}

/** Full stacked wordmark: mark + AUREA + tagline */
export function AureaWordmark({ className }: { className?: string }) {
  return (
    <div className={"flex flex-col items-center gap-1 " + (className ?? "")}>
      <AureaMark className="size-8" />
      <span className="font-display text-2xl font-medium tracking-[0.35em] text-navy uppercase leading-none">
        Aurea
      </span>
      <span className="text-[8px] uppercase tracking-[0.4em] text-gold">
        Tequila · Puglia
      </span>
    </div>
  );
}
