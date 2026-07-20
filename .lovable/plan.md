## Problem
The homepage currently renders a custom SVG (`AureaMark`) as the brand mark. It's small, low-contrast on the cream background, and visually different from the real logo you uploaded (gold sunburst + navy "AUREA / TEQUILA · PUGLIA / SOLE · TERRA · MARE · TEMPO").

## Fix

1. **Upload the real logo as a CDN asset**
   - `lovable-assets create` from `/mnt/user-uploads/Gemini_Generated_Image_z0y3gpz0y3gpz0y3.png` → `src/assets/aurea-logo-full.png.asset.json`.

2. **New `AureaLogo` component** (`src/components/AureaLogo.tsx`)
   - Simple `<img>` wrapper using the real logo, with size/variant props.
   - Keeps `AureaMark` (the small SVG) available for tiny inline use (favicon-scale spots, footer bullet), but stops using it as the hero identity.

3. **Homepage hero — make the logo the visual anchor**
   - Replace the small `AureaMark` above the H1 with the real logo, large and centered (≈ 320–420px wide on desktop, responsive down to ~220px on mobile), sitting above the "Origin" badge.
   - Remove the small `AureaMark` overlay from the hero landscape image (it competes with the new hero logo and is barely legible).
   - Keep the H1 tagline "Where the golden soul of Mexico meets the timeless light of Puglia" underneath.

4. **Expression teaser "label" card**
   - Swap the typographic `AUREA` label mock for the real logo image (crop/framed on the crema card) so the bottle-label preview reflects the actual brand mark.

5. **Header + Footer**
   - Header: replace the tiny SVG + "AUREA" wordmark with the real logo (compact horizontal size ~28–32px tall), preserving the sticky/scroll behavior. Drop the duplicated "AUREA" text since the logo already contains it.
   - Footer: same swap, slightly larger.

6. **Favicon / social**
   - Wire the same asset as favicon and og:image (absolute URL) in `__root.tsx` head.

## Not changing
- Palette, typography, layout structure, animations, routes, i18n, contact form — all untouched.
- `AureaMark` SVG file stays in the repo (still used by AgeGate / decorative accents) but is no longer the primary identity.

## Files touched
- `src/assets/aurea-logo-full.png.asset.json` (new)
- `src/components/AureaLogo.tsx` (new)
- `src/components/Header.tsx`, `src/components/Footer.tsx`
- `src/routes/index.tsx`, `src/routes/__root.tsx`
