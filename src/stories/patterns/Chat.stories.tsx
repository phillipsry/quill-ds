import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Chat as ChatBlock } from '@registry/blocks/chat'

const meta = {
  title: 'Patterns / Data / Chat',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Chat: Story = {
  render: () => <ChatBlock />,
}
