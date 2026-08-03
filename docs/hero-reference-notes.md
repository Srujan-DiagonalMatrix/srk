# Hero reference implementation notes

The reference uses one horizontal, full-bleed hero section instead of a background that controls the height of the whole page. The page shell and hero span the complete viewport width, while only the readable header and hero content remain inside the centered content container. The background is a purpose-built 1672 × 480 composition: the supplied portrait and office are fitted in full on the right, then blended into an extended navy field on the left. This keeps the person's complete head and body visible without making the section excessively tall. Desktop content uses three horizontal zones: copy and actions at left, the 16:9 video at center, and the background portrait at right. Content below the hero returns to its own page background. The heading retains the supplied capitalization and uses the site's Inter stack with gold limited to “Srujan |”.

The left composition follows the supplied typography reference: a compact uppercase eyebrow; a three-line uppercase headline with white and bright-gold emphasis; supporting body copy; six uppercase expertise checks in two columns; and three uppercase CTAs. The video moves below those actions, with the deployment-example sentence beside it behind a gold divider. At mobile widths the same content keeps its reading order, with the video sentence moving below the thumbnail.

The hero copy follows the supplied design verbatim. The video card does not render invented visible title or subtitle text; its supporting sentence appears once immediately below the card, while the control retains an accessible fallback name.

## Asset status

The section-limited hero background is exported as a high-quality 1672 × 480 WebP. The separate portrait remains generated for future reuse but is no longer layered over the hero background. The supplied 1280 × 720 video thumbnail is exported as a high-quality 960 × 540 WebP without changing its 16:9 composition. The hero opens the supplied YouTube video in the accessible modal. The CV link is configured for the intended `/srujan-cv.pdf` destination; that production document is not currently present.

Because this repository's review system does not accept binary patches, both WebPs are stored as reviewable Base64 source files under `scripts/assets/`. Run `npm run generate:assets` to recreate both files at their required `src/assets/` paths. The generation step runs automatically before both `npm run dev` and `npm run build`.
