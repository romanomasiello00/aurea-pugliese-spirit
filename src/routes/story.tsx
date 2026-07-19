import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n";
import storyHands from "@/assets/story-hands.jpg";
import storyPuglia from "@/assets/story-puglia.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story — Aurea Tequila" },
      {
        name: "description",
        content:
          "Three friends, two lands. Luigi Marinaro, Romano Masiello and Gigi Marinaro on how Aurea was born between Puglia and Mexico.",
      },
      { property: "og:title", content: "The Story — Aurea Tequila" },
      {
        property: "og:description",
        content:
          "Three friends, two lands. How Aurea was born between Puglia and Mexico.",
      },
      { property: "og:url", content: "/story" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useTranslation();

  const founders = [
    { m: "LM", name: "Luigi Marinaro", role: t("story.lm.role") },
    { m: "RM", name: "Romano Masiello", role: t("story.rm.role") },
    { m: "GM", name: "Gigi Marinaro", role: t("story.gm.role") },
  ];

  return (
    <>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">{t("story.eyebrow")}</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[1.05] text-balance mb-10">
            {t("story.title")}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5">
            <img src={storyHands} alt="Hands and blue agave" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-md ring-1 ring-navy/5 md:mt-16">
            <img src={storyPuglia} alt="Puglian olive grove at sunset" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-navy/80 font-display font-normal">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-gold">
            {t("story.p1")}
          </p>
          <p>{t("story.p2")}</p>
          <p>{t("story.p3")}</p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="px-6 py-2 border border-gold/40 rounded-full">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
              Hecho en México · Imported to Puglia
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">{t("story.founders")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy italic">Three friends, two lands</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {founders.map((f) => (
              <div
                key={f.m}
                className="group flex flex-col items-center text-center p-8 border border-navy/10 rounded-md hover:border-gold/60 transition-colors bg-soft-white/50"
              >
                <div className="size-28 rounded-full border border-navy/15 grid place-items-center font-display text-3xl text-navy mb-6 group-hover:border-gold group-hover:text-gold transition-colors">
                  {f.m}
                </div>
                <p className="eyebrow mb-3">{f.role}</p>
                <h3 className="font-display text-2xl text-navy mb-3">{f.name}</h3>
                <p className="text-sm text-navy/60 italic">{t("story.bio.soon")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
