## Why the last attempts failed

The wordmark in `aurea-logo-full.png` is a customized Didone (thick stems, hairline thins, and the curved crossbars inside both "A"s). No Google font — Playfair, Bodoni Moda, GFS Didot — reproduces it, because the crossbar curve isn't in any standard typeface. Any font swap will keep looking "close but wrong".

## The fix: use the actual letterforms, not a font

1. **Extract the wordmark** — take `src/assets/aurea-logo-full.png` (the original upload), crop only the "AUREA" band, drop the cream background to transparency, and threshold it to clean black/white.
2. **Vectorize it** — run potrace on that crop to produce a single scalable SVG path of the exact AUREA letterforms (curved A crossbars included).
3. **Drop it into the logo component** — in `src/components/AureaLogo.tsx`, replace the `<text>AUREA</text>` element with that `<path>` (filled navy `#0f1b3d`), scaled and centered on the same baseline inside the existing `viewBox`. Sharp at any size, identical to your picture.
4. **Leave everything else untouched** — emblem, "TEQUILA ✹ PUGLIA" (gold star), "SOLE • TERRA • MARE • TEMPO", and the compact header variant stay as they are.
5. **Clean up** — remove the now-unused Bodoni Moda / GFS Didot families from the Google Fonts link in `src/routes/__root.tsx` (Cormorant Garamond and Inter stay, they're still used).

## Verification

Playwright screenshots of the hero logo and the footer logo, plus an element-level close-up of the wordmark, compared side by side against your original PNG to confirm the letterforms and spacing match and nothing overflows.

## Technical detail

Trace step uses `potrace` (fetched via `nix run nixpkgs#potrace`) on a high-resolution upscale of the crop so curves stay smooth; output is a single `<path d="...">` committed inline in the component (no extra network request, no raster pixelation). If the traced path is large, it goes into a small dedicated file (e.g. `src/components/AureaWordmark.tsx`) that `AureaLogo.tsx` imports.
