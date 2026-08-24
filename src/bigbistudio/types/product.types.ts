import type { PortableBlock } from "./article.types"

export type ProductMeta = {
    slug: string
    featured: boolean
    status: "draft" | "published" | "archived"
    publishedAt: string // ISO 8601
    title: string
    bannerImage: string
    cardIcon: string
}

export type ProductCompany = {
    name: string
    logo: string
    website: string
    industry: string
    teamSize: string
    useCase: string
}

export type ProductTestimonial = {
    author: string
    role: string
    quote: string
}

export type ProductSummary = {
    meta: ProductMeta
    company: ProductCompany
}

export type Product = ProductSummary & {
    testimonial?: ProductTestimonial
    content: PortableBlock[]
}