import * as React from 'react'
import { cn } from '@/lib/utils'
import { icons } from './icons.generated.mjs'
import type { IconName } from './icons.generated.mjs'

function Icon({
  name,
  size = '1em',
  className,
  'aria-label': ariaLabel,
  ...props
}: React.SVGProps<SVGSVGElement> & { name: IconName; size?: number | string }) {
  const icon = icons[name]
  if (!icon) throw new Error(`Unknown icon: ${String(name)}`)
  return (
    <svg
      data-slot="icon"
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentColor"
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn('inline-block shrink-0', className)}
      {...props}
    >
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

export { Icon, type IconName }
