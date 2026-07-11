import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Testimonial as TestimonialBlock } from '@registry/blocks/testimonial'

const meta = {
  title: 'Patterns / Marketing / Testimonial',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const Testimonial: Story = {
  render: () => <TestimonialBlock />,
}
