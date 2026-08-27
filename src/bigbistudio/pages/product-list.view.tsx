// Internal
import {
  HeroSimpleSection,
  FeaturesCarouselSection,
  OpenSourceSection,
} from "@/bigbistudio/sections"
import { ProductGrid } from "@/bigbistudio/sections/product-list/grids/product-grid"

import { productsPageData } from "@/bigbistudio/data/pages"
import { highlightsData } from "@/bigbistudio/data/highlights"

// Types
import type { ProductSummary } from "@/bigbistudio/types/product.types"

const page = productsPageData

type ProductListViewProps = {
  Products: ProductSummary[]
}

export function ProductListView({ Products }: ProductListViewProps) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent container px-0">
        <HeroSimpleSection {...page.sections.heroSimple} />
        <div className="container flex flex-col justify-center py-20">
          <ProductGrid Products={Products} />
        </div>
        <FeaturesCarouselSection
          {...page.sections.featuresCarousel}
          carouselData={highlightsData}
        />
        <OpenSourceSection {...page.sections.openSource} />
      </div>
    </main>
  )
}
