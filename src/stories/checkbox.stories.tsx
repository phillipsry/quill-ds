'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI / Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--primary\` · \`--input\` · \`--ring\` · \`--radius-sm\`

### Rules
Always pair Checkbox with a \`Label\` using \`htmlFor\`/\`id\` or wrapping composition.
Checked state fills with \`--primary\` (ink). Focus ring is \`--ring\` (ink). Invalid state uses \`--destructive\`.
Use \`aria-invalid\` for validation errors, not a separate color prop.
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state (uncontrolled)',
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Already agreed</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled" {...args} />
      <Label htmlFor="disabled">Unavailable option</Label>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="invalid" aria-invalid="true" />
      <Label htmlFor="invalid">Required field</Label>
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {[
        { id: 'av1', label: 'Unchecked', checked: false, disabled: false },
        { id: 'av2', label: 'Checked', checked: true, disabled: false },
        { id: 'av3', label: 'Disabled unchecked', checked: false, disabled: true },
        { id: 'av4', label: 'Disabled checked', checked: true, disabled: true },
      ].map(({ id, label, checked, disabled }) => (
        <div key={id} className="flex items-center gap-2">
          <Checkbox id={id} defaultChecked={checked} disabled={disabled} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  ),
}
