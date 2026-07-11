import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { OtpVerification as OtpVerificationBlock } from '@registry/blocks/otp-verification'

const meta = {
  title: 'Patterns / Auth / OTP verification',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const OtpVerification: Story = {
  render: () => <OtpVerificationBlock />,
}
