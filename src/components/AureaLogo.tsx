import logoAsset from "@/assets/aurea-logo-full.png.asset.json";

interface Props {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
}

/**
 * Full Aurea brand logo (gold sunburst + navy AUREA wordmark).
 * Use this as the primary brand identity. `AureaMark` remains for tiny SVG accents.
 */
export function AureaLogo({ className, alt = "Aurea Tequila Puglia", loading = "eager", style }: Props) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      loading={loading}
      className={className}
      style={style}
      draggable={false}
    />
  );
}


export const aureaLogoUrl = logoAsset.url;
