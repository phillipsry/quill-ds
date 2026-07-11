import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Error404 as Error404Block } from '@registry/blocks/error-404'

const meta = {
  title: 'Patterns / State / Error 404',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Error404: Story = {
  render: () => <Error404Block />,
}
