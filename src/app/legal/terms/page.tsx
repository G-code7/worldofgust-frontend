import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { eyebrowStyle, h1Style, metaStyle, h2Style, bodyStyle, ulStyle, linkStyle, tableStyle, thStyle, tdStyle } from '../styles'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using World of Gust services.',
  alternates: { canonical: 'https://worldofgust.com/legal/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
        <section style={{ padding: '120px 0 80px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            <span style={eyebrowStyle}>Legal</span>
            <h1 style={h1Style}>Terms & Conditions</h1>
            <p style={metaStyle}>Last updated: July 2026</p>

            <div style={bodyStyle}>

              <p>By accessing or using <strong>worldofgust.com</strong>, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>

              <h2 style={h2Style}>1. Services</h2>
              <p>World of Gust provides web design, web development, and related digital services. Specific deliverables, timelines, and pricing are defined in individual project proposals or agreements provided to each client separately.</p>

              <h2 style={h2Style}>2. Intellectual Property</h2>
              <p>All content on this website — including text, design, graphics, and code — is the property of World of Gust and may not be reproduced without written permission. Upon full payment, clients receive ownership rights to the final deliverables as specified in their project agreement.</p>

              <h2 style={h2Style}>3. Client Responsibilities</h2>
              <p>Clients are responsible for providing accurate information, timely feedback, and any required materials (content, images, credentials) necessary to complete the project. Delays caused by the client may affect the agreed timeline.</p>

              <h2 style={h2Style}>4. Payment</h2>
              <p>Payment terms are defined per project. We typically require a deposit before work begins. All fees are non-refundable once the corresponding phase of work has been completed and delivered.</p>

              <h2 style={h2Style}>5. Limitation of Liability</h2>
              <p>World of Gust is not liable for any indirect, incidental, or consequential damages arising from the use of our services or this website. Our total liability in any case is limited to the amount paid for the specific service in question.</p>

              <h2 style={h2Style}>6. Third-Party Tools</h2>
              <p>Projects may incorporate third-party tools, plugins, or platforms. We are not responsible for changes, outages, or pricing adjustments made by those third parties after project delivery.</p>

              <h2 style={h2Style}>7. Website Use</h2>
              <p>You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the site. Automated scraping or data harvesting is prohibited.</p>

              <h2 style={h2Style}>8. Governing Law</h2>
              <p>These terms are governed by applicable international commercial standards. Any disputes will be resolved through good-faith negotiation between both parties.</p>

              <h2 style={h2Style}>9. Changes</h2>
              <p>We reserve the right to update these terms at any time. The date at the top of this page reflects the most recent revision.</p>

              <h2 style={h2Style}>10. Contact</h2>
              <p>For questions about these terms, contact us at <a href="mailto:hello@worldofgust.com" style={linkStyle}>hello@worldofgust.com</a>.</p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}