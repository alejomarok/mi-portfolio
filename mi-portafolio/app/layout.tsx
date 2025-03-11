import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Professional portfolio showcasing skills, experience and projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'