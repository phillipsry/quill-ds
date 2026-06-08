import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'

const meta = {
  title: 'UI / Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Rules
Resizable panels let users drag to resize. \`ResizablePanelGroup\` sets the direction.
Each \`ResizablePanel\` takes a \`defaultSize\` (percentage). \`ResizableHandle\` renders the drag handle.
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Split direction',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-48 max-w-md rounded-lg border border-border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-ink-muted">Panel A</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-ink-muted">Panel B</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="h-64 max-w-sm rounded-lg border border-border">
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-ink-muted">Top panel</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-ink-muted">Bottom panel</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
