'use client'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

const navItems = [
  { label: 'Dashboard', icon: '⬛' },
  { label: 'Courses', icon: '📚' },
  { label: 'Workshops', icon: '🎨' },
  { label: 'Community', icon: '👥' },
]

const meta = {
  title: 'UI / Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### Design tokens
\`--sidebar\` · \`--sidebar-foreground\` · \`--sidebar-border\`

### Rules
Always wrap in \`SidebarProvider\`. Use \`SidebarTrigger\` to toggle collapse.
\`SidebarGroup\` + \`SidebarGroupLabel\` + \`SidebarGroupContent\` creates a labelled section.
\`SidebarMenuButton\` accepts \`isActive\` for the current page.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full">
        <Sidebar>
          <SidebarHeader className="px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-[#C4684B] flex items-center justify-center">
                <span className="text-xs font-bold text-white">Q</span>
              </div>
              <span className="font-semibold text-sm text-ink">Quill</span>
            </div>
          </SidebarHeader>
          <Separator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item, i) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={i === 0}>
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {['Account', 'Billing', 'Help'].map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton>{item}</SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <Separator />
          <SidebarFooter className="px-4 py-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-xs">RP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-ink">Ryan Phillips</span>
                <span className="text-xs text-ink-muted">Free plan</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col flex-1">
          <header className="flex h-12 items-center border-b border-border px-4 gap-2">
            <SidebarTrigger />
            <span className="text-sm font-medium text-ink">Dashboard</span>
          </header>
          <main className="flex-1 p-6">
            <p className="text-sm text-ink-muted">Main content area</p>
          </main>
        </div>
      </div>
    </SidebarProvider>
  ),
}
