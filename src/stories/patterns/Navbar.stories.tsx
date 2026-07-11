import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navbar as NavbarBlock } from '@registry/blocks/navbar'

const meta = {
  title: 'Patterns / Nav / Navbar',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Navbar: Story = {
  render: () => <NavbarBlock />,
}
