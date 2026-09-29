import type { ServiceSheet as Sheet } from '@/content/types'
import type { ServiceKey } from '@/content/types'
import { ButtonLink } from '@/components/ui/Button'

/**
 * The mandatory service format from the strategy audit:
 * problem, what is included, what is not, expected outcome, investment range, CTA.
 */
export function ServiceSheet({ s, type }: { s: Sheet; type?: ServiceKey }) {
  return (
    <>
      <section className="section rule">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">{s.problemTitle}</h2>
          <p className="text-[clamp(1.2rem,2vw,1.55rem)] leading-snug md:col-span-8">{s.problem}</p>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="t-h2">{s.includesTitle}</h2>
            <ul className="mt-8 space-y-4">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-4">
                  <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h2 className="t-h3 text-[1.35rem]">{s.excludesTitle}</h2>
            <ul className="mt-6 space-y-3 text-muted">
              {s.excludes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section rule">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="t-h2">{s.outcomeTitle}</h2>
            <ul className="mt-8 space-y-5">
              {s.outcome.map((o) => (
                <li key={o} className="border-l-2 border-accent pl-5 text-[1.15rem]">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8">
              <h2 className="t-small font-semibold text-muted">{s.investmentTitle}</h2>
              <p className="tabular mt-2 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold tracking-tight">{s.investment}</p>
              <p className="mt-3 text-muted">{s.investmentNote}</p>
              <ButtonLink href={type ? { pathname: '/contact', query: { type } } : '/contact'} className="mt-7 w-full">
                {s.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
