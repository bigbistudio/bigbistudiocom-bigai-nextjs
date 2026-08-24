// Internal
import { HeroSimpleSection } from "@/bigbistudio/sections"
import { ProductGrid } from "@/bigbistudio/sections/product-list/grids/product-grid"

import { productsPageData } from "@/bigbistudio/data/pages"

// Types
import type { ProductSummary } from "@/bigbistudio/types/product.types"

const page = productsPageData

type ProductListViewProps = {
  Products: ProductSummary[]
}

export function ProductListView({ Products }: ProductListViewProps) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent max-w-full">
        <HeroSimpleSection {...page.sections.heroSimple} />
        <div className="w-full mx-auto">
          <div className="container flex flex-col justify-center py-20">
            <ProductGrid Products={Products} />
          </div>
        </div>
      </div>
    </main>
  )
}
