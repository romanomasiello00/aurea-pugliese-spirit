import type { Locale } from "@/lib/i18n";

/**
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR BOTTLE PHOTOS LATER
 *  1. Drop the file into  src/assets/   (e.g. bottle-reposado.png)
 *  2. Add an import at the top of this file:
 *       import bottleReposado from "@/assets/bottle-reposado.png";
 *  3. Set it on the product below:   image: bottleReposado,
 *  The elegant placeholder disappears automatically. Nothing else to change.
 *  Best results: PNG with transparent background, portrait, ~1200x1800.
 * ─────────────────────────────────────────────────────────────
 */

export type ProductStatus = "available" | "coming-soon";

type Localized = Record<Locale, string>;

export interface Product {
  slug: string;
  name: string;
  subtitle: Localized;
  intro: Localized;
  nose: Localized;
  palate: Localized;
  finish: Localized;
  ageing: Localized;
  abv: string;
  format: string;
  agave: Localized;
  status: ProductStatus;
  /** Set this once you have the bottle photo. Leave undefined for the placeholder. */
  image?: string;
}

export const products: Product[] = [
  {
    slug: "blanco",
    name: "Blanco",
    subtitle: { en: "Unrested · Pure agave", it: "Non riposato · Agave pura" },
    intro: {
      en: "The first light. Bottled straight after distillation, Blanco is MMM S.r.l. without a veil — the raw voice of the blue agave, bright and mineral.",
      it: "La prima luce. Imbottigliata subito dopo la distillazione, Blanco è MMM S.r.l. senza velo — la voce nuda dell'agave blu, luminosa e minerale.",
    },
    nose: {
      en: "Cooked agave, lime zest, wet stone.",
      it: "Agave cotta, scorza di lime, pietra bagnata.",
    },
    palate: {
      en: "Crisp and clean: green pepper, citrus, a saline echo.",
      it: "Netta e pulita: pepe verde, agrumi, un'eco salina.",
    },
    finish: { en: "Short, bright, mouth-watering.", it: "Corto, brillante, che invita." },
    ageing: { en: "Unaged", it: "Non invecchiata" },
    abv: "40% VOL",
    format: "700 ML",
    agave: { en: "100% Blue Weber agave", it: "100% agave Blue Weber" },
    status: "coming-soon",
  },
  {
    slug: "reposado",
    name: "Reposado",
    subtitle: { en: "Rested in oak · The signature", it: "Riposata in rovere · La firma" },
    intro: {
      en: "The heart of MMM S.r.l. Slow-cooked agave, copper-pot distilled, then rested in oak until it finds its balance. A reposado that speaks softly.",
      it: "Il cuore di MMM S.r.l. Agave cotta lentamente, distillata in alambicco di rame, poi riposata in rovere finché non trova il suo equilibrio. Un reposado che parla piano.",
    },
    nose: {
      en: "Cooked agave, vanilla, orange peel and a breath of Mediterranean scrub.",
      it: "Agave cotta, vaniglia, scorza d'arancia e un soffio di macchia mediterranea.",
    },
    palate: {
      en: "Round and warm: honey, sweet oak, white pepper.",
      it: "Rotonda e calda: miele, rovere dolce, pepe bianco.",
    },
    finish: {
      en: "Long, soft, luminous as a golden hour.",
      it: "Lungo, morbido, luminoso come un'ora dorata.",
    },
    ageing: { en: "8 months in oak", it: "8 mesi in rovere" },
    abv: "40% VOL",
    format: "700 ML",
    agave: { en: "100% Blue Weber agave", it: "100% agave Blue Weber" },
    status: "available",
  },
  {
    slug: "anejo",
    name: "Añejo",
    subtitle: { en: "Long rest · Limited release", it: "Lungo riposo · Edizione limitata" },
    intro: {
      en: "Time made visible. A longer rest in oak deepens the colour and rounds every edge — MMM S.r.l. at its most contemplative.",
      it: "Il tempo reso visibile. Un riposo più lungo in rovere approfondisce il colore e arrotonda ogni spigolo — MMM S.r.l. nella sua forma più contemplativa.",
    },
    nose: {
      en: "Dried fig, toasted almond, cocoa and warm spice.",
      it: "Fico secco, mandorla tostata, cacao e spezie calde.",
    },
    palate: {
      en: "Velvet and depth: caramel, tobacco leaf, candied orange.",
      it: "Velluto e profondità: caramello, foglia di tabacco, arancia candita.",
    },
    finish: { en: "Very long, resinous, quietly sweet.", it: "Molto lungo, resinoso, dolce sottovoce." },
    ageing: { en: "18 months in oak", it: "18 mesi in rovere" },
    abv: "40% VOL",
    format: "700 ML",
    agave: { en: "100% Blue Weber agave", it: "100% agave Blue Weber" },
    status: "coming-soon",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const RESERVE_EMAIL = "info@aureatequila.it";
