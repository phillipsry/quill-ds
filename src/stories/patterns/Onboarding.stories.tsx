import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Onboarding as OnboardingBlock } from '@registry/blocks/onboarding'

const meta = {
  title: 'Patterns / State / Onboarding checklist',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Onboarding: Story = {
  render: () => <OnboardingBlock />,
}
