import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Skeleton } from '@/components/ui/skeleton'

const meta = {
  title: 'UI / Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--muted\`

### Rules
Skeleton is an animate-pulse loading placeholder. Match its dimensions to the content it replaces.
Compose multiple Skeletons to mimic the real layout — text rows, avatar circles, card shapes.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-full" />,
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 rounded-lg border border-border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/6" />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-ink-muted mb-2">Text lines</p>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-2">Avatar + name</p>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-2">Button</p>
        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-2">Image / card</p>
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    </div>
  ),
}
