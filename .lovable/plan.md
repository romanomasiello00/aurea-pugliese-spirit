# Unify logos across aureatequila.it & Lovable, fix missing image

## What's happening today

- The **Vercel deploy at aureatequila.it** is serving an older build of this repo. Its logo is bigger and airier: emblem on top, then a large **AUREA** wordmark, then `TEQUILA ✹ PUGLIA`, then a `SOLE • TERRA • MARE • TEMPO` line under it. Header shows the compact emblem + small wordmark.
- The **current Lovable preview** renders a newer, more compact SVG lockup with tighter proportions and a different sunburst geometry.
- The **four‑icons image is broken on aureatequila.it**. Confirmed root cause: it's loaded from `/__l5e/assets-v1/6bb30659…/aurea-four-icons.png` (Lovable's CDN). That path only exists on Lovable's hosting — Vercel returns 404. Same risk applies to any other `.asset.json` reference (currently only the four‑icons file uses it; the logos and hero/craft photos are bundled by Vite and load fine).

## Goal

1. Preserve **both** logo designs so nothing is lost.
2. Ship a single unified logo everywhere: the aureatequila.it layout, but with the **"AUREA" serif font from the current Lovable version** (Cormorant Garamond, the italic-esque serif you liked).
3. Make sure every image on the site works on **both** hosts (Lovable + Vercel/custom domain).

## Plan

### 1. Preserve both versions (no loss)
- Save the aureatequila.it homepage screenshot as a PNG snapshot in `/mnt/documents/logo-archive/aurea-logo-vercel.png`.
- Save a fresh Lovable-preview homepage snapshot as `/mnt/documents/logo-archive/aurea-logo-lovable.png`.
- Archive the current SVG component source to `src/components/_archive/AureaLogoLovable.tsx` (kept as an unused, importable module for future reference — not rendered anywhere).

### 2. Rebuild `AureaLogo.tsx` = aureatequila.it lockup + Lovable serif
Redraw the SVG so the visual layout matches the Vercel screenshot:
- Sunburst emblem on top (the fuller, more balanced sunburst from the Vercel version).
- Large centered **AUREA** wordmark in Cormorant Garamond (the font from the current Lovable logo).
- `TEQUILA ✹ PUGLIA` divider line.
- `SOLE • TERRA • MARE • TEMPO` line under it (in the `variant="full"` used on the homepage hero).
- `variant="compact"` for the header keeps only emblem + `TEQUILA • PUGLIA`, matching the current header.

No changes to `Header.tsx`, `index.tsx`, or routing — they already consume `AureaLogo` via `variant` and `className`, so swapping the internals is enough.

### 3. Fix the broken four-icons image on the custom domain
The file `src/assets/aurea-four-icons.png.asset.json` points to Lovable's CDN and 404s on Vercel. Migrate this single asset back to a bundled file so both hosts serve it:
- Re-download the PNG from the Lovable CDN once, save it to `src/assets/aurea-four-icons.png`.
- Update `src/routes/index.tsx` to `import fourIcons from "@/assets/aurea-four-icons.png"` and use `src={fourIcons}` instead of `fourIconsAsset.url`.
- Delete `src/assets/aurea-four-icons.png.asset.json`.
- Audit the repo for any other `/__l5e/assets-v1/` or `.asset.json` imports and fix them the same way if found.

### 4. Verify
- `bun run build` succeeds.
- Playwright: load Lovable preview homepage → screenshot → confirm the new unified logo renders and the four icons image loads.
- After you re-deploy to Vercel, aureatequila.it will render the same logo and the four icons image will load (path is bundled, host-agnostic).

## Technical notes

- `.asset.json` files reference `/__l5e/assets-v1/{id}/{file}`, which is served only by Lovable hosting infrastructure. Any project deployed to a non-Lovable host (Vercel, Netlify, self-host) must not use `.asset.json` for runtime-referenced images unless it also proxies that path. For this project, bundling via `src/assets/*` + Vite import is the safest cross-host approach and is what the existing hero/craft images already do.
- No backend, routing, i18n, or content changes.
- Reversible: the archived component and the two archived PNG snapshots let you resurrect either logo later.

## Deliverables
- `src/components/AureaLogo.tsx` — new unified lockup
- `src/components/_archive/AureaLogoLovable.tsx` — current SVG preserved
- `src/assets/aurea-four-icons.png` — bundled image
- `src/routes/index.tsx` — updated import
- `src/assets/aurea-four-icons.png.asset.json` — deleted
- `/mnt/documents/logo-archive/aurea-logo-vercel.png`, `aurea-logo-lovable.png` — downloadable snapshots
