import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'

const meta = {
  title: 'UI / ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
ContextMenu opens on right-click. Wrap the target element in \`ContextMenuTrigger\`.
Keep menus short — group related actions, separate with \`ContextMenuSeparator\`. Max ~8 items.
        `,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed border-border text-sm text-ink-muted">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open<ContextMenuShortcut>⌘O</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Copy link</ContextMenuItem>
            <ContextMenuItem>Send via email</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
