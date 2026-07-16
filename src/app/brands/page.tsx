import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/FooterSection';

export default function BrandsPage() {
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
          fontSize: '64px', 
          color: '#111111', 
          fontWeight: 700,
          letterSpacing: '-2px',
          lineHeight: 1.1,
          maxWidth: '1100px',
          marginBottom: '24px'
        }}>
          Scale your influencer <br/> marketing seamlessly.
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#555555', 
          maxWidth: '700px', 
          marginBottom: '48px',
          lineHeight: 1.5
        }}>
          Discover top creators, automate contracts, and track campaign ROI in real-time. Say goodbye to messy spreadsheets.
        </p>
        <Link 
          href="/signup" 
          className="btn-cta-main"
          style={{ textDecoration: 'none', display: 'inline-block', backgroundColor: '#111111', color: '#ffffff' }}
        >
          Start hiring today
        </Link>

        {/* DEVICE SHOWCASE */}
        <div style={{ width: '100%', maxWidth: '1400px', margin: '48px auto 0', overflow: 'hidden', padding: '0 24px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '-13%' }}>
            {/* Pro Display XDR */}
            <div style={{ position: 'relative', width: '70%', aspectRatio: '16/9', zIndex: 1 }}>
              <img 
                 src="/assets/pro-display.png" 
                 alt="Pro Display Frame" 
                 style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    zIndex: 1
                 }} 
              />
            </div>

            {/* Galaxy S25 */}
            <div style={{ position: 'relative', width: '16%', filter: 'drop-shadow(-20px 20px 40px rgba(0,0,0,0.4))', marginBottom: '4%', marginLeft: '-18%', zIndex: 10 }}>
               {/* Screen bounds with white background */}
               <div style={{ 
                     position: 'absolute', 
                     top: '3%', 
                     left: '4.5%', 
                     width: '91%', 
                     height: '95%', 
                     backgroundColor: '#ffffff',
                     zIndex: 1,
                     borderRadius: '32px',
                     overflow: 'hidden'
               }}>
                  <img 
                     src="/assets/iphone-screenshot.png" 
                     alt="Mobile Dashboard" 
                     style={{ 
                        position: 'absolute',
                        width: '100%', 
                        left: '0',
                        height: 'auto', 
                        top: '4%'
                     }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(4% + 2px)', backgroundColor: '#ffffff' }}></div>
                  {/* Hide baked-in dynamic island from the screenshot */}
                  <div style={{ position: 'absolute', top: '4%', left: '30%', width: '40%', height: '8%', backgroundColor: '#ffffff' }}></div>
               </div>
               <img 
                  src="/assets/galaxy-frame.png" 
                  alt="Galaxy Frame" 
                  style={{ 
                     position: 'relative', 
                     width: '100%', 
                     height: 'auto', 
                     zIndex: 2,
                     pointerEvents: 'none'
                  }} 
               />
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT FEATURES SECTION */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px 120px', position: 'relative', zIndex: 10 }}>
        <div className="features-content">
          <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '64px' }}>
            Built for modern brands.
          </h2>
          
          <div className="bento-grid">
            
            {/* Collaboration Hub - Big Card */}
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Collaboration Hub</h3>
                <p>Manage all your ongoing campaigns, negotiate deliverables, and approve content directly in the platform.</p>
              </div>
              <div className="bento-illustration bento-kanban-board">
                <div className="kanban-col">
                   <div className="kanban-col-header">NEGOTIATION</div>
                   <div className="kanban-card">Dyson Hair Series<br/><span style={{fontSize: '12px', color: '#6b7280', fontWeight: '500'}}>Lina • $2,500</span></div>
                </div>
                <div className="kanban-col">
                   <div className="kanban-col-header">CONTENT REVIEW</div>
                   <div className="kanban-card highlight-card">Nike Summer Drop<br/><span style={{fontSize: '12px', fontWeight: '500'}}>Needs Approval 🔴</span></div>
                </div>
                <div className="kanban-col">
                   <div className="kanban-col-header">ACTIVE</div>
                   <div className="kanban-card">Glossier Reel<br/><span style={{fontSize: '12px', color: '#10b981', fontWeight: '500'}}>Live 🟢</span></div>
                </div>
              </div>
            </div>
            
            {/* Smart Contracts - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Smart Contracts</h3>
                <p>Auto-generated, legally binding agreements that protect your brand.</p>
              </div>
              <div className="bento-illustration" style={{ transform: 'translateX(20px) translateY(20px)' }}>
                <div className="bento-invoice-stack">
                   <div className="invoice-paper doc-bg">
                      <div className="doc-header">AGREEMENT #482</div>
                      <div className="doc-line"></div>
                      <div className="doc-line w-half"></div>
                   </div>
                   <div className="invoice-paper invoice-fg">
                      <div className="inv-header">SIGNED CONTRACT</div>
                      <div className="doc-line"></div>
                      <div className="doc-line"></div>
                      <div className="doc-line w-half"></div>
                      <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
                         <div style={{ padding: '4px 12px', background: '#10b981', color: 'white', fontSize: '10px', borderRadius: '4px', fontWeight: 'bold' }}>VERIFIED</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Secure Escrow - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Secure Escrow</h3>
                <p>Funds are held securely until deliverables are approved.</p>
              </div>
              <div className="bento-illustration">
                <div className="bento-wallet-card" style={{ transform: 'rotate(4deg)' }}>
                  <div className="bento-wallet-balance">₹ 4,50,000</div>
                  <div className="bento-wallet-label">Held in Escrow</div>
                  <button className="bento-wallet-btn" style={{ background: '#374151' }}>View Contracts</button>
                </div>
              </div>
            </div>

            {/* Campaign ROI - Big Card */}
            <div className="bento-card bento-big" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
              <div className="bento-content">
                <h3>Live Campaign ROI</h3>
                <p>Monitor impressions, clicks, and conversions in real-time. Know exactly what you're paying for.</p>
              </div>
              <div className="bento-illustration bento-align-end">
                <div className="dash-analytics-card" style={{ transform: 'rotate(-2deg) scale(0.95)', transformOrigin: 'bottom right', margin: '0 20px 20px 0' }}>
                   <div className="dash-ac-header">
                     <span className="globe-icon">🎯</span>
                     <span className="ac-title">Campaign Conversions</span>
                   </div>
                   <div className="ac-amount">842</div>
                   <div className="ac-trend"><span className="trend-up">↑ 34.2%</span> vs last month</div>
                   <div className="ac-chart-area">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ac-line-chart">
                        <path d="M0,40 L0,50 L100,50 L100,20 Q80,10 60,30 T20,40 Z" fill="url(#pinkGrad)" />
                        <path d="M0,40 Q20,40 40,30 T80,10 T100,20" stroke="#ec4899" strokeWidth="3" fill="none" />
                        <defs>
                           <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="0"/>
                           </linearGradient>
                        </defs>
                      </svg>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section" style={{ padding: '120px 24px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '56px', fontWeight: 700, marginBottom: '24px', letterSpacing: '-1px', color: '#111' }}>
          Ready to scale your influence?
        </h2>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Join thousands of modern brands who are already building the future of digital marketing on Creonity.
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
