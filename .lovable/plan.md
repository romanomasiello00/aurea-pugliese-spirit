
# Aurea Tequila — Piano del sito

Sito editoriale bilingue (EN/IT) per un tequila premium prodotto in Messico e "importato in Puglia". Palette crema/marroncino con bianco secondario, oro e navy dal logo. Impostazione cinematografica, tipografia serif elegante, molta aria, micro-interazioni discrete.

## 1. Direzione visiva (scelta prima di costruire)

Genero 3 direzioni HTML rendered — palette e tono fissi (crema #f5efe4, terra #c9a882 / #6b4423, navy #0f1b3d, oro #c9a84c), variano composizione, densità, ritmo:

- **A — Editorial Mediterranean**: layout a rivista, tipografia serif ampia (Cormorant), griglie asimmetriche, pause bianche generose.
- **B — Cinematic Golden Hour**: hero a piena pagina con parallax verticale, sezioni full-bleed alternate, transizioni morbide, mood "ora dorata".
- **C — Artisan Craft Chapter**: struttura narrativa a capitoli numerati (I, II, III, IV), stampo tipografico tipo etichetta, ornamenti dal logo, ritmo verticale scandito.

Ti mostro le 3 renderizzate e scegli. La composizione scelta diventa vincolante per il build.

## 2. Struttura del sito (routes)

Ogni sezione è una route separata con head/OG dedicati (SEO + condivisione social).

```
/                 Home — hero, tagline, teaser storia, teaser Reposado, teaser processo
/story            The Story — tre amici, due terre + trio fondatori
/expression       The Expression — scheda Reposado (naso/palato/finish)
/craft            Four Gestures — processo I–IV
/contact          Contatti (form)
/legal/privacy    Privacy
/legal/terms      Termini
```

Header: logo, nav (Story · Expression · Craft · Contact), switcher EN/IT.
Footer: logo piccolo, "HECHO EN MÉXICO · IMPORTED TO PUGLIA", nav ridotta, legali, disclaimer "Drink responsibly · 18+".

## 3. Elementi dinamici

- **Age Gate**: overlay full-screen al primo ingresso (Sì/No maggiorenne). Scelta salvata in `localStorage` letta dopo hydration (evita mismatch SSR). Chi risponde "no" viene reindirizzato fuori.
- **Switcher lingua EN/IT**: dizionario in `src/lib/i18n/{en,it}.ts`, hook `useTranslation`, preferenza in `localStorage`, URL invariati (no route duplicate).
- **Form contatti**: campi nome/email/messaggio/tipo richiesta (info, distribuzione, stampa), validazione Zod client+server, invio via server function con Resend (Lovable Cloud + secret `RESEND_API_KEY`), salvataggio della richiesta in tabella `contact_messages` con RLS (insert per anon, select solo service_role).
- **Animazioni scroll**: reveal morbidi con Motion for React (fade+translate), parallax leggero sull'hero, hover discreti su card espressione e capitoli processo.
- **Smooth scroll & scroll restoration**: già gestito dal router.
- **SEO**: title/description/OG per ogni route; JSON-LD Organization sul root, Product sulla pagina Expression.

## 4. Backend (Lovable Cloud)

Da attivare per far funzionare form + age gate persistente + tabella messaggi.

- Tabella `contact_messages` (id, name, email, subject, message, category, created_at) con RLS e GRANT corretti.
- Server function `sendContactMessage` con validazione Zod, rate limit soft (1 invio ogni 30s per sessione), insert nella tabella, invio email via Resend al proprietario.
- Secret richiesto: `RESEND_API_KEY` (te lo chiederò al momento).

## 5. Contenuti (copy già forniti, integrati così)

- **Home hero**: tagline "Where the golden soul of Mexico meets the timeless light of Puglia." + sub "Aurea is born where two sun-blessed lands meet…"
- **Story**: testo completo "Three friends, two lands" + trio fondatori (LM · RM · GM) con ruoli (Roots & Land / Vision & Ritual / Craft & Time) e "Biography coming soon". Placeholder ritratto stilizzato per ciascuno.
- **Expression**: scheda Reposado completa (naso, palato, finish, "40% VOL · 750 ML · REPOSADO · 100% BLUE AGAVE"). Al posto della bottiglia, composizione tipografica + silhouette/etichetta stilizzata generata (nessuna bottiglia realistica finché non fornisci foto).
- **Craft**: quattro capitoli numerati I–IV con le 4 icone che hai fornito (Sole, Terra, Mare, Tempo) ricreate come SVG inline nella palette del sito.

## 6. Asset visivi (senza bottiglia)

Genero con AI, palette coerente:
- Hero: campo di agave blu al tramonto con luce mediterranea.
- Story: paesaggio pugliese con ulivi/mare + texture agave/terra.
- Craft: 4 immagini ambientali (sole su agave, foglie/terra rossa, onda ionica, cielo notturno con stelle).
- Ritratti fondatori: sagome/silhouette artistiche monocrome.
- Logo Aurea: uploadato via `lovable-assets`, usato in header/footer/hero.
- Icone Sole/Terra/Mare/Tempo: ricostruite come SVG inline (line-art coerente col tuo file).

## 7. Design tokens (in `src/styles.css`)

```
--background: crema #f5efe4
--foreground: navy #0f1b3d
--secondary: bianco caldo #fbf8f2
--accent: oro #c9a84c
--muted: terra chiara #d9c4a3
--border: marroncino #b89968
Font: Cormorant Garamond (display) + Inter/Work Sans (body) — caricati via <link> in __root.tsx
```
Valori definitivi arrivano dalla direzione scelta.

## 8. Dettagli tecnici

- Stack: TanStack Start (già in template), Tailwind v4, Motion for React, Zod, Lovable Cloud, Resend.
- Age gate montato in `__root.tsx` come overlay client-only (post-hydration).
- i18n leggero fatto in casa (no libreria esterna) — dizionario + hook.
- Tutte le immagini generate salvate come Lovable Assets.
- Nessuna claim di export/rivendita finché non confermi paesi/canali.

## 9. Ordine di esecuzione

1. Attivo Lovable Cloud e aggiungo `RESEND_API_KEY` (te lo chiederò).
2. Upload logo + genero direzioni A/B/C e te le mostro.
3. Tu scegli → applico tokens + composizione.
4. Costruisco routes + i18n + age gate.
5. Genero visual (hero, ambienti, ritratti, icone SVG).
6. Implemento form contatti + tabella + email.
7. SEO, JSON-LD, favicon, verifica bilingue e mobile.

## Domande residue (posso decidere io se preferisci)

- Email destinataria dei contatti? (serve per Resend)
- Vuoi anche instagram/social link nel footer? Se sì, quali handle?
- Il sito deve essere pubblicamente indicizzabile ora o `noindex` finché non è pronto?
