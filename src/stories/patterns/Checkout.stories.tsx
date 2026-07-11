import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkout as CheckoutBlock } from '@registry/blocks/checkout'

const meta = {
  title: 'Patterns / Forms / Checkout',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Checkout: Story = {
  render: () => <CheckoutBlock />,
}
