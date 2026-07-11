import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SplitPanel as SplitPanelBlock } from '@registry/blocks/login-split-panel'
import { Minimal as MinimalBlock } from '@registry/blocks/login-minimal'

const meta = {
  title: 'Patterns / Auth / Login variants',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

/** Official blocks: login with a brand side panel. */
export const SplitPanel: Story = {
  render: () => <SplitPanelBlock />,
}

/** Official blocks: bare, centered login — no card chrome. */
export const Minimal: Story = {
  parameters: { layout: 'centered' },
  render: () => <MinimalBlock />,
}
