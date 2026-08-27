// External
import Image from "next/image"
import { Workflow, LayoutTemplate, Stone, Layers, Wind, FileCodeCorner } from "lucide-react"

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function ProductOverviewSection({
  id,
  eyebrow,
  title,
  subtitle,
  buttons,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container py-20 flex flex-col gap-16 scroll-mt-12 xl:scroll-mt-24"
    >
      {title && (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2.5">
          <div className="flex flex-col gap-2.5">
            <span className="flex items-center px-1 gap-1.5 text-sm text-ink-tertiary">
              <EyebrowIcon /> {eyebrow}
            </span>
            <h2 className="lg:whitespace-pre-line">{title}</h2>
          </div>
          <div className="flex lg:justify-end lg:items-end flex-1">
            <p className="text-body-large text-ink-tertiary max-w-105">
              {subtitle}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 bg-surface-secondary border border-line-primary p-6 rounded-2xl min-h-100">
        <div className="flex items-center lg:px-4">
          <ul className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-x-12 lg:gap-y-6">
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <Workflow
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">
                Worflow-first structure
              </h3>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <Stone
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">
                Framer & Next.js editions
              </h3>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <LayoutTemplate
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">Reusable sections</h3>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <Wind
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">
                TypeScript & TailwindCSS
              </h3>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <Layers
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">
                Shared design system
              </h3>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-tertiary">
                <FileCodeCorner
                  size={18}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>
              <h3 className="font-normal text-body-large">
                Open source foundation
              </h3>
            </li>
          </ul>
        </div>

        <Image
          src="/products/bigai-workflow-screenshot.png"
          alt="bigA.i Workflow Screenshot"
          width={480}
          height={360}
          className="border border-line-tertiary rounded-2xl opacity-80"
        />
      </div>

      {buttons && (
        <div className="flex justify-center gap-2.5">
          <ButtonCtaGroup buttons={buttons} />
        </div>
      )}
    </section>
  )
}
