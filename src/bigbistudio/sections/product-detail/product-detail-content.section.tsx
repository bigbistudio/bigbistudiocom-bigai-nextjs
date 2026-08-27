// External
import Link from "next/link"

// Internal
import { PortableText } from "@/bigbistudio/components/ui"
import { Button } from "@/components/ui/button"
import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles"

// Types
import type { Product } from "@/bigbistudio/types/product.types"

type ProductDetailContentSectionProps = {
  currentProduct: Product
}

export async function ProductDetailContentSection({
  currentProduct,
}: ProductDetailContentSectionProps) {
  return (
    <section
      className="relative container flex flex-col-reverse lg:flex-row justify-between lg:gap-6"
      id="product-detail-content"
    >
      <div className="prose prose-invert flex flex-col mb-10 max-w-180">
        <div className="bg-surface-secondary border border-line-primary p-6 lg:my-6 rounded-2xl">
          <PortableText blocks={currentProduct.content} />
        </div>
      </div>
      <div className="lg:sticky lg:top-24 my-6 lg:mt-6 flex flex-col gap-4 p-6 rounded-xl bg-surface-secondary border border-line-translucent w-full lg:w-80 h-fit">
        <Button
          asChild
          variant="secondary"
          className={bigbiStyles.button.secondary}
        >
          <Link href="#">View Demo</Link>
        </Button>
        <Button
          asChild
          variant="default"
          className={bigbiStyles.button.primary}
        >
          <Link href="#">Github Repository</Link>
        </Button>
      </div>
    </section>
  )
}
