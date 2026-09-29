'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { parsePath } from '@/i18n/paths'
import type { StaticPathname as AppPathname } from '@/i18n/routing'
import { ClientLink } from '@/components/ui/ClientLink'

export function NavLink({ href, children }: { href: AppPathname; children: ReactNode }) {
  const current = parsePath(usePathname()).pathname ?? ''
  const active = current === href || current.startsWith(`${href}/`)
  return (
    <ClientLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className="rounded-[var(--radius-control)] px-3 py-2 text-[0.925rem] text-muted transition-colors hover:text-text aria-[current=page]:text-text"
    >
      {children}
    </ClientLink>
  )
}
