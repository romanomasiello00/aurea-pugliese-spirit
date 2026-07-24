## Goal

The current homepage emblem (thin needle-only sun + spiky navy sprout) doesn't match the reference you just sent. Your reference shows:

- A gold **8-point star outline** (looped continuous path)
- A gold **inner circle** just inside the star
- A ring of ~28 thin gold rays radiating outward
- A **navy 3-leaf lotus/agave** at the center (rounded, tulip-like), filled cream

That is exactly the emblem preserved in `src/components/_archive/AureaLogoLovable.tsx`. My last edit removed those elements — I'll put them back.

## Changes

1. **`src/components/AureaLogo.tsx`** — replace the emblem `<g>` block (rays + center sprout) with the archived construction:
   - 8-point star polygon stroke (gold, `#c9a84c`)
   - Concentric circle stroke (gold)
   - 28 tapered ray "needles" via `<use>` + rotation, alternating opacity
   - 3 navy-outlined leaves filled cream (`#f5efe4`) as the centerpiece
   - Keep the current wordmark stack unchanged: `AUREA` → `TEQUILA ✹ PUGLIA` → `SOLE • TERRA • MARE • TEMPO`
   - Keep the `variant="compact"` behavior (header shows emblem + `TEQUILA • PUGLIA` only)
   - Adjust viewBox so the star-based emblem (centered near y≈176 in archive coords) sits correctly above the wordmark

2. **`public/aurea-tab-icon.svg`** — regenerate so the browser tab icon uses the same star+lotus emblem, not the needle-only version.

3. **Preserve the current alternate** — copy the current needle-only `AureaLogo.tsx` to `src/components/_archive/AureaLogoNeedle.tsx` before overwriting, so both versions stay retrievable.

## Verification

- Playwright screenshot of `/` past the age gate → compare hero emblem against your uploaded reference (star outline visible, lotus at center, gold rays).
- Header at scroll → compact variant still renders the same emblem + `TEQUILA • PUGLIA` caption.
- Reload favicon and confirm the tab icon matches.

No copy, layout, colors, or other components change.
