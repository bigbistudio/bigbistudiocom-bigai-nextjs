// Internal
import { PortableText } from "@/bigbistudio/components/ui"

// Types
import type { LegalPage } from "@/bigbistudio/types/legal.types"

type LegalContentSectionProps = {
  page: LegalPage
}

export function LegalContentSection({ page }: LegalContentSectionProps) {
  return (
    <section className="container prose prose-invert py-20 mx-auto [&_strong]:text-brand-surface">
      <div className="mx-auto lg:max-w-210">
        <PortableText blocks={page.content} />
      </div>
    </section>
  )
}
