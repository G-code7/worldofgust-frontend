'use client'

import { useSyncExternalStore } from 'react'
import { ClientLink as Link } from '@/components/ui/ClientLink'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const KEY = 'wog-consent'

// useSyncExternalStore is the correct primitive for "read a client-only value without a
// hydration mismatch": the server snapshot is always null (banner renders), and the client
// swaps to the stored decision after hydration. No setState inside an effect.
function subscribe() {
  return () => {}
}
function getSnapshot(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}
function getServerSnapshot(): 'granted' | 'denied' | null {
  return null
}

export function CookieBanner({ t }: { t: { text: string; accept: string; reject: string; more: string } }) {
  const decision = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function decide(value: 'granted' | 'denied') {
    try {
      localStorage.setItem(KEY, value)
    } catch {}
    window.gtag?.('consent', 'update', { analytics_storage: value })
    // Reloading is the simplest correct way to re-read the store and hide the banner;
    // it also lets the consent-mode update take effect for the whole page.
    window.location.reload()
  }

  // Re-apply a previously granted consent to gtag once, on the client.
  if (typeof window !== 'undefined' && decision === 'granted') {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  }

  if (decision) return null

  return (
    <div role="region" aria-label="Cookies" className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-5 md:bottom-5 md:max-w-sm">
      <div className="rounded-[var(--radius-card)] border border-line-strong bg-surface p-5 shadow-[0_18px_40px_-18px_rgb(0_0_0/0.5)]">
        <p className="t-small">
          {t.text}{' '}
          <Link href="/legal/cookies" className="underline underline-offset-2">
            {t.more}
          </Link>
        </p>
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={() => decide('granted')} className="rounded-[var(--radius-control)] bg-accent px-4 py-2 text-sm font-semibold text-on-accent">
            {t.accept}
          </button>
          <button type="button" onClick={() => decide('denied')} className="rounded-[var(--radius-control)] border border-line-strong px-4 py-2 text-sm font-semibold">
            {t.reject}
          </button>
        </div>
      </div>
    </div>
  )
}
