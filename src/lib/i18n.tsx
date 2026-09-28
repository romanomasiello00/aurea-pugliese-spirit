import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "it";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.story": "Story",
  "nav.expression": "Expression",
  "nav.tequila1": "Tequila 1",
  "nav.tequila2": "Tequila 2",
  "nav.contact": "Contact",
  "nav.shop": "Shop",

  "shop.eyebrow": "The Collection",
  "shop.title": "Three expressions, one light",
  "shop.intro":
    "Every bottle of MMM S.r.l. begins with the same blue agave and the same slow gesture. What changes is time. Allocations are limited — write to us to reserve yours.",
  "shop.available": "Available",
  "shop.comingSoon": "Coming soon",
  "shop.reserve": "Reserve",
  "shop.discover": "Discover the expression",
  "shop.notify": "Notify me",
  "shop.photoSoon": "Photography coming soon",
  "shop.nose": "Nose",
  "shop.palate": "Palate",
  "shop.finish": "Finish",
  "shop.ageing": "Rest",
  "shop.abv": "Strength",
  "shop.format": "Format",
  "shop.agave": "Agave",
  "shop.back": "← Back to the collection",
  "shop.other": "The other expressions",
  "shop.noPurchase":
    "MMM S.r.l. is not sold online. Every request is handled personally by us.",

  "shop.form.intro":
    "Leave us your details and we'll reply personally with availability and delivery.",
  "shop.form.subject": "Allocation request",
  "shop.form.name": "Name",
  "shop.form.email": "Email",
  "shop.form.expression": "Expression",
  "shop.form.quantity": "Bottles",
  "shop.form.message": "Message",
  "shop.form.submit": "Send request",
  "shop.form.success": "Grazie.",
  "shop.form.successBody":
    "We've opened your email client with the request prefilled. Send it and we'll be in touch shortly.",
  "shop.form.close": "Close",
  "shop.form.note": "No payment · Allocation request only · 18+",

  "badge.origin": "A house of tequila, born in Puglia",
  "hero.title": "Where the golden soul of Mexico meets the timeless light of Puglia.",
  "hero.subtitle":
    "MMM is born where two sun-blessed lands meet. A house of tequila brands, crafted with precision and rooted in place.",

  "home.story.eyebrow": "Heritage",
  "home.story.title": "Three friends, two lands",
  "home.story.body":
    "Luigi, Romano and Gigi have always shared the same land — Puglia — and the same craft passed down through generations. From those roots grew a larger passion: tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia.",
  "home.story.cta": "Read the story",

  "home.brands.eyebrow": "Our Brands",
  "home.brands.title": "Two tequilas, one house",
  "home.brands.body":
    "MMM is building a portfolio of tequila brands, each with its own character. The first expressions are coming soon.",

  "story.eyebrow": "The Story",
  "story.title": "Three friends, two lands",
  "story.p1":
    "Luigi Marinaro, Romano Masiello and Gigi Marinaro have always shared the same land: Puglia. And the same craft, passed down through generations — the making of wine, food and spirits, which here is culture before it is work.",
  "story.p2":
    "From those roots grew a larger passion: the world of spirits, and tequila above all. Those who know fermentation, time and the patience of the land recognise in agave the same language as olive trees and vines.",
  "story.p3":
    "So, in recent years, they set out on a new adventure: to create a tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia. MMM S.r.l. is made in Mexico, in the heart of the blue agave. It is in Puglia that it finds its Mediterranean home.",
  "story.founders": "The founders",
  "story.bio.soon": "Biography coming soon.",
  "story.lm.role": "CO-FOUNDER",
  "story.rm.role": "CO-FOUNDER",
  "story.gm.role": "CO-FOUNDER",

  "expression.eyebrow": "The Expression",
  "expression.title": "Tequila Reposado",
  "expression.intro":
    "100% blue agave, slow-cooked, copper-pot distilled and rested in oak barrels until it finds its balance. A reposado that speaks softly.",
  "expression.nose": "Nose",
  "expression.nose.body": "Cooked agave, vanilla, orange peel and a breath of Mediterranean scrub.",
  "expression.palate": "Palate",
  "expression.palate.body": "Round and warm: honey, sweet oak, white pepper.",
  "expression.finish": "Finish",
  "expression.finish.body": "Long, soft, luminous as a golden hour.",
  "expression.specs": "40% VOL · 750 ML · REPOSADO · 100% BLUE AGAVE",

  "contact.eyebrow": "Contact",
  "contact.title": "Write to us",
  "contact.intro":
    "For enquiries about the brand, distribution, hospitality or press — leave us a note.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.subject": "Subject",
  "contact.category": "Reason",
  "contact.category.info": "General enquiry",
  "contact.category.distribution": "Distribution",
  "contact.category.press": "Press",
  "contact.category.hospitality": "Hospitality",
  "contact.message": "Message",
  "contact.submit": "Send message",
  "contact.sending": "Sending…",
  "contact.success": "Grazie. Your message has reached us.",
  "contact.error": "Something went wrong. Please try again.",

  "footer.tagline": "A tribute to the lands that sustain us. Please enjoy our craft responsibly.",
  "footer.nav": "Navigation",
  "footer.connect": "Connect",
  "footer.legal.privacy": "Privacy",
  "footer.legal.terms": "Terms",
  "footer.rights": "© 2026 MMM S.r.l.",
  "footer.responsible": "18+ · Drink responsibly",

  "age.title": "A moment, please.",
  "age.body": "You must be of legal drinking age in your country to enter MMM S.r.l..",
  "age.question": "Are you of legal drinking age?",
  "age.yes": "Yes, enter",
  "age.no": "No",
  "age.rejected":
    "We appreciate your honesty. Please return once you have reached the legal drinking age in your country.",
  "age.disclaimer": "MMM S.r.l. reminds you to enjoy responsibly.",

  "brandPage.eyebrow": "MMM",
  "brandPage.body": "We're crafting something new. This brand will be unveiled soon.",
};

