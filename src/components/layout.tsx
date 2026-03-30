import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

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
  icons: {
    icon: '/favicon.ico',
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
