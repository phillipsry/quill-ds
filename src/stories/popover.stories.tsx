import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'UI / Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--popover\` · \`--shadow-md\` · \`--radius-lg\`

### Rules
Popover opens on click (not hover — use HoverCard for hover).
Use for inline forms, filters, and contextual editing. Max width 288px. Close button optional if click-outside closes.
        `,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controlled open state' },
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <PopoverHeader>
            <PopoverTitle className="font-heading">Quick settings</PopoverTitle>
          </PopoverHeader>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="pop-name">Display name</Label>
            <Input id="pop-name" placeholder="Your name" />
          </div>
          <Button size="sm" className="w-full">Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Rename workspace</Button>} />
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <PopoverHeader>
            <PopoverTitle className="font-heading">Rename workspace</PopoverTitle>
            <PopoverDescription>This name is visible to all members.</PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="pop-workspace">Workspace name</Label>
            <Input id="pop-workspace" placeholder="e.g. Design team" />
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">Save</Button>
            <Button size="sm" variant="ghost" className="flex-1">Cancel</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const AllSides: Story = {
  parameters: { layout: 'centered' },
  render: () => (
    <div className="grid grid-cols-2 gap-16 p-24">
      {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" className="w-32 capitalize">{side}</Button>} />
          <PopoverContent side={side}>
            <PopoverHeader>
              <PopoverTitle className="font-heading">Opens {side}</PopoverTitle>
              <PopoverDescription>Positioned to the {side} of the trigger.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
