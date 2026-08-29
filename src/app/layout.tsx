import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { cn } from "@/lib/utils"

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
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
