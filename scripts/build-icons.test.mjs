import { test } from 'node:test'
import assert from 'node:assert/strict'
import { icons } from '../src/components/ui/icons.generated.mjs'

test('generated icons include the mapped set with viewBox + paths', () => {
  for (const name of ['check', 'search', 'close', 'warning', 'keyboard_arrow_down']) {
    assert.ok(icons[name], `missing ${name}`)
    assert.match(icons[name].viewBox, /-?\d/)
    assert.ok(Array.isArray(icons[name].paths) && icons[name].paths.length > 0, `${name} has no paths`)
    assert.ok(icons[name].paths.every((d) => typeof d === 'string' && d.length > 0))
  }
})
