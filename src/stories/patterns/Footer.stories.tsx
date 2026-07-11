import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer as FooterBlock } from '@registry/blocks/footer'

const meta = {
  title: 'Patterns / Marketing / Footer',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Footer: Story = {
  render: () => <FooterBlock />,
}
