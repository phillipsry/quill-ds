import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ListDetail as ListDetailBlock } from '@registry/blocks/list-detail'

const meta = {
  title: 'Patterns / Shells / List + detail',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const ListDetail: Story = {
  render: () => <ListDetailBlock />,
}
