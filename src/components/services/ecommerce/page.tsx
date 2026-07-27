import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import PageHero from '@/components/ui/PageHero'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'E-commerce Development',
  description: 'Custom online stores for physical products, digital downloads, and subscriptions. Starting from $1,200.',
  alternates: { canonical: 'https://worldofgust.com/services/ecommerce' },
}

const storeTypes = [
  { icon: '⬡', title: 'Physical Products', desc: 'Catalog, inventory, shipping, and checkout. Ready to sell from day one.' },
  { icon: '⬡', title: 'Digital Downloads', desc: 'Sell ebooks, templates, courses, or any digital file — automated delivery included.' },
  { icon: '⬡', title: 'Subscriptions', desc: 'Recurring billing for memberships, services, or product boxes.' },
  { icon: '⬡', title: 'Custom Catalog', desc: 'Quote-based stores, product configurators, or hybrid models.' },
]

const includes = [
  { title: 'Product Catalog', desc: 'Organized categories, filters, and search for any inventory size.' },
  { title: 'Secure Checkout', desc: 'Payment gateway integration — Stripe, PayPal, or local options.' },
  { title: 'Order Management', desc: 'Track orders, manage inventory, and handle refunds from one dashboard.' },
  { title: 'Mobile-First Design', desc: 'Most purchases happen on mobile. Your store is built for it.' },
  { title: 'SSL + Hosting + Domain', desc: 'Secure, fast, and live under your own domain.' },
  { title: '1 Month Free Maintenance', desc: 'Post-launch support for bug fixes and adjustments on delivered features.' },
]

const faqs = [
  {
    q: 'Why does the price vary?',
    a: 'Every store is different. A 10-product catalog with ready content is very different from a 500-SKU store that needs product photography, descriptions written from scratch, and custom shipping rules. The more prepared you are, the more efficient the build.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Product list with names, descriptions, prices, and images. The more complete and organized your content is, the faster and more cost-effective the project.',
  },
  {
    q: 'What payment gateways do you support?',
    a: 'Stripe and PayPal are standard. We can also integrate regional or local payment options depending on your market.',
  },
  {
    q: 'Can I manage the store myself after launch?',
    a: 'Yes. You\'ll be able to add products, process orders, and manage inventory through a simple dashboard — no code required.',
  },
  {
    q: 'What does the free maintenance month cover?',
    a: 'Bug fixes, checkout flow corrections, and responsive adjustments on what was built. New product categories, features, or integrations are quoted separately.',
  },
]

export default function EcommerceService() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="E-commerce"
          titleAccent="Built to Sell"
          description="Whether you're selling physical products, digital downloads, or subscriptions — your store should work as hard as you do. We build online stores that are fast, secure, and designed to convert."
          align="left"
          size="lg"
        >
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button href="/contact?service=ecommerce" variant="primary">Get a Custom Quote</Button>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '1px' }}>
              From $1,200
            </span>
          </div>
        </PageHero>

        {/* Store types */}
        <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
          <div className="container">
            <span style={eyebrow}>What We Build</span>
            <h2 style={{ ...h2, marginBottom: '12px' }}>Every store is different.</h2>
            <p style={{ ...body, maxWidth: '560px', marginBottom: '48px' }}>
              The price depends on what you're selling, how much content you bring to the table,
              and how complex the logic needs to be. Here's what we can build:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {storeTypes.map((item) => (
                <div key={item.title} style={{ padding: '24px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '20px', color: 'var(--accent)', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing transparency note */}
            <div style={{ padding: '28px', background: 'var(--bg-elevated)', border: '1px solid var(--border-accent)', borderRadius: '10px', borderLeft: '3px solid var(--accent-secondary)' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                A note on pricing
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                A store with 10 products and ready-to-go content is a very different project from one with
                hundreds of SKUs, missing descriptions, and no product images. The more organized and complete
                your content is, the more cost-effective the build. We'll always give you a clear quote
                before starting — no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
          <div className="container">
            <span style={eyebrow}>What's Included</span>
            <h2 style={{ ...h2, marginBottom: '48px' }}>The full stack.<br />Ready to sell.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {includes.map((item) => (
                <div key={item.title} style={{ padding: '24px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: '24px 28px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px', borderLeft: '3px solid var(--accent)' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Annual renewal:</strong>{' '}
                Hosting and domain fees apply yearly. The first month of maintenance is included — covering bug fixes and adjustments on delivered features. New functionality is quoted separately or available through a maintenance plan.
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

        <section style={{ padding: '64px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>Explore other services</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/landing-page" style={otherServiceLink}>Landing Page</Link>
              <Link href="/services/business-website" style={otherServiceLink}>Business Website</Link>
              <Link href="/services/custom-project" style={otherServiceLink}>Custom Project</Link>
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