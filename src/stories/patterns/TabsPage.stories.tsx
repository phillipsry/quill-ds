import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TabsPage as TabsPageBlock } from '@registry/blocks/tabs-page'

const meta = {
  title: 'Patterns / Shells / Tabs page',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const TabsPage: Story = {
  render: () => <TabsPageBlock />,
}
