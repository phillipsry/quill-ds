import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PageHeader as PageHeaderBlock } from '@registry/blocks/page-header'

const meta = {
  title: 'Patterns / Shells / Page header',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const PageHeader: Story = {
  render: () => <PageHeaderBlock />,
}
