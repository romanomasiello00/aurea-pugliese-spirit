## Goal
The "AUREA" wordmark in the SVG logo currently renders in Cormorant Garamond, which is lighter and narrower than the original logo file. The reference shows a high-contrast Didone-style serif: thick stems, hairline thins, flat spurred serifs, wide letterspacing.

## Change
1. **Load the font** — in `src/routes/__root.tsx`, extend the existing Google Fonts link to also request `Playfair Display` (weights 500/600), the closest free match to the original wordmark. No new link tag, just an added `&family=` parameter.
2. **Apply it to the wordmark only** — in `src/components/AureaLogo.tsx`, change the `AUREA` `<text>` element's `fontFamily` to `'Playfair Display', Georgia, serif` and bump `fontWeight` to `600` so the stem contrast matches the reference. Keep the current `fontSize` 180 and letterSpacing 32 (tuned slightly if the new font measures wider).
3. **Leave everything else untouched** — "TEQUILA ✹ PUGLIA" and "SOLE • TERRA • MARE • TEMPO" keep their current fonts, sizes, and the gold star; emblem SVG unchanged; header compact variant unchanged.

## Verification
Playwright screenshot of the homepage hero logo and the footer logo, compared against the uploaded reference, to confirm the wordmark shape and width look right and nothing overflows the viewBox.

Note: if you'd prefer a different serif (e.g. Prata, Bodoni Moda, or Cormorant at a heavier weight), tell me and I'll use that instead — Playfair Display is my read of the reference.