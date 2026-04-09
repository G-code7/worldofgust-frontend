/**
 * /services — Page route
 *
 * Coloca este archivo en: src/app/services/page.tsx
 *
 * Estructura:
 *   1. PageHero         — presentación de la página de servicios
 *   2. ServicesOverview — tabla comparativa rápida (ancla a cada servicio)
 *   3. ServiceDetail    — bloques expandidos por servicio (con IDs para anclas)
 *   4. ServicesFAQ      — preguntas frecuentes
 *   5. CTABanner        — (ya existente) cierre con CTA
 */

import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import ServicesOverview from '@/components/services/ServicesOverview'
import ServiceDetail from '@/components/services/ServiceDetail'
import ServicesFAQ from '@/components/services/ServicesFAQ'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Landing pages, business websites, e-commerce, and WordPress Headless solutions. Clear pricing, transparent timelines, and craft in every line of code.',
  openGraph: {
    title: 'Services — World of Gust',
    description: 'Web design and development services built for your business goals.',
    url: 'https://worldofgust.com/services',
  },
  alternates: { canonical: 'https://worldofgust.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="What We Build"
          title="Services That"
          titleAccent="Move the Needle"
          description="From a single landing page to a full headless architecture — every service is scoped to your goals, with clear deliverables and no hidden costs."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Get a free quote</Button>
            <Button href="#compare" variant="secondary">Compare services</Button>
          </div>
        </PageHero>

        {/* Anchor target for "Compare services" button */}
        <div id="compare">
          <ServicesOverview />
        </div>

        <ServiceDetail />
        <ServicesFAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
