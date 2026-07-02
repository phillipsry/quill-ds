# Icon System — Design Spec (Material Symbols Outlined)

**Date:** 2026-07-01
**Status:** Approved design, pre-implementation
**Relation:** Prerequisite for **Phase 2 Wave A (core atom components)** — the atoms embed icons, and code + Figma must reference the same set. Do this first.

## Context

The component library currently uses **lucide-react**, and the full footprint (audited) is:
- **44 distinct icons** imported across **35 files** (22 `src/components/ui/*` + 13 `src/stories/*`).
- `package.json` dependency `lucide-react ^1.17.0`.
- `components.json` → `"iconLibrary": "lucide"` (shadcn CLI config).
- `node_modules/lucide-react` (installed).

We're switching to **Material Symbols, Outlined, weight 200** as the single icon system, present identically in code (Storybook) and Figma, so design↔code parity holds when Wave A components use icon slots. **Every** one of those artifacts is removed.

Weight 200 is deliberate: the thinner stroke reads as refined/editorial and suits Quill's warm, restrained aesthetic better than the heavier 400.

## Goals

- **One icon system:** Material Symbols Outlined @ weight 200. **Lucide fully removed** — all 44 icon usages migrated, `lucide-react` uninstalled from `package.json`, `components.json` `iconLibrary` de-Lucided, and `node_modules/lucide-react` gone. A repo-wide `grep -ri lucide` (excluding node_modules + lockfile) must return **nothing**.
- A **source-owned `<Icon name="…">`** component, generated from the Material Symbols SVGs, so only the icons in use ship and adding an icon is a one-line + regenerate step.
- The **same icons in Figma** (icon components in the Quill Design System library), generated from the same SVGs, for instance-swap slots in Wave A.
- Code stays the source of truth; both the code icon map and the Figma icons are **generated + re-runnable** (same philosophy as tokens).
- `test-storybook` stays **228/228 with 0 a11y violations**.

## Non-goals

- Wave A components themselves (separate spec, next).
- Importing the full Material Symbols catalog — only the curated set in use + a small common set; adding more is trivial later.
- Reverse sync (Figma icon edits → code).

## Locked decisions

- **Material Symbols Outlined, weight 200** via `@material-symbols/svg-200` (v0.45.x).
- **Full Lucide replacement.**
- **Source-owned, generated** `<Icon>` (no reliance on a fragile Next.js SVG loader — SVGs are inlined at generate time).
- Same set generated into Figma.

## Architecture

```
@material-symbols/svg-200/outlined/<name>.svg   (dependency — the source SVGs)
        │
        ├── scripts/build-icons.mjs ──▶ src/components/ui/icons.generated.tsx   (name → inline SVG JSX)
        │                                        │
        │                                 src/components/ui/icon.tsx  (<Icon name size aria-label/>)
        │
        └── figma/sync-icons.figma.js (Figma MCP) ──▶ Icons in "Quill Design System" (icon components)
```

### Code / Storybook

- **Dependency:** add `@material-symbols/svg-200` (dev or prod). Remove `lucide-react`.
- **Icon manifest:** a curated list of Material Symbols names (`scripts/icons.manifest.mjs` or inline in the build script) — the ~13 mapped icons + the story icons + a small common set.
- **Generator `scripts/build-icons.mjs`** (Node ESM, no new build tooling): reads each manifest name from `@material-symbols/svg-200/outlined/<name>.svg`, extracts the inner markup, and emits `src/components/ui/icons.generated.tsx` — a `name → (props) => <svg …>` map. `npm run build:icons`. Re-runnable/idempotent; adding an icon = add the name, regenerate.
- **`src/components/ui/icon.tsx`** — `<Icon name size=… className aria-label />`: looks up the generated map, renders at `1em`/size, `aria-hidden` by default (decorative), `role="img"` + `aria-label` when a label is passed. Throws a clear error for an unknown name.
- **Migration:** replace every `lucide-react` icon usage across the ~35 files with `<Icon name="…" />` (mapping below), then uninstall `lucide-react`.

