'use client'

import { useSyncExternalStore } from 'react'

type Theme = 'dark' | 'light' | 'daltonism'
const THEMES: Theme[] = ['dark', 'light', 'daltonism']

// Swatches show what each theme looks like: background + accent.
const SWATCH: Record<Theme, string> = {
  dark: 'bg-[#0e121a] ring-[#7aa2ff]',
  light: 'bg-[#f4f5f2] ring-[#2a52d6]',
  daltonism: 'bg-[#0e121a] ring-[#e69f00]',
}

// The active theme lives on <html data-theme>, written by the inline ThemeScript before paint.
// This component reads it as an external store, so there is no setState-in-effect and the
// server snapshot ('dark', the default) matches the pre-paint markup.
const listeners = new Set<() => void>()
function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}
function getSnapshot(): Theme {
  const t = document.documentElement.dataset.theme as Theme | undefined
  return t && THEMES.includes(t) ? t : 'dark'
}
function getServerSnapshot(): Theme {
  return 'dark'
}

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t
  try {
    localStorage.setItem('wog-theme', t)
  } catch {}
  listeners.forEach((cb) => cb())
}

export function ThemeSwitcher({ labels }: { labels: { label: string } & Record<Theme, string> }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <div role="group" aria-label={labels.label} className="flex items-center gap-1.5">
      {THEMES.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => applyTheme(t)}
          aria-pressed={theme === t}
          title={labels[t]}
          className="grid size-7 place-items-center rounded-full transition-colors hover:bg-raised aria-pressed:bg-raised"
        >
          <span className={`block size-3.5 rounded-full ring-2 ring-inset ${SWATCH[t]}`} />
          <span className="sr-only">{labels[t]}</span>
        </button>
      ))}
    </div>
  )
}
