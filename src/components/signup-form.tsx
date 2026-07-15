"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+1", country: "Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
]

const categories = [
  { value: "lifestyle", label: "Lifestyle" },
  { value: "technology", label: "Technology" },
  { value: "gaming", label: "Gaming" },
  { value: "fashion", label: "Fashion & Beauty" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
]

export function SignUpForm() {
  const router = useRouter()
  const [accountType, setAccountType] = useState<"creator" | "brand">("creator")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Custom dropdown states
  const [phonePrefix, setPhonePrefix] = useState("+1")
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false)
  
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)

  // Close dropdowns on outside click (simple implementation)
  const phoneRef = useRef<HTMLDivElement>(null)
  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false)
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      // Simulate account creation and redirect
      setIsLoading(false)
      const isProd = process.env.NODE_ENV === 'production'
      const dashboardUrl = isProd ? 'https://app.creonity.com' : 'http://localhost:3002'
      window.location.href = `${dashboardUrl}/onboarding`
    }, 1000)
  }

  return (
    <div className="signup-form-wrapper">
      <div className="signup-form-inner">
        <div className="signup-header">
          <h1 className="signup-title">Create an account</h1>
          <p className="signup-subtitle">Join Creonity and start your journey.</p>
        </div>

        {/* Account Type Toggle */}
        <div className="signup-toggle-container">
          <button
            type="button"
            onClick={() => setAccountType("creator")}
            className={`signup-toggle-btn ${accountType === "creator" ? "active" : ""}`}
          >
            I'm a Creator
          </button>
          <button
            type="button"
            onClick={() => setAccountType("brand")}
            className={`signup-toggle-btn ${accountType === "brand" ? "active" : ""}`}
          >
            I'm a Brand
          </button>
        </div>

        <form className="signup-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {accountType === "creator" ? "Full Name" : "Company Name"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={accountType === "creator" ? "Aryan Kapoor" : "Nike Inc."}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className="phone-input-wrapper">
              <div className="custom-dropdown-container" ref={phoneRef}>
                <button 
                  type="button" 
                  className="dropdown-trigger phone-prefix-btn"
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                >
                  <span>{phonePrefix}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                
                {isPhoneDropdownOpen && (
                  <div className="dropdown-menu phone-dropdown-menu">
                    {countryCodes.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="dropdown-item phone-dropdown-item"
                        onClick={() => {
                          setPhonePrefix(item.code)
                          setIsPhoneDropdownOpen(false)
                        }}
                      >
                        <span className="phone-code-text">{item.code}</span>
                        <span className="phone-country-text">{item.country}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone number"
                className="form-input phone-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Primary Category</label>
            <div className="custom-dropdown-container" ref={categoryRef}>
              <button 
                type="button" 
                className="dropdown-trigger category-btn"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              >
                <span className={!selectedCategory ? "placeholder-text" : ""}>
                  {selectedCategory ? categories.find(c => c.value === selectedCategory)?.label : "Select a category"}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="dropdown-menu category-dropdown-menu">
                  {categories.map((cat) => (
                    <div 
                      key={cat.value} 
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedCategory(cat.value)
                        setIsCategoryDropdownOpen(false)
                      }}
                    >
                      {cat.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {accountType === "creator" && (
            <div className="form-group">
              <label htmlFor="socialHandle" className="form-label">
                Primary Social Handle
              </label>
              <input
                id="socialHandle"
                name="socialHandle"
                type="text"
                required
                placeholder="@aryankapoor"
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                placeholder="Create a strong password"
                className="form-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-btn"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
          </div>
          
          <button 
            type="submit"
            className="signup-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <a href={process.env.NODE_ENV === 'production' ? 'https://app.creonity.com/login' : 'http://localhost:3002/login'} className="signup-login-link">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
