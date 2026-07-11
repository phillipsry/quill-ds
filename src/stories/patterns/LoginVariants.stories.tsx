import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Icon } from '@/components/ui/icon'

const meta = {
  title: 'Patterns / Auth / Login variants',
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj

/** Official blocks: login with a brand side panel. */
export const SplitPanel: Story = {
  render: () => (
    <div className="grid h-[560px] w-full grid-cols-2 bg-background max-md:grid-cols-1">
      <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground max-md:hidden">
        <span className="font-heading text-lg">Quill</span>
        <blockquote className="flex flex-col gap-3">
          <p className="font-heading text-xl leading-snug">
            &ldquo;The most crafted-feeling system we&rsquo;ve ever shipped on. It reads like a
            notebook, not a dashboard.&rdquo;
          </p>
          <footer className="text-sm opacity-80">Sofia Almeida — Head of Product, SkillDecks</footer>
        </blockquote>
      </div>
      <div className="flex items-center justify-center p-8">
        <form className="flex w-full max-w-[340px] flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-heading text-xl text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your studio account.</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="split-email">Email</Label>
            <Input id="split-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="split-password">Password</Label>
              <Button variant="link" size="xs" className="h-auto p-0">
                Forgot?
              </Button>
            </div>
            <Input id="split-password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign in</Button>
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <Button variant="outline" className="w-full">
            <Icon name="mail" size={16} /> Continue with a magic link
          </Button>
        </form>
      </div>
    </div>
  ),
}

/** Official blocks: bare, centered login — no card chrome. */
export const Minimal: Story = {
  parameters: { layout: 'centered' },
  render: () => (
    <form className="flex w-[320px] flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground">
          Q
        </span>
        <h1 className="font-heading text-lg text-foreground">Sign in to Quill</h1>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="min-email">Email</Label>
        <Input id="min-email" type="email" placeholder="you@example.com" />
      </div>
      <Button className="w-full">
        Continue <Icon name="arrow_forward" size={14} />
      </Button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        We&rsquo;ll email you a one-time code. No password needed.
      </p>
    </form>
  ),
}
