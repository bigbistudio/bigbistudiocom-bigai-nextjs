// External
import Image from "next/image"

// Types
import type { LogoItem } from "./logo.types"

/**
 * Shared image dimensions for all logo assets.
 */
const imageProps = {
  width: 160,
  height: 60,
}

/**
 * Sample logos displayed in the logo cloud.
 *
 * Logos are distributed evenly across the wheels based on their order:
 * Wheel 1 → 1, 5...
 * Wheel 2 → 2, 6...
 * Wheel 3 → 3, 7...
 * Wheel 4 → 4, 8...
 */
export const logos: LogoItem[] = [
  {
    logo: (
      <Image
        src="/tech/nextjs-logo.svg"
        alt="Next.js"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/react-logo.svg"
        alt="React"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/typescript-logo.svg"
        alt="Typescript"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/tailwindcss-logo.svg"
        alt="TailwindCss"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/framer-logo.svg"
        alt="Framer"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/figma-logo.svg"
        alt="Figma"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/shopify-logo.svg"
        alt="Shopify"
        {...imageProps}
      />
    ),
  },
  {
    logo: (
      <Image
        src="/tech/vercel-logo.svg"
        alt="Vercel"
        {...imageProps}
      />
    ),
  },
]
