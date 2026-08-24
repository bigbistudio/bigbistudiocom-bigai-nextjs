// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function OpenSourceSection({
  id,
  eyebrow,
  title,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container py-20 flex flex-col gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      {title && (
        <div className="flex flex-col lg:items-center gap-2.5">
          <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
            <EyebrowIcon /> {eyebrow}
          </span>
          <h2 className="lg:whitespace-pre-line">{title}</h2>
        </div>
      )}
    </section>
  )
}
