import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Newsletter as NewsletterBlock } from '@registry/blocks/newsletter'

const meta = {
  title: 'Patterns / Forms / Newsletter signup',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Newsletter: Story = {
  render: () => <NewsletterBlock />,
}
