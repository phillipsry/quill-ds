import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI / Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Drawer uses Vaul and slides up from the bottom on mobile. On desktop it behaves like a bottom sheet.
Use for mobile-first interactions: filters, quick actions, secondary navigation.
        `,
      },
    },
  },
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter courses</DrawerTitle>
          <DrawerDescription>Narrow results by category, level, and duration.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2">
          <p className="text-sm text-ink-soft">Filter controls go here.</p>
        </div>
        <DrawerFooter>
          <Button>Apply filters</Button>
          <DrawerClose asChild><Button variant="outline">Reset</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
