// External
import Image from "next/image"

// Internal
import { ButtonCtaGroup } from "@/bigbistudio/components/ui"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function HeroMainSection({
  id,
  title,
  subtitle,
  buttons,
}: SectionSettings) {
  return (
    <section
      id={id}
      className="container flex flex-col lg:flex-row lg:items-center gap-6 py-20 lg:whitespace-pre-line overflow-hidden scroll-mt-12 xl:scroll-mt-24"
    >
      <div className="flex flex-col gap-6">
        <h1>{title}</h1>
        <span className="flex flex-col text-ink-tertiary text-body-large">
          {subtitle}
        </span>
        <div className="flex flex-col mobile:flex-row gap-2.5 mb-8">
          <ButtonCtaGroup buttons={buttons} />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/vectors/bigbi-stack-large-vector.svg"
          alt="bigbi stack vector"
          width={500}
          height={400}
          className="lg:max-w-125 mx-auto"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#0f1e4a_100%)]" />
      </div>
    </section>
  )
}
