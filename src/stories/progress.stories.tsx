import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'

const meta = {
  title: 'UI / Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--primary\` · \`--muted\`

### Rules
Progress shows determinate completion. Pass \`value\` (0–100). For indeterminate loading, use \`Spinner\`.
Label the value for screen readers via \`aria-label\` or \`aria-valuenow\`.
Use \`ProgressLabel\` and \`ProgressValue\` to render a visible label and numeric readout above the track.
        `,
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Completion percentage', table: { defaultValue: { summary: '0' } } },
    className: { table: { disable: true } },
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 0 },
  render: () => (
    <Progress value={60} aria-label="File upload progress">
      <ProgressLabel>Uploading document.pdf</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const Empty: Story = {
  args: { value: 0 },
  render: () => (
    <Progress value={0} aria-label="Task progress">
      <ProgressLabel>Preparing…</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const Complete: Story = {
  args: { value: 0 },
  render: () => (
    <Progress value={100} aria-label="Task complete">
      <ProgressLabel>Upload complete</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const AllVariants: Story = {
  args: { value: 0 },
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      {[
        { value: 0, label: 'Queued' },
        { value: 25, label: 'Analyzing' },
        { value: 60, label: 'Uploading' },
        { value: 80, label: 'Processing' },
        { value: 100, label: 'Complete' },
      ].map(({ value, label }) => (
        <Progress key={value} value={value} aria-label={`${label} — ${value}%`}>
          <ProgressLabel>{label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  ),
}
