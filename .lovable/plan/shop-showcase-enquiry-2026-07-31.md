# Shop — showcase & enquiry

A new Shop section in the Aurea style: editorial, crema/navy/gold, no checkout. Three expressions presented as a range, with a reservation enquiry flow. Bottle photography is stubbed with elegant placeholders that you can swap for real photos by dropping in image files — no code rewrite needed.

## Pages

- `/shop` — the collection: intro line, three product cards (Blanco, Reposado, Añejo), tasting notes, availability status, "Reserve" action.
- `/shop/$slug` — a single expression: large bottle frame, tasting notes (nose / palate / finish), craft details (agave, ageing, ABV, format), and the enquiry form.

Navigation gets a Shop link in the header (desktop + mobile) and footer, in both EN and IT.

## Product placeholder system

All product data lives in one file, `src/lib/products.ts`: slug, name, subtitle, tasting notes, ageing, ABV, status (`available` / `coming-soon`), and an optional `image` field.

- While `image` is empty, the card renders a refined placeholder: a soft crema-to-sand gradient panel, a faint bottle silhouette outline, the gold sunburst mark, and a small "photography coming soon" caption. It looks intentional, not broken.
- To use real photos later: drop the file into `src/assets/` and set one line — `image: bottleReposado` — in `src/lib/products.ts`. The placeholder disappears automatically. Nothing else to change.

## Enquiry flow

The "Reserve" button opens a form (name, email, quantity, message, product preselected). No payment, no backend: it composes a prefilled email to your contact address, plus a confirmation toast. Wording makes clear it's an allocation request, not a purchase.

## Look and feel

- Same visual language as the rest of the site: crema background, navy type, gold hairlines, Cormorant display headings.
- Cards use a tall portrait frame with thin gold rule, uppercase letter-spaced labels, and a hover reveal of tasting notes.
- Scroll fade-up on section entry; subtle parallax drift on the product frames.
- Fully responsive; age gate and language switching already apply site-wide.

## Technical notes

- New routes: `src/routes/shop.index.tsx`, `src/routes/shop.$slug.tsx`, plus `src/routes/shop.tsx` layout rendering `<Outlet />`.
- New: `src/lib/products.ts`, `src/components/BottleFrame.tsx` (placeholder/photo swap), `src/components/ReserveDialog.tsx`.
- i18n keys added to `src/lib/i18n.tsx` for EN + IT.
- Each route gets its own `head()` with unique title/description/og tags.
- No database, no payments — pure frontend.
