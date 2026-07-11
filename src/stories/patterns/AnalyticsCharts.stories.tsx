import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AnalyticsCharts as AnalyticsChartsBlock } from '@registry/blocks/analytics-charts'

const meta = {
  title: 'Patterns / Data / Analytics charts',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const AnalyticsCharts: Story = {
  render: () => <AnalyticsChartsBlock />,
}
