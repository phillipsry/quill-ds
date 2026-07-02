import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const meta = { title: 'Patterns / Data / Badge on card', parameters: { layout: 'centered' } } satisfies Meta
export default meta
type Story = StoryObj

// Regression guard: destructive Badge on a card surface must pass AA contrast (was 4.45:1).
export const BadgeOnCard: Story = {
  render: () => (
    <Card className="w-[280px]">
      <CardContent className="flex gap-2 pt-6">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </CardContent>
    </Card>
  ),
}
