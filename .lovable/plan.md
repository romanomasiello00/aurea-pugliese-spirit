## Problem
The footer logo currently renders at `h-24` (96px tall) inside a `max-w-sm` column. Because the `AureaLogo` "full" variant uses a `900×780` viewBox (emblem + AUREA + TEQUILA ✹ PUGLIA + SOLE • TERRA • MARE • TEMPO), at that height the actual wordmark ends up ~30–40px tall — too small to read cleanly, so it also looks low quality even though it's pure SVG.

## Fix
Presentation-only change in `src/components/Footer.tsx`:

1. Widen the left column so the logo has room to breathe: replace `max-w-sm` with `max-w-md` (or drop the cap on desktop).
2. Give the logo an explicit, larger size driven by width (SVG scales cleanly):
   - `w-64 md:w-80 h-auto` instead of `h-24 w-auto`.
   - That takes the wordmark from ~35px to ~55–70px tall — comparable to the header lockup and clearly legible.
3. Keep `loading="lazy"` and the existing color tokens. No changes to the SVG component itself, no font/color/layout changes elsewhere.

## Verification
- Playwright screenshot of the footer at desktop (1280) and mobile (390) widths to confirm the logo is visibly larger, sharp, and doesn't overflow its column or crowd the nav lists.

No changes to routes, copy, or business logic.