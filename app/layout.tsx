import { Geist_Mono, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { LocaleSync } from "@/components/locale-sync"
import { CustomCursor } from "@/components/custom-cursor"
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Domi Global Group | Wholesale Trading Company",
  description:
    "Domi Global Group is a Miami-based wholesale trading company. We purchase consumer goods directly from authorized distributors across the United States, Mexico, and Canada.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", montserrat.variable)}
    >
      <body>
        <ThemeProvider>
          <LocaleSync />
          <CustomCursor />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
