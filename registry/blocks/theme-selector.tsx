'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'

export const quillThemes = [
  { value: 'light', label: 'Dawn', icon: 'light_mode' },
  { value: 'dark', label: 'Dusk', icon: 'dark_mode' },
  { value: 'classic-light', label: 'Classic Light', icon: 'radio_button_unchecked' },
  { value: 'classic-dark', label: 'Classic Dark', icon: 'disk' },
] as const

export type ThemeValue = (typeof quillThemes)[number]['value']

const isTheme = (v: unknown): v is ThemeValue =>
  quillThemes.some((t) => t.value === v)

// Filled disk for Classic Dark — the Quill icon set is outlined-only, so the
// filled Material Symbols `circle` ships inline (weight 500, to match the ring).
function DiskGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 -960 960 960" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M480.03-74.02q-83.46 0-157.54-31.88-74.07-31.88-129.39-87.2-55.32-55.32-87.2-129.36-31.88-74.04-31.88-157.51 0-84.46 31.88-158.54 31.88-74.07 87.16-128.9 55.28-54.84 129.34-86.82 74.06-31.99 157.55-31.99 84.48 0 158.59 31.97 74.1 31.97 128.91 86.77 54.82 54.8 86.79 128.88 31.98 74.08 31.98 158.6 0 83.5-31.99 157.57-31.98 74.07-86.82 129.36-54.83 55.29-128.87 87.17-74.04 31.88-158.51 31.88Z" />
    </svg>
  )
}

function ThemeGlyph({ icon, size = 16 }: { icon: (typeof quillThemes)[number]['icon']; size?: number }) {
  if (icon === 'disk') return <DiskGlyph size={size} />
  return <Icon name={icon} size={size} />
}

export function ThemeSelector({
  value,
  onValueChange,
  storageKey = 'quill-theme',
}: {
  /** Controlled theme. Omit to let the selector own `data-theme` on <html>. */
  value?: ThemeValue
  onValueChange?: (theme: ThemeValue) => void
  /** localStorage key used in uncontrolled mode. */
  storageKey?: string
}) {
  const [internal, setInternal] = useState<ThemeValue>('light')
  const controlled = value !== undefined
  const theme = controlled ? value : internal
  const active = quillThemes.find((t) => t.value === theme) ?? quillThemes[0]

  useEffect(() => {
    if (controlled) return
    // Read post-hydration: prerendered markup is always Dawn, so reading
    // storage during render would mismatch.
    let stored: string | null = null
    try {
      stored = localStorage.getItem(storageKey)
    } catch {}
    if (isTheme(stored)) {
      document.documentElement.setAttribute('data-theme', stored)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternal(stored)
    }
  }, [controlled, storageKey])

  function select(next: ThemeValue) {
    if (!controlled) {
      setInternal(next)
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem(storageKey, next)
      } catch {}
    }
    onValueChange?.(next)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm" aria-label={`Theme: ${active.label}`}>
            <ThemeGlyph icon={active.icon} />
            <span className="max-sm:hidden">{active.label}</span>
            <Icon name="keyboard_arrow_down" size={14} className="text-muted-foreground" />
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(next) => {
            if (isTheme(next)) select(next)
          }}
        >
          {quillThemes.map((t) => (
            <DropdownMenuRadioItem key={t.value} value={t.value}>
              <ThemeGlyph icon={t.icon} />
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
