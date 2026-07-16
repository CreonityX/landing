import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/FooterSection';

export default function AnalyticsPage() {
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
          Know your audience. <br/> Grow your empire.
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#555555', 
          maxWidth: '700px', 
          marginBottom: '48px',
          lineHeight: 1.5
        }}>
          Connect all your social accounts to get a unified view of your performance, demographics, and campaign ROI.
        </p>
        <Link 
          href="/signup" 
          className="btn-cta-main"
          style={{ textDecoration: 'none', display: 'inline-block', backgroundColor: '#111111', color: '#ffffff' }}
        >
          View your stats
        </Link>
      </section>

      {/* LIGHT FEATURES SECTION */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px 120px', position: 'relative', zIndex: 10 }}>
        <div className="features-content">
          <h2 style={{ fontFamily: 'PP Right Grotesk Wide, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '64px' }}>
            Data that makes a difference.
          </h2>
          
          <div className="bento-grid">
            
            {/* Unified Dashboard - Big Card */}
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Unified Dashboard</h3>
                <p>See your YouTube, Instagram, TikTok, and Twitter growth all in one beautiful dashboard.</p>
              </div>
              <div className="bento-illustration bento-kanban-board">
                <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
                    <div className="dash-analytics-card" style={{ width: '180px' }}>
                       <div className="dash-ac-header">
                         <span className="globe-icon">📸</span>
                         <span className="ac-title">Instagram</span>
                       </div>
                       <div className="ac-amount">842K</div>
                       <div className="ac-trend"><span className="trend-up">↑ 12%</span></div>
                    </div>
                    <div className="dash-analytics-card" style={{ width: '180px' }}>
                       <div className="dash-ac-header">
                         <span className="globe-icon">▶️</span>
                         <span className="ac-title">YouTube</span>
                       </div>
                       <div className="ac-amount">1.2M</div>
                       <div className="ac-trend"><span className="trend-up">↑ 8%</span></div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Demographics - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Demographics</h3>
                <p>Deep dive into your audience's age, gender, and location.</p>
              </div>
              <div className="bento-illustration">
                 <div className="dash-analytics-card" style={{ transform: 'scale(0.8)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                       <span>18-24</span><span>45%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', marginBottom: '16px' }}>
                       <div style={{ width: '45%', height: '100%', background: '#3b82f6', borderRadius: '4px' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                       <span>25-34</span><span>30%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px' }}>
                       <div style={{ width: '30%', height: '100%', background: '#10b981', borderRadius: '4px' }}></div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Campaign Tracking - Small Card */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Campaign Tracking</h3>
                <p>Share live performance dashboards directly with brand partners.</p>
              </div>
              <div className="bento-illustration">
                <div className="bento-wallet-card" style={{ transform: 'rotate(-4deg)' }}>
                  <div className="bento-wallet-balance" style={{ fontSize: '20px' }}>Dyson Campaign</div>
                  <div className="bento-wallet-label">Live Link Active 🟢</div>
                  <button className="bento-wallet-btn" style={{ background: '#374151' }}>Copy Link</button>
                </div>
              </div>
            </div>

            {/* Virality Predictor - Big Card */}
            <div className="bento-card bento-big" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
              <div className="bento-content">
                <h3>Virality Predictor (AI)</h3>
                <p>Our machine learning models analyze your first hour of engagement to predict total video performance.</p>
              </div>
              <div className="bento-illustration bento-align-end">
                <div className="dash-analytics-card" style={{ transform: 'rotate(2deg) scale(0.95)', transformOrigin: 'bottom right', margin: '0 20px 20px 0' }}>
                   <div className="dash-ac-header">
                     <span className="globe-icon">🔮</span>
                     <span className="ac-title">Predicted Views</span>
                   </div>
                   <div className="ac-amount">4.5M - 5.2M</div>
                   <div className="ac-trend"><span className="trend-up">Viral Trajectory 🔥</span></div>
                   <div className="ac-chart-area">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ac-line-chart">
                        <path d="M0,50 L0,40 Q20,35 40,20 T80,5 L100,0 L100,50 Z" fill="url(#blueGrad)" />
                        <path d="M0,40 Q20,35 40,20 T80,5 L100,0" stroke="#3b82f6" strokeWidth="3" fill="none" />
                        <defs>
                           <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
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
          Stop guessing. Start knowing.
        </h2>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Join thousands of creators who are already tracking their success on Creonity.
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
