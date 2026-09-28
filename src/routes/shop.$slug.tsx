import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { getProduct, products } from "@/lib/products";
import { BottleFrame } from "@/components/BottleFrame";
import { ReserveDialog } from "@/components/ReserveDialog";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — MMM S.r.l." }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `MMM S.r.l. ${p.name} — ${p.ageing.en} · Tequila`;
    const description = p.intro.en;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/shop/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/shop/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `MMM S.r.l. ${p.name}`,
            description,
            category: "Tequila",
            brand: { "@type": "Brand", name: "MMM S.r.l." },
            url: `https://aurea-pugliese-spirit.lovable.app/shop/${p.slug}`,
            ...(p.image ? { image: p.image } : {}),
            additionalProperty: [
              { "@type": "PropertyValue", name: "Agave", value: p.agave.en },
              { "@type": "PropertyValue", name: "Ageing", value: p.ageing.en },
              { "@type": "PropertyValue", name: "ABV", value: p.abv },
              { "@type": "PropertyValue", name: "Format", value: p.format },
            ],
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const available = product.status === "available";
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <section className="px-6 pb-32 pt-16">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/shop"
          className="text-[10px] uppercase tracking-[0.3em] text-navy/45 transition-colors hover:text-gold"
        >
          {t("shop.back")}
        </Link>

        <div className="mt-10 grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade-up md:sticky md:top-28">
            <BottleFrame
              image={product.image}
              alt={`MMM S.r.l. ${product.name}`}
              label={available ? t("shop.available") : t("shop.comingSoon")}
              placeholderNote={t("shop.photoSoon")}
            />
          </div>

          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow mb-5">{product.subtitle[locale]}</p>
            <h1 className="font-display text-5xl italic text-navy md:text-6xl">
              <span className="font-brand">MMM S.r.l.</span> {product.name}
            </h1>
            <p className="mt-7 leading-relaxed text-navy/70">{product.intro[locale]}</p>

            <div className="mt-12 space-y-7 border-t border-navy/10 pt-10">
              <Note label={t("shop.nose")} body={product.nose[locale]} />
              <Note label={t("shop.palate")} body={product.palate[locale]} />
              <Note label={t("shop.finish")} body={product.finish[locale]} />
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-navy/10 pt-10">
              <Spec label={t("shop.agave")} value={product.agave[locale]} />
              <Spec label={t("shop.ageing")} value={product.ageing[locale]} />
              <Spec label={t("shop.abv")} value={product.abv} />
              <Spec label={t("shop.format")} value={product.format} />
            </dl>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group mt-12 inline-flex items-center gap-4 bg-navy px-9 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-crema transition-colors hover:bg-gold hover:text-navy"
            >
              {available ? t("shop.reserve") : t("shop.notify")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-navy/40">
              {t("shop.noPurchase")}
            </p>
          </div>
        </div>

        <div className="mt-32 border-t border-navy/10 pt-16">
          <p className="eyebrow mb-10">{t("shop.other")}</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/shop/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center gap-6"
              >
                <div className="w-28 shrink-0">
                  <BottleFrame
                    image={p.image}
                    alt={`MMM S.r.l. ${p.name}`}
                    placeholderNote={undefined}
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl italic text-navy transition-colors group-hover:text-gold">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-navy/45">
                    {p.subtitle[locale]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ReserveDialog open={open} product={product} onClose={() => setOpen(false)} />
    </section>
  );
}

function Note({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-6">
      <p className="pt-1 text-[10px] uppercase tracking-[0.3em] text-gold-ink">{label}</p>
      <p className="leading-relaxed text-navy/75">{body}</p>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-navy/40">{label}</dt>
      <dd className="mt-2 text-sm text-navy/80">{value}</dd>
    </div>
  );
}
