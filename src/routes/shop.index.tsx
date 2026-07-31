import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { products, type Product } from "@/lib/products";
import { BottleFrame } from "@/components/BottleFrame";
import { ReserveDialog } from "@/components/ReserveDialog";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — The Aurea Collection · Blanco, Reposado, Añejo" },
      {
        name: "description",
        content:
          "Discover the Aurea collection: Blanco, Reposado and Añejo. 100% blue agave, made in Mexico, rested for Puglia. Reserve your allocation.",
      },
      { property: "og:title", content: "Shop — The Aurea Collection" },
      {
        property: "og:description",
        content:
          "Three expressions of Aurea tequila — Blanco, Reposado and Añejo. Limited allocations, reserved on request.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "The Aurea Collection",
          description:
            "Three expressions of Aurea tequila — Blanco, Reposado and Añejo. 100% blue agave, made in Mexico, rested for Puglia.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Aurea ${p.name}`,
              url: `https://aurea-pugliese-spirit.lovable.app/shop/${p.slug}`,
            })),
          },
        }),
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { t } = useTranslation();
  const [reserve, setReserve] = useState<Product | null>(null);

  return (
    <section className="px-6 pb-32 pt-24">
      <div className="mx-auto max-w-7xl">
        <header className="fade-up mx-auto mb-20 max-w-2xl text-center">
          <p className="eyebrow mb-6">{t("shop.eyebrow")}</p>
          <h1 className="mb-6 font-display text-5xl italic text-navy md:text-6xl">
            {t("shop.title")}
          </h1>
          <p className="leading-relaxed text-navy/70">{t("shop.intro")}</p>
          <div className="mx-auto mt-10 h-px w-16 bg-gold/60" />
        </header>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              index={i}
              onReserve={() => setReserve(p)}
            />
          ))}
        </div>

        <p className="mt-24 text-center text-[10px] uppercase tracking-[0.35em] text-navy/40">
          {t("shop.noPurchase")}
        </p>
      </div>

      {reserve && (
        <ReserveDialog open product={reserve} onClose={() => setReserve(null)} />
      )}
    </section>
  );
}

function ProductCard({
  product,
  index,
  onReserve,
}: {
  product: Product;
  index: number;
  onReserve: () => void;
}) {
  const { t, locale } = useTranslation();
  const available = product.status === "available";

  return (
    <article
      className="fade-up group flex flex-col"
      style={{ animationDelay: `${index * 140}ms` }}
    >
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block"
        aria-label={`Aurea ${product.name}`}
      >
        <BottleFrame
          image={product.image}
          alt={`Aurea ${product.name}`}
          label={available ? t("shop.available") : t("shop.comingSoon")}
          placeholderNote={t("shop.photoSoon")}
        />
      </Link>

      <div className="mt-7 flex flex-1 flex-col">
        <h2 className="font-display text-3xl italic text-navy">{product.name}</h2>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-navy/45">
          {product.subtitle[locale]}
        </p>

        <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-out group-hover:max-h-40 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-navy/65">{product.nose[locale]}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
          <Link
            to="/shop/$slug"
            params={{ slug: product.slug }}
            className="text-[10px] uppercase tracking-[0.3em] text-navy/60 transition-colors hover:text-gold"
          >
            {t("shop.discover")}
          </Link>
          <button
            type="button"
            onClick={onReserve}
            className="text-[10px] uppercase tracking-[0.3em] text-gold-ink transition-colors hover:text-navy"
          >
            {available ? t("shop.reserve") : t("shop.notify")} →
          </button>
        </div>
      </div>
    </article>
  );
}
