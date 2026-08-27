// Internal
import { ProductDetailBreadcrumb } from "./navigation/product-detail-breadcrumb"

// Types
import type { Product } from "@/bigbistudio/types/product.types"

type ProductDetailHeroSectionProps = {
  currentProduct: Product
}

export function ProductDetailHeroSection({
  currentProduct,
}: ProductDetailHeroSectionProps) {
  const { meta } = currentProduct

  return (
    <section
      className="container flex flex-col gap-6 pb-8"
      id="product-detail-hero"
    >
      <ProductDetailBreadcrumb title={meta.title} />
      <div className="flex flex-col gap-2.5">
        <h1 className="text-h1-article">{meta.title}</h1>
        <p className="text-body-article text-ink-quaternary">{meta.subtitle}</p>
      </div>
    </section>
  )
}
