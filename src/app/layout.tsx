import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "../components/theme-provider"
import { LanguageProvider } from "../lib/i18n"
import { Toaster } from "@/components/ui/toaster"
import { site } from "@/data/site"

const archivo = localFont({
  src: "../../public/fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
})

// TODO: set NEXT_PUBLIC_SITE_URL in production (e.g. Vercel env vars) once
// the site has its real domain, so canonical/OG URLs resolve correctly.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const title = "Alejo Marcó — Desarrollador Full Stack · React, Node.js y SQL"
const description =
  "Desarrollador Full Stack y líder técnico en Córdoba, Argentina. React, Next.js, Node.js, Oracle PL/SQL y PostgreSQL para sistemas de gestión, e-commerce y plataformas financieras. IA aplicada a la resolución de problemas."

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
    "Node.js",
    "PostgreSQL",
    "Sistemas de gestión",
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
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
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
      <body className={`${archivo.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
