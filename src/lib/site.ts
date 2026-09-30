/**
 * Single source of truth for business facts shown across the site.
 * Change a price or an SLA here, and every page, table and JSON-LD block follows.
 */

// www is the host that actually resolves today. Point the apex (worldofgust.com)
// to Vercel and let it 308 to www; never canonicalize to a host that does not answer.
export const SITE_URL = 'https://www.worldofgust.com'

export const SITE_NAME = 'World of Gust'

export const FOUNDER = {
  name: 'Gustavo Liendo',
  linkedin: 'https://www.linkedin.com/in/worldofgust/',
  github: 'https://github.com/G-code7',
}

export const CONTACT = {
  email: 'contact@worldofgust.com',
  // TODO(gus): replace with the real number before publishing. Leave null to hide it.
  whatsapp: null as string | null,
}

export const GA_ID = 'G-DZLETL6L97'

export const PRICING = {
  expressCommerce: { from: 1200, to: 1800 },
  infrastructure: { from: 2500, to: 8000 },
  packages: {
    launch: 2500,
    scale: 4500,
  },
  retainers: {
    essential: 100,
    performance: 150,
    operations: 200,
  },
  hourlyOutsideRetainer: { from: 80, to: 100 },
  minimumProject: 1200,
} as const

export const SLA_HOURS = { essential: 8, performance: 4, operations: 2 } as const

export const EXPRESS_DELIVERY_DAYS = 5

export function usd(n: number) {
  return `$${n.toLocaleString('en-US')}`
}
