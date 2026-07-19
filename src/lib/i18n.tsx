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
  "nav.craft": "Craft",
  "nav.contact": "Contact",

  "badge.origin": "Hecho en México · Imported to Puglia",
  "hero.title": "Where the golden soul of Mexico meets the timeless light of Puglia.",
  "hero.subtitle":
    "Aurea is born where two sun-blessed lands meet. Crafted with precision. Rooted in nature. Elevated by place.",

  "home.story.eyebrow": "Heritage",
  "home.story.title": "Three friends, two lands",
  "home.story.body":
    "Luigi, Romano and Gigi have always shared the same land — Puglia — and the same craft passed down through generations. From those roots grew a larger passion: a tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia.",
  "home.story.cta": "Read the story",

  "home.expression.eyebrow": "The Expression",
  "home.expression.title": "Reposado",
  "home.expression.cta": "Discover the expression",

  "home.craft.eyebrow": "The Craft",
  "home.craft.title": "Four gestures, no shortcuts",
  "home.craft.body":
    "Our process is a slow dialogue between the elements — sun, earth, sea and time — honouring the rhythm of two sun-blessed lands.",
  "home.craft.cta": "See the process",

  "story.eyebrow": "The Story",
  "story.title": "Three friends, two lands",
  "story.p1":
    "Luigi Marinaro, Romano Masiello and Gigi Marinaro have always shared the same land: Puglia. And the same craft, passed down through generations — the making of wine, food and spirits, which here is culture before it is work.",
  "story.p2":
    "From those roots grew a larger passion: the world of spirits, and tequila above all. Those who know fermentation, time and the patience of the land recognise in agave the same language as olive trees and vines.",
  "story.p3":
    "So, in recent years, they set out on a new adventure: to create a tequila as faithful as possible to Mexican tradition, yet with an eye turned to Puglia. Aurea is made in Mexico, in the heart of the blue agave. It is in Puglia that it finds its Mediterranean home.",
  "story.founders": "The founders",
  "story.bio.soon": "Biography coming soon.",
  "story.lm.role": "Roots & Land",
  "story.rm.role": "Vision & Ritual",
  "story.gm.role": "Craft & Time",

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

  "craft.eyebrow": "The Craft",
  "craft.title": "Four gestures, no shortcuts",
  "craft.sole.title": "100% Blue Agave",
  "craft.sole.body": "Only blue agave hearts, hand-selected.",
  "craft.terra.title": "Natural slow cooking",
  "craft.terra.body": "Slowly cooked to free the sugars, never rushed.",
  "craft.mare.title": "Copper pot still",
  "craft.mare.body": "Copper-distilled, as tradition demands.",
  "craft.tempo.title": "Rested in oak",
  "craft.tempo.body": "Rested in oak until it finds its balance.",

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
  "footer.rights": "© 2026 Aurea Tequila",
  "footer.responsible": "18+ · Drink responsibly",

  "age.title": "A moment, please.",
  "age.body": "You must be of legal drinking age in your country to enter Aurea.",
  "age.question": "Are you of legal drinking age?",
  "age.yes": "Yes, enter",
  "age.no": "No",
  "age.rejected":
    "We appreciate your honesty. Please return once you have reached the legal drinking age in your country.",
  "age.disclaimer": "Aurea reminds you to enjoy responsibly.",
};

const it: Dict = {
  "nav.story": "Storia",
  "nav.expression": "Espressione",
  "nav.craft": "Il Gesto",
  "nav.contact": "Contatti",

  "badge.origin": "Hecho en México · Importato in Puglia",
  "hero.title": "Dove l'anima dorata del Messico incontra la luce eterna della Puglia.",
  "hero.subtitle":
    "Aurea nasce dove due terre baciate dal sole si incontrano. Fatta con precisione. Radicata nella natura. Elevata dal luogo.",

  "home.story.eyebrow": "Origini",
  "home.story.title": "Tre amici, due terre",
  "home.story.body":
    "Luigi, Romano e Gigi condividono da sempre la stessa terra — la Puglia — e lo stesso mestiere tramandato di generazione in generazione. Da queste radici è nata una passione più grande: una tequila fedele alla tradizione messicana, con lo sguardo rivolto alla Puglia.",
  "home.story.cta": "Leggi la storia",

  "home.expression.eyebrow": "L'espressione",
  "home.expression.title": "Reposado",
  "home.expression.cta": "Scopri l'espressione",

  "home.craft.eyebrow": "Il Gesto",
  "home.craft.title": "Quattro gesti, nessuna scorciatoia",
  "home.craft.body":
    "Il nostro processo è un dialogo lento tra gli elementi — sole, terra, mare e tempo — nel ritmo di due terre baciate dal sole.",
  "home.craft.cta": "Vedi il processo",

  "story.eyebrow": "La Storia",
  "story.title": "Tre amici, due terre",
  "story.p1":
    "Luigi Marinaro, Romano Masiello e Gigi Marinaro condividono da sempre la stessa terra: la Puglia. E lo stesso mestiere, tramandato di generazione in generazione — la produzione di vino, cibo e distillati, che qui è cultura prima ancora che lavoro.",
  "story.p2":
    "Da queste radici è nata una passione più grande: il mondo dei distillati, e la tequila su tutti. Chi conosce la fermentazione, il tempo e la pazienza della terra riconosce nell'agave la stessa lingua degli ulivi e delle vigne.",
  "story.p3":
    "Così, negli ultimi anni, hanno intrapreso una nuova avventura: creare una tequila il più possibile fedele alla tradizione messicana, ma con uno sguardo rivolto alla Puglia. Aurea è prodotta in Messico, nel cuore dell'agave blu. È in Puglia che trova la sua casa mediterranea.",
  "story.founders": "I fondatori",
  "story.bio.soon": "Biografia in arrivo.",
  "story.lm.role": "Radici & Terra",
  "story.rm.role": "Visione & Rito",
  "story.gm.role": "Mestiere & Tempo",

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

  "craft.eyebrow": "Il Gesto",
  "craft.title": "Quattro gesti, nessuna scorciatoia",
  "craft.sole.title": "100% Agave Blu",
  "craft.sole.body": "Solo cuori di agave blu, selezionati a mano.",
  "craft.terra.title": "Cottura lenta naturale",
  "craft.terra.body": "Cotta lentamente per liberare gli zuccheri, senza fretta.",
  "craft.mare.title": "Alambicco di rame",
  "craft.mare.body": "Distillata in rame, come vuole la tradizione.",
  "craft.tempo.title": "Riposata in rovere",
  "craft.tempo.body": "Riposata in botti di rovere fino a trovare l'equilibrio.",

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
  "footer.rights": "© 2026 Aurea Tequila",
  "footer.responsible": "18+ · Bevi responsabilmente",

  "age.title": "Un momento, per favore.",
  "age.body":
    "Devi aver raggiunto l'età legale per il consumo di alcolici nel tuo paese per entrare in Aurea.",
  "age.question": "Hai raggiunto l'età legale?",
  "age.yes": "Sì, entra",
  "age.no": "No",
  "age.rejected":
    "Ti ringraziamo per la sincerità. Torna quando avrai raggiunto l'età legale per il consumo di alcolici.",
  "age.disclaimer": "Aurea ti ricorda di bere responsabilmente.",
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
