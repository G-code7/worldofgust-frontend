import { Link } from '@/components/ui/Link'
import type { Dictionary } from '@/content/types'
import { CONTACT, FOUNDER } from '@/lib/site'

export function Footer({ t, d }: { t: Dictionary['common']; d: Dictionary }) {
  const year = new Date().getFullYear()
  const col = 'mb-4 t-small font-semibold text-text'
  const link = 't-small text-muted hover:text-text'
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-bold tracking-tight">World of Gust</p>
          <p className="mt-3 max-w-[40ch] text-muted">{t.footer.pitch}</p>
          <a href={`mailto:${CONTACT.email}`} className="mt-6 inline-block font-semibold hover:text-accent">
            {CONTACT.email}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className={col}>{t.footer.studio}</p>
          <ul className="space-y-2.5">
            {t.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={link}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={link}>
                {t.qualify}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className={col}>{t.footer.services}</p>
          <ul className="space-y-2.5">
            {d.home.offers.items.map((o) => (
              <li key={o.href}>
                <Link href={o.href} className={link}>
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className={col}>{t.footer.legal}</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/legal/privacy" className={link}>
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className={link}>
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link href="/legal/cookies" className={link}>
                {t.footer.cookies}
              </Link>
            </li>
            <li>
              <a href={FOUNDER.linkedin} rel="me noopener" target="_blank" className={link}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={FOUNDER.github} rel="me noopener" target="_blank" className={link}>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-line py-6 text-muted t-small md:flex-row md:justify-between">
        <p>
          © {year} World of Gust. {t.footer.rights}
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
