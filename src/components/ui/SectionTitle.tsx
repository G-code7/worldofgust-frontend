import type { ReactNode } from 'react'

export function SectionTitle({ children, lead, id }: { children: ReactNode; lead?: string; id?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 id={id} className="t-h2 max-w-[24ch]">
        {children}
      </h2>
      {lead ? <p className="t-lead mt-4 max-w-[56ch]">{lead}</p> : null}
    </div>
  )
}
