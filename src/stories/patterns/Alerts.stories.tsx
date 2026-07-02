import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Icon } from '@/components/ui/icon'

const meta = {
  title: 'Patterns / State / Alerts',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Alerts: Story = {
  render: () => (
    <div className="flex max-w-lg flex-col gap-4">
      <Alert>
        <Icon name="info" size={18} />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Your trial ends in 3 days — upgrade to keep your projects.</AlertDescription>
      </Alert>
      <Alert>
        <Icon name="check_circle" size={18} />
        <AlertTitle>Changes saved</AlertTitle>
        <AlertDescription>Your profile has been updated successfully.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <Icon name="warning" size={18} />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>We couldn’t process your card. Update your billing details.</AlertDescription>
      </Alert>
    </div>
  ),
}
