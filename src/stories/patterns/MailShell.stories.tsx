import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MailShell as MailShellBlock } from '@registry/blocks/mail-shell'

const meta = {
  title: 'Patterns / Shells / Mail inbox',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const MailShell: Story = {
  render: () => <MailShellBlock />,
}
