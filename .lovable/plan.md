## Goal
Update the "Expression" teaser on the homepage: remove the heading text and the typographic label image, and display the uploaded four-icons artwork (SOLE, TERRA, MARE, TEMPO) with a transparent background on the left. Keep the existing tasting notes and CTA on the right.

## What will change

1. **Background removal**
   - Run `imagegen--edit_image` on `user-uploads://Gemini_Generated_Image_dhw11ndhw11ndhw1.png` to remove the white/light background and produce a transparent PNG.
   - Save the result to `/mnt/documents/aurea-four-icons-transparent.png` or a temp path for review.

2. **Asset upload**
   - Upload the transparent PNG via `lovable-assets create` and create `src/assets/aurea-four-icons.png.asset.json`.

3. **Homepage update (`src/routes/index.tsx`)**
   - Remove the eyebrow (`home.expression.eyebrow`) and title (`home.expression.title`) from the top of the Expression teaser section.
   - In the left column of the two-column grid, replace the framed typographic label and `AureaLogo` composition with the new four-icons image, centered and responsive.
   - Keep the right column: nose / palate / finish notes and the link to `/expression`.

4. **Verification**
   - Build the project to confirm no import/JSX errors.
   - Use the live preview or a Playwright screenshot to verify the icons render on the cream background with no white box and the text/CTA remain intact.

## What stays the same
- Color palette, typography, and overall section padding.
- Tasting-note copy, CTA text, and the `/expression` link.
- The existing `AureaLogo` component and other homepage sections (Hero, Story, Craft).

## Notes
- The uploaded source file is currently 1920x429 RGB without an alpha channel, so the background must be removed before it can be placed cleanly on the cream page background.
- The user has confirmed the descriptive text and CTA should remain.