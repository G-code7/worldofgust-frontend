'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function MobileMenu({ label, closeLabel, children }: { label: string; closeLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="rounded-[var(--radius-control)] border border-line px-3 py-1.5 text-sm font-semibold"
      >
        {open ? closeLabel : label}
      </button>
      <div
        id="mobile-nav"
        hidden={!open}
        // Any tap on a link inside the panel navigates; close the menu in the same gesture,
        // which avoids reacting to pathname changes with setState inside an effect.
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false)
        }}
        className="fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-6"
      >
        {children}
      </div>
    </div>
  )
}
