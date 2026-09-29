import type { Dictionary } from '@/content/types'

export function Fears({ t }: { t: Dictionary['home']['fears'] }) {
  return (
    <section className="section rule" aria-labelledby="fears-title">
      <div className="wrap">
        <h2 id="fears-title" className="t-h2 max-w-[26ch]">
          {t.title}
        </h2>
        <div className="mt-12 md:mt-16">
          {t.items.map((it) => (
            <div key={it.fear} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-10">
              <h3 className="t-h3 md:col-span-5 md:text-[1.4rem]">{it.fear}</h3>
              <p className="md:col-span-4">{it.answer}</p>
              <p className="t-small text-muted md:col-span-3 md:text-right">{it.proof}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
