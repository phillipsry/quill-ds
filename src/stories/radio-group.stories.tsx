import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI / RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--primary\` · \`--input\` · \`--ring\`

### Rules
Always pair \`RadioGroupItem\` with a \`Label\`. Set \`defaultValue\` for uncontrolled, \`value\` + \`onValueChange\` for controlled.
One selection per group — for multi-select use Checkboxes.
        `,
      },
    },
  },
  argTypes: {
    defaultValue: { control: 'text', description: 'Default selected value' },
    disabled: { control: 'boolean', description: 'Disable all items' },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: 'beginner' },
  render: (args) => (
    <RadioGroup {...args}>
      {[
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`radio-${value}`} />
          <Label htmlFor={`radio-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: { defaultValue: 'beginner', disabled: true },
  render: (args) => (
    <RadioGroup {...args}>
      {[
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`radio-d-${value}`} />
          <Label htmlFor={`radio-d-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
