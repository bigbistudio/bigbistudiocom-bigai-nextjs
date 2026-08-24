// Internal
import {
    _cloudscale,
    _futurelogix,
} from "@/bigbistudio/data/products"

// Types
import type { Product, ProductSummary } from "@/bigbistudio/types/product.types"

/** Temporary data source → Sanity (future) */
const Products = [
    _cloudscale,
    _futurelogix,
] as Product[]

// Local JSON is synchronous, but we intentionally keep the async
// Promise.all() flow to match the future Sanity implementation.

/** Published & sorting newest → oldest & summary only */
export async function getAllProducts(): Promise<ProductSummary[]> {
    return Products
        // Published only.
        .filter((product) => product.meta.status === "published")

        // Date newest → oldest.
        .sort(
            (a, b) =>
                new Date(b.meta.publishedAt).getTime() -
                new Date(a.meta.publishedAt).getTime(),
        )

        // Exclude article content.
        .map(({ meta, company }) => ({
            meta,
            company,
        }))
}

/** Find by slug & published only */
export async function getAProductBySlug(
    slug: string,
): Promise<Product | null> {
    return (
        Products.find(
            (product) =>
                product.meta.slug === slug &&
                product.meta.status === "published",
        ) ?? null
    )
}

/** Find by slugs & published only */
export async function getProductsBySlugs(
    slugs: string[] = [],
): Promise<ProductSummary[]> {
    return (
        await Promise.all(slugs.map(getAProductBySlug))
    ).filter(
        (product): product is Product => product !== null,
    ).map(({ meta, company }) => ({
        meta,
        company,
    }))
}