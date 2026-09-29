import { Link } from '@/components/ui/Link'
import type { AppPathname, Locale } from '@/i18n/routing'
import { JsonLd, breadcrumbLd } from '@/lib/jsonld'
import { localizedUrl } from '@/lib/seo'

type Crumb = { label: string; href: AppPathname | { pathname: AppPathname; params: Record<string, string> } }

export function Breadcrumbs({ locale, items }: { locale: Locale; items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="wrap pt-8 md:pt-10">
      <JsonLd data={breadcrumbLd(items.map((c) => ({ name: c.label, url: localizedUrl(locale, c.href) })))} />
      <ol className="t-small flex flex-wrap items-center gap-x-2 text-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-text">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href as never} className="hover:text-text">
                    {c.label}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
