# Quill Token Foundation — Design Spec

**Date:** 2026-07-01
**Status:** Approved design, pre-implementation
**Scope:** Token foundation only. Pushing components & patterns to Figma is a separate follow-up phase.

## Context

Quill's token *values* currently live in **four hand-maintained places** that drift apart:

1. `src/app/globals.css` — the real tokens used by Storybook + the app
2. `registry/themes/quill.css` — the theme shipped to consumers (Craftwell apps) via the shadcn registry (`public/r/quill.json`, installed as `app/quill-theme.css`)
3. `.storybook/manager.ts` / `quill-theme.ts` — hardcoded copies for Storybook's own chrome
4. The Docs MDX pages (`Colors.mdx`, etc.) — hardcoded hex

This drift is already causing a real bug: `registry/themes/quill.css:173` still ships `a { color: var(--terracotta) }` (#C4684B, 3.32:1 — fails WCAG AA), even though `globals.css` was fixed this session to use `--terracotta-deep`. **Consumers are on track to receive the stale, inaccessible link color** on their next registry sync.

The design system also needs to interface cleanly with **Figma** — the near-term goal is pushing tokens into Figma variables via the Figma MCP to establish a visual source of truth there (components & patterns follow in a later phase, and depend on tokens existing in Figma first).

## Goals

- One **single source of truth** for every Quill token.
- Generate, from that source: the CSS token blocks in `globals.css` **and** `registry/themes/quill.css`, the Storybook manager theme values, a **Storybook Tokens page**, and a **DTCG (W3C Design Tokens) JSON** the Figma MCP can consume.
- Eliminate drift across all four surfaces above, and correct the stale, inaccessible link color shipped in `registry/themes/quill.css` (see "Fixing the stale link color" below — it needs a base-layer change, not just token regeneration).
- Zero unintended change to computed values — `test-storybook` stays 228/228 with 0 a11y violations.
- No new runtime/build dependencies.

## Non-goals (this phase)

- Pushing components or patterns into Figma (next phase).
- Refactoring the existing Colors/Typography/Spacing/Elevation MDX pages to read from the source (optional future cleanup; they keep hardcoded values for now).
- Any change to token *values* (this is a structural move, not a re-theme).

## Locked decisions

- **Option B** — single structured source generates all downstream artifacts.
- **Approach 1** — a typed TypeScript token module + a small Node generator script (no Style Dictionary, no new deps).
- **Manager theme is in scope** — its values are generated from the source, and the search-box border is bumped to a readable value.
- **Tokens page placement** — under Docs, after Elevation: Introduction → Colors → Typography → Spacing → Elevation → **Tokens**.

## Architecture

```
src/tokens/quill.tokens.ts   ← single source of truth (typed)
          │
          ▼
scripts/build-tokens.mjs     ← generator (plain Node, no deps)
          │
          ├─► src/app/globals.css              (token blocks, between markers)
          ├─► registry/themes/quill.css        (token blocks, between markers)
          ├─► src/tokens/generated/manager-theme.ts   (resolved literals for Storybook chrome)
          └─► tokens/quill.figma.json          (DTCG export for Figma MCP)

src/stories/docs/Tokens.mdx  ← imports quill.tokens.ts directly (live, cannot drift)
```

### 1. Token source module — `src/tokens/quill.tokens.ts`

A typed object in three layers mirroring both the CSS and the Figma model:

- **Primitives** — raw ramps: papers (base/warm/deep), inks (base/soft/muted), the four pigments (terracotta/moss/indigo/gold, each base + deep), hairlines (faint/soft/line/strong), radii (xs–4xl), type scale (2xs–5xl), fonts (sans/display/heading/mono), Fraunces presets (display/accent/text/caption), motion (easing/duration/lift), elevation shadows (xs–pop).
- **Semantic** — aliases that reference primitives: `surface.page/card/well`, `text.strong/body/muted/on-ink/accent`, `link`, `border.card/field/divider`, `status.success/warning/danger/info`.
- **ShadCN contract** — `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `radius`, `chart-1..5`, `sidebar-*`, referencing the layers above.

Color/shadow tokens carry `{ light, dark }` values; scalars (radii, sizes, fonts, motion, font-axes) are single values. Aliases store a **reference** (e.g. `{ ref: 'pigment.terracotta.deep' }`) so both CSS `var()` chains and Figma alias variables can be emitted.

### 2. Generator — `scripts/build-tokens.mjs` + `build:tokens` npm script

Reads the source and writes each output. **Idempotent** — re-running with an unchanged source produces no diff.

- **CSS blocks** are injected only between `/* @tokens:start */` … `/* @tokens:end */` markers in `globals.css` and `registry/themes/quill.css`. Everything else in those files — the hand-authored, a11y-hardened `@layer base` (element styles, `.paper-grain`, etc.), `@import`s, `@custom-variant` — is **never touched**. On first run, the generator inserts the markers around the current token blocks.
- Emits `:root {}`, `[data-theme="dark"] {}`, and the `@theme inline {}` mappings.

### Fixing the stale link color (base-layer, not a token block)

The staleness lives in the `@layer base` rule `a { color: var(--terracotta) }` in `quill.css` — this is element styling, **not** a token definition, so regenerating token *values* alone would not touch it. It is corrected two ways:

1. The base-layer link/accent rules in **both** CSS files are routed through the generated semantic token `--text-accent-color`, which the source sets to `--terracotta-deep` (today it is incorrectly mapped to plain `--terracotta` and is unused because the fixed `globals.css` `a {}` references `--terracotta-deep` directly). Routing through it makes the value token-controlled and identical across files — a safe consistency cleanup, not a computed-value change.
2. A one-time sync makes the two files' shared base-layer rules match, so `quill.css` stops shipping the failing `#C4684B` link color.

### 3. Manager theme — `src/tokens/generated/manager-theme.ts`

The generator resolves the source into the literal hex/rgba values Storybook's `create()` requires and writes them here; `.storybook/quill-theme.ts` and `manager.ts` import from it (removing today's duplicated copy). The hand-authored CSS injection in `manager.ts` (fonts, sidebar styling) stays.

