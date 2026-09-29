import { ImageResponse } from 'next/og'
import { getDictionary } from '@/content'
import type { Locale } from '@/i18n/routing'

export const alt = 'World of Gust'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Default social card per locale. Nested routes inherit it unless they define their own.
export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const d = getDictionary((locale === 'es' ? 'es' : 'en') as Locale)
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#0e121a', color: '#e8ecf2' }}>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>World of Gust</div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, maxWidth: 1000 }}>{d.home.hero.title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 26, color: '#9aa2b1' }}>
          <div style={{ width: 48, height: 6, background: '#7aa2ff' }} />
          worldofgust.com
        </div>
      </div>
    ),
    size,
  )
}
