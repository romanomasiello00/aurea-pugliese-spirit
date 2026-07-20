interface Props {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
}

/**
 * Full Aurea brand logo rendered as vector/text so it stays crisp at every size.
 */
export function AureaLogo({ className, alt = "Aurea Tequila Puglia", style }: Props) {
  return (
    <svg
      className={className}
      style={style}
      role="img"
      aria-label={alt}
      viewBox="0 0 900 610"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <path id="logo-ray" d="M450 40 L462 145 L450 172 L438 145 Z" />
      </defs>

      <g transform="translate(0 0)">
        <g stroke="#c9a84c" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" fill="none">
          <path d="M450 8 L478 88 L555 39 L538 129 L620 176 L538 223 L555 313 L478 264 L450 344 L422 264 L345 313 L362 223 L280 176 L362 129 L345 39 L422 88 Z" opacity="0.86" />
          <circle cx="450" cy="176" r="124" />
        </g>
        <g fill="#c9a84c">
          {Array.from({ length: 28 }).map((_, i) => (
            <use key={i} href="#logo-ray" transform={`rotate(${i * (360 / 28)} 450 176)`} opacity={i % 2 ? 0.58 : 0.9} />
          ))}
        </g>
        <g fill="none" stroke="#0f1b3d" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
          <path d="M450 132 C423 163 424 202 450 233 C476 202 477 163 450 132 Z" fill="#f5efe4" />
          <path d="M400 174 C403 211 423 235 450 237 C444 203 426 183 400 174 Z" fill="#f5efe4" />
          <path d="M500 174 C497 211 477 235 450 237 C456 203 474 183 500 174 Z" fill="#f5efe4" />
        </g>
      </g>

      <text
        x="450"
        y="465"
        textAnchor="middle"
        fill="#0f1b3d"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="132"
        fontWeight="500"
        letterSpacing="30"
      >
        AUREA
      </text>
      <text
        x="450"
        y="542"
        textAnchor="middle"
        fill="#0f1b3d"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="16"
      >
        TEQUILA  ✹  PUGLIA
      </text>
      <text
        x="450"
        y="595"
        textAnchor="middle"
        fill="#0f1b3d"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="12"
        opacity="0.92"
      >
        SOLE • TERRA • MARE • TEMPO
      </text>
    </svg>
  );
}

export const aureaLogoUrl = "/aurea-favicon.svg";
