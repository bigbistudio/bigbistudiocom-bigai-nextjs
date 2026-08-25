// Internal
import {
  HeroMainSection,
  LogosSection,
  ProductsSection,
  FeaturesCarouselSection,
  ProcessGridSection,
  OpenSourceSection,
  FAQSection,
} from "@/bigbistudio/sections/index"

import { homePageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = homePageData

export function HomeView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent max-w-full">
        <HeroMainSection {...page.sections.heroMain} />
        <ProductsSection {...page.sections.products} />
        <LogosSection {...page.sections.clientLogos} />
        <FeaturesCarouselSection {...page.sections.featuresCarousel} />
        <ProcessGridSection {...page.sections.processGrid} />
        <OpenSourceSection {...page.sections.openSource} />
        <FAQSection
          {...page.sections.faqGeneral}
          questions={faqsData.faqGeneral}
        />
      </div>
    </main>
  )
}
