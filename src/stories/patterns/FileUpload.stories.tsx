import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FileUpload as FileUploadBlock } from '@registry/blocks/file-upload'

const meta = {
  title: 'Patterns / Forms / File upload',
  parameters: { layout: 'centered' },
} satisfies Meta
export default meta
type Story = StoryObj

export const FileUpload: Story = {
  render: () => <FileUploadBlock />,
}
