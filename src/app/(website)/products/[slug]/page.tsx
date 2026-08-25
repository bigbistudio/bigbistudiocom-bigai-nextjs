import { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProductDetailView } from "@/bigbistudio/pages/product-detail.view"

import { getAProductBySlug } from "@/bigbistudio/lib/product"
import { createMetadata } from "@/bigbistudio/lib/metadata"

type ProductDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params

  const currentProduct = await getAProductBySlug(slug)

  if (!currentProduct) {
    notFound()
  }

  return createMetadata({
    title: currentProduct.meta.title,
    description: currentProduct.meta.title,
  })
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params

  const currentProduct = await getAProductBySlug(slug)

  if (!currentProduct) {
    notFound()
  }

  return <ProductDetailView currentProduct={currentProduct} />
}
