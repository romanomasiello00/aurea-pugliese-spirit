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
 * Emblem construction (matches the reference the client approved):
 *   – gold 8-point star outline
 *   – concentric gold circle
 *   – 28 tapered needle rays radiating outward, alternating opacity
 *   – navy-outlined 3-leaf lotus centerpiece filled cream
 *
 * variant="full"    → emblem + AUREA + TEQUILA ✹ PUGLIA + SOLE • TERRA • MARE • TEMPO
 * variant="compact" → emblem + TEQUILA ✹ PUGLIA (used in the sticky header)
 */
export function AureaLogo({
  className,
  alt = "Aurea Tequila Puglia",
  style,
  variant = "full",
}: Props) {
  const isCompact = variant === "compact";
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
        {/* Single tapered needle ray. Rotated 28× around the emblem center (450, 200). */}
        <path id="aurea-ray" d="M450 32 L462 137 L450 164 L438 137 Z" />
      </defs>

      {/* ---------- EMBLEM (centered at 450, 200) ---------- */}
      <g>
        {/* 8-point star outline + inner circle, in gold */}
        <g
          stroke="#c9a84c"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        >
          <path
            d="M450 32 L478 112 L555 63 L538 153 L620 200 L538 247 L555 337 L478 288 L450 368 L422 288 L345 337 L362 247 L280 200 L362 153 L345 63 L422 112 Z"
            opacity="0.88"
          />
          <circle cx="450" cy="200" r="124" />
        </g>

        {/* 28 needle rays */}
        <g fill="#c9a84c">
          {Array.from({ length: 28 }).map((_, i) => (
            <use
              key={`ray-${i}`}
              href="#aurea-ray"
              transform={`rotate(${i * (360 / 28)} 450 200)`}
              opacity={i % 2 ? 0.58 : 0.9}
            />
          ))}
        </g>

        {/* Center lotus — three navy-outlined leaves filled cream */}
        <g
          fill="#f5efe4"
          stroke="#0f1b3d"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M450 156 C423 187 424 226 450 257 C476 226 477 187 450 156 Z" />
          <path d="M400 198 C403 235 423 259 450 261 C444 227 426 207 400 198 Z" />
          <path d="M500 198 C497 235 477 259 450 261 C456 227 474 207 500 198 Z" />
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
