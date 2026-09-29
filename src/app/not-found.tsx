import { SITE_URL } from '@/lib/site'

// Only reached for requests the proxy does not localize (localized 404s live in [locale]/not-found.tsx).
// This renders its own <html> and sits outside the Next router tree, so an absolute href is correct here.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui', padding: '4rem 1.5rem', background: '#0e121a', color: '#e8ecf2' }}>
        <h1>Page not found</h1>
        <p>
          <a href={SITE_URL} style={{ color: '#7aa2ff' }}>
            Go to worldofgust.com
          </a>
        </p>
      </body>
    </html>
  )
}
