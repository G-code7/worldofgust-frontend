import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import localFont from 'next/font/local'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { getDictionary } from '@/content'
import { GA_ID, SITE_NAME, SITE_URL } from '@/lib/site'
import { JsonLd, organizationLd } from '@/lib/jsonld'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { ThemeScript } from '@/components/layout/ThemeScript'
import '../globals.css'

// Self-hosted variable font (latin covers Spanish). No build-time or runtime call to Google.
const sans = localFont({
  src: '../../fonts/SchibstedGrotesk-Variable.woff2',
  weight: '400 900',
  display: 'swap',
  variable: '--font-schibsted',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: 'Gustavo Liendo', url: SITE_URL }],
  creator: SITE_NAME,
  formatDetection: { telephone: false },
  verification: { google: 'gOfsemQwcsmmDxf7B22Wn2YRYA5b85h40dgTvspfido' },
}

export const viewport: Viewport = {
  themeColor: '#0e121a',
  colorScheme: 'dark light',
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const d = getDictionary(locale)

  return (
    <html lang={locale} data-theme="dark" className={sans.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        {/* GA4 with consent mode: storage denied until the visitor accepts. */}
        <Script id="ga-consent" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <JsonLd data={organizationLd(locale, d.home.meta.description)} />

        <Header locale={locale} t={d.common} />
        <main id="main">{children}</main>
        <Footer t={d.common} d={d} />
        <CookieBanner t={d.common.cookie} />
      </body>
    </html>
  )
}
