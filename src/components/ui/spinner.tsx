import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Icon name="progress_activity" role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
