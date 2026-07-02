import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Icon role="status" aria-label="Loading" {...props} name="progress_activity" className={cn("size-4 animate-spin", className)} />
  )
}

export { Spinner }
