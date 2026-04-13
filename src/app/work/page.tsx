import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import WorkGrid from './Workgrid'
import CTABanner from '@/components/home/CTABanner'
import { fetchFeaturedProjects } from '@/lib/wp'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'A curated portfolio of web projects — e-commerce platforms, business websites, headless WordPress solutions, and landing pages built for real business results.',
  openGraph: {
    title: 'Our Work — World of Gust',
    description: 'Projects built with intention. Browse our portfolio.',
    url: 'https://worldofgust.com/work',
  },
  alternates: { canonical: 'https://worldofgust.com/work' },
}

export default async function WorkPage() {
  const projects = await fetchFeaturedProjects().catch(() => [])

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Portfolio"
          title="Work That"
          titleAccent="Speaks for Itself"
          description="Every project here started with a real business problem. Browse what we've built — from lean landing pages to full headless architectures."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Start your project</Button>
            <Button href="/services" variant="secondary">See our services</Button>
          </div>
        </PageHero>

        <WorkGrid projects={projects} />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}