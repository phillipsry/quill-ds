import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI / Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Spinner is an indeterminate loading indicator. It inherits its color from \`currentColor\` so it adapts to any text color context.
Use \`className\` to control size (\`size-4\`, \`size-6\`, \`size-8\`) and color (\`text-primary\`, \`text-ink-muted\`).
For determinate progress use \`Progress\` instead.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-ink-soft">
      <Spinner className="size-4" />
      <span>Saving changes…</span>
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div>
        <p className="text-xs text-ink-muted mb-3">Sizes</p>
        <div className="flex items-center gap-4">
          <Spinner className="size-3" />
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-3">Colors</p>
        <div className="flex items-center gap-4">
          <Spinner className="text-ink" />
          <Spinner className="text-ink-muted" />
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
        </div>
      </div>
      <div>
        <p className="text-xs text-ink-muted mb-3">In context</p>
        <div className="flex items-center gap-2 text-sm text-ink-soft">
          <Spinner className="size-4" />
          <span>Saving changes…</span>
        </div>
      </div>
    </div>
  ),
}
