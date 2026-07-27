import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import CookieBanner from '@/components/shared/CookieBanner'

const GA_ID = 'G-DZLETL6L97'

export const metadata: Metadata = {
  title: {
    default: 'World of Gust | Digital Studio',
    template: '%s | World of Gust',
  },
  description:
    'Digital Studio specializing in web design, e-commerce, and WordPress Headless solutions. Where ideas become exceptional digital experiences.',
  keywords: [
    'Digital Studio', 'Web Design', 'Web Development',
    'E-commerce', 'WordPress Headless', 'Next.js',
    'worldofgust', 'World of Gust',
  ],
  authors: [{ name: 'Gustavo Liendo', url: 'https://worldofgust.com' }],
  creator: 'World of Gust',
  metadataBase: new URL('https://worldofgust.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'World of Gust',
    url: 'https://worldofgust.com',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
  verification: { google: 'edfb1c484b9b3e2b' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        {/* GA4 — consent mode: denied by default */}
        <Script id="ga-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
          `}
        </Script>

        {/* GA4 loader */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <ThemeProvider>
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}