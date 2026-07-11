import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Signup as SignupBlock } from '@registry/blocks/signup'

const meta = {
  title: 'Patterns / Auth / Sign up',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Signup: Story = {
  render: () => <SignupBlock />,
}
