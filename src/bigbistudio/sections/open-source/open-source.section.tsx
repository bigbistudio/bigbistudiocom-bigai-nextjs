// External
import { GitPullRequest, Lightbulb, Share2, Users, Wrench } from "lucide-react"

// Internal
import { EyebrowIcon } from "@/bigbistudio/components/icons"
import { UIGithubInsight } from "@/bigbistudio/components/graphics/ui-github-insight"

// Types
import type { SectionSettings } from "@/bigbistudio/types/common.types"

export function OpenSourceSection({ id, eyebrow, title }: SectionSettings) {
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

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 bg-surface-secondary border border-line-primary p-6 rounded-2xl min-h-100">
        <div className="flex items-center lg:px-4">
          <ul className="relative flex flex-col gap-6">
            {/* Timeline */}
            <div className="pointer-events-none absolute left-4 top-4 bottom-4 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-line-tertiary to-transparent" />

            <li className="relative flex items-center gap-4">
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-tertiary bg-surface-primary">
                <Wrench
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-body-large">Build</h3>
                <p className="text-body text-ink-tertiary">
                  Create · experiment · extend.
                </p>
              </div>
            </li>

            <li className="relative flex items-center gap-4">
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-tertiary bg-surface-primary">
                <Share2
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-body-large">Share</h3>
                <p className="text-body text-ink-tertiary">
                  Share ideas · work · experiments.
                </p>
              </div>
            </li>

            <li className="relative flex items-center gap-4">
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-tertiary bg-surface-primary">
                <Lightbulb
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-body-large">Learn</h3>
                <p className="text-body text-ink-tertiary">
                  Discover · explore · adapt.
                </p>
              </div>
            </li>

            <li className="relative flex items-center gap-4">
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-tertiary bg-surface-primary">
                <GitPullRequest
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-body-large">Contribute</h3>
                <p className="text-body text-ink-tertiary">
                  Improve · refine · share.
                </p>
              </div>
            </li>

            <li className="relative flex items-center gap-4">
              <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-tertiary bg-surface-primary">
                <Users
                  size={16}
                  strokeWidth={1.5}
                  className="text-ink-tertiary"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-body-large">Connect</h3>
                <p className="text-body text-ink-tertiary">
                  Meet · engage · collaborate.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <UIGithubInsight />
      </div>
    </section>
  )
}
