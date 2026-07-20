import { AureaMark } from "./AureaMark";

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
    <div
      className={"select-none flex flex-col items-center text-center " + (className ?? "")}
      style={style}
      role="img"
      aria-label={alt}
    >
      <AureaMark className="w-[39%] min-w-16 max-w-36 h-auto mb-[7%] drop-shadow-[0_1px_0_rgba(15,27,61,0.08)]" />
      <span className="font-display text-navy font-medium uppercase leading-none tracking-[0.18em] text-[clamp(3.2rem,22vw,9.5rem)] md:text-[clamp(4rem,10vw,8rem)]">
        Aurea
      </span>
      <span className="mt-[3%] flex items-center justify-center gap-[0.55em] font-sans text-navy font-semibold uppercase leading-none tracking-[0.28em] text-[clamp(0.75rem,3.4vw,1.6rem)] md:text-[clamp(0.8rem,1.75vw,1.35rem)]">
        Tequila <span className="text-gold text-[1.35em] leading-none">✹</span> Puglia
      </span>
      <span className="mt-[5%] font-sans text-navy/90 font-medium uppercase leading-none tracking-[0.24em] text-[clamp(0.65rem,2.7vw,1.25rem)] md:text-[clamp(0.7rem,1.35vw,1.05rem)]">
        Sole • Terra • Mare • Tempo
      </span>
    </div>
  );
}

export const aureaLogoUrl = "/aurea-favicon.svg";
