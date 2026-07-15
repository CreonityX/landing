import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creonity — Creator Platform",
  description: "Your ideas, powered by Creonity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
