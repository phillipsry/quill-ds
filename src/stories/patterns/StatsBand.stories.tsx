import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StatsBand as StatsBandBlock } from '@registry/blocks/stats-band'

const meta = {
  title: 'Patterns / Marketing / Stats band',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const StatsBand: Story = {
  render: () => <StatsBandBlock />,
}
