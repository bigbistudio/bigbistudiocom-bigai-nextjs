// Internal
import {
  ProductDetailHeroSection,
  ProductDetailContentSection,
} from "@/bigbistudio/sections"
import { ProductsSection } from "@/bigbistudio/sections/product-list/products.section"

import { getRelatedProducts } from "@/bigbistudio/lib/product"

// Types
import type { Product } from "@/bigbistudio/types/product.types"

type ProductDetailViewProps = {
  currentProduct: Product
}

export async function ProductDetailView({ currentProduct }: ProductDetailViewProps) {
  const relatedContent = {
    id: "related-products",
    eyebrow: "Related Products",
    title: "Explore More",
    productSlugs: await getRelatedProducts(currentProduct.meta.slug),
  }

  return (
    <main className="relative z-10 flex flex-col items-center justify-center w-full">
      <div className="container px-0 flex flex-col justify-center border border-line-translucent divide-y divide-line-translucent py-20">
        <ProductDetailHeroSection currentProduct={currentProduct} />
        <ProductDetailContentSection currentProduct={currentProduct} />
        <ProductsSection {...relatedContent} />
      </div>
    </main>
  )
}
