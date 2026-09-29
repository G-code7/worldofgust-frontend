import { Link } from '@/components/ui/Link'
import type { Dictionary } from '@/content/types'

/** Asymmetric: the flagship offer carries the weight, the other two stack beside it. */
export function Offers({ t, learnMore }: { t: Dictionary['home']['offers']; learnMore: string }) {
  const [main, ...rest] = t.items
  return (
    <section className="section rule" aria-labelledby="offers-title">
      <div className="wrap">
        <h2 id="offers-title" className="t-h2">
          {t.title}
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <Link
            href={main.href}
            className="group flex flex-col justify-between rounded-[var(--radius-card)] bg-accent p-8 text-on-accent md:p-10 lg:col-span-7 lg:row-span-2"
          >
            <div>
              <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight tracking-tight">{main.name}</h3>
              <p className="mt-4 max-w-[36ch] text-lg opacity-85">{main.tagline}</p>
            </div>
            <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
              <p className="tabular text-2xl font-semibold">{main.price}</p>
              <span className="font-semibold underline decoration-2 underline-offset-4 group-hover:no-underline">{learnMore}</span>
            </div>
          </Link>
          {rest.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group flex flex-col justify-between rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-colors hover:border-line-strong lg:col-span-5"
            >
              <div>
                <h3 className="t-h3 text-[1.4rem]">{o.name}</h3>
                <p className="mt-2 text-muted">{o.tagline}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <p className="tabular font-semibold">{o.price}</p>
                <span className="t-small font-semibold text-accent group-hover:underline">{learnMore}</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8">
          <Link href="/pricing" className="font-semibold text-accent hover:underline">
            {t.compare}
          </Link>
        </p>
      </div>
    </section>
  )
}
