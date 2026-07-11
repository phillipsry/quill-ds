import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BadgeOnCard as BadgeOnCardBlock } from '@registry/blocks/badge-on-card'

const meta = { title: 'Patterns / Data / Badge on card', parameters: { layout: 'centered' } } satisfies Meta
export default meta
type Story = StoryObj

// Regression guard: destructive Badge on a card surface must pass AA contrast (was 4.45:1).
export const BadgeOnCard: Story = {
  render: () => <BadgeOnCardBlock />,
}
