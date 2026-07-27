import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Landing Page Design & Development',
  description: 'A professional landing page to showcase your business, product, or service online. Starting from $350.',
  alternates: { canonical: 'https://worldofgust.com/services/landing-page' },
}

const includes = [
  { icon: '◎', title: 'Responsive Design', desc: 'Looks great on every device — phone, tablet, and desktop.' },
  { icon: '◎', title: 'Contact Form', desc: 'Let visitors reach you directly. Connected to your email.' },
  { icon: '◎', title: 'Basic SEO Setup', desc: 'Meta tags, page title, and structure ready for Google.' },
  { icon: '◎', title: 'Custom Domain & Hosting', desc: 'We handle setup. Your site lives at your own domain.' },
  { icon: '◎', title: 'Professional Email', desc: 'Get a branded email like hello@yourbusiness.com.' },
  { icon: '◎', title: '1 Month Free Maintenance', desc: 'Bug fixes, copy tweaks, and responsive adjustments included.' },
]

const idealFor = [
  'Local businesses going online for the first time',
  'Restaurants, cafés, and food businesses',
  'Freelancers and independent professionals',
  'Product or service launches',
  'Event promotions and campaigns',
  'Anyone who needs a clean, fast online presence',
]

const faqs = [
  {
    q: 'How long does it take?',
    a: 'Typically 1–2 weeks from kickoff, depending on how quickly content and feedback are provided.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Your logo, brand colors (if you have them), the text you want on the page, and any photos. We can guide you if you\'re starting from scratch.',
  },
  {
    q: 'What happens after the first month?',
    a: 'An annual hosting and domain renewal fee applies to keep your site live. Ongoing maintenance beyond the included month is available as an add-on.',
  },
  {
    q: 'What does the free maintenance month cover?',
    a: 'Bug fixes, responsive adjustments, and copy corrections on existing content. New sections, components, or features are quoted separately.',
  },
  {
    q: 'Can I update the content myself later?',
    a: 'Yes — we can set up a simple CMS so you can edit text and images on your own without touching code.',
  },
]

export default function LandingPageService() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="Landing Page"
          titleAccent="Your First Impression Online"
          description="You have one chance to make a visitor stay. A well-built landing page tells your story, presents your offer, and turns visitors into clients — without the complexity of a full website."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button href="/contact?service=landing-page" variant="primary">Get a Free Quote</Button>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '1px',
            }}>
              From $350
            </span>
          </div>
        </PageHero>

        {/* ── Who it's for ── */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }} className="service-split">

              <div>
                <span style={eyebrow}>Who It's For</span>
                <h2 style={h2}>You don't need a full website.<br />You need the right page.</h2>
                <p style={body}>
                  If you're a local business, a professional, or someone launching something new —
                  a landing page is the fastest and most cost-effective way to establish your online
                  presence and start getting clients.
                </p>
                <p style={{ ...body, marginTop: '16px' }}>
                  No unnecessary complexity. One focused page that does exactly what you need:
                  present your offer and make it easy for people to contact you.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {idealFor.map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '14px 16px',
                    background: 'var(--bg-elevated)',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--accent)', marginTop: '1px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
          <div className="container">
            <span style={eyebrow}>What's Included</span>
            <h2 style={{ ...h2, marginBottom: '48px' }}>Everything you need.<br />Nothing you don't.</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '48px',
            }}>
              {includes.map((item) => (
                <div key={item.title} style={{
                  padding: '24px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                }}>
                  <div style={{
                    fontFamily: 'monospace', fontSize: '20px',
                    color: 'var(--accent)', marginBottom: '12px',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: 'var(--text-primary)', marginBottom: '8px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: '13px',
                    lineHeight: 1.6, color: 'var(--text-secondary)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <div style={{
              padding: '24px 28px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '13px',
                lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0,
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>Annual renewal:</strong>{' '}
                After delivery, an annual hosting and domain fee applies to keep your site live and secure.
                The first month of maintenance is included — covering bug fixes, copy adjustments, and
                responsive corrections. New sections or features are quoted separately or available
                through a maintenance plan.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <span style={eyebrow}>FAQ</span>
            <h2 style={{ ...h2, marginBottom: '40px' }}>Common Questions</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{
                  padding: '24px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                }}>
                  <h3 style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: 'var(--text-primary)', marginBottom: '10px',
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: '14px',
                    lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other services ── */}
        <section style={{ padding: '64px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '14px',
              color: 'var(--text-muted)', marginBottom: '20px',
            }}>
              Need something bigger?
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/business-website" style={otherServiceLink}>Business Website</Link>
              <Link href="/services/ecommerce" style={otherServiceLink}>E-commerce</Link>
              <Link href="/services/custom-project" style={otherServiceLink}>Custom Project</Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .service-split { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}

// ── Shared styles ──
const eyebrow: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
  color: 'var(--accent)', display: 'block', marginBottom: '16px',
}
const h2: React.CSSProperties = {
  fontFamily: 'Oswald, sans-serif',
  fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '1px', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '20px',
}
const body: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)',
}
const otherServiceLink: React.CSSProperties = {
  padding: '10px 20px',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
  color: 'var(--text-secondary)', textDecoration: 'none',
}