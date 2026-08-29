import type { MetadataRoute } from "next"
import { products } from "@/bigbistudio/data/products"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!

export default function sitemap(): MetadataRoute.Sitemap {
    const productUrls = Object.values(products).map((product) => ({
        url: `${BASE_URL}/products/${product.meta.slug}`,
        lastModified: new Date(),
    }))

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/products`,
            lastModified: new Date(),
        },
        ...productUrls,
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/terms-of-service`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/cookie-policy`,
            lastModified: new Date(),
        }
    ]
}