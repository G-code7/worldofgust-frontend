import type { Faq as FaqItem } from '@/content/types'
import { JsonLd, faqLd } from '@/lib/jsonld'

/** Native <details>: accessible, zero JavaScript, and emits FAQPage schema. */
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  if (!items.length) return null
  return (
    <section className="section rule" aria-labelledby="faq-title">
      <JsonLd data={faqLd(items)} />
      <div className="wrap grid gap-10 md:grid-cols-12">
        <h2 id="faq-title" className="t-h2 md:col-span-4">
          {title}
        </h2>
        <div className="md:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="border-b border-line py-5 first:pt-0">
              <summary className="flex items-start justify-between gap-6">
                <h3 className="t-h3 font-semibold">{f.q}</h3>
                <span aria-hidden className="faq-icon mt-0.5 text-2xl leading-none text-muted transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
