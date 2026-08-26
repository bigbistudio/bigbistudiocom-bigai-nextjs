// Internal
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"

import { CardsCarousel } from "./carousel/feature-cards-carousel"
import { FeatureSectionHeader } from "./header/features-section-header"

import { featureData } from "@/bigbistudio/data/features"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"
import type { Features } from "@/bigbistudio/types/features.types"

const carouselData = featureData as Features

export function FeaturesCarouselSection({
  id,
  eyebrow,
  title,
  subtitle,
  buttons,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container flex flex-col py-20 scroll-mt-12 xl:scroll-mt-24"
    >
      <FeatureSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
      <CardsCarousel {...carouselData} />
      <div className="flex justify-center gap-2.5">
        <ButtonCtaGroup buttons={buttons} />
      </div>
    </section>
  )
}
