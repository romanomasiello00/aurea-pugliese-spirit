import { AureaMark } from "./AureaMark";
import { cn } from "@/lib/utils";

interface Props {
  image?: string;
  alt: string;
  label?: string;
  className?: string;
  placeholderNote?: string;
}

/**
 * Portrait display frame for a bottle.
 * Renders the photo when `image` is provided, otherwise a refined
 * placeholder (gradient panel + bottle silhouette + sunburst mark).
 */
export function BottleFrame({ image, alt, label, className, placeholderNote }: Props) {
  return (
    <div
      className={cn(
        "group/frame relative aspect-[3/4] w-full overflow-hidden border border-navy/10 bg-gradient-to-b from-soft-white via-crema to-sand/40",
        className,
      )}
    >
      {/* gold hairline inset */}
      <div className="pointer-events-none absolute inset-3 border border-gold/25" />

      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 38%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 70%)",
        }}
      />

      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-[1200ms] ease-out group-hover/frame:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6">
          <AureaMark className="w-12 opacity-40 transition-opacity duration-700 group-hover/frame:opacity-70" />
          <BottleSilhouette className="h-[52%] w-auto text-navy/25 transition-transform duration-[1200ms] ease-out group-hover/frame:-translate-y-1" />
          {placeholderNote && (
            <p className="absolute bottom-7 text-center text-[9px] uppercase tracking-[0.35em] text-navy/35">
              {placeholderNote}
            </p>
          )}
        </div>
      )}

      {label && (
        <span className="absolute left-6 top-6 text-[9px] uppercase tracking-[0.35em] text-gold">
          {label}
        </span>
      )}
    </div>
  );
}

function BottleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 320"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M50 8 h20 v14 c0 6 2 9 4 12 l6 10c4 7 6 13 6 22v6" />
      <path d="M50 8 v14 c0 6-2 9-4 12l-6 10c-4 7-6 13-6 22v6" />
      <path d="M34 72 c-6 6-10 16-10 30 v186 c0 10 6 16 16 16 h40 c10 0 16-6 16-16 V102 c0-14-4-24-10-30" />
      <rect x="46" y="4" width="28" height="10" rx="2" />
      <path d="M30 150 h60" opacity="0.5" />
      <path d="M30 214 h60" opacity="0.5" />
    </svg>
  );
}
