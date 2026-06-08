'use client'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FileIcon, SearchIcon, SettingsIcon } from 'lucide-react'

const meta = {
  title: 'UI / Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Command is a keyboard-first search palette. Embed inline for settings search or wrap in \`CommandDialog\` for ⌘K.
Items support icons, keyboard shortcut labels, and keyboard navigation out of the box.
        `,
      },
    },
  },
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Inline: Story = {
  render: () => (
    <Command className="rounded-lg border border-border w-72">
      <CommandInput placeholder="Search commands…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          <CommandItem><FileIcon />Open file<CommandShortcut>⌘O</CommandShortcut></CommandItem>
          <CommandItem><SearchIcon />Find in files<CommandShortcut>⇧⌘F</CommandShortcut></CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><SettingsIcon />Preferences<CommandShortcut>⌘,</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const AsDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open palette <kbd className="ml-2 text-xs bg-muted px-1 rounded">⌘K</kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}><FileIcon />New course</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><SearchIcon />Search lessons</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
