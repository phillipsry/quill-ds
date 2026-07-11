import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AnnouncementBanner as AnnouncementBannerBlock } from '@registry/blocks/announcement-banner'

const meta = {
  title: 'Patterns / Marketing / Announcement banner',
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj

export const AnnouncementBanner: Story = {
  render: () => <AnnouncementBannerBlock />,
}
