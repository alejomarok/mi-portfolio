import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "../components/theme-provider"
import { LanguageProvider } from "../lib/i18n"
import { Toaster } from "@/components/ui/toaster"
import { site } from "@/data/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// TODO: set NEXT_PUBLIC_SITE_URL in production (e.g. Vercel env vars) once
// the site has its real domain, so canonical/OG URLs resolve correctly.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const title = "Alejo Marcó — Líder Técnico & Desarrollador Full Stack"
const description =
  "Líder Técnico, desarrollador Oracle PL/SQL y desarrollador Full Stack especializado en sistemas de negocio críticos, modernización de aplicaciones legacy, React, Next.js y desarrollo backend."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Alejo Marcó",
    "Technical Lead",
    "Oracle PL/SQL Developer",
    "Full Stack Developer",
    "Legacy Systems",
    "React",
    "Next.js",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: site.name,
    images: [{ url: "/profile.jpeg", width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
