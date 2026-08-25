import { notFound } from "next/navigation"
import { PricingView } from "@/bigbistudio/pages/pricing.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("pricing")

export default function PricingPage() {
  const isDisabled = true

  if (isDisabled) {
    notFound()
  }

  return <PricingView />
}
