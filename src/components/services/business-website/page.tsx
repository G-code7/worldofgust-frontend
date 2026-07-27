import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Business Website Design & Development',
  description: 'A professional multi-page website that represents your brand and grows with your business. Starting from $850.',
  alternates: { canonical: 'https://worldofgust.com/services/business-website' },
}

const includes = [
  { icon: '◈', title: 'Up to 5 Pages', desc: 'Home, About, Services, Blog, and Contact — fully designed and developed.' },
  { icon: '◈', title: 'WordPress CMS', desc: 'Edit your content anytime without touching a single line of code.' },
  { icon: '◈', title: 'Blog Setup', desc: 'Publish articles, news, and updates to build authority in your niche.' },
  { icon: '◈', title: 'SEO Foundation', desc: 'Structured for search engines from day one — meta tags, sitemaps, performance.' },
  { icon: '◈', title: 'Contact Form', desc: 'Receive inquiries directly in your inbox with a branded email address.' },
  { icon: '◈', title: '1 Month Free Maintenance', desc: 'Bug fixes, copy adjustments, and responsive corrections included after launch.' },
]

const idealFor = [
  'Small businesses that need more than a single page',
  'Studios, agencies, and creative professionals',
  'Consultants and service-based businesses',
  'Brands ready to invest in a serious online presence',
  'Businesses replacing an outdated or DIY website',
  'Companies that want to publish content and rank on Google',
]

const faqs = [
  {
    q: 'How long does it take?',
    a: 'Typically 2–4 weeks. Timeline depends on content readiness and feedback turnaround from your side.',
  },
  {
    q: 'Can I manage the content myself?',
    a: 'Yes. WordPress gives you full control over text, images, and blog posts without needing a developer.',
  },
  {
    q: 'What if I need more than 5 pages?',
    a: 'Additional pages are quoted separately. We\'ll scope it out during the discovery call.',
  },
  {
    q: 'What happens after the first month?',
    a: 'An annual hosting and domain renewal fee applies. Ongoing maintenance is available as a monthly add-on.',
  },
  {
    q: 'What does the free maintenance cover?',
    a: 'Bug fixes, responsive adjustments, and copy corrections on existing content. New sections, features, or integrations are quoted separately.',
  },
]

export default function BusinessWebsiteService() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="Business Website"
          titleAccent="Your Complete Digital Presence"
          description="More than a page — a full digital home for your brand. Built to grow with your business, easy to manage, and designed to convert visitors into clients."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button href="/contact?service=business-website" variant="primary">Get a Free Quote</Button>
            <span style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '22px', fontWeight: 700,
              color: 'var(--accent)', letterSpacing: '1px',
            }}>
              From $850
            </span>
          </div>
        </PageHero>

        {/* Who it's for */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="service-split">
              <div>
                <span style={eyebrow}>Who It's For</span>
                <h2 style={h2}>Your business deserves more than a template.</h2>
                <p style={body}>
                  A landing page gets you online. A business website builds trust, communicates your value,
                  and gives potential clients everything they need to choose you — before you even speak to them.
                </p>
                <p style={{ ...body, marginTop: '16px' }}>
                  Built on WordPress, your site is yours to manage. Update content, publish blog posts,
                  and add new pages as your business evolves — no developer required for day-to-day changes.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {idealFor.map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '14px 16px',
                    background: 'var(--bg-elevated)',
                    borderRadius: '8px', border: '1px solid var(--border)',
                    fontFamily: 'Montserrat, sans-serif', fontSize: '14px',
                    color: 'var(--text-secondary)', lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--accent)', marginTop: '1px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
          <div className="container">
            <span style={eyebrow}>What's Included</span>
            <h2 style={{ ...h2, marginBottom: '48px' }}>Built to last.<br />Easy to grow.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {includes.map((item) => (
                <div key={item.title} style={{
                  padding: '24px', background: 'var(--bg-surface)',
                  border: '1px solid var(--border)', borderRadius: '10px',
                }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '20px', color: 'var(--accent)', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: 'var(--text-primary)', marginBottom: '8px',
                  }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: '24px 28px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px', borderLeft: '3px solid var(--accent)' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Annual renewal:</strong>{' '}
                Hosting and domain fees apply yearly to keep your site live. The first month of maintenance is included —
                covering bug fixes, copy adjustments, and responsive corrections. New sections or features are quoted separately
                or available through a maintenance plan.
              </p>
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

        {/* Other services */}
        <section style={{ padding: '64px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>Explore other services</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/landing-page" style={otherServiceLink}>Landing Page</Link>
              <Link href="/services/ecommerce" style={otherServiceLink}>E-commerce</Link>
              <Link href="/services/custom-project" style={otherServiceLink}>Custom Project</Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .service-split { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </>
  )
}

const eyebrow: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }
const h2: React.CSSProperties = { fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '20px' }
const body: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }
const otherServiceLink: React.CSSProperties = { padding: '10px 20px', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: 'Oswald, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', textDecoration: 'none' }