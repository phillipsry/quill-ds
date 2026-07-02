// Re-runnable Figma Plugin-API upsert for Quill foundations.
//
// Executed via the Figma MCP `use_figma` on file Dcf8lEB7Ash71iNl7WN4Jq, with a
// `DTCG` object in scope (the contents of tokens/quill.figma.json). Idempotent:
// every collection, mode, variable, and style is matched by name and updated in
// place — a re-run creates zero new objects. See figma/README.md to re-run.
//
// Source of truth is code (src/tokens/quill.tokens.mjs). Do not edit values here.

const REM = 16 // DTCG dimensions are rem; Figma numeric variables are px.
const COLOR_SCOPES = ['ALL_FILLS', 'STROKE_COLOR', 'EFFECT_COLOR'] // ALL_FILLS already covers text/frame/shape fills

// ---- color parsing ----
function hexToRgb(hex) {
  const n = hex.replace('#', '')
  const b = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  return { r: parseInt(b.slice(0, 2), 16) / 255, g: parseInt(b.slice(2, 4), 16) / 255, b: parseInt(b.slice(4, 6), 16) / 255 }
}
// "#hex" or "rgba(r,g,b,a)" → {r,g,b,a} (all 0–1)
function toFigmaColor(css) {
  const m = css.match(/rgba?\(([^)]+)\)/)
  if (m) {
    const p = m[1].split(',').map((s) => s.trim())
    return { r: +p[0] / 255, g: +p[1] / 255, b: +p[2] / 255, a: p[3] !== undefined ? +p[3] : 1 }
  }
  const { r, g, b } = hexToRgb(css)
  return { r, g, b, a: 1 }
}

// walk DTCG.Primitives.color leaves → { path:[...], modes:{Light,Dark} }
function walkColorLeaves(node, prefix, out) {
  for (const [k, v] of Object.entries(node)) {
    if (v && v.$type === 'color') out.push({ path: [...prefix, k], modes: v.$extensions['com.figma'].modes })
    else if (v && typeof v === 'object') walkColorLeaves(v, [...prefix, k], out)
  }
}

// ---- collection / mode / variable upserts (idempotent by name) ----
async function upsertCollection(name) {
  const cols = await figma.variables.getLocalVariableCollectionsAsync()
  return cols.find((c) => c.name === name) || figma.variables.createVariableCollection(name)
}
// Ensure the collection has exactly the named modes (in order); returns { name: modeId }
function ensureModes(col, names) {
  col.renameMode(col.modes[0].modeId, names[0])
  const ids = { [names[0]]: col.modes[0].modeId }
  for (const n of names.slice(1)) {
    const existing = col.modes.find((m) => m.name === n)
    ids[n] = existing ? existing.modeId : col.addMode(n)
  }
  return ids
}
async function varsInCollection(col) {
  const map = {}
  for (const v of await figma.variables.getLocalVariablesAsync()) {
    if (v.variableCollectionId === col.id) map[v.name] = v
  }
  return map
}

async function syncPrimitiveColors(DTCG) {
  const col = await upsertCollection('Quill Primitives')
  const modes = ensureModes(col, ['Light', 'Dark'])
  const existing = await varsInCollection(col)
  const leaves = []
  walkColorLeaves(DTCG.Primitives.color, [], leaves)
  let created = 0
  let updated = 0
  for (const { path, modes: mv } of leaves) {
    const name = 'color/' + path.join('/')
    let v = existing[name]
    if (!v) {
      v = figma.variables.createVariable(name, col, 'COLOR')
      v.scopes = COLOR_SCOPES
      created++
    } else updated++
    v.setValueForMode(modes.Light, toFigmaColor(mv.Light))
    v.setValueForMode(modes.Dark, toFigmaColor(mv.Dark))
    existing[name] = v
  }
  return { collection: col.name, modes: Object.keys(modes), created, updated, total: leaves.length }
}

async function syncFoundations(DTCG) {
  const results = {}
  results.colors = await syncPrimitiveColors(DTCG)
  // Wired up across later tasks:
  //   results.scalars  = await syncPrimitiveScalars(DTCG)
  //   results.semantic = await syncSemanticAliases(DTCG)
  //   results.text     = await syncTextStyles(DTCG)
  //   results.effects  = await syncEffectStyles(DTCG)
  return results
}
