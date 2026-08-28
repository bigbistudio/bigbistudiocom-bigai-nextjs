// Internal
import {
  HeroSimpleSection,
  ContactFormSection,
  FAQSection,
} from "@/bigbistudio/sections"

import { contactPageData } from "@/bigbistudio/data/pages"
import { faqsData } from "@/bigbistudio/data/faqs"

const page = contactPageData

export function ContactView() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent container px-0">
        <HeroSimpleSection {...page.sections.heroSimple} />
        <ContactFormSection {...page.sections.contactForm} />
        <FAQSection
          {...page.sections.faqGeneral}
          questions={faqsData.faqGeneral}
        />
      </div>
    </main>
  )
}
