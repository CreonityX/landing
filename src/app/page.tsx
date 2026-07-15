import React from 'react';
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <nav className="navbar">
          <div className="nav-left">
            <a href="/" className="logo-link">
              <img src="/assets/creonity-logo.png" alt="Creonity" className="nav-logo" />
            </a>
          </div>
          
          <div className="nav-center">
            <a href="#" className="nav-link">Creators</a>
            <a href="#" className="nav-link">Brands</a>
            <a href="#" className="nav-link">Monetization</a>
            <a href="#" className="nav-link">Analytics</a>
            <a href="#" className="nav-link">Pricing</a>
          </div>
          
          <div className="nav-right" style={{ position: 'relative', zIndex: 50 }}>
            <Link 
              href={process.env.NODE_ENV === 'production' ? 'https://app.creonity.com/login' : 'http://localhost:3002/login'}
              className="nav-btn-login"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="nav-btn-signup"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Sign up
            </Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">Your ideas, powered by Creonity</h1>
          <p className="hero-subtitle">The ultimate creative suite for content creation, brand deals & more</p>
          <Link 
            href="/signup" 
            className="btn-cta-main"
            style={{ textDecoration: 'none', display: 'inline-block', position: 'relative', zIndex: 50 }}
          >
            Sign up for free
          </Link>
        </div>

        {/* Fades the bottom of the video into the white background of the next section */}
        <div className="hero-bottom-fade"></div>
      </section>

      {/* SECOND SECTION */}
      <section className="features-section">
        <div className="features-content">
          <h2>What will you create today?</h2>
          
          <div className="bento-grid">
            {/* Row 1: Small | Big */}
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
            
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Brand Collaboration Hub</h3>
                <p>Manage all your inbound brand deals, negotiations, and deliverables in one place.</p>
              </div>
              <div className="bento-illustration bento-img-illustration">
                <img src="/assets/creators/creator_laptop_1784131986753.jpg" alt="Creator working" className="bento-creator-img" />
                <div className="floating-ui-badge ui-badge-bottom-left">
                  <div className="ui-badge-icon">🤝</div>
                  <div className="ui-badge-text">
                    <span className="ui-badge-title">Nike</span>
                    <span className="ui-badge-subtitle">Offer Accepted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Big | Small */}
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Dynamic Media Kit</h3>
                <p>A live, auto-updating portfolio showcasing your best work and real-time audience metrics.</p>
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
            
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Smart Content Calendar</h3>
                <p>Schedule your deliverables, track deadlines, and never miss a brand post.</p>
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

            {/* Row 3: Small | Big */}
            <div className="bento-card bento-small bento-gradient-green">
              <div className="bento-content">
                <h3>Engagement Analytics</h3>
                <p>Deep dive into your audience demographics and track your growth.</p>
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
                <div className="floating-ui-badge" style={{ bottom: '60px', left: '10%' }}>
                  <div className="ui-badge-icon badge-pink">🔥</div>
                  <div className="ui-badge-text">
                    <span className="ui-badge-title">+15K</span>
                    <span className="ui-badge-subtitle">New Followers</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bento-card bento-big bento-gradient-pink">
              <div className="bento-content">
                <h3>Seamless Invoicing & Contracts</h3>
                <p>Send professional invoices, sign contracts digitally, and track pending payments.</p>
              </div>
              <div className="bento-illustration bento-img-illustration">
                <img src="/assets/creators/creator_duo_1784132000829.jpg" alt="Creators laughing" className="bento-creator-img img-shift-left" />
                <div className="floating-ui-badge ui-badge-center">
                  <div className="ui-badge-icon badge-green">💰</div>
                  <div className="ui-badge-text">
                    <span className="ui-badge-title">$4,000</span>
                    <span className="ui-badge-subtitle">Invoice Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATORS SCROLL SECTION */}
      <section className="creators-section">
        <h2 className="creators-heading">Built by creators, for creators</h2>
        <div className="creators-scroll-wrapper">
          <div className="creators-scroll-track">
            {/* First Set */}
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="creator-video-card">
                <video 
                  className="creator-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={`/assets/creators/vid ${num}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
            {/* Duplicate Set for Infinite Marquee */}
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={`dup-${num}`} className="creator-video-card">
                <video 
                  className="creator-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={`/assets/creators/vid ${num}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="brands-section">
        <div className="brands-header">
          <h2 className="brands-heading">Our Business Features</h2>
          <p className="brands-subheading">
            Enhance the design capabilities of your team or your entire business with Creonity's business plans! To enquire about our Enterprise plan, please contact us here!
          </p>
        </div>
        
        <div className="brands-carousel-container">
          <div className="brands-carousel">
            <div className="brand-card">
              <div className="brand-card-content">
                <h3>Secure Escrow</h3>
                <p>Ensure safe transactions with our robust escrow system.</p>
              </div>
              <div className="illustration-wrapper">
                <div className="dash-finance-card">
                  <div className="dash-fc-header">
                    <span className="wallet-icon">💳</span>
                    <span className="fc-title">Available to Payout</span>
                  </div>
                  <div className="fc-amount">₹84,200</div>
                  <div className="fc-trend"><span className="trend-up">↑ 12.5%</span> vs last month</div>
                </div>
                <div className="floating-tooltip tooltip-pink tooltip-pos-1">
                  Escrow Secured
                  <div className="tooltip-tail"></div>
                </div>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-card-content">
                <h3>Advanced Analytics</h3>
                <p>Track your campaign performance with real-time insights.</p>
              </div>
              <div className="illustration-wrapper bg-soft-blue">
                <div className="dash-analytics-card">
                   <div className="dash-ac-header">
                     <span className="globe-icon">🌐</span>
                     <span className="ac-title">Total Reach</span>
                   </div>
                   <div className="ac-amount">307.3K</div>
                   <div className="ac-trend"><span className="trend-up">↑ 24.5%</span> last 7d</div>
                   <div className="ac-chart-area">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ac-line-chart">
                        <path d="M0,50 L0,40 Q10,35 20,40 T40,30 T60,25 T80,15 T100,5 L100,50 Z" className="ac-chart-fill" />
                        <path d="M0,40 Q10,35 20,40 T40,30 T60,25 T80,15 T100,5" className="ac-chart-line" />
                      </svg>
                   </div>
                </div>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-card-content">
                <h3>Seamless Conversations</h3>
                <p>Collaborate efficiently with built-in chat and audio tools.</p>
              </div>
              <div className="illustration-wrapper bg-soft-yellow">
                <div className="audio-visualizer">
                   <div className="wave-bars">
                     <div className="wave-bar h-1"></div>
                     <div className="wave-bar h-3"></div>
                     <div className="wave-bar h-5"></div>
                     <div className="wave-bar h-2"></div>
                     <div className="wave-bar h-4"></div>
                     <div className="wave-bar h-1"></div>
                     <div className="wave-bar h-6"></div>
                     <div className="wave-bar h-4"></div>
                     <div className="wave-bar h-2"></div>
                     <div className="wave-bar h-5"></div>
                   </div>
                   <div className="avatar-box avatar-pos-1">👩🏽</div>
                   <div className="avatar-box avatar-pos-2">👩🏻‍💼</div>
                </div>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-card-content">
                <h3>Dynamic Bidding</h3>
                <p>Get the best rates by letting creators bid on your projects.</p>
              </div>
              <div className="illustration-wrapper bg-soft-green">
                <div className="dash-project-card">
                  <div className="project-badge">CREONITY X STUDIO</div>
                  <div className="project-title">PROJECT OVERVIEW</div>
                </div>
                <div className="floating-tooltip tooltip-red tooltip-pos-2">
                  Anita
                  <div className="tooltip-tail"></div>
                </div>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-card-content">
                <h3>Smart Contracts</h3>
                <p>Automate agreements with foolproof smart contracts.</p>
              </div>
              <div className="illustration-wrapper bg-soft-purple">
                <div className="dash-contract-card">
                  <div className="contract-header"><span className="emoji-icon">📜</span> AGREEMENT</div>
                  <div className="contract-title">Brand Collab</div>
                  <div className="contract-body">
                    <div className="text-line w-full"></div>
                    <div className="text-line w-3-4"></div>
                    <div className="text-line highlight"></div>
                  </div>
                </div>
                <div className="floating-tooltip tooltip-red tooltip-pos-3">
                  Rahul
                  <div className="tooltip-tail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
