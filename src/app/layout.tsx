import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
