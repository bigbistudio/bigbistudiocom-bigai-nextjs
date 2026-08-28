// Internal
import {
  HeroSimpleSection,
  LogosSection,
  FAQSection,
} from "@/bigbistudio/sections"
import { PortableText } from "@/bigbistudio/components/ui"

import { aboutPageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

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
          <div className="prose prose-invert flex flex-col text-left xl:max-w-210 [&_strong]:text-brand-surface [&_h2]:flex [&_h2]:items-center [&_img]:w-6 [&_img]:mx-2 [&_img]:rounded-full">
            <PortableText blocks={aboutContent} />
          </div>
        </section>
        <LogosSection {...page.sections.clientLogos} />
        <FAQSection
          {...page.sections.faqGeneral}
          questions={faqsData.faqGeneral}
        />
      </div>
    </main>
  )
}
