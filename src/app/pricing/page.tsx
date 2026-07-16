import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/FooterSection';

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar transparent={false} />
      
      {/* LIGHT HERO SECTION */}
      <section style={{ 
        padding: '120px 24px 80px', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        flex: 1
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#f3f4f6',
          color: '#374151',
          padding: '6px 16px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: 600,
          marginBottom: '32px',
          letterSpacing: '1px'
        }}>
          SIMPLE PRICING
        </div>
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
          Free to start. <br/> Scale as you grow.
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#555555', 
          maxWidth: '700px', 
          marginBottom: '64px',
          lineHeight: 1.5
        }}>
          No hidden fees. No complicated tiers. Just simple pricing designed to help you build your empire.
        </p>

        {/* PRICING CARDS */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', width: '100%' }}>
          
          {/* Free Tier */}
          <div style={{ 
             flex: '1 1 300px', 
             background: '#f9fafb', 
             border: '1px solid #e5e7eb', 
             borderRadius: '24px', 
             padding: '48px 32px',
             textAlign: 'left',
             display: 'flex',
             flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Starter</h3>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>$0<span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 500 }}>/month</span></div>
            <p style={{ color: '#6b7280', marginBottom: '32px' }}>Perfect for new creators just starting out.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#374151', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Basic Media Kit</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ 1 Social Account Link</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ 5% Transaction Fee</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9ca3af' }}>- Standard Analytics</li>
            </ul>
            <Link href="/signup" style={{ 
               display: 'block', 
               textAlign: 'center', 
               padding: '16px', 
               borderRadius: '12px', 
               background: '#e5e7eb', 
               color: '#111', 
               textDecoration: 'none', 
               fontWeight: 600,
               transition: 'background 0.2s'
            }}>Get Started</Link>
          </div>

          {/* Pro Tier */}
          <div style={{ 
             flex: '1 1 300px', 
             background: '#111111', 
             color: '#ffffff',
             borderRadius: '24px', 
             padding: '48px 32px',
             textAlign: 'left',
             display: 'flex',
             flexDirection: 'column',
             position: 'relative',
             transform: 'scale(1.05)',
             boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: '#ec4899', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Pro</h3>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>$19<span style={{ fontSize: '18px', color: '#9ca3af', fontWeight: 500 }}>/month</span></div>
            <p style={{ color: '#9ca3af', marginBottom: '32px' }}>For professional creators ready to scale.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e5e7eb', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Dynamic Media Kit Pro</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Unlimited Social Accounts</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ 2% Transaction Fee</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Advanced Analytics & Demographics</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Instant Payouts</li>
            </ul>
            <Link href="/signup" style={{ 
               display: 'block', 
               textAlign: 'center', 
               padding: '16px', 
               borderRadius: '12px', 
               background: '#fff', 
               color: '#111', 
               textDecoration: 'none', 
               fontWeight: 600,
               transition: 'background 0.2s'
            }}>Upgrade to Pro</Link>
          </div>

          {/* Agency Tier */}
          <div style={{ 
             flex: '1 1 300px', 
             background: '#f9fafb', 
             border: '1px solid #e5e7eb', 
             borderRadius: '24px', 
             padding: '48px 32px',
             textAlign: 'left',
             display: 'flex',
             flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Agency</h3>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>$99<span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 500 }}>/month</span></div>
            <p style={{ color: '#6b7280', marginBottom: '32px' }}>For talent agencies and management teams.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#374151', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Everything in Pro</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Manage Unlimited Creators</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Custom Domain</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ Dedicated Account Manager</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>✓ API Access</li>
            </ul>
            <Link href="/signup" style={{ 
               display: 'block', 
               textAlign: 'center', 
               padding: '16px', 
               borderRadius: '12px', 
               background: '#e5e7eb', 
               color: '#111', 
               textDecoration: 'none', 
               fontWeight: 600,
               transition: 'background 0.2s'
            }}>Contact Sales</Link>
          </div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
}
