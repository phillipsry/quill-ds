import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI / Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--card\` · \`--shadow-lg\` · \`--radius-xl\`

### Rules
Dialog is for non-destructive modals: forms, details, confirmation of reversible actions.
For destructive confirmation (delete, overwrite) use \`AlertDialog\` instead.
Pass \`showCloseButton={false}\` to \`DialogContent\` only if the close action is available via a footer button.
        `,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controlled open state' },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Edit profile</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Update your display name and bio. Click save when done.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Ryan Phillips" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Tell us about yourself…" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" className="w-full sm:w-auto" />}>Cancel</DialogClose>
          <Button className="w-full sm:w-auto">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithFooterClose: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Change plan</Button>} />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Change your plan</DialogTitle>
          <DialogDescription>
            Review your new plan details below. You can switch plans at any time from your billing settings.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="plan-name">Plan name</Label>
            <Input id="plan-name" defaultValue="Quill Pro" readOnly />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="billing-cycle">Billing cycle</Label>
            <Input id="billing-cycle" defaultValue="Annual — $99 / year" readOnly />
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button className="w-full sm:w-auto">Confirm change</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
