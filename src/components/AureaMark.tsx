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
      shapeRendering="geometricPrecision"
    >
      <defs>
        <path id="aurea-ray" d="M50 13 L53.2 47 L50 55 L46.8 47 Z" />
      </defs>

      <g stroke={gold} strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M50 3 L58 25 L80 11 L75 37 L98 50 L75 63 L80 89 L58 75 L50 97 L42 75 L20 89 L25 63 L2 50 L25 37 L20 11 L42 25 Z" opacity="0.82" />
        <circle cx="50" cy="50" r="37" />
      </g>

      <g fill={gold} opacity="0.9">
        {Array.from({ length: 24 }).map((_, i) => (
          <use key={i} href="#aurea-ray" transform={`rotate(${i * 15} 50 50)`} opacity={i % 2 ? 0.62 : 0.9} />
        ))}
      </g>

      <g fill={gold} opacity="0.85">
        {Array.from({ length: 40 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 40;
          const x = 50 + Math.cos(a) * 30.5;
          const y = 50 + Math.sin(a) * 30.5;
          return <circle key={i} cx={x} cy={y} r="0.7" />;
        })}
      </g>

      {/* Central lotus */}
      <g fill="none" stroke={navy} strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M50 37 C42 46 42 58 50 67 C58 58 58 46 50 37 Z" fill="#f5efe4" />
        <path
          d="M35 49 C36 60 42 67 50 68 C48 58 43 52 35 49 Z"
          fill="#f5efe4"
        />
        <path
          d="M65 49 C64 60 58 67 50 68 C52 58 57 52 65 49 Z"
          fill="#f5efe4"
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
