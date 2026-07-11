import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EmptyState as EmptyStateBlock } from '@registry/blocks/empty-state'

const meta = {
  title: 'Patterns / State / Empty state',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const EmptyState: Story = {
  render: () => <EmptyStateBlock />,
}
