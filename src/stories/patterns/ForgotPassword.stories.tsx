import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ForgotPassword as ForgotPasswordBlock } from '@registry/blocks/forgot-password'

const meta = {
  title: 'Patterns / Auth / Forgot password',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const ForgotPassword: Story = {
  render: () => <ForgotPasswordBlock />,
}
