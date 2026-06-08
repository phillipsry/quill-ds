import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'UI / AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
AspectRatio constrains any child to a given ratio. Commonly used for images, video embeds, and thumbnail containers.
The \`ratio\` prop accepts a number (width/height), e.g. \`16/9\` = 1.77.
        `,
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'number',
      description: 'Width ÷ height (e.g. 16/9)',
      table: { defaultValue: { summary: '1' } },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const SixteenByNine: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <AspectRatio {...args} className="bg-paper-deep rounded-lg overflow-hidden">
      <div className="flex items-center justify-center h-full text-ink-muted text-sm">16 / 9</div>
    </AspectRatio>
  ),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => (
    <AspectRatio {...args} className="bg-paper-deep rounded-lg overflow-hidden">
      <div className="flex items-center justify-center h-full text-ink-muted text-sm">1 / 1</div>
    </AspectRatio>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-4 items-start">
      {([16 / 9, 4 / 3, 1, 3 / 4] as const).map((ratio, i) => (
        <div key={i} className="w-32">
          <AspectRatio ratio={ratio} className="bg-paper-deep rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full text-ink-muted text-xs">
              {ratio === 16 / 9 ? '16:9' : ratio === 4 / 3 ? '4:3' : ratio === 1 ? '1:1' : '3:4'}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
}
