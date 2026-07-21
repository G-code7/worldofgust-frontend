import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const GA_ID = 'G-DZLETL6L97'

export const metadata: Metadata = {
  title: {
    default: 'Gustavo Liendo | Full Stack Developer',
    template: '%s | G-CODE',
  },
  description:
    'Full Stack Developer specializing in React, Next.js, and WordPress Headless solutions. 5+ years crafting exceptional digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'WordPress Headless', 'Python', 'Django'],
  authors: [{ name: 'Gustavo Liendo' }],
  creator: 'Gustavo Liendo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'G-CODE | Gustavo Liendo',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'edfb1c484b9b3e2b',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        {/* Google Analytics */}
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
        </ThemeProvider>
      </body>
    </html>
  )
}