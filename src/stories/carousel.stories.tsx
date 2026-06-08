'use client'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const meta = {
  title: 'UI / Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Rules
Carousel wraps the Embla Carousel engine. \`CarouselItem\` accepts a \`basis\` class to control item width.
Prev/Next buttons position outside the carousel track by default.
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Scroll direction',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    className: { table: { disable: true } },
  },
  decorators: [
    (Story) => <div className="w-80 px-16"><Story /></div>,
  ],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold text-ink">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const MultipleItems: Story = {
  render: () => (
    <Carousel opts={{ align: 'start' }} className="w-full">
      <CarouselContent className="-ml-2">
        {Array.from({ length: 6 }, (_, i) => (
          <CarouselItem key={i} className="pl-2 basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-3">
                <span className="text-xl font-semibold text-ink">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-full max-w-xs">
      <CarouselContent className="h-64">
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-4xl font-semibold text-ink">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  decorators: [
    (Story) => <div className="w-80 px-16 pt-16 pb-16"><Story /></div>,
  ],
}
