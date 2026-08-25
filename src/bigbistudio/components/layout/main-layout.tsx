// External
import { ReactNode } from "react"

// Internal
import { Header, FooterCTA, Footer } from "./index"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen pt-16">
      <Header />
      {children}
      <FooterCTA />
      <Footer />
    </div>
  )
}
