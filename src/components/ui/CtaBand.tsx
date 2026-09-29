import { ButtonLink } from './Button'

/** Closing call to action. Always points at the qualification form. */
export function CtaBand({ title, body, cta, type }: { title: string; body?: string; cta: string; type?: string }) {
  return (
    <section className="section rule">
      <div className="wrap">
        <h2 className="t-h2 max-w-[26ch]">{title}</h2>
        {body ? <p className="t-lead mt-5 max-w-[56ch]">{body}</p> : null}
        <div className="mt-9">
          <ButtonLink href={type ? { pathname: '/contact', query: { type } } : '/contact'}>{cta}</ButtonLink>
        </div>
      </div>
    </section>
  )
}
