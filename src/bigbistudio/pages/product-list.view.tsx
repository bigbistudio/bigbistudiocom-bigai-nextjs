// Internal
import {
  HeroSimpleSection,
  ProductOverviewSection,
  FeaturesCarouselSection,
  OpenSourceSection,
} from "@/bigbistudio/sections"
import { ProductGrid } from "@/bigbistudio/sections/product-list/grids/product-grid"

import { EyebrowIcon } from "@/bigbistudio/components/icons"

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
        <ProductOverviewSection {...page.sections.productOverview} />
        <div className="container flex flex-col justify-center gap-16 py-20">
          <div className="flex flex-col lg:items-center gap-2.5">
            <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
              <EyebrowIcon /> Product List
            </span>
            <h2 className="lg:whitespace-pre-line">Available Editions</h2>
          </div>
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
