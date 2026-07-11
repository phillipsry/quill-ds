import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TeamSection as TeamSectionBlock } from '@registry/blocks/team-section'

const meta = {
  title: 'Patterns / Marketing / Team section',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const TeamSection: Story = {
  render: () => <TeamSectionBlock />,
}
