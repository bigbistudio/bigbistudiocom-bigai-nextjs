// External
import Image from "next/image"
import Link from "next/link"

// Internal
import { NetIcon } from "@/bigbistudio/components/icons"
import { lucideIcons } from "@/bigbistudio/utils/lucide-icons.maps"

import { siteData } from "@/bigbistudio/data/site"

// Types
import type { LucideIconName } from "@/bigbistudio/utils/lucide-icons.maps"
import type { ProductSummary } from "@/bigbistudio/types/product.types"

type ProductCardProps = {
  product: ProductSummary
}

export function ProductCard({ product }: ProductCardProps) {
  const { meta } = product
  const Icon = meta.cardIcon
    ? lucideIcons[meta.cardIcon as LucideIconName]
    : null
    
  return (
    <Link
      href={`${siteData.urls.productsPage}/${meta.slug}`}
      className="relative flex flex-col gap-12 p-6 bg-surface-secondary hover:bg-surface-tertiary transition-all duration-300 rounded-xl border border-line-translucent cursor-pointer"
    >
      <NetIcon className="absolute right-0 top-0" />
      {Icon && (
        <Icon
          stroke="#ffffff15"
          strokeWidth={0.4}
          width={100}
          height={100}
          className="absolute top-2.5 right-6"
        />
      )}
      <div className="w-12 h-12 rounded-md bg-surface-tertiary">
        <Image src={meta.logo} width={48} height={48} alt="Tech Logo" />
      </div>
      <div className="flex flex-col gap-4 xl:max-w-[80%]">
        <h3 className="text-extra-large font-normal">{meta.title}</h3>
      </div>
    </Link>
  )
}
