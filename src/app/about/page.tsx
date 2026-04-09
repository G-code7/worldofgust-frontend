import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import AboutMission from './AboutMission'
import AboutValues from './AboutValues'
import AboutProcess from './AboutProcess'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'World of Gust is a digital studio built on clarity, craft, and real partnerships. Learn who we are and how we work.',
  openGraph: {
    title: 'About — World of Gust',
    description: 'A digital studio where clarity and craft meet.',
    url: 'https://worldofgust.com/about',
  },
  alternates: { canonical: 'https://worldofgust.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Us"
          title="We're World of Gust"
          titleAccent="A Studio, Not an Agency"
          description="A small, focused team that designs and builds web experiences with intention. No account managers, no handoffs — just direct collaboration from start to launch."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Work with us</Button>
            <Button href="/work" variant="secondary">See our work</Button>
          </div>
        </PageHero>

        <AboutMission />
        <AboutValues />
        <AboutProcess />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
