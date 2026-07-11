import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Pricing as PricingBlock } from '@registry/blocks/pricing'

const meta = {
  title: 'Patterns / Marketing / Pricing',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Pricing: Story = {
  render: () => <PricingBlock />,
}
