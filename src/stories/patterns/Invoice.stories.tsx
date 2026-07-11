import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Invoice as InvoiceBlock } from '@registry/blocks/invoice'

const meta = {
  title: 'Patterns / Data / Invoice',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Invoice: Story = {
  render: () => <InvoiceBlock />,
}
