# Quill → Figma sync

**Target file:** Quill Design System — `Dcf8lEB7Ash71iNl7WN4Jq`
(<https://www.figma.com/design/Dcf8lEB7Ash71iNl7WN4Jq>) · team: RP Designs (Pro) · project 98994984

**Source of truth:** code. `src/tokens/quill.tokens.mjs` → `npm run build:tokens` → `tokens/quill.figma.json` (DTCG) → this sync. Figma is a generated mirror.

## Re-run the foundation sync

1. Ensure `tokens/quill.figma.json` is current: `npm run build:tokens`.
2. Load the `figma-use` skill, then call the Figma MCP `use_figma` on file `Dcf8lEB7Ash71iNl7WN4Jq` with:
   - `const DTCG = <contents of tokens/quill.figma.json>;` prepended, followed by the contents of
     `figma/sync-foundations.figma.js`, then `await syncFoundations(DTCG)`.
3. The sync **upserts by name**: existing variables/styles update in place; nothing duplicates.
   Running it a second time creates zero new objects.

## What this manages

- Variables: `Quill Primitives` collection (modes: Light, Dark) + `Quill Semantic` collection (aliases → Primitives).
- Text styles (`Display/*`, `Heading/*`, `Body/*`, `Accent`, `Eyebrow`).
- Effect styles (`Elevation/xs·sm·base·lg·pop`, light values).

**Not managed here:** dark-mode elevation (Figma effect styles can't hold modes) — deferred to the component phase. Components, Code Connect, and patterns are later phases.
