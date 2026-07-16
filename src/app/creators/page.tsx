import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/FooterSection';

export default function CreatorsPage() {
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
          Turn your audience into an empire.
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#555555', 
          maxWidth: '700px', 
          marginBottom: '48px',
          lineHeight: 1.5
        }}>
          Automate your media kit, schedule brand deliverables, and get paid instantly. The only tool you need to run your creator business.
        </p>
        <Link 
          href="/signup" 
          className="btn-cta-main"
          style={{ textDecoration: 'none', display: 'inline-block', backgroundColor: '#111111', color: '#ffffff' }}
        >
          Start building for free
        </Link>

        {/* DEVICE SHOWCASE */}
        <div style={{ width: '100%', maxWidth: '1400px', margin: '48px auto 0', overflow: 'hidden', padding: '0 24px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '-8%' }}>
            {/* MacBook */}
            <div style={{ position: 'relative', width: '70%', aspectRatio: '16/9', zIndex: 1 }}>
              <img 
                 src="/assets/dashboard-screenshot.png" 
                 alt="Dashboard" 
                 style={{ 
                    position: 'absolute', 
                    top: '5%', 
                    left: '12.5%', 
                    width: '75%', 
                    height: '79%', 
                    objectFit: 'cover',
                    zIndex: 2,
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                 }} 
              />
              <img 
                 src="/assets/macbook-frame.png" 
                 alt="Macbook Frame" 
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

            {/* iPhone */}
            <div style={{ position: 'relative', width: '16%', filter: 'drop-shadow(-20px 20px 40px rgba(0,0,0,0.25))', marginBottom: '1%', marginLeft: '-12%', zIndex: 10 }}>
               {/* Screen bounds with white background */}
               <div style={{ 
                     position: 'absolute', 
                     top: '2%', 
                     left: '5.5%', 
                     width: '89%', 
                     height: '96%', 
                     backgroundColor: '#ffffff',
                     zIndex: 1,
                     borderRadius: '24px',
                     overflow: 'hidden'
               }}>
                  <img 
                     src="/assets/iphone-screenshot.png" 
                     alt="Mobile Dashboard" 
                     style={{ 
                        position: 'absolute',
                        width: '102%', 
                        left: '-1%',
                        height: 'auto', 
                        top: '4%'
                     }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(4% + 2px)', backgroundColor: '#ffffff' }}></div>
               </div>
               <img 
                  src="/assets/iphone-frame.png" 
                  alt="iPhone Frame" 
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
      <section style={{ backgroundColor: '#ffffff', padding: '60px 24px 120px', position: 'relative', zIndex: 10 }}>
        <div className="features-content">
          <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '64px' }}>
            Everything you need, in one place.
          </h2>
          
          <div className="bento-grid">
            
            {/* Dynamic Media Kit - Big Card */}
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Dynamic Media Kit</h3>
                <p>A live, auto-updating portfolio showcasing your best work and real-time audience metrics. Never send a static PDF again.</p>
              </div>
              <div className="bento-illustration bento-img-illustration">
                <img src="/assets/creators/creator_phone_1784131974848.jpg" alt="Creator on phone" className="bento-creator-img img-shift-up" />
                <div className="floating-ui-badge ui-badge-top-right">
                  <div className="ui-badge-icon badge-pink">🌟</div>
                  <div className="ui-badge-text">
                    <span className="ui-badge-title">1.2M</span>
                    <span className="ui-badge-subtitle">Followers</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Smart Content Calendar - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Smart Calendar</h3>
                <p>Schedule deliverables and never miss a brand post.</p>
              </div>
              <div className="bento-illustration">
                <div className="bento-calendar-card">
                  <div className="calendar-header">
                     <span className="cal-month">August 2026</span>
                     <span className="cal-nav">← →</span>
                  </div>
                  <div className="calendar-grid">
                     <div className="cal-day">12</div>
                     <div className="cal-day">13</div>
                     <div className="cal-day">14<div className="cal-dot pink-dot"></div></div>
                     <div className="cal-day">15</div>
                     <div className="cal-day active-day">16<div className="cal-dot green-dot"></div></div>
                     <div className="cal-day">17</div>
                     <div className="cal-day">18</div>
                  </div>
                  <div className="calendar-event">
                     <div className="event-time">10:00<br/>AM</div>
                     <div className="event-details">
                        <div className="event-title">Post Nike Reel</div>
                        <div className="event-tag">Deliverable</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Payouts - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Instant Payouts</h3>
                <p>Withdraw your earnings instantly to your preferred bank account.</p>
              </div>
              <div className="bento-illustration">
                <div className="bento-wallet-card">
                  <div className="bento-wallet-balance">₹ 1,24,500</div>
                  <div className="bento-wallet-label">Available Balance</div>
                  <button className="bento-wallet-btn">Withdraw Now</button>
                </div>
              </div>
            </div>

            {/* Engagement Analytics - Big Card */}
            <div className="bento-card bento-big" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
              <div className="bento-content">
                <h3>Deep Engagement Analytics</h3>
                <p>Track your audience growth, demographics, and campaign performance across all platforms in real-time.</p>
              </div>
              <div className="bento-illustration bento-align-end">
                <div className="dash-analytics-card" style={{ transform: 'rotate(-2deg) scale(0.95)', transformOrigin: 'bottom right', margin: '0 20px 20px 0' }}>
                   <div className="dash-ac-header">
                     <span className="globe-icon">📈</span>
                     <span className="ac-title">Follower Growth</span>
                   </div>
                   <div className="ac-amount">1.2M</div>
                   <div className="ac-trend"><span className="trend-up">↑ 12.5%</span> last 30d</div>
                   <div className="ac-chart-area">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ac-line-chart">
                        <path d="M0,50 L0,40 Q10,35 20,40 T40,30 T60,25 T80,15 T100,5 L100,50 Z" className="ac-chart-fill" />
                        <path d="M0,40 Q10,35 20,40 T40,30 T60,25 T80,15 T100,5" className="ac-chart-line" />
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
          Join thousands of creators who are already building the future of digital content on Creonity.
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
