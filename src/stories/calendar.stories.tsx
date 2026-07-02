'use client'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

const meta = {
  title: 'Components / Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--paper-warm\` · \`--primary\` · \`--accent\` · \`--radius-lg\`

### Rules
Calendar uses react-day-picker v9. Selected day fills with \`--primary\` (ink).
Today is indicated with a terracotta dot. For date range selection pass \`mode="range"\`.
        `,
      },
    },
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode',
      table: { defaultValue: { summary: 'single' } },
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  },
}

export const Range: Story = {
  render: () => {
    const today = new Date()
    const inFiveDays = new Date(today)
    inFiveDays.setDate(today.getDate() + 5)
    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: inFiveDays,
    })
    return <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
  },
}

export const Multiple: Story = {
  render: () => {
    const today = new Date()
    const in2Days = new Date(today)
    in2Days.setDate(today.getDate() + 2)
    const in5Days = new Date(today)
    in5Days.setDate(today.getDate() + 5)
    const [dates, setDates] = useState<Date[] | undefined>([today, in2Days, in5Days])
    return <Calendar mode="multiple" selected={dates} onSelect={setDates} />
  },
}

export const WithDropdownCaption: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2030, 11)}
      />
    )
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    const today = new Date()
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ before: today }}
      />
    )
  },
}