const it: Dict = {
  "nav.story": "Storia",
  "nav.expression": "Espressione",
  "nav.tequila1": "Tequila 1",
  "nav.tequila2": "Tequila 2",
  "nav.contact": "Contatti",
  "nav.shop": "Shop",

  "shop.eyebrow": "La Collezione",
  "shop.title": "Tre espressioni, una sola luce",
  "shop.intro":
    "Ogni bottiglia di MMM S.r.l. nasce dalla stessa agave blu e dallo stesso gesto lento. Ciò che cambia è il tempo. Le allocazioni sono limitate: scrivici per riservare la tua.",
  "shop.available": "Disponibile",
  "shop.comingSoon": "In arrivo",
  "shop.reserve": "Riserva",
  "shop.discover": "Scopri l'espressione",
  "shop.notify": "Avvisami",
  "shop.photoSoon": "Fotografia in arrivo",
  "shop.nose": "Naso",
  "shop.palate": "Palato",
  "shop.finish": "Finale",
  "shop.ageing": "Riposo",
  "shop.abv": "Gradazione",
  "shop.format": "Formato",
  "shop.agave": "Agave",
  "shop.back": "← Torna alla collezione",
  "shop.other": "Le altre espressioni",
  "shop.noPurchase":
    "MMM S.r.l. non vende online. Ogni richiesta viene seguita personalmente da noi.",

  "shop.form.intro":
    "Lascia i tuoi dati: ti risponderemo personalmente con disponibilità e modalità di consegna.",
  "shop.form.subject": "Richiesta di allocazione",
  "shop.form.name": "Nome",
  "shop.form.email": "Email",
  "shop.form.expression": "Espressione",
  "shop.form.quantity": "Bottiglie",
  "shop.form.message": "Messaggio",
  "shop.form.submit": "Invia richiesta",
  "shop.form.success": "Grazie.",
  "shop.form.successBody":
    "Abbiamo aperto la tua email con la richiesta già compilata. Inviala e ti risponderemo presto.",
  "shop.form.close": "Chiudi",
  "shop.form.note": "Nessun pagamento · Solo richiesta di allocazione · 18+",

  "badge.origin": "Una casa di tequila, nata in Puglia",
  "hero.title": "Dove l'anima dorata del Messico incontra la luce eterna della Puglia.",
  "hero.subtitle":
    "MMM nasce dove due terre baciate dal sole si incontrano. Una casa di marchi di tequila, fatta con precisione e radicata nel luogo.",

  "home.story.eyebrow": "Origini",
  "home.story.title": "Tre amici, due terre",
  "home.story.body":
    "Luigi, Romano e Gigi condividono da sempre la stessa terra — la Puglia — e lo stesso mestiere tramandato di generazione in generazione. Da queste radici è nata una passione più grande: la tequila, fedele alla tradizione messicana, con lo sguardo rivolto alla Puglia.",
  "home.story.cta": "Leggi la storia",

  "home.brands.eyebrow": "I Nostri Marchi",
  "home.brands.title": "Due tequila, una casa",
  "home.brands.body":
    "MMM sta costruendo un portfolio di marchi di tequila, ognuno con il proprio carattere. Le prime espressioni arrivano presto.",

  "story.eyebrow": "La Storia",
  "story.title": "Tre amici, due terre",
  "story.p1":
    "Luigi Marinaro, Romano Masiello e Gigi Marinaro condividono da sempre la stessa terra: la Puglia. E lo stesso mestiere, tramandato di generazione in generazione — la produzione di vino, cibo e distillati, che qui è cultura prima ancora che lavoro.",
  "story.p2":
    "Da queste radici è nata una passione più grande: il mondo dei distillati, e la tequila su tutti. Chi conosce la fermentazione, il tempo e la pazienza della terra riconosce nell'agave la stessa lingua degli ulivi e delle vigne.",
  "story.p3":
    "Così, negli ultimi anni, hanno intrapreso una nuova avventura: creare una tequila il più possibile fedele alla tradizione messicana, ma con uno sguardo rivolto alla Puglia. MMM S.r.l. è prodotta in Messico, nel cuore dell'agave blu. È in Puglia che trova la sua casa mediterranea.",
  "story.founders": "I fondatori",
  "story.bio.soon": "Biografia in arrivo.",
  "story.lm.role": "CO-FOUNDER",
  "story.rm.role": "CO-FOUNDER",
  "story.gm.role": "CO-FOUNDER",

  "expression.eyebrow": "L'espressione",
  "expression.title": "Tequila Reposado",
  "expression.intro":
    "100% agave blu, cottura lenta, distillata in alambicco di rame e riposata in botti di rovere fino a trovare il proprio equilibrio. Un reposado che parla piano.",
  "expression.nose": "Naso",
  "expression.nose.body": "Agave cotta, vaniglia, scorza d'arancia e un respiro di macchia mediterranea.",
  "expression.palate": "Palato",
  "expression.palate.body": "Rotondo e caldo: miele, rovere dolce, pepe bianco.",
  "expression.finish": "Finale",
  "expression.finish.body": "Lungo, morbido, luminoso come l'ora dorata.",
  "expression.specs": "40% VOL · 750 ML · REPOSADO · 100% AGAVE BLU",

  "contact.eyebrow": "Contatti",
  "contact.title": "Scrivici",
  "contact.intro":
    "Per informazioni sul marchio, distribuzione, hospitality o stampa — lascia un messaggio.",
  "contact.name": "Nome",
  "contact.email": "Email",
  "contact.subject": "Oggetto",
  "contact.category": "Motivo",
  "contact.category.info": "Informazioni",
  "contact.category.distribution": "Distribuzione",
  "contact.category.press": "Stampa",
  "contact.category.hospitality": "Hospitality",
  "contact.message": "Messaggio",
  "contact.submit": "Invia messaggio",
  "contact.sending": "Invio in corso…",
  "contact.success": "Grazie. Il tuo messaggio è arrivato.",
  "contact.error": "Qualcosa è andato storto. Riprova.",

  "footer.tagline": "Un tributo alle terre che ci sostengono. Bevi con responsabilità.",
  "footer.nav": "Navigazione",
  "footer.connect": "Contatti",
  "footer.legal.privacy": "Privacy",
  "footer.legal.terms": "Termini",
  "footer.rights": "© 2026 MMM S.r.l.",
  "footer.responsible": "18+ · Bevi responsabilmente",

  "age.title": "Un momento, per favore.",
  "age.body":
    "Devi aver raggiunto l'età legale per il consumo di alcolici nel tuo paese per entrare in MMM S.r.l..",
  "age.question": "Hai raggiunto l'età legale?",
  "age.yes": "Sì, entra",
  "age.no": "No",
  "age.rejected":
    "Ti ringraziamo per la sincerità. Torna quando avrai raggiunto l'età legale per il consumo di alcolici.",
  "age.disclaimer": "MMM S.r.l. ti ricorda di bere responsabilmente.",

  "brandPage.eyebrow": "MMM",
  "brandPage.body": "Stiamo creando qualcosa di nuovo. Questo marchio sarà svelato presto.",
};

const DICTS: Record<Locale, Dict> = { en, it };

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof en) => string;
}

const I18nContext = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "aurea:locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "it") setLocaleState(stored);
      else {
        const nav = navigator.language.toLowerCase();
        if (nav.startsWith("it")) setLocaleState("it");
      }
    } catch {
      /* noop */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* noop */
    }
  }, []);

  const t = useCallback(
    (key: keyof typeof en) => DICTS[locale][key] ?? DICTS.en[key] ?? String(key),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside I18nProvider");
  return ctx;
}
