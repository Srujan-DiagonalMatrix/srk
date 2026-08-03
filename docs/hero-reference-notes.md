# Hero reference implementation notes

The reference is represented in the implementation with a roughly **66/34 content-to-portrait desktop split**. Both columns align at the top so the portrait begins on the same visual line as the heading, and the portrait is pinned to the right edge of its column. The portrait frame uses equal spacing on all four sides so the gold border and photograph remain aligned without a diagonal overlap. The heading uses the site's Inter stack at 26–32 px on larger screens, a compact 1.16 line-height, and is deliberately locked to three lines: “Srujan | Lead Multi-Agent”, “AI Developer &”, and “Solution Designer”. The desktop video uses a 16:9 frame (960 × 540 source), while the portrait uses a 4:5 frame (800 × 1000) with a high-center crop.

Expertise items use an approximately 13 px row gap and 28 px column gap. CTAs are 48 px tall, separated by a 14 px gap, with reference widths of 184 px, 166 px, and 192 px. The first action is gold; the other two use matching white surfaces, gray-blue borders, and subtle shadows. At tablet sizes the portrait column narrows; at mobile sizes the layout becomes a single logical reading sequence: content, then portrait.

The hero copy follows the supplied design verbatim. The video card does not render invented visible title or subtitle text; its supporting sentence appears once immediately below the card, while the control retains an accessible fallback name.

## Asset status

The supplied production portrait is used for `srujan-portrait.webp`. It is center-cropped from the supplied 1173 × 1341 image to the required 4:5 composition and exported as a high-quality 800 × 1000 WebP. The supplied 1280 × 720 video thumbnail is exported as a high-quality 960 × 540 WebP without changing its 16:9 composition. The hero opens the supplied YouTube video in the accessible modal. The CV link is configured for the intended `/srujan-cv.pdf` destination; that production document is not currently present.

Because this repository's review system does not accept binary patches, both WebPs are stored as reviewable Base64 source files under `scripts/assets/`. Run `npm run generate:assets` to recreate both files at their required `src/assets/` paths. The generation step runs automatically before both `npm run dev` and `npm run build`.
