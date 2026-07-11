import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignupSocial as SignupSocialBlock } from '@registry/blocks/signup-social'

const meta = {
  title: 'Patterns / Auth / Signup — social first',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const SignupSocial: Story = {
  render: () => <SignupSocialBlock />,
}
