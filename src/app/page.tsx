import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedWork from '@/components/home/FeaturedWork'
import CTABanner from '@/components/home/CTABanner'
import { fetchFeaturedProjects } from '@/lib/wp'

export const metadata: Metadata = {
  title: 'World of Gust | Digital Studio',
  description:
    'A digital studio where ideas become exceptional web experiences. We build landing pages, business websites, e-commerce stores, and WordPress headless solutions tailored to your needs.',
  openGraph: {
    title: 'World of Gust | Digital Studio',
    description: 'Where ideas become digital experiences. Web design & development.',
    type: 'website',
    url: 'https://worldofgust.com',
  },
  alternates: {
    canonical: 'https://worldofgust.com',
  },
}

export default async function HomePage() {
  const projects = await fetchFeaturedProjects().catch(() => [])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedWork projects={projects} />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
