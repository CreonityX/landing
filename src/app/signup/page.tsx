import React from "react"
import { SignUpForm } from "@/components/signup-form"
import { VideoSidebar } from "@/components/video-sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up — Creonity",
  description: "Create your Creonity account and start your creative journey.",
}

export default function SignUpPage() {
  return (
    <div className="signup-page">
      {/* Left side (Image/Video) */}
      <div className="signup-left">
        <VideoSidebar />
      </div>

      {/* Right side (Form) */}
      <div className="signup-right">
        <div className="signup-form-container">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
