import { test } from 'node:test'
import assert from 'node:assert/strict'
import { tokens } from './quill.tokens.mjs'

test('primitive color values match current globals.css', () => {
  assert.equal(tokens.color.paper.base.light, '#F5EDDD')
  assert.equal(tokens.color.paper.base.dark, '#20180E')
  assert.equal(tokens.color.ink.base.light, '#2A2622')
  assert.equal(tokens.color.pigment.terracotta.base.light, '#C4684B')
  assert.equal(tokens.color.pigment.terracotta.deep.light, '#944A33')
  assert.equal(tokens.color.line.base.light, 'rgba(42, 38, 34, 0.15)')
})

test('scalars match current values', () => {
  assert.equal(tokens.radius.lg, '0.5rem')
  assert.equal(tokens.text.xl, '1.5rem')
  assert.equal(tokens.shadow.pop.light.startsWith('0 20px 32px'), true)
  assert.equal(tokens.fraunces.accent, '"opsz" 144, "SOFT" 100, "WONK" 1')
})

test('the accent alias is fixed to terracotta-deep (a11y)', () => {
  assert.equal(tokens.semantic['text-accent-color'], 'var(--terracotta-deep)')
  assert.equal(tokens.shadcn.destructive, 'var(--terracotta-deep)')
})

test('manager control border is the readable value', () => {
  assert.equal(tokens.manager.controlBorder, 'rgba(42,38,34,0.32)')
})
