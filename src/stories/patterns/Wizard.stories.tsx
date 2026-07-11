import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Wizard as WizardBlock } from '@registry/blocks/wizard'

const meta = {
  title: 'Patterns / Forms / Wizard',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Wizard: Story = {
  render: () => <WizardBlock />,
}
