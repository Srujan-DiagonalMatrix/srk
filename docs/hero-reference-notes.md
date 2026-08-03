# Hero reference implementation notes

The reference is represented in the implementation with a roughly **66/34 content-to-portrait desktop split**. The heading is deliberately locked to three lines: “Srujan | Lead Multi-Agent”, “AI Developer &”, and “Solution Designer”. The desktop video uses a 16:9 frame (960 × 540 source), while the portrait uses a 4:5 frame (800 × 1000) with a high-center crop.

Expertise items use an approximately 13 px row gap and 28 px column gap. CTAs are 48 px tall, separated by a 12 px gap. At tablet sizes the portrait column narrows; at mobile sizes the layout becomes a single logical reading sequence: content, then portrait.

## Asset status

No production portrait, thumbnail, CV, or playable video was present in the supplied repository. `srujan-portrait.webp` and `hero-introduction.webp` are local, dimensionally accurate WebP placeholders and should be replaced in place when approved production assets arrive. The video card therefore announces “Video coming soon” and does not open an empty player. The CV link is configured for the intended `/srujan-cv.pdf` destination; that production document is not currently present.

Because this repository's review system does not accept binary patches, the placeholder WebPs are stored as reviewable Base64 source files under `scripts/assets/`. Run `npm run generate:assets` to recreate both files at their required `src/assets/` paths. The generation step runs automatically before both `npm run dev` and `npm run build`. Production assets should replace the generated files and their Base64 sources together.
