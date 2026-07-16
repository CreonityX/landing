import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/FooterSection';

export default function MonetizationPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar transparent={false} />
      
      {/* LIGHT HERO SECTION */}
      <section style={{ 
        padding: '80px 24px 0', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        flex: 1
      }}>
        <h1 style={{ 
          fontFamily: 'PP Right Grotesk Wide, sans-serif', 
          fontSize: '80px', 
          color: '#111111', 
          fontWeight: 700,
          letterSpacing: '-2px',
          lineHeight: 1.1,
          maxWidth: '900px',
          marginBottom: '24px'
        }}>
          Get paid faster. <br/> Period.
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#555555', 
          maxWidth: '700px', 
          marginBottom: '48px',
          lineHeight: 1.5
        }}>
          No more chasing invoices or waiting 90 days. Creonity handles the escrow, invoicing, and instant payouts so you can focus on creating.
        </p>
        <Link 
          href="/signup" 
          className="btn-cta-main"
          style={{ textDecoration: 'none', display: 'inline-block', backgroundColor: '#111111', color: '#ffffff' }}
        >
          Open your account
        </Link>
      </section>

      {/* LIGHT FEATURES SECTION */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px 120px', position: 'relative', zIndex: 10 }}>
        <div className="features-content">
          <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '64px' }}>
            Built for modern brands.
          </h2>
          
          <div className="bento-grid">
            
            {/* Instant Payouts - Big Card */}
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Instant Payouts</h3>
                <p>Once a brand approves your content, the funds are instantly released from escrow. Withdraw to your bank immediately.</p>
              </div>
              <div className="bento-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="bento-wallet-card" style={{ transform: 'scale(1.2)' }}>
                  <div className="bento-wallet-balance">₹ 1,24,500</div>
                  <div className="bento-wallet-label">Available Balance</div>
                  <button className="bento-wallet-btn">Withdraw Now</button>
                </div>
              </div>
            </div>
            
            {/* Auto Invoicing - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Auto Invoicing</h3>
                <p>We generate and send compliant invoices automatically.</p>
              </div>
              <div className="bento-illustration" style={{ transform: 'translateX(20px) translateY(20px)' }}>
                <div className="bento-invoice-stack">
                   <div className="invoice-paper doc-bg"></div>
                   <div className="invoice-paper invoice-fg">
                      <div className="inv-header">INVOICE #942</div>
                      <div className="doc-line"></div>
                      <div className="doc-line"></div>
                      <div className="doc-line w-half"></div>
                      <div style={{ marginTop: '24px', fontSize: '16px', fontWeight: 'bold' }}>₹ 45,000</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Tax Prep - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Tax Ready</h3>
                <p>Export your earnings and expenses easily for tax season.</p>
              </div>
              <div className="bento-illustration">
                <div className="dash-analytics-card" style={{ transform: 'scale(0.8)' }}>
                   <div className="dash-ac-header">
                     <span className="globe-icon">📑</span>
                     <span className="ac-title">Tax Export</span>
                   </div>
                   <div className="ac-amount">FY 2026</div>
                   <div style={{ marginTop: '16px', color: '#10b981', fontWeight: 600 }}>Ready to download</div>
                </div>
              </div>
            </div>

            {/* Multi-currency - Big Card */}
            <div className="bento-card bento-big" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
              <div className="bento-content">
                <h3>Global Payments</h3>
                <p>Accept payments from brands anywhere in the world, settled in your local currency with transparent exchange rates.</p>
              </div>
              <div className="bento-illustration bento-align-end">
                 <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
                    <div className="bento-wallet-card" style={{ width: '160px', transform: 'rotate(-5deg)' }}>
                      <div className="bento-wallet-balance" style={{ fontSize: '24px' }}>$ 5,000</div>
                      <div className="bento-wallet-label">USD Received</div>
                    </div>
                    <div className="bento-wallet-card" style={{ width: '160px', transform: 'rotate(5deg)' }}>
                      <div className="bento-wallet-balance" style={{ fontSize: '24px' }}>₹ 4,15,000</div>
                      <div className="bento-wallet-label">INR Settled</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section" style={{ padding: '120px 24px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '56px', fontWeight: 700, marginBottom: '24px', letterSpacing: '-1px', color: '#111' }}>
          Stop waiting to get paid.
        </h2>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Join thousands of creators who are already managing their finances on Creonity.
        </p>
        <Link 
          href="/signup" 
          className="btn-cta-main"
          style={{ 
            textDecoration: 'none', 
            display: 'inline-block',
            backgroundColor: '#111',
            color: '#fff',
            fontSize: '18px'
          }}
        >
          Sign up for free
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
