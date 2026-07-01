'use client'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
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

const multiSeriesData = [
  { month: 'Jan', lessons: 18, completions: 12 },
  { month: 'Feb', lessons: 24, completions: 19 },
  { month: 'Mar', lessons: 32, completions: 25 },
  { month: 'Apr', lessons: 28, completions: 21 },
  { month: 'May', lessons: 41, completions: 34 },
  { month: 'Jun', lessons: 38, completions: 30 },
]

const multiSeriesConfig = {
  lessons: { label: 'Lessons', color: 'var(--terracotta)' },
  completions: { label: 'Completions', color: 'var(--moss)' },
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
} as Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const WithLegend: Story = {
  name: 'Multi-Series with Legend',
  render: () => (
    <ChartContainer config={multiSeriesConfig} className="h-64 w-full">
      <BarChart data={multiSeriesData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="lessons" fill="var(--color-lessons)" radius={4} />
        <Bar dataKey="completions" fill="var(--color-completions)" radius={4} />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  ),
}
