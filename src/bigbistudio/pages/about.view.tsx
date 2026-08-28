// Internal
import { HeroSimpleSection, LogosSection } from "@/bigbistudio/sections"
import { PortableText } from "@/bigbistudio/components/ui"

import { aboutPageData } from "@/bigbistudio/data/pages"

// Types
import type { PortableBlock } from "@/bigbistudio/types/article.types"

const page = aboutPageData
const aboutContent = page.sections.content as PortableBlock[]

export function AboutView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent container px-0">
        <HeroSimpleSection {...page.sections.heroSimple} />
        <section className="container flex justify-center py-20">
          <div className="prose prose-invert flex flex-col text-left [&_strong]:text-brand-surface xl:max-w-210">
            <PortableText blocks={aboutContent} />
          </div>
        </section>
        <LogosSection {...page.sections.clientLogos} />
      </div>
    </main>
  )
}
