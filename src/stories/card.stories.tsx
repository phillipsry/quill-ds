import type { Meta, StoryObj } from '@storybook/react'
import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, CardAction,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'UI / Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--card\` (paper-warm) · \`--line-soft\` · \`--shadow-sm\` · \`--radius-xl\`

### Rules
Cards use \`paper-warm\` background with a 1px ring instead of a border, giving them lift without a box-shadow.
\`size="sm"\` reduces padding — use for compact lists. \`CardAction\` is placed in \`CardHeader\` for top-right actions.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Padding density',
      table: { defaultValue: { summary: 'default' } },
    },
    className: { table: { disable: true } },
  },
  decorators: [
    (Story) => <div className="w-80"><Story /></div>,
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'default' },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Watercolor Basics</CardTitle>
        <CardDescription>Learn to mix, layer, and blend watercolor paints.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-ink-soft">12 lessons · 3h 20m · Beginner</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start course</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Progress</CardTitle>
        <CardDescription>Your completion this week</CardDescription>
        <CardAction><Badge variant="secondary">+12%</Badge></CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-ink">68%</p>
      </CardContent>
    </Card>
  ),
}

export const Compact: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Quick note</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-ink-soft">Compact card for dense list views.</p>
      </CardContent>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card>
      <img
        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=320&h=160&fit=crop"
        alt="Watercolor paints on a palette"
        className="w-full object-cover"
        style={{ height: '160px' }}
      />
      <CardHeader>
        <CardTitle>Watercolor Techniques</CardTitle>
        <CardDescription>Wet-on-wet, glazing, and dry brush methods.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-ink-soft">8 lessons · 2h 10m · Intermediate</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Explore course</Button>
      </CardFooter>
    </Card>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  decorators: [],
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card>
        <CardHeader>
          <CardTitle>Default card</CardTitle>
          <CardDescription>Standard padding, paper-warm background</CardDescription>
        </CardHeader>
        <CardContent><p className="text-sm text-ink-soft">Body content goes here.</p></CardContent>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Compact card</CardTitle>
        </CardHeader>
        <CardContent><p className="text-sm text-ink-soft">Reduced padding density.</p></CardContent>
      </Card>
    </div>
  ),
}

export const Dark: Story = {
  parameters: { globals: { theme: 'dark' } },
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Dark card</CardTitle>
        <CardDescription>Tokens adapt to dark context automatically.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-ink-soft">Card body content in dark mode.</p>
      </CardContent>
    </Card>
  ),
}
