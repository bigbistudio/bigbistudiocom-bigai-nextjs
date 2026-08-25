import { notFound } from "next/navigation"
import { CaseStudyListView } from "@/bigbistudio/pages/case-study-list.view"
import { getAllCaseStudies } from "@/bigbistudio/lib/case-study"

import { getMetadata } from "@/bigbistudio/lib/metadata"

export const metadata = getMetadata("caseStudies")

export default async function CaseStudyListPage() {
  const isDisabled = true

  if (isDisabled) {
    notFound()
  }

  const allCaseStudies = await getAllCaseStudies()

  return <CaseStudyListView caseStudies={allCaseStudies} />
}
