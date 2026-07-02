import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'

const meta = {
  title: 'Patterns / Marketing / Hero',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Hero: Story = {
  render: () => (
    <section className="flex w-full flex-col items-center gap-6 bg-background px-6 py-20 text-center text-foreground">
      <Badge variant="secondary">New — v2.0 is here</Badge>
      <h1 className="max-w-2xl font-[family-name:var(--font-fraunces,Georgia,serif)] text-5xl leading-[1.05]">
        The calm design system for building things by hand
      </h1>
      <p className="max-w-xl text-base text-muted-foreground">
        Accessible, themeable components and a single-source token foundation that flows to code
        and Figma alike.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg">
          Get started <Icon name="arrow_forward" size={18} />
        </Button>
        <Button size="lg" variant="outline">
          <Icon name="menu_book" size={18} /> Read the docs
        </Button>
      </div>
    </section>
  ),
}
