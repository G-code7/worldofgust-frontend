import type { ReactNode } from 'react'

/** The only place a page's H1 is rendered. One H1 per page, always. */
export function PageHeader({ title, lead, children }: { title: string; lead?: string; children?: ReactNode }) {
  return (
    <header className="wrap pt-10 pb-14 md:pt-14 md:pb-20">
      <h1 className="t-h1 max-w-[20ch]">{title}</h1>
      {lead ? <p className="t-lead mt-6 max-w-[58ch]">{lead}</p> : null}
      {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
    </header>
  )
}
