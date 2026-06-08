import type { Meta, StoryObj } from '@storybook/react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI / AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Design tokens
\`--card\` · \`--ink\` · \`--destructive\` · \`--shadow-lg\` · \`--radius-xl\`

### Rules
AlertDialog is for **destructive confirmation only** — deleting, overwriting, irreversible actions.
For informational modals use Dialog. The action button should state the consequence ("Delete course", not "Confirm").
        `,
      },
    },
  },
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete course</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this course?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. All lessons, enrollments, and progress data will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete course</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
