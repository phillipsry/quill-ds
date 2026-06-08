import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'UI / NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Rules
NavigationMenu is for top-level site navigation with mega-dropdown panels.
Use \`NavigationMenuTrigger\` + \`NavigationMenuContent\` for dropdowns; use a plain \`NavigationMenuLink\` for direct links.
Apply \`navigationMenuTriggerStyle()\` to plain \`NavigationMenuLink\` items so they match the visual weight of trigger buttons.
        `,
      },
    },
  },
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-96">
              <NavigationMenuLink href="#" className="flex flex-col rounded-lg p-3 hover:bg-muted">
                <div className="font-heading text-sm font-medium text-ink mb-1">Browse all</div>
                <div className="text-xs text-ink-muted">Explore every skill deck</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="flex flex-col rounded-lg p-3 hover:bg-muted">
                <div className="font-heading text-sm font-medium text-ink mb-1">New releases</div>
                <div className="text-xs text-ink-muted">Recently published courses</div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Community
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const WithDirectLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
