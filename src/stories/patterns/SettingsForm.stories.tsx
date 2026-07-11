import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Settings as SettingsBlock } from '@registry/blocks/settings'

const meta = {
  title: 'Patterns / Forms / Settings',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Settings: Story = {
  render: () => <SettingsBlock />,
}
