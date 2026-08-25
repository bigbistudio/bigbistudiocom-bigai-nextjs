// Internal
import { ProductCard } from "../cards/product-card"

// Types
import type { ProductSummary } from "@/bigbistudio/types/product.types"

type ProductGridProps = {
  numberOfColumns?: number
  Products: ProductSummary[]
}

export function ProductGrid({
  numberOfColumns = 2,
  Products,
}: ProductGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        numberOfColumns === 2
          ? "lg:grid-cols-2"
          : numberOfColumns === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
      }`}
    >
      {Products.map((product) => (
        <ProductCard key={product.meta.slug} product={product} />
      ))}
    </div>
  )
}
