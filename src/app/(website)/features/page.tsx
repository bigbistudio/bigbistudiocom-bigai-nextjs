import { notFound } from "next/navigation"
import { FeaturesView } from "@/bigbistudio/pages/features.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("features")

export default function FeaturesPage() {
  const isDisabled = true

  if (isDisabled) {
    notFound()
  }
  
  return <FeaturesView />
}
