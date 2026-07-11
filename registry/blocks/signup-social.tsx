import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Icon } from '@/components/ui/icon'

export function SignupSocial() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle>Create your account</CardTitle>
        <CardDescription>Start with a provider, or use your email.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full">
            <Icon name="code" size={16} /> Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full">
            <Icon name="public" size={16} /> Continue with Google
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or with email</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="social-email">Email</Label>
          <Input id="social-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="social-password">Password</Label>
          <Input id="social-password" type="password" placeholder="At least 12 characters" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Create account</Button>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By continuing you agree to the studio terms and privacy note.
        </p>
      </CardFooter>
    </Card>
  )
}
