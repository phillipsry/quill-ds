import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeatureSection as FeatureSectionBlock } from '@registry/blocks/feature-section'

const meta = {
  title: 'Patterns / Marketing / Feature section',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const FeatureSection: Story = {
  render: () => <FeatureSectionBlock />,
}
