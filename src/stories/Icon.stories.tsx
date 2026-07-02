import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import { Icon } from '@/components/ui/icon'
import { icons } from '@/components/ui/icons.generated.mjs'

const meta = { title: 'UI / Icon', component: Icon, tags: ['autodocs'] } satisfies Meta<typeof Icon>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { name: 'check', size: 24 } }

export const Gallery: Story = {
  args: { name: 'add' },
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-8 gap-4 text-ink">
      {Object.keys(icons).map((n) => (
        <div key={n} className="flex flex-col items-center gap-1 text-center">
          <Icon name={n as keyof typeof icons} size={24} />
          <span className="text-[10px] text-ink-muted">{n}</span>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const svgs = canvasElement.querySelectorAll('svg[data-slot="icon"]')
    expect(svgs.length).toBeGreaterThan(30)
  },
}
