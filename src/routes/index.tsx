import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import heroLandscape from "@/assets/hero-landscape.jpg";
import storyHands from "@/assets/story-hands.jpg";
import craftSole from "@/assets/craft-sole.jpg";
import craftTerra from "@/assets/craft-terra.jpg";
import craftMare from "@/assets/craft-mare.jpg";
import craftTempo from "@/assets/craft-tempo.jpg";
import { AureaLogo } from "@/components/AureaLogo";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 md:pt-24 pb-24 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <AureaLogo className="w-64 md:w-80 lg:w-96 h-auto mb-10 fade-in" />

          <div className="mb-8 py-2 px-4 border border-gold/40 rounded-full fade-in">
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
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
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gold">{f.r}</p>
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

      {/* EXPRESSION TEASER */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-soft-white ring-1 ring-navy/5 rounded-2xl p-10 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Four icons artwork */}
              <div className="flex items-center justify-center">
                <img
                  src={fourIconsAsset.url}
                  alt="Sole, Terra, Mare, Tempo — the four pillars of Aurea Tequila"
                  width={1920}
                  height={429}
                  loading="lazy"
                  className="w-full max-w-lg h-auto"
                />
              </div>

              <div className="space-y-10">
                {[
                  { k: "nose", label: t("expression.nose"), body: t("expression.nose.body") },
                  { k: "palate", label: t("expression.palate"), body: t("expression.palate.body") },
                  { k: "finish", label: t("expression.finish"), body: t("expression.finish.body") },
                ].map((n, i, arr) => (
                  <div key={n.k} className={i < arr.length - 1 ? "border-b border-navy/10 pb-8" : ""}>
                    <p className="eyebrow mb-3">{n.label}</p>
                    <p className="font-display text-2xl md:text-3xl text-navy italic leading-snug">
                      {n.body}
                    </p>
                  </div>
                ))}
                <Link
                  to="/expression"
                  className="group inline-flex items-center gap-4 pt-2"
                >
                  <span className="size-11 rounded-full bg-navy text-crema grid place-items-center transition-colors group-hover:bg-gold group-hover:text-navy">
                    →
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-navy group-hover:text-gold transition-colors">
                    {t("home.expression.cta")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFT TEASER (dark section) */}
      <section className="py-24 md:py-32 px-6 bg-navy text-soft-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              {t("home.craft.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6 text-balance">
              {t("home.craft.title")}
            </h2>
            <p className="text-soft-white/60 leading-relaxed max-w-[44ch]">
              {t("home.craft.body")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-soft-white/10 border border-soft-white/10">
            {[
              { num: "I", img: craftSole, title: t("craft.sole.title"), body: t("craft.sole.body") },
              { num: "II", img: craftTerra, title: t("craft.terra.title"), body: t("craft.terra.body") },
              { num: "III", img: craftMare, title: t("craft.mare.title"), body: t("craft.mare.body") },
              { num: "IV", img: craftTempo, title: t("craft.tempo.title"), body: t("craft.tempo.body") },
            ].map((g) => (
              <div
                key={g.num}
                className="group bg-navy p-8 md:p-10 flex flex-col aspect-[3/4] overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700">
                  <img
                    src={g.img}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative flex flex-col h-full justify-between">
                  <span className="font-display text-2xl italic text-gold">{g.num}</span>
                  <div>
                    <h3 className="font-display text-2xl text-soft-white mb-3 leading-tight">
                      {g.title}
                    </h3>
                    <p className="text-xs text-soft-white/70 leading-relaxed">{g.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/craft"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-soft-white hover:text-gold transition-colors"
            >
              {t("home.craft.cta")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
