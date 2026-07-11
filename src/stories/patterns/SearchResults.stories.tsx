import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SearchResults as SearchResultsBlock } from '@registry/blocks/search-results'

const meta = {
  title: 'Patterns / Data / Search results',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const SearchResults: Story = {
  render: () => <SearchResultsBlock />,
}
