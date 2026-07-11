import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Notifications as NotificationsBlock } from '@registry/blocks/notifications'

const meta = {
  title: 'Patterns / Data / Notifications',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Notifications: Story = {
  render: () => <NotificationsBlock />,
}