### Figma

- **`figma/sync-icons.figma.js`** driven by the Figma MCP `use_figma`: for each manifest name, read the same outlined-200 SVG and create/update a Figma **icon component** (`figma.createNodeFromSvg` → wrap as a component named `icon/<name>`) in an **Icons** section of the Quill Design System file. Re-runnable (upsert by name). These are the instance-swap sources for Wave A.

### Lucide → Material Symbols Outlined mapping (core set; finalized in the plan)

| Lucide | Material Symbols | note |
|---|---|---|
| `Check` | `check` | |
| `ChevronDown` | `keyboard_arrow_down` | |
| `ChevronUp` | `keyboard_arrow_up` | |
| `ChevronLeft` | `chevron_left` | |
| `ChevronRight` | `chevron_right` | |
| `CircleCheck` | `check_circle` | |
| `Info` | `info` | |
| `Minus` | `remove` | |
| `MoreHorizontal` | `more_horiz` | |
| `Search` | `search` | |
| `TriangleAlert` | `warning` | |
| `OctagonX` | `dangerous` | judgment call (error/stop) — flag for review |
| `PanelLeft` | `dock_to_left` | judgment call (sidebar toggle) — flag for review |

This is the core component set. The **full manifest is 44 icons** (stories add e.g. `AlignLeft/Center/Right`, `Bold/Italic/Underline`, `ArrowRight`, `Bell`, `BookOpen`, `Copy`, `CreditCard`, `DollarSign`, `FolderOpen`, `Globe`, `HelpCircle`, `LayoutDashboard`, `Palette`, `Pencil`, `Plus`, `Star`, `Trash`/`Trash2`, `Users`, `X`, `Command`, `File`, `Settings`, `Loader2` → `progress_activity`/spinner). The plan enumerates and maps **all 44** before `lucide-react` is removed, flagging any without a clean 1:1 for review. `components.json`'s `iconLibrary` is removed/neutralized (Material Symbols isn't a shadcn CLI option, and icons are now custom via `<Icon>`).

## Verification

- `npm run build:icons` is idempotent (re-run → no diff).
- **Zero-Lucide gate:** `grep -ri lucide . --exclude-dir=node_modules --exclude-dir=.git` (also excluding the lockfile) returns **empty** — covers source imports, `package.json`, and `components.json`. `node_modules/lucide-react` removed after uninstall.
- `npm run test-storybook` → **228/228, 0 a11y violations** (icons are `aria-hidden` unless labeled; the enforced a11y suite catches missing labels/roles).
- Visual check: icons render as weight-200 outlined, correct sizes, in a few representative stories.
- Figma: the `icon/*` components exist in the library and can be instance-swapped.

## Risks / constraints

- **Next.js SVG handling:** per `AGENTS.md`, confirm the approach against the local Next.js docs. The generated-inline-JSX approach sidesteps SVG-loader config, which is the safest path.
- **Icon-name judgment calls** (`OctagonX→dangerous`, `PanelLeft→dock_to_left`, and any story icons without an obvious 1:1) — flagged for human review during the plan.
- **a11y:** decorative icons must be `aria-hidden`; icon-only interactive controls need an accessible name — the enforced tests will surface regressions.
- **Figma auth/edit access** to the Quill Design System file (as in Phase 1).

## Repo artifacts

| File | Action |
|---|---|
| `scripts/build-icons.mjs` (+ manifest) | new — generator |
| `src/components/ui/icons.generated.tsx` | new — generated icon map |
| `src/components/ui/icon.tsx` | new — `<Icon>` component |
| `figma/sync-icons.figma.js` | new — Figma icon sync |
| ~35 component + story files | modified — all 44 Lucide usages → `<Icon>` |
| `package.json` | modified — `+@material-symbols/svg-200`, `-lucide-react`, `build:icons` script |
| `components.json` | modified — remove/neutralize `iconLibrary: "lucide"` |

## Next

Phase 2 **Wave A** components consume `<Icon>` (code) and the `icon/*` Figma components (instance-swap slots).
