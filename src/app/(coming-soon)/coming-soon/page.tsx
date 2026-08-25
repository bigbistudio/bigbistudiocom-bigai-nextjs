import { notFound } from "next/navigation"
import { ComingSoonView } from "@/bigbistudio/pages/coming-soon.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("comingSoon")

export default function ComingSoonPage() {
  const isDisabled = true

  if (isDisabled) {
    notFound()
  }
  
  return <ComingSoonView />
}
