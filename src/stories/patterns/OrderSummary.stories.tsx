import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { OrderSummary as OrderSummaryBlock } from '@registry/blocks/order-summary'

const meta = {
  title: 'Patterns / Data / Order summary',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const OrderSummary: Story = {
  render: () => <OrderSummaryBlock />,
}
