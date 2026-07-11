import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function BadgeOnCard() {
  return (
    <Card className="w-[280px]">
      <CardContent className="flex gap-2 pt-6">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </CardContent>
    </Card>
  )
}
