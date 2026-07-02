// Re-runnable Figma Plugin-API upsert for Quill foundations.
//
// Executed via the Figma MCP `use_figma` on file Dcf8lEB7Ash71iNl7WN4Jq, with a
// `DTCG` object in scope (the contents of tokens/quill.figma.json). Idempotent:
// every collection, mode, variable, and style is matched by name and updated in
// place — a re-run creates zero new objects. See figma/README.md to re-run.
//
// Source of truth is code (src/tokens/quill.tokens.mjs). Do not edit values here.

const REM = 16 // DTCG dimensions are rem; Figma numeric variables are px.

// --- helpers are added incrementally by Tasks 2-6 ---

async function syncFoundations(DTCG) {
  // Wired up across Tasks 2-6:
  //   await syncPrimitiveColors(DTCG)
  //   await syncPrimitiveScalars(DTCG)
  //   await syncSemanticAliases(DTCG)
  //   await syncTextStyles(DTCG)
  //   await syncEffectStyles(DTCG)
}
