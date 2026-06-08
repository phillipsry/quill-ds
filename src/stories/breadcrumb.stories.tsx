import type { Meta, StoryObj } from '@storybook/react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

const meta = {
  title: 'UI / Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--ink-muted\` · \`--ink\` · \`--line-soft\`

### Rules
The last item is always \`BreadcrumbPage\` (non-link, current). Previous items use \`BreadcrumbLink\`.
Use \`BreadcrumbEllipsis\` when path exceeds 4 items deep.
Use \`BreadcrumbSeparator\` children to override the default chevron with a custom separator character.
\`BreadcrumbLink\` accepts a \`render\` prop (Base UI \`useRender\`) for router-aware link components.
        `,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="/courses">Courses</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Watercolor Basics</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="/courses/art">Art</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Watercolor Basics</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithCustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem><BreadcrumbLink href="/courses">Courses</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem><BreadcrumbPage>Watercolor Basics</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}

export const WithRenderProp: Story = {
  name: 'With render prop (router link)',
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {/* Pass render to swap the <a> for any router Link component */}
          <BreadcrumbLink
            href="/"
            render={<span style={{ cursor: 'pointer' }} />}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/courses"
            render={<span style={{ cursor: 'pointer' }} />}
          >
            Courses
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Watercolor Basics</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
