import { Link } from '@/components/ui/Link'
import type { Dictionary } from '@/content/types'

export function AfterLaunch({ t }: { t: Dictionary['home']['afterLaunch'] }) {
  return (
    <section className="section rule bg-surface">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <h2 className="t-h2 md:col-span-7">{t.title}</h2>
        <div className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="text-muted">{t.body}</p>
          <Link href="/services/digital-operations" className="mt-6 inline-block font-semibold text-accent hover:underline">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
