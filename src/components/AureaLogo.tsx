interface Props {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
  variant?: "full" | "compact";
}

/**
 * Aurea brand lockup — SVG so it stays sharp at every size.
 *
 * Layout matches the aureatequila.it (Vercel) version:
 *   emblem  →  AUREA wordmark  →  TEQUILA ✹ PUGLIA  →  SOLE • TERRA • MARE • TEMPO
 * Wordmark uses Cormorant Garamond (the serif from the Lovable version).
 *
 * variant="compact" (header): emblem + "TEQUILA • PUGLIA" only.
 */
export function AureaLogo({
  className,
  alt = "Aurea Tequila Puglia",
  style,
  variant = "full",
}: Props) {
  const isCompact = variant === "compact";

  // Compact viewport: emblem (top ~380 tall) + small caption strip.
  // Full viewport: emblem + AUREA + tequila/puglia + sole/terra/mare/tempo line.
  const viewBox = isCompact ? "0 0 900 470" : "0 0 900 780";

  return (
    <svg
      className={className}
      style={style}
      role="img"
      aria-label={alt}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      <defs>
        {/* A single sun ray — long, thin, tapered diamond. */}
        <path id="aurea-ray" d="M450 8 L458 158 L450 188 L442 158 Z" />
        {/* A shorter, softer inner ray for the second row. */}
        <path id="aurea-ray-inner" d="M450 44 L456 150 L450 168 L444 150 Z" />
      </defs>

      {/* ---------- EMBLEM ---------- */}
      <g>
        {/* 16 long rays forming the outer sunburst */}
        <g fill="#c9a84c">
          {Array.from({ length: 16 }).map((_, i) => (
            <use
              key={`r1-${i}`}
              href="#aurea-ray"
              transform={`rotate(${i * (360 / 16)} 450 200)`}
              opacity={0.92}
            />
          ))}
          {/* 16 shorter inner rays, offset by half-step for a lotus feel */}
          {Array.from({ length: 16 }).map((_, i) => (
            <use
              key={`r2-${i}`}
              href="#aurea-ray-inner"
              transform={`rotate(${i * (360 / 16) + 360 / 32} 450 200)`}
              opacity={0.55}
            />
          ))}
        </g>

        {/* Inner geometric circle band */}
        <circle
          cx="450"
          cy="200"
          r="112"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="3"
          opacity="0.85"
        />
        {/* Faint inner star polygon (16-point) */}
        <g
          fill="none"
          stroke="#c9a84c"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.6"
        >
          <polygon
            points={Array.from({ length: 16 })
              .map((_, i) => {
                const a = (i * Math.PI * 2) / 16 - Math.PI / 2;
                const r = i % 2 === 0 ? 108 : 62;
                const x = 450 + r * Math.cos(a);
                const y = 200 + r * Math.sin(a);
                return `${x.toFixed(2)},${y.toFixed(2)}`;
              })
              .join(" ")}
          />
        </g>

        {/* Agave lotus at the center */}
        <g
          fill="#0f1b3d"
          stroke="#0f1b3d"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* center leaf */}
          <path d="M450 148 C430 178 431 218 450 250 C469 218 470 178 450 148 Z" />
          {/* left leaf */}
          <path d="M410 188 C412 220 428 245 450 252 C444 224 430 200 410 188 Z" />
          {/* right leaf */}
          <path d="M490 188 C488 220 472 245 450 252 C456 224 470 200 490 188 Z" />
        </g>
      </g>

      {/* ---------- WORDMARK ---------- */}
      {isCompact ? (
        <text
          x="450"
          y="440"
          textAnchor="middle"
          fill="#0f1b3d"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="46"
          fontWeight="500"
          letterSpacing="14"
        >
          TEQUILA  ✹  PUGLIA
        </text>
      ) : (
        <>
          <text
            x="450"
            y="530"
            textAnchor="middle"
            fill="#0f1b3d"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="180"
            fontWeight="500"
            letterSpacing="32"
          >
            AUREA
          </text>
          <text
            x="450"
            y="620"
            textAnchor="middle"
            fill="#0f1b3d"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="46"
            fontWeight="500"
            letterSpacing="18"
          >
            TEQUILA  ✹  PUGLIA
          </text>
          <text
            x="450"
            y="700"
            textAnchor="middle"
            fill="#0f1b3d"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="30"
            fontWeight="600"
            letterSpacing="14"
            opacity="0.92"
          >
            SOLE  •  TERRA  •  MARE  •  TEMPO
          </text>
        </>
      )}
    </svg>
  );
}

export const aureaLogoUrl = "/aurea-tab-icon.svg";
