import { Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { CookieConsent } from "@/bigbistudio/components/cookie-consent/cookie-consent"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "dark",
        inter.variable,
        "font-sans",
        "bigbistyle",
      )}
    >
      <body className="min-h-full">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
