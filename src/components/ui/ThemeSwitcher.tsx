'use client'

import { useTheme, type Theme } from '@/context/ThemeContext'

const themes: { id: Theme; label: string; icon: string; description: string }[] = [
  { id: 'dark',       label: 'Dark',        icon: '◐', description: 'Dark theme' },
  { id: 'light',      label: 'Light',       icon: '○', description: 'Light theme' },
  { id: 'daltonism',  label: 'Accessible',  icon: '◈', description: 'Colorblind-friendly' },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.description}
          aria-label={`Switch to ${t.label} theme`}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            border: theme === t.id
              ? '1px solid var(--accent)'
              : '1px solid var(--border)',
            background: theme === t.id
              ? 'var(--accent)'
              : 'transparent',
            color: theme === t.id ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
          }}
        >
          {t.icon}
        </button>
      ))}
    </div>
  )
}
