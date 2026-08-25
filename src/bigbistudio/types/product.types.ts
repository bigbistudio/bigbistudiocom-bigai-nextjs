import type { PortableBlock } from "./article.types"

export type ProductMeta = {
    slug: string
    isNext: boolean
    featured: boolean
    status: "draft" | "published" | "archived"
    publishedAt: string // ISO 8601
    title: string
    logo: string
    cardIcon: string
}

export type ProductSummary = {
    meta: ProductMeta
}

export type Product = ProductSummary & {
    content: PortableBlock[]
}