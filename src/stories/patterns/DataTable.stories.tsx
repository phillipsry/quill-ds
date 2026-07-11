import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DataTable as DataTableBlock } from '@registry/blocks/data-table'

const meta = {
  title: 'Patterns / Data / Data table',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const DataTable: Story = {
  render: () => <DataTableBlock />,
}
