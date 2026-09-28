import type { Dictionary } from '@/content/types'

export function RetainerTiers({ tiers }: { tiers: Dictionary['retainerTiers'] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tiers.map((t, i) => (
        <div
          key={t.name}
          className={`flex flex-col rounded-[var(--radius-card)] border p-7 ${i === 1 ? 'border-accent bg-surface' : 'border-line'}`}
        >
          <h3 className="t-h3 text-[1.4rem]">{t.name}</h3>
          <p className="t-small mt-1 text-muted">{t.for}</p>
          <p className="tabular mt-6 text-3xl font-bold tracking-tight">{t.price}</p>
          <p className="t-small mt-1 font-semibold text-accent">{t.sla}</p>
          <ul className="mt-6 space-y-2.5 border-t border-line pt-6 t-small">
            {t.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
