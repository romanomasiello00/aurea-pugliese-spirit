import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import craftSole from "@/assets/craft-sole.jpg";
import craftTerra from "@/assets/craft-terra.jpg";
import craftMare from "@/assets/craft-mare.jpg";
import craftTempo from "@/assets/craft-tempo.jpg";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "The Craft — Four Gestures · Aurea Tequila" },
      {
        name: "description",
        content:
          "Four gestures, no shortcuts: 100% blue agave, natural slow cooking, copper pot still, rested in oak.",
      },
      { property: "og:title", content: "The Craft — Aurea Tequila" },
      { property: "og:description", content: "Four gestures, no shortcuts." },
      { property: "og:url", content: "/craft" },
    ],
    links: [{ rel: "canonical", href: "/craft" }],
  }),
  component: CraftPage,
});

// Custom SVG icons matching the four Sole/Terra/Mare/Tempo elements
function SunIcon() {
  return (
    <svg viewBox="0 0 60 60" className="size-14" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="30" cy="30" r="9" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        return (
          <line
            key={i}
            x1={30 + Math.cos(a) * 14}
            y1={30 + Math.sin(a) * 14}
            x2={30 + Math.cos(a) * 22}
            y2={30 + Math.sin(a) * 22}
          />
        );
      })}
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg viewBox="0 0 60 60" className="size-14" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M15 45 C 15 20, 30 10, 48 12 C 48 32, 34 46, 15 45 Z" />
      <path d="M15 45 L 48 12" />
    </svg>
  );
}
function WaveIcon() {
  return (
    <svg viewBox="0 0 60 60" className="size-14" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M6 34 Q 15 26, 24 34 T 42 34 T 60 34" />
      <path d="M6 42 Q 15 34, 24 42 T 42 42 T 60 42" />
      <path d="M18 26 Q 24 20, 30 26 T 42 26" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 60 60" className="size-14" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="30" cy="30" r="20" />
      <line x1="30" y1="30" x2="30" y2="16" />
      <line x1="30" y1="30" x2="40" y2="34" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={30 + Math.cos(a) * 18}
            y1={30 + Math.sin(a) * 18}
            x2={30 + Math.cos(a) * 20}
            y2={30 + Math.sin(a) * 20}
          />
        );
      })}
    </svg>
  );
}

function CraftPage() {
  const { t } = useTranslation();

  const gestures = [
    { num: "I", Icon: SunIcon, img: craftSole, title: t("craft.sole.title"), body: t("craft.sole.body") },
    { num: "II", Icon: LeafIcon, img: craftTerra, title: t("craft.terra.title"), body: t("craft.terra.body") },
    { num: "III", Icon: WaveIcon, img: craftMare, title: t("craft.mare.title"), body: t("craft.mare.body") },
    { num: "IV", Icon: ClockIcon, img: craftTempo, title: t("craft.tempo.title"), body: t("craft.tempo.body") },
  ];

  return (
    <>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">{t("craft.eyebrow")}</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[1.05] text-balance">
            {t("craft.title")}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {gestures.map((g, i) => (
            <div
              key={g.num}
              className={
                "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center " +
                (i % 2 === 1 ? "md:[&>div:first-child]:order-2" : "")
              }
            >
              <div className="md:col-span-6">
                <div className="aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5">
                  <img
                    src={g.img}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-display text-6xl italic text-gold leading-none">
                    {g.num}
                  </span>
                  <div className="text-navy">
                    <g.Icon />
                  </div>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-navy mb-6 leading-tight">
                  {g.title}
                </h2>
                <p className="text-lg text-navy/70 leading-relaxed max-w-md">{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-navy text-soft-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
            Hecho en México · Imported to Puglia
          </p>
          <h2 className="font-display text-3xl md:text-4xl italic">
            {t("hero.title")}
          </h2>
        </div>
      </section>
    </>
  );
}
