import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero as HeroBlock } from '@registry/blocks/hero'

const meta = {
  title: 'Patterns / Marketing / Hero',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Hero: Story = {
  render: () => <HeroBlock />,
}
