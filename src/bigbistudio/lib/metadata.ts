// Internal
import pagesMetadata from "@/bigbistudio/data/metadata/page.metadata.json"
import { siteData } from "@/bigbistudio/data/site"

// Types
import type { Metadata } from "next"

type PageKey = keyof typeof pagesMetadata

type CreateMetadataOptions = {
    title: string
    description: string
    keywords?: string[]
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

export function createMetadata({
    title,
    description,
    keywords
}: CreateMetadataOptions): Metadata {
    return {
        metadataBase: new URL(siteUrl),

        title,
        description,

        keywords: keywords ?? siteData.metadata.seo.keywords,

        openGraph: {
            title,
            description,
            url: siteUrl,
            siteName: siteData.metadata.site.name,
            locale: siteData.metadata.site.locale,
            images: [
                `${siteUrl}${siteData.metadata.images.openGraph}`,
            ],
            type: "website"
        },

        twitter: {
            card: "summary_large_image",
            creator: siteData.metadata.social.x,
            title,
            description,
            images: [
                `${siteUrl}${siteData.metadata.images.openGraph}`,
            ],
        },
    }
}

export function getMetadata(page: PageKey): Metadata {
    const metadata = pagesMetadata[page]

    if (!metadata) {
        throw new Error(`Metadata not found for page "${page}".`)
    }

    return createMetadata(metadata)
}