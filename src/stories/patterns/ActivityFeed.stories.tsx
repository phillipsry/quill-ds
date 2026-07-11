import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ActivityFeed as ActivityFeedBlock } from '@registry/blocks/activity-feed'

const meta = {
  title: 'Patterns / Data / Activity feed',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const ActivityFeed: Story = {
  render: () => <ActivityFeedBlock />,
}
