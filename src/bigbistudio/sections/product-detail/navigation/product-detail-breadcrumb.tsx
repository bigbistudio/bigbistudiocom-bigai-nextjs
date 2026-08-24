// Internal
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { cn } from "@/bigbistudio/utils/shadcn-utils"

import { siteData } from "@/bigbistudio/data/site"

type ProductDetailBreadcrumbProps = {
  companyName: string
}

export function ProductDetailBreadcrumb({
  companyName,
}: ProductDetailBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className={cn("justify-center text-[13px]! text-ink-tertiary!")}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{siteData.labels.homePage}</BreadcrumbLink>
        </BreadcrumbItem>
        <span className="mx-1">/</span>
        <BreadcrumbItem>
          <BreadcrumbLink href={siteData.urls.productsPage}>
            {siteData.labels.products}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <span className="mx-1">/</span>
        <BreadcrumbItem>
          <BreadcrumbPage className={cn("text-ink-primary!")}>{companyName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
