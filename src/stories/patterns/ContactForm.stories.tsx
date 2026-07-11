import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactForm as ContactFormBlock } from '@registry/blocks/contact-form'

const meta = {
  title: 'Patterns / Forms / Contact form',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const ContactForm: Story = {
  render: () => <ContactFormBlock />,
}
