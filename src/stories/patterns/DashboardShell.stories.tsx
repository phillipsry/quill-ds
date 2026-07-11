import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Dashboard as DashboardBlock } from '@registry/blocks/dashboard'

const meta = {
  title: 'Patterns / Shells / Dashboard',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Dashboard: Story = {
  render: () => <DashboardBlock />,
}
