import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'api.worldofgust.com', pathname: '/**' }],
  },
  async redirects() {
    return [
      // Apex to www (only takes effect once worldofgust.com resolves to Vercel).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'worldofgust.com' }],
        destination: 'https://www.worldofgust.com/:path*',
        permanent: true,
      },
      // Default locale never carries a prefix: make /en/* permanent (next-intl alone sends 307).
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // Old service pages -> new offer structure (keeps link equity).
      { source: '/services/landing-page', destination: '/services/express-commerce', permanent: true },
      { source: '/services/ecommerce', destination: '/services/express-commerce', permanent: true },
      { source: '/services/business-website', destination: '/services/digital-infrastructure', permanent: true },
      { source: '/services/custom-project', destination: '/services/digital-infrastructure', permanent: true },
      { source: '/services/consulting', destination: '/services/digital-operations', permanent: true },
      // Mock blog slugs that were linked (and 404ing) on the old site.
      { source: '/blog/:slug(ecommerce-conversion-rate-optimization|headless-wordpress-nextjs-2025|nextjs-app-router-seo-guide|tailwind-css-v4-upgrade-guide|venezuela-freelancer-international-clients|woocommerce-vs-shopify-2025)', destination: '/blog', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
