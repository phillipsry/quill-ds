import type { Meta, StoryObj } from '@storybook/react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const meta = {
  title: 'UI / Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Pagination renders page navigation. \`PaginationLink\` accepts an \`isActive\` prop to highlight the current page.
Use \`PaginationEllipsis\` when skipping page ranges. Include \`PaginationPrevious\` and \`PaginationNext\` always.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

/** Current page is near the start — ellipsis appears only at the end. */
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

/** On the first page — Previous is still rendered but navigates to the beginning. */
export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

/** On the last page — Next is still rendered but navigates to the end. */
export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">11</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>12</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

/** Current page is in the middle — ellipsis appears on both sides. */
export const ManyPages: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">5</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>6</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">7</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
