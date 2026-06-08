'use client'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxInput,
} from '@/components/ui/combobox'
import { Button } from '@/components/ui/button'

const frameworks = ['Next.js', 'Remix', 'Astro', 'SvelteKit', 'Nuxt', 'TanStack Start']

const meta = {
  title: 'UI / Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Combobox combines a text input with a dropdown list, supporting search-to-filter.
Use when the option list is long (>10 items) and users benefit from typing to narrow results.
For shorter lists, prefer \`Select\`.
        `,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean', description: 'Disable the combobox', table: { defaultValue: { summary: 'false' } } },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxTrigger
        render={
          <Button variant="outline" className="w-52 justify-between">
            <ComboboxValue placeholder="Select framework…" />
          </Button>
        }
      />
      <ComboboxContent>
        <ComboboxInput placeholder="Search…" />
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>{fw}</ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
