import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Kanban as KanbanBlock } from '@registry/blocks/kanban'

const meta = {
  title: 'Patterns / Data / Kanban board',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Kanban: Story = {
  render: () => <KanbanBlock />,
}
