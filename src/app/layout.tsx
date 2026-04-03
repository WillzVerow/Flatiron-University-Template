import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const primaryFont = Poppins({
  variable: "--font-primary-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Furman University x Flatiron School — Tech Education",
  description: "Flatiron School partners with Furman University to offer credentialed tech bootcamps in Data Science, AI & Machine Learning, and Cybersecurity. Get hands-on experience while still in school.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${GeistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
