import { ProductListView } from "@/bigbistudio/pages/product-list.view"
import { getAllProducts } from "@/bigbistudio/lib/product"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("products")

export default async function ProductListPage() {
  const allProducts = await getAllProducts()

  return <ProductListView Products={allProducts} />
}
