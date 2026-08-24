/**
 * Architecture Note:
 * Reusable Case Studies section.
 *
 * Designed for embedding on any page that needs to showcase selected case studies.
 * This is not the Case Studies listing page itself.
 */

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"
import { ProductGrid } from "./grids/product-grid"

import { getProductsBySlugs } from "@/bigbistudio/lib/product"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

type ProductsSectionProps = SectionSettings & {
  productSlugs: string[]
}

export async function ProductsSection({
  id,
  eyebrow,
  title,
  subtitle,
  buttons,
  productSlugs,
}: ProductsSectionProps) {
  const selectedProducts = await getProductsBySlugs(productSlugs)

  return (
    <section
      id={id}
      className="container flex flex-col py-20 gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5">
        <div className="flex flex-col gap-2.5">
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="lg:whitespace-pre-line">{title}</h2>
        </div>
        <div className="flex lg:justify-end lg:items-end flex-1">
          <p className="text-body-large text-ink-tertiary max-w-105">
            {subtitle}
          </p>
        </div>
      </div>
      <ProductGrid Products={selectedProducts} />
      <div className="flex justify-center gap-2.5">
        <ButtonCtaGroup buttons={buttons} />
      </div>
    </section>
  )
}
