import { NotFoundView } from "@/bigbistudio/pages/not-found.view"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("notFound")

export default function NotFoundPage() {
  return (
    <NotFoundView />
  )
}
