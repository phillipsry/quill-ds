import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SidebarNav as SidebarNavBlock } from '@registry/blocks/sidebar-nav'

const meta = {
  title: 'Patterns / Shells / Sidebar navigation',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const SidebarNav: Story = {
  render: () => <SidebarNavBlock />,
}
