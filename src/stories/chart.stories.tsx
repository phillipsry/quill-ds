'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts'

const chartData = [
  { month: 'Jan', lessons: 18 },
  { month: 'Feb', lessons: 24 },
  { month: 'Mar', lessons: 32 },
  { month: 'Apr', lessons: 28 },
  { month: 'May', lessons: 41 },
  { month: 'Jun', lessons: 38 },
]

const chartConfig = {
  lessons: { label: 'Lessons', color: 'var(--terracotta)' },
}

const meta = {
  title: 'UI / Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Design tokens
\`--terracotta\` · \`--moss\` · \`--indigo\` · \`--gold\` — mapped to \`--chart-1\` through \`--chart-4\`

### Rules
Chart colors use the Quill pigment palette. Pass a \`config\` object mapping data keys to labels and colors.
Always include \`ChartTooltip\` for accessibility.
        `,
      },
    },
  },
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const BarChartStory: Story = {
  name: 'Bar Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="lessons" fill="var(--color-lessons)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const LineChartStory: Story = {
  name: 'Line Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <LineChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line dataKey="lessons" stroke="var(--color-lessons)" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ChartContainer>
  ),
}
