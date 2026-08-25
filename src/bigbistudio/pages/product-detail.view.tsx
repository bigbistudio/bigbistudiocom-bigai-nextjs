// Internal
import {
  ProductDetailHeroSection,
  ProductDetailContentSection,
} from "@/bigbistudio/sections"

// Types
import type { Product } from "@/bigbistudio/types/product.types"

type ProductDetailViewProps = {
  currentProduct: Product
}

export function ProductDetailView({ currentProduct }: ProductDetailViewProps) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="container px-0 flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent py-20">
        <ProductDetailHeroSection currentProduct={currentProduct} />
        <ProductDetailContentSection currentProduct={currentProduct} />
      </div>
    </main>
  )
}
