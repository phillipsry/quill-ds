import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Alerts as AlertsBlock } from '@registry/blocks/alerts'

const meta = {
  title: 'Patterns / State / Alerts',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Alerts: Story = {
  render: () => <AlertsBlock />,
}
