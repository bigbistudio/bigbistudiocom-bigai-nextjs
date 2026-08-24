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

export function ProductDetailView({
  currentProduct,
}: ProductDetailViewProps) {
  return (
    <main className="container relative flex flex-col lg:max-w-180 px-4 py-20 z-10">
      <ProductDetailHeroSection currentProduct={currentProduct} />
      <ProductDetailContentSection currentProduct={currentProduct} />
    </main>
  )
}
