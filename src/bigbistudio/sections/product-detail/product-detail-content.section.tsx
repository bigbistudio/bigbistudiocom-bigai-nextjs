// Internal
import { PortableText } from "@/bigbistudio/components/ui"

// Types
import type { Product } from "@/bigbistudio/types/product.types"

type ProductDetailContentSectionProps = {
  currentProduct: Product
}

export async function ProductDetailContentSection({
  currentProduct,
}: ProductDetailContentSectionProps) {
  return (
    <section id="product-detail-content">
      <div className="prose prose-invert flex flex-col mb-10">
        <PortableText blocks={currentProduct.content} />
      </div>
    </section>
  )
}
