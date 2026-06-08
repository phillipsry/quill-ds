import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'UI / Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--primary\` · \`--input\` · \`--ring\`

### Rules
\`defaultValue\` is an array — pass a single-element array for a single handle, two elements for a range.
Use \`step\` for discrete increments. \`min\` and \`max\` default to 0 and 100.
        `,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean', description: 'Disable the slider', table: { defaultValue: { summary: 'false' } } },
    min: { control: { type: 'number' }, description: 'Minimum value', table: { defaultValue: { summary: '0' } } },
    max: { control: { type: 'number' }, description: 'Maximum value', table: { defaultValue: { summary: '100' } } },
    step: { control: { type: 'number' }, description: 'Step increment', table: { defaultValue: { summary: '1' } } },
    className: { table: { disable: true } },
  },
  decorators: [(Story) => <div className="w-72 px-2"><Story /></div>],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: [50] },
}

export const Range: Story = {
  render: () => <Slider defaultValue={[20, 80]} />,
}

export const Disabled: Story = {
  args: { defaultValue: [40], disabled: true },
}

export const Steps: Story = {
  render: () => <Slider defaultValue={[3]} min={1} max={10} step={1} />,
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 w-72 px-2">
      <div>
        <p className="text-xs text-ink-muted mb-3">Default</p>
        <Slider defaultValue={[50]} />
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-3">Range</p>
        <Slider defaultValue={[25, 75]} />
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-3">Steps (1–10)</p>
        <Slider defaultValue={[5]} min={1} max={10} step={1} />
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-3">Disabled</p>
        <Slider defaultValue={[60]} disabled />
      </div>
    </div>
  ),
}
