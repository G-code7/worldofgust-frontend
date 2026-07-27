import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Custom Web Projects',
  description: 'Custom web applications, platforms, and digital products. If you can imagine it, we can build it.',
  alternates: { canonical: 'https://worldofgust.com/services/custom-project' },
}

const possibilities = [
  { icon: '◉', title: 'Web Applications', desc: 'Platforms with user accounts, dashboards, data, and custom logic.' },
  { icon: '◉', title: 'Headless WordPress', desc: 'WordPress as your CMS, Next.js as your frontend. Fast, scalable, and editorial.' },
  { icon: '◉', title: 'Booking & Reservations', desc: 'Custom booking flows for tourism, hospitality, or service businesses.' },
  { icon: '◉', title: 'API Integrations', desc: 'Connect your site to external services — CRMs, payment platforms, data feeds.' },
  { icon: '◉', title: 'Performance Overhauls', desc: 'Take an existing site and rebuild it for speed, SEO, and better conversions.' },
  { icon: '◉', title: 'Something Else', desc: 'Have an idea that doesn\'t fit a template? That\'s exactly our kind of project.' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We start with a call to understand your idea, goals, and constraints. No commitment required.' },
  { step: '02', title: 'Proposal', desc: 'You receive a clear scope, technology recommendation, timeline, and price — in writing.' },
  { step: '03', title: 'Build', desc: 'Iterative development with regular check-ins. You see progress throughout, not just at the end.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and provide one month of free support to make sure everything runs smoothly.' },
]

const faqs = [
  {
    q: 'How is pricing determined?',
    a: 'Every custom project is scoped individually based on complexity, technology, timeline, and the level of content or design input needed. We provide a detailed quote before any work begins.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'Next.js, React, TypeScript, Node.js, Python, WordPress (headless), REST APIs, GraphQL, and more. We choose the right tool for each project — not the trendy one.',
  },
  {
    q: 'Can you improve or extend an existing site?',
    a: 'Yes. Whether it\'s a performance overhaul, a new feature, or a full redesign on top of existing infrastructure — we can work with what you have.',
  },
  {
    q: 'Do you work with startups or early-stage ideas?',
    a: 'Absolutely. Some of the best projects start as rough ideas. A discovery call is the right first step — we can help you shape the scope before committing to anything.',
  },
  {
    q: 'What does the free maintenance month cover?',
    a: 'Bug fixes and corrections on delivered features. New functionality, integrations, or scope changes are quoted separately or covered by an ongoing maintenance plan.',
  },
]

export default function CustomProjectService() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="Custom Project"
          titleAccent="The Limit Is Your Imagination"
          description="Not every idea fits a template. If you need a web application, a custom platform, a performance overhaul, or something that doesn't have a name yet — let's talk. We figure it out together."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button href="/contact?service=custom-project" variant="primary">Tell Us Your Idea</Button>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Price upon request
            </span>
          </div>
        </PageHero>

        {/* Possibilities */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container">
            <span style={eyebrow}>What We Can Build</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Your vision.<br />Our craft.</h2>
            <p style={{ ...body, maxWidth: '560px', marginBottom: '48px' }}>
              Custom projects are as varied as the people who bring them. Here's a snapshot of what
              we've built and what we love to work on — but this list isn't exhaustive.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {possibilities.map((item) => (
                <div key={item.title} style={{ padding: '24px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '20px', color: 'var(--accent)', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <span style={eyebrow}>How It Works</span>
            <h2 style={{ ...h2, marginBottom: '48px' }}>From idea to launch.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {process.map((item, i) => (
                <div key={item.step} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  paddingBottom: i < process.length - 1 ? '40px' : '0',
                  borderLeft: i < process.length - 1 ? '1px solid var(--border)' : 'none',
                  marginLeft: '13px',
                  paddingLeft: '32px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', left: '-14px', top: '0',
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'var(--gradient-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Oswald, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white',
                    flexShrink: 0,
                  }}>
                    {item.step}
                  </div>
                  <div style={{ paddingTop: '2px' }}>
                    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <span style={eyebrow}>FAQ</span>
            <h2 style={{ ...h2, marginBottom: '40px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ padding: '24px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>{faq.q}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '64px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>Explore other services</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/landing-page" style={otherServiceLink}>Landing Page</Link>
              <Link href="/services/business-website" style={otherServiceLink}>Business Website</Link>
              <Link href="/services/ecommerce" style={otherServiceLink}>E-commerce</Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}

const eyebrow: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }
const h2: React.CSSProperties = { fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '20px' }
const body: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }
const otherServiceLink: React.CSSProperties = { padding: '10px 20px', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none' }