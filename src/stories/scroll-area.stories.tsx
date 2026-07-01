import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const courses = ['Watercolor Basics', 'Calligraphy for Beginners', 'Lino Printing', 'Natural Dyeing', 'Pottery Fundamentals', 'Bookbinding', 'Screen Printing', 'Macramé', 'Weaving Basics', 'Leather Tooling']

const meta = {
  title: 'UI / ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
ScrollArea provides a styled custom scrollbar. Set explicit height/width to constrain the scrollable area.
For horizontal scroll add \`<ScrollBar orientation="horizontal" />\`.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-lg border border-border">
      <div className="p-3">
        <p className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-2">Courses</p>
        {courses.map((course, i) => (
          <div key={course}>
            <div className="py-2 text-sm text-ink-soft">{course}</div>
            {i < courses.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-lg border border-border">
      <div className="p-3">
        <p className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-2">Courses</p>
        {courses.map((course, i) => (
          <div key={course}>
            <div className="py-2 text-sm text-ink-soft">{course}</div>
            {i < courses.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-20 w-72 rounded-lg border border-border">
      <div className="flex gap-3 p-3 whitespace-nowrap">
        {courses.map((course) => (
          <div key={course} className="shrink-0 rounded-lg bg-paper-deep px-3 py-2 text-sm text-ink-soft">{course}</div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
