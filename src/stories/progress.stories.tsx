import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/ui/progress'

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

export const Default: Story = { args: { value: 60 } }
export const Empty: Story = { args: { value: 0 } }
export const Complete: Story = { args: { value: 100 } }

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      {[0, 25, 60, 80, 100].map((v) => (
        <div key={v} className="flex flex-col gap-1">
          <span className="text-xs text-ink-muted">{v}%</span>
          <Progress value={v} />
        </div>
      ))}
    </div>
  ),
}
