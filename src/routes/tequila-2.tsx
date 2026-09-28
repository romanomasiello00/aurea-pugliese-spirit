import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/tequila-2")({
  head: () => ({
    meta: [
      { title: "Tequila 2 — MMM S.r.l." },
      { name: "description", content: "A new tequila brand from MMM S.r.l., coming soon." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Tequila 2 — MMM S.r.l." },
      { property: "og:url", content: "/tequila-2" },
    ],
    links: [{ rel: "canonical", href: "/tequila-2" }],
  }),
  component: BrandPlaceholder,
});

function BrandPlaceholder() {
  const { t } = useTranslation();
  return (
    <section className="pt-24 pb-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow font-brand mb-6">{t("brandPage.eyebrow")}</p>
        <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 italic">
          {t("nav.tequila2")}
        </h1>
        <div className="inline-block mb-8 py-2 px-4 border border-gold/40 rounded-full">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-ink">
            {t("shop.comingSoon")}
          </span>
        </div>
        <p className="text-navy/70 leading-relaxed">{t("brandPage.body")}</p>
      </div>
    </section>
  );
}
