## Current state
- `src/components/AureaLogo.tsx` already wraps the `✹` star between "TEQUILA" and "PUGLIA" in a `<tspan fill="#c9a84c">` in both the `full` and `compact` variants.
- A live DOM inspection of the preview shows the computed fill for that `tspan` is `rgb(201, 168, 76)` — i.e., the logo gold.

## Problem
Despite the code/DOM being correct, the user reports the star still appears black in their preview. This is usually caused by HMR/cache lag or a stale published build, not by the SVG code itself.

## Plan
1. **Hard refresh / cache clear** — trigger a dev-server HMR flush and tell the user to hard-refresh the preview so the browser picks up the new component.
2. **Verify visually** — use Playwright to capture a screenshot of the hero logo and the header logo, zooming in on the star to confirm it renders gold.
3. **Robust fallback (if needed)** — if the star still appears black after refresh, replace the `tspan` approach with a separate SVG `<text>` element or a small SVG path for the star, so the fill is independent of any text CSS inheritance or browser-specific SVG tspan rendering quirks.

No other layout, copy, or color changes will be made.