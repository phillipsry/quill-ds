import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Faq as FaqBlock } from '@registry/blocks/faq'

const meta = {
  title: 'Patterns / Marketing / FAQ',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Faq: Story = {
  render: () => <FaqBlock />,
}
