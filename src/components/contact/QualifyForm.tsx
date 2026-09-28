'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ClientLink as Link } from '@/components/ui/ClientLink'
import type { Dictionary, ServiceKey } from '@/content/types'

type T = Dictionary['contact']['form']

type Data = {
  company: string
  type: ServiceKey | ''
  typeOther: string
  consequence: string
  tried: string
  budget: string
  tools: string
  hours: string
  retainer: string
  name: string
  email: string
  channel: string
  deadline: string
  website: string // honeypot
}

const EMPTY: Data = {
  company: '',
  type: '',
  typeOther: '',
  consequence: '',
  tried: '',
  budget: '',
  tools: '',
  hours: '',
  retainer: '',
  name: '',
  email: '',
  channel: 'email',
  deadline: '',
  website: '',
}

const TOTAL = 6
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Required fields per step. Everything else is optional on purpose.
const REQUIRED: Record<number, (keyof Data)[]> = {
  1: ['company', 'type'],
  2: ['consequence'],
  3: ['budget'],
  4: [],
  5: ['retainer'],
  6: ['name', 'email'],
}

const input =
  'mt-2 w-full rounded-[var(--radius-control)] border border-line-strong bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none'

export function QualifyForm({ t, locale, initialType }: { t: T; locale: string; initialType?: ServiceKey }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Data>({ ...EMPTY, type: initialType ?? '' })
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    headingRef.current?.focus()
  }, [step, status])

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setData((d) => ({ ...d, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  function validate(s: number) {
    const next: typeof errors = {}
    for (const k of REQUIRED[s]) if (!String(data[k]).trim()) next[k] = t.required
    if (s === 1 && data.type === 'other' && !data.typeOther.trim()) next.typeOther = t.required
    if (s === 6 && data.email && !EMAIL_RE.test(data.email)) next.email = t.invalidEmail
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step < TOTAL) {
      if (validate(step)) setStep(step + 1)
      return
    }
    if (!validate(step)) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      window.gtag?.('event', 'generate_lead', { service: data.type, budget: data.budget })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8 md:p-10" role="status">
        <h2 ref={headingRef} tabIndex={-1} className="t-h2 outline-none">
          {t.successTitle}
        </h2>
        <p className="t-lead mt-4">{t.success}</p>
      </div>
    )
  }

  const titles = [t.s1.title, t.s2.title, t.s3.title, t.s4.title, t.s5.title, t.s6.title]

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="t-small text-muted" aria-live="polite">
          {t.stepOf.replace('{n}', String(step)).replace('{total}', String(TOTAL))}
        </p>
        <ol className="flex gap-1.5" aria-hidden>
          {Array.from({ length: TOTAL }, (_, i) => (
            <li key={i} className={`h-1 w-6 rounded-full ${i < step ? 'bg-accent' : 'bg-line-strong'}`} />
          ))}
        </ol>
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="t-h2 mt-6 outline-none">
        {titles[step - 1]}
      </h2>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set('website', e.target.value)} />
        </label>
      </div>

      <div className="mt-8 space-y-8">
        {step === 1 && (
          <>
            <Field label={t.s1.company} error={errors.company} id="company">
              <input id="company" className={input} value={data.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" />
            </Field>
            <Choice
              legend={t.s1.type}
              name="type"
              value={data.type}
              error={errors.type}
              onChange={(v) => set('type', v as ServiceKey)}
              options={(Object.keys(t.s1.types) as ServiceKey[]).map((k) => ({ value: k, label: t.s1.types[k] }))}
            />
            {data.type === 'other' && (
              <Field label={t.s1.otherPlaceholder} error={errors.typeOther} id="typeOther">
                <input id="typeOther" className={input} value={data.typeOther} onChange={(e) => set('typeOther', e.target.value)} />
              </Field>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <Field label={t.s2.consequence} hint={t.s2.consequenceHint} error={errors.consequence} id="consequence">
              <textarea id="consequence" rows={4} className={input} value={data.consequence} onChange={(e) => set('consequence', e.target.value)} />
            </Field>
            <Choice legend={t.s2.tried} name="tried" value={data.tried} onChange={(v) => set('tried', v)} options={t.s2.triedOptions} />
          </>
        )}

        {step === 3 && (
          <>
            <Choice legend={t.s3.budget} name="budget" value={data.budget} error={errors.budget} onChange={(v) => set('budget', v)} options={t.s3.options} />
            {data.budget === 'lt1k' && (
              <div role="note" className="rounded-[var(--radius-card)] border border-accent/50 bg-bg p-5">
                <p className="font-semibold">{t.s3.lowTitle}</p>
                <p className="mt-2 text-muted">{t.s3.low}</p>
                <Link href="/services/express-commerce" className="mt-3 inline-block font-semibold text-accent hover:underline">
                  {t.s3.lowCta}
                </Link>
              </div>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <Field label={t.s4.tools} hint={t.s4.toolsHint} id="tools">
              <textarea id="tools" rows={3} className={input} value={data.tools} onChange={(e) => set('tools', e.target.value)} />
            </Field>
            <Choice legend={t.s4.hours} name="hours" value={data.hours} onChange={(v) => set('hours', v)} options={t.s4.hoursOptions} columns />
          </>
        )}

        {step === 5 && (
          <>
            <Choice legend={t.s5.retainer} name="retainer" value={data.retainer} error={errors.retainer} onChange={(v) => set('retainer', v)} options={t.s5.options} />
            {data.retainer === 'no' && (
              <p role="note" className="rounded-[var(--radius-card)] border border-line-strong bg-bg p-5 text-muted">
                {t.s5.noteNo}
              </p>
            )}
          </>
        )}

        {step === 6 && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label={t.s6.name} error={errors.name} id="name">
                <input id="name" className={input} value={data.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" />
              </Field>
              <Field label={t.s6.email} error={errors.email} id="email">
                <input id="email" type="email" inputMode="email" className={input} value={data.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" />
              </Field>
            </div>
            <Choice legend={t.s6.channel} name="channel" value={data.channel} onChange={(v) => set('channel', v)} options={t.s6.channels} columns />
            <Field label={t.s6.deadline} id="deadline">
              <input id="deadline" type="date" className={`${input} md:max-w-xs`} value={data.deadline} onChange={(e) => set('deadline', e.target.value)} />
            </Field>
            <p className="t-small text-muted">
              <Link href="/legal/privacy" className="underline underline-offset-2">
                {t.s6.privacy}
              </Link>
            </p>
          </>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded-[var(--radius-control)] border border-line-strong p-4">
          {t.error}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        {step > 1 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="rounded-[var(--radius-control)] px-4 py-3 font-semibold text-muted hover:text-text">
            {t.back}
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-[var(--radius-control)] bg-accent px-6 py-3 font-semibold text-on-accent transition hover:brightness-110 disabled:opacity-60"
        >
          {step < TOTAL ? t.next : status === 'sending' ? t.sending : t.submit}
        </button>
      </div>
    </form>
  )
}

function Field({ label, hint, error, id, children }: { label: string; hint?: string; error?: string; id: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      {hint ? <p className="t-small mt-1 text-muted">{hint}</p> : null}
      {children}
      {error ? (
        <p className="t-small mt-2 font-semibold text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function Choice({
  legend,
  name,
  value,
  options,
  onChange,
  error,
  columns = false,
}: {
  legend: string
  name: string
  value: string
  options: { value: string; label: string }[]
  onChange: (v: string) => void
  error?: string
  columns?: boolean
}) {
  return (
    <fieldset>
      <legend className="font-semibold">{legend}</legend>
      <div className={`mt-3 grid gap-2 ${columns ? 'sm:grid-cols-2 lg:grid-cols-4' : ''}`}>
        {options.map((o) => (
          <label
            key={o.value}
            className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-control)] border border-line-strong px-4 py-3 transition-colors hover:border-text has-[:checked]:border-accent has-[:checked]:bg-bg has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--focus)]"
          >
            <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="size-4 accent-[var(--accent)]" />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p className="t-small mt-2 font-semibold text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}
