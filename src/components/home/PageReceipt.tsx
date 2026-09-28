'use client'

import { useEffect, useState } from 'react'

type Numbers = { loaded: number; kb: number; requests: number; lcp: number | null; fcp: number | null }

/**
 * Real measurements of the current visit from the Performance API.
 * The site as proof of the standard we sell (the Locomotive lesson).
 */
function measure(lcp: number | null): Numbers | null {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
  if (!nav || !nav.loadEventEnd) return null
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  const size = (e: PerformanceResourceTiming) => e.transferSize || e.encodedBodySize || 0
  const total = size(nav) + resources.reduce((s, r) => s + size(r), 0)
  return {
    loaded: Math.round(nav.loadEventEnd),
    kb: Math.round(total / 1024),
    requests: resources.length + 1,
    lcp: lcp === null ? null : Math.round(lcp),
    // Safari has no LCP API; First Contentful Paint is the honest fallback.
    fcp: (() => {
      const e = performance.getEntriesByName('first-contentful-paint')[0]
      return e ? Math.round(e.startTime) : null
    })(),
  }
}

export function PageReceipt({
  t,
}: {
  t: { title: string; lcp: string; fcp: string; loaded: string; transferred: string; requests: string; note: string; pending: string }
}) {
  const [n, setN] = useState<Numbers | null>(null)

  useEffect(() => {
    // Largest Contentful Paint: the Core Web Vital a visitor actually feels.
    let lcp: number | null = null
    let po: PerformanceObserver | undefined
    try {
      po = new PerformanceObserver((list) => {
        const last = list.getEntries().at(-1)
        if (last) lcp = last.startTime
      })
      po.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch {}
    const run = () => setTimeout(() => setN(measure(lcp)), 0)
    if (document.readyState === 'complete') run()
    else window.addEventListener('load', run, { once: true })
    return () => {
      window.removeEventListener('load', run)
      po?.disconnect()
    }
  }, [])

  const rows: [string, string | null][] = [
    n && n.lcp === null
      ? [t.fcp, n.fcp === null ? '-' : `${n.fcp.toLocaleString()} ms`]
      : [t.lcp, n?.lcp != null ? `${n.lcp.toLocaleString()} ms` : null],
    [t.loaded, n ? `${n.loaded.toLocaleString()} ms` : null],
    [t.transferred, n ? `${n.kb} KB` : null],
    [t.requests, n ? String(n.requests) : null],
  ]

  return (
    <figure className="rounded-[var(--radius-card)] border border-line bg-surface p-5 md:p-6" aria-live="polite">
      <figcaption className="t-small font-semibold">{t.title}</figcaption>
      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="t-small text-muted">{label}</dt>
            <dd className="tabular mt-0.5 text-2xl font-semibold tracking-tight">
              {value ?? <span className="text-muted">{t.pending}</span>}
            </dd>
          </div>
        ))}
      </dl>
      <p className="t-small mt-5 border-t border-line pt-4 text-muted">{t.note}</p>
    </figure>
  )
}
