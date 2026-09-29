import { Link } from '@/components/ui/Link'
import type { Locale } from '@/i18n/routing'
import type { Dictionary } from '@/content/types'
import { ButtonLink } from '@/components/ui/Button'
import { LocaleSwitcher } from './LocaleSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'

export function Header({ locale, t }: { locale: Locale; t: Dictionary['common'] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md supports-[not(backdrop-filter:blur(0))]:bg-bg">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent">
        {t.skip}
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-[1.05rem] font-bold tracking-tight">
          World of Gust
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {t.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <LocaleSwitcher locale={locale} label={t.switchTo} />
          <div className="hidden sm:block">
            <ThemeSwitcher labels={t.theme} />
          </div>
          {/* Wrapper controls visibility: display utilities on the button itself would conflict. */}
          <div className="hidden md:block">
            <ButtonLink href="/contact" className="!px-4 !py-2 text-[0.875rem]">
              {t.headerCta}
            </ButtonLink>
          </div>
          <MobileMenu label={t.menu} closeLabel={t.close}>
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {t.nav.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link href={item.href} className="block py-4 text-2xl font-semibold tracking-tight">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col gap-6">
              <ButtonLink href="/contact">{t.headerCta}</ButtonLink>
              <ThemeSwitcher labels={t.theme} />
            </div>
          </MobileMenu>
        </div>
      </div>
    </header>
  )
}
