import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CalendarRange as CalendarRangeBlock } from '@registry/blocks/calendar-range'

const meta = {
  title: 'Patterns / Data / Calendar range',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const CalendarRange: Story = {
  render: () => <CalendarRangeBlock />,
}
