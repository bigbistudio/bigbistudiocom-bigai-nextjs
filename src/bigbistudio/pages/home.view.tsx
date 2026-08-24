// Internal
import {
  HeroMainSection,
  LogosSection,
  FeaturesCarouselSection,
  ProcessGridSection,
  PricingSection,
  OpenSourceSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  BlogSection,
} from "@/bigbistudio/sections/index"

import { homePageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = homePageData

export function HomeView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent max-w-full">
        <HeroMainSection {...page.sections.heroMain} />
        <CaseStudiesSection {...page.sections.caseStudies} />
        <LogosSection {...page.sections.clientLogos} />
        <FeaturesCarouselSection {...page.sections.featuresCarousel} />
        <ProcessGridSection {...page.sections.processGrid} />
        <OpenSourceSection {...page.sections.openSource} />
        <PricingSection {...page.sections.pricing} />
        <TestimonialsSection {...page.sections.testimonials} />
        <FAQSection
          {...page.sections.faqGeneral}
          questions={faqsData.faqGeneral}
        />
        <BlogSection {...page.sections.blog} />
      </div>
    </main>
  )
}
