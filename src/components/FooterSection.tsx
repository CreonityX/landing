import React from 'react';
import Link from 'next/link';
import { LogoFacebook, LogoLinkedin, Globe } from '@gravity-ui/icons';

// Standard SVG for Instagram as it's not in Gravity UI icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Standard SVG for X (Twitter)
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ 
              fontFamily: 'Champ Black, sans-serif', 
              fontSize: '28px', 
              color: '#111',
              lineHeight: 1
            }}>
              creonity
            </span>
          </Link>
          <div className="footer-downloads" style={{ marginTop: '16px' }}>
            <Link href="/signup">
              <button className="footer-btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Creator Suite</a>
            <a href="#">Brand Dashboard</a>
            <a href="#">Creonity AI</a>
            <a href="#">Monetization</a>
            <a href="#">Analytics</a>
            <a href="#">Features</a>
            <a href="#">Templates</a>
          </div>
          
          <div className="footer-column">
            <h4>Plans</h4>
            <a href="#">Free</a>
            <a href="#">Creator Pro</a>
            <a href="#">Business</a>
            <a href="#">Enterprise</a>
            <a href="#">Education</a>
            <a href="#">Contact Sales</a>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <a href="#">Creator Hub</a>
            <a href="#">Brand Directory</a>
            <a href="#">Affiliates</a>
            <a href="#">Events</a>
            <a href="#">Creonity Fund</a>
            <a href="#">Podcast</a>
          </div>

          <div className="footer-column">
            <h4>Company & Help</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Newsroom</a>
            <a href="#">Help Center</a>
            <a href="#">Security</a>
            <a href="#">Trust Center</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <button className="footer-lang-btn">
            <Globe width={16} height={16} />
            <span>English (US)</span>
          </button>
          <div className="footer-socials">
            <a href="#"><LogoLinkedin width={18} height={18} /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LogoFacebook width={18} height={18} /></a>
            <a href="#"><XIcon /></a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <span className="footer-copyright">© 2026 Creonity All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
