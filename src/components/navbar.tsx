"use client"
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  return (
    <nav className={`navbar ${transparent ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="nav-left" style={{ position: 'relative', zIndex: 50 }}>
        <Link href="/" className="logo-link" style={{ textDecoration: 'none' }}>
          <span style={{ 
            fontFamily: 'Champ Black, sans-serif', 
            fontSize: '32px', 
            color: transparent ? '#FFFFFF' : '#111111',
            lineHeight: 1
          }}>
            creonity
          </span>
        </Link>
      </div>
      
      <div className="nav-center" style={{ position: 'relative', zIndex: 50 }}>
        <Link href="/creators" className="nav-link">Creators</Link>
        <Link href="/brands" className="nav-link">Brands</Link>
        <Link href="/monetization" className="nav-link">Monetization</Link>
        <Link href="/analytics" className="nav-link">Analytics</Link>
        <Link href="/pricing" className="nav-link">Pricing</Link>
      </div>
      
      <div className="nav-right" style={{ position: 'relative', zIndex: 50 }}>
        <Link 
          href={process.env.NODE_ENV === 'production' ? 'https://app.creonity.com/login' : 'http://localhost:3002/login'}
          className={transparent ? "nav-btn-login" : "nav-btn-login-dark"}
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Log in
        </Link>
        <Link 
          href="/signup" 
          className={transparent ? "nav-btn-signup" : "nav-btn-signup-dark"}
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
