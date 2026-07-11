import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CommandPalette as CommandPaletteBlock } from '@registry/blocks/command-palette'

const meta = {
  title: 'Patterns / Nav / Command palette',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const CommandPalette: Story = {
  render: () => <CommandPaletteBlock />,
}
