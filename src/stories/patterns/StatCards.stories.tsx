import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StatCards as StatCardsBlock } from '@registry/blocks/stat-cards'

const meta = {
  title: 'Patterns / Data / Stat cards',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const StatCards: Story = {
  render: () => <StatCardsBlock />,
}
