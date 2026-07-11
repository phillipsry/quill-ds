import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Login as LoginBlock } from '@registry/blocks/login'

const meta = {
  title: 'Patterns / Auth / Login',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Login: Story = {
  render: () => <LoginBlock />,
}