- **Search-box border fix:** the app's field border (`--input` = `--line`, ink @ 0.15) is too faint for Storybook's chrome (~1.3:1). The manager's `inputBorder` maps to a stronger, readable value — **`rgba(42,38,34,0.32)`** (≈3:1 on the `#EFE4CE` input fill) — defined in the source as a manager-specific `control-border` derived from ink, with a comment explaining manager UI needs stronger non-text contrast than the app hairline.

### 4. Figma / DTCG export — `tokens/quill.figma.json`

Structured for a clean Figma-variable import:

- **Two collections:** `Primitives` (single mode) and `Theme` (Light/Dark modes). Semantic + ShadCN tokens live in `Theme` and **alias** primitives.
- **Type mapping:** colors → color variables (hairlines keep alpha); radii & type sizes → number variables; fonts → string/fontFamily; **elevation shadows → DTCG `shadow` type → Figma effect styles** (not variables).
- **Not representable in Figma:** motion (easing/duration/transform) and Fraunces `font-variation-settings` have no native Figma type. They are included in the DTCG as documented `string` entries but are **not** emitted as fake variables. Called out explicitly on the Tokens page and in the export.
- **Naming:** nested groups so Figma builds tidy folders — `color/paper/base`, `color/pigment/terracotta/deep`, `radius/lg`, `type/size/xl`, `elevation/pop`.

### 5. Storybook Tokens page — `src/stories/docs/Tokens.mdx`

Imports `quill.tokens.ts` and renders **every token live** (cannot drift), in sections: Colors (light + dark swatch, value, and Figma variable name per row), Type scale, Radii, Elevation (real shadow previews), Fonts, Fraunces presets, Motion. Each row cross-references CSS var ↔ value ↔ Figma name. Non-Figma tokens (motion, Fraunces axes) are clearly flagged as CSS-only.

Placement: add `'Tokens'` after `'Elevation'` in the `storySort` order in `.storybook/preview.tsx`.

## Data flow

Edit `quill.tokens.ts` → run `npm run build:tokens` → CSS token blocks, manager theme, and DTCG JSON regenerate → Storybook page reflects the source automatically (direct import) → commit. Consumers pick up the synced `registry/themes/quill.css` on their next `shadcn add`.

## Verification & downstream safety

- `npm run build:tokens` is idempotent (re-run → no diff).
- After generation: `npm run test-storybook` → **228/228, 0 a11y violations** (proves computed values are unchanged).
- A value-diff check confirms no token value shifted unintentionally.
- Confirm `globals.css` and `registry/themes/quill.css` token blocks now match, and that the shipped theme's base-layer link/accent color is corrected (per "Fixing the stale link color").
- Validate `tokens/quill.figma.json` against the DTCG shape the Figma MCP expects.
- Because `registry/themes/quill.css` changes, note in the PR that consumers will receive the corrected (accessible) theme on its next registry sync.

## File manifest

| File | Action |
|---|---|
| `src/tokens/quill.tokens.ts` | new — source of truth |
| `scripts/build-tokens.mjs` | new — generator |
| `src/tokens/generated/manager-theme.ts` | new — generated manager values |
| `tokens/quill.figma.json` | new — DTCG export |
| `src/stories/docs/Tokens.mdx` | new — Tokens page |
| `src/app/globals.css` | modified — token blocks wrapped in markers, generated |
| `registry/themes/quill.css` | modified — token blocks generated into markers; base-layer link/accent synced (corrects stale link color) |
| `.storybook/manager.ts`, `.storybook/quill-theme.ts` | modified — import generated values; search-box border fix |
| `.storybook/preview.tsx` | modified — add `Tokens` to storySort after `Elevation` |
| `package.json` | modified — add `build:tokens` script |

## Future phases (out of scope here)

- Push **components & patterns** to Figma via the Figma MCP (`figma-generate-library` / Code Connect), built on this token foundation.
- Optionally refactor the existing Colors/Typography/Spacing/Elevation MDX pages to read from the source.
