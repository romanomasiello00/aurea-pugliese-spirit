import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import heroLandscape from "@/assets/hero-landscape.jpg";
import storyHands from "@/assets/story-hands.jpg";
import { AureaLogo } from "@/components/AureaLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MMM S.r.l. — A House of Tequila Brands" },
      {
        name: "description",
        content:
          "Where the golden soul of Mexico meets the timeless light of Puglia. MMM S.r.l. is a house of tequila brands, crafted with care and rooted in place.",
      },
      { property: "og:title", content: "MMM S.r.l. — A House of Tequila Brands" },
      {
        property: "og:description",
        content:
          "Where the golden soul of Mexico meets the timeless light of Puglia. A house of tequila brands, crafted with care and rooted in place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aurea-pugliese-spirit.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://aurea-pugliese-spirit.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MMM S.r.l.",
          url: "https://aurea-pugliese-spirit.lovable.app/",
          description:
            "Where the golden soul of Mexico meets the timeless light of Puglia.",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-24 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <AureaLogo className="w-80 md:w-[30rem] lg:w-[38rem] h-auto mb-10 fade-in" />

          <div className="mb-8 py-2 px-4 border border-gold/40 rounded-full fade-in">
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-ink">
              {t("badge.origin")}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.02] mb-10 text-balance max-w-[22ch] text-navy letter-breathe">
            {t("hero.title")}
          </h1>

          <p className="max-w-[46ch] text-lg text-pretty leading-relaxed text-navy/75 mb-16 fade-up">
            {t("hero.subtitle")}
          </p>

          <div className="w-full fade-up">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-md ring-1 ring-navy/5">
              <img
                src={heroLandscape}
                alt="Blue agave field meeting a Puglian olive grove at golden hour"
                width={1920}
                height={1080}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-crema/60" />
            </div>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="py-24 md:py-32 px-6 bg-soft-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">{t("home.story.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight text-navy mb-8">
              {t("home.story.title")}
            </h2>
            <p className="text-navy/70 leading-relaxed mb-10 max-w-[52ch]">
              {t("home.story.body")}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
              {[
                { m: "LM", r: t("story.lm.role") },
                { m: "RM", r: t("story.rm.role") },
                { m: "GM", r: t("story.gm.role") },
              ].map((f) => (
                <div key={f.m} className="text-center">
                  <div className="mx-auto mb-3 size-14 rounded-full border border-navy/15 grid place-items-center font-display text-xl text-navy transition-colors hover:border-gold hover:text-gold">
                    {f.m}
                  </div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">{f.r}</p>
                </div>
              ))}
            </div>

            <Link
              to="/story"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-navy hover:text-gold transition-colors"
            >
              {t("home.story.cta")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5">
              <img
                src={storyHands}
                alt="Hands on a blue agave leaf"
                width={1080}
                height={1350}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS TEASER */}
      <section className="py-24 md:py-32 px-6 bg-navy text-soft-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 max-w-3xl text-center mx-auto">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              {t("home.brands.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
              {t("home.brands.title")}
            </h2>
            <p className="text-soft-white/60 leading-relaxed max-w-[44ch] mx-auto">
              {t("home.brands.body")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-soft-white/10 border border-soft-white/10">
            {[
              { to: "/tequila-1" as const, name: t("nav.tequila1") },
              { to: "/tequila-2" as const, name: t("nav.tequila2") },
            ].map((brand) => (
              <Link
                key={brand.to}
                to={brand.to}
                className="group bg-navy p-10 md:p-14 flex flex-col items-center text-center gap-4 hover:bg-navy/80 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  {t("shop.comingSoon")}
                </span>
                <span className="font-display text-3xl italic text-soft-white group-hover:text-gold transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
