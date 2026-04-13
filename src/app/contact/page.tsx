import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start your project with World of Gust. Reach out for a free discovery call — no commitment required. We respond within 24 hours.',
  openGraph: {
    title: 'Contact — World of Gust',
    description: 'Start your project. Get a free quote within 24 hours.',
    url: 'https://worldofgust.com/contact',
  },
  alternates: { canonical: 'https://worldofgust.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Let's Talk"
          title="Start Your"
          titleAccent="Project"
          description="Tell us what you need. We'll respond within 24 hours with a clear next step — usually a 30-minute call to scope out your project."
          align="left"
          size="md"
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}