import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CookieConsent as CookieConsentBlock } from '@registry/blocks/cookie-consent'

const meta = {
  title: 'Patterns / State / Cookie consent',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const CookieConsent: Story = {
  render: () => <CookieConsentBlock />,
}
