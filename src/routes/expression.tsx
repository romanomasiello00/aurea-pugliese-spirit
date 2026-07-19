import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import { AureaMark } from "@/components/AureaMark";

export const Route = createFileRoute("/expression")({
  head: () => ({
    meta: [
      { title: "Reposado — Aurea Tequila" },
      {
        name: "description",
        content:
          "Aurea Reposado. 100% blue agave, slow-cooked, copper-pot distilled, rested in oak. A reposado that speaks softly.",
      },
      { property: "og:title", content: "Aurea Reposado" },
      {
        property: "og:description",
        content:
          "100% blue agave, slow-cooked, copper-pot distilled, rested in oak. Nose, palate, finish.",
      },
      { property: "og:url", content: "/expression" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/expression" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Aurea Reposado",
          description:
            "100% blue agave tequila, slow-cooked, copper-pot distilled and rested in oak barrels.",
          brand: { "@type": "Brand", name: "Aurea Tequila" },
          category: "Tequila Reposado",
        }),
      },
    ],
  }),
  component: ExpressionPage,
});

function ExpressionPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">{t("expression.eyebrow")}</p>
          <h1 className="font-display text-6xl md:text-8xl font-medium text-navy italic leading-none mb-8">
            {t("expression.title")}
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed">
            {t("expression.intro")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Typographic label composition */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-soft-white ring-1 ring-navy/10 rounded-md p-10 flex flex-col items-center justify-between text-center overflow-hidden">
              <div className="absolute inset-4 border border-gold/30 rounded-sm pointer-events-none" />
              <AureaMark className="size-16 mt-4 relative" />
              <div className="space-y-4 relative">
                <p className="font-display text-5xl text-navy tracking-[0.15em] uppercase">
                  Aurea
                </p>
                <div className="h-px w-12 bg-gold mx-auto" />
                <p className="text-[10px] uppercase tracking-[0.5em] text-navy/70">Reposado</p>
                <p className="text-[9px] uppercase tracking-[0.35em] text-navy/50 pt-2">
                  Tequila · Puglia
                </p>
              </div>
              <div className="relative">
                <p className="text-[8px] tracking-[0.4em] text-navy/50 leading-relaxed">
                  100% BLUE AGAVE<br />
                  HECHO EN MÉXICO
                </p>
              </div>
            </div>
            <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.35em] text-navy/50 text-center">
              {t("expression.specs")}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-12">
            {[
              { label: t("expression.nose"), body: t("expression.nose.body") },
              { label: t("expression.palate"), body: t("expression.palate.body") },
              { label: t("expression.finish"), body: t("expression.finish.body") },
            ].map((n, i, arr) => (
              <div key={n.label} className={i < arr.length - 1 ? "border-b border-navy/10 pb-10" : ""}>
                <p className="eyebrow mb-4">{n.label}</p>
                <p className="font-display text-3xl md:text-4xl text-navy italic leading-snug">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">The Craft</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-8 italic">
            Four gestures behind every drop.
          </h2>
          <Link
            to="/craft"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-navy hover:text-gold transition-colors"
          >
            See the process
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
