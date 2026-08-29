// Internal
import { LegalHeroSection, LegalContentSection } from "@/bigbistudio/sections"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

type LegalPageViewProps = {
  page: LegalPage
}

export function LegalPageView({ page }: LegalPageViewProps) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
       <div className="container px-0 flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent">
        <LegalHeroSection page={page} />
        <LegalContentSection page={page} />
      </div>
    </main>
  )
}
