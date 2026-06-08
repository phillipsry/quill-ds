import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI / Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--background\` · \`--border\` · \`--radius-lg\`

### Rules
Sheet slides in from an edge. Use \`side\` on \`SheetContent\` to pick \`right\` (settings/detail), \`left\` (navigation), or \`bottom\` (mobile actions).
Always include \`SheetTitle\` for accessibility. Use \`SheetClose\` for cancel/dismiss actions.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Account Settings</SheetTitle>
          <SheetDescription>Update your profile details below.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Display name</Label>
            <Input id="name" defaultValue="Ryan Phillips" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="ryan@example.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Navigation</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse course categories.</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 py-4">
          {['Dashboard', 'Courses', 'Workshops', 'Community', 'Settings'].map((item) => (
            <SheetClose key={item} asChild>
              <button className="rounded-md px-3 py-2 text-sm text-left text-ink-soft hover:bg-paper-deep hover:text-ink transition-colors">
                {item}
              </button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

export const BottomSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Share Course</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Share</SheetTitle>
          <SheetDescription>Choose how to share this course.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          {['Copy link', 'Share to email', 'Share to social'].map((action) => (
            <SheetClose key={action} asChild>
              <Button variant="outline" className="justify-start">{action}</Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
}
