import logoAsset from "@/assets/aurea-logo-full.png.asset.json";

interface Props {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
}

/**
 * Full Aurea brand logo (gold sunburst + navy AUREA wordmark).
 * Use this as the primary brand identity. `AureaMark` remains for tiny SVG accents.
 */
export function AureaLogo({ className, alt = "Aurea Tequila Puglia", loading = "eager" }: Props) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      loading={loading}
      className={className}
      draggable={false}
    />
  );
}

export const aureaLogoUrl = logoAsset.url;
