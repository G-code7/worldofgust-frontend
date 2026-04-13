import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import BlogGrid from './BlogGrid'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical articles on web development, WordPress, e-commerce, and building a digital presence that actually converts. Written by the team at World of Gust.',
  openGraph: {
    title: 'Blog — World of Gust',
    description: 'Practical web development insights from World of Gust.',
    url: 'https://worldofgust.com/blog',
  },
  alternates: { canonical: 'https://worldofgust.com/blog' },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Blog"
          title="Insights From"
          titleAccent="the Build"
          description="No-fluff articles on web development, WordPress, e-commerce strategy, and what it actually takes to build a digital presence that works."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button href="#latest" variant="primary">Read latest</Button>
            <Button href="/contact" variant="secondary">Work with us</Button>
          </div>
        </PageHero>

        <div id="latest">
          <BlogGrid />
        </div>
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}