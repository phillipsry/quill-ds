import * as React from 'react'
import { cn } from '@/lib/utils'
import { icons } from './icons.generated.mjs'
import type { IconName } from './icons.generated.mjs'

// NOTE (bundle): this imports the full generated icon map (~1000 Material Symbols,
// ~720KB source). A by-name <Icon> API needs the whole map, so it is NOT tree-shakeable
// — any app rendering one <Icon> pulls all icon paths. This is a deliberate tradeoff:
// the design system ships a broad, comprehensive icon set by default. If a consumer is
// bundle-sensitive, the map can later be split into per-icon modules (dynamic import by
// name) or trimmed via the manifest (scripts/icons.manifest.mjs) + `npm run build:icons`.

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
