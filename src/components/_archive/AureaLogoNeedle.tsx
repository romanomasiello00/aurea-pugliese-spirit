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
        {/* Long thin needle-ray, tapered at both ends. */}
        <path id="aurea-ray-long" d="M450 6 L452 96 L450 202 L448 96 Z" />
        {/* Shorter secondary needle for the half-step ring. */}
        <path id="aurea-ray-short" d="M450 40 L451.5 110 L450 190 L448.5 110 Z" />
      </defs>

      {/* ---------- EMBLEM ---------- */}
      <g>
        {/* 24 long needle rays */}
        <g fill="#c9a84c">
          {Array.from({ length: 24 }).map((_, i) => (
            <use
              key={`ra-${i}`}
              href="#aurea-ray-long"
              transform={`rotate(${i * (360 / 24)} 450 200)`}
            />
          ))}
          {/* 24 shorter rays offset by half-step */}
          {Array.from({ length: 24 }).map((_, i) => (
            <use
              key={`rb-${i}`}
              href="#aurea-ray-short"
              transform={`rotate(${i * (360 / 24) + 360 / 48} 450 200)`}
              opacity={0.75}
            />
          ))}
        </g>

        {/* Central agave sprout — three angular navy leaves. */}
        <g fill="#0f1b3d">
          {/* center tall leaf */}
          <path d="M450 138 L442 210 L450 244 L458 210 Z" />
          {/* left leaf, tilted */}
          <path
            d="M450 244 L418 208 L420 176 L446 214 Z"
            transform="rotate(-4 450 210)"
          />
          {/* right leaf, tilted */}
          <path
            d="M450 244 L482 208 L480 176 L454 214 Z"
            transform="rotate(4 450 210)"
          />
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
