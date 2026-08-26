import {
  ChartLine,
  CircleDashedIcon,
  Box,
  GitCommitHorizontal,
  Ellipsis,
  GitPullRequest,
  CircleDot,
  CircleCheck,
} from "lucide-react"

import { GithubIcon } from "@/bigbistudio/components/icons"

export function UIGithubInsight() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col p-4 bg-surface-primary border border-line-translucent rounded-xl lg:h-90 max-w-xl"
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <GithubIcon className="w-4 h-4" />
          <span className="text-sm font-semibold text-ink-secondary">
            Github Insights
          </span>
        </div>
        <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <GitPullRequest
                size={12}
                strokeWidth={1}
                className="text-ink-secondary"
              />
              <span className="text-[10px] leading-3 font-semibold text-ink-tertiary">
                Merged PRs
              </span>
            </div>
            <div className="flex justify-between gap-1.5">
              <span className="text-ink-secondary text-[10px] leading-4 font-bold">
                24
              </span>
              <span className="text-ink-quaternary text-[10px] leading-4">
                +18.2%
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <GitPullRequest
                size={12}
                strokeWidth={1}
                className="text-ink-secondary"
              />
              <span className="text-[10px] leading-3 font-semibold text-ink-tertiary">
                Open PRs
              </span>
            </div>
            <div className="flex justify-between gap-1.5">
              <span className="text-ink-secondary text-[10px] leading-4 font-bold">
                7
              </span>
              <span className="text-ink-quaternary text-[10px] leading-4">
                -34.5%
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <CircleCheck
                size={12}
                strokeWidth={1}
                className="text-ink-secondary"
              />
              <span className="text-[10px] leading-3 font-semibold text-ink-tertiary">
                Closed Issues
              </span>
            </div>
            <div className="flex justify-between gap-1.5">
              <span className="text-ink-secondary text-[10px] leading-4 font-bold">
                38
              </span>
              <span className="text-ink-quaternary text-[10px] leading-4">
                +12.4%
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <CircleDot
                size={12}
                strokeWidth={1}
                className="text-ink-secondary"
              />
              <span className="text-[10px] leading-3 font-semibold text-ink-tertiary">
                New Issues
              </span>
            </div>
            <div className="flex justify-between gap-1.5">
              <span className="text-ink-secondary text-[10px] leading-4 font-bold">
                12
              </span>
              <span className="text-ink-quaternary text-[10px] leading-4">
                -8.7%
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <ChartLine
              size={10}
              strokeWidth={1}
              className="text-ink-secondary"
            />
            <span className="font-medium text-ink-tertiary text-[10px] leading-4">
              Commits
            </span>
          </div>
          <div className="relative bg-surface-tertiary w-full h-10 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="601"
              height="77"
              fill="none"
              overflow="visible"
              className="absolute -top-8 -left-18"
            >
              <g>
                <defs>
                  <linearGradient
                    id="idid_uu8LUOBX3g-491382765"
                    x1="0.49965174129353235"
                    x2="0.5024875621890548"
                    y1="0.43"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="rgb(0, 165, 245)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="rgba(12, 67, 115, 0.1)"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 77 L 0 66.399 L 54.586 66.399 L 102.487 57.471 L 149.275 61.377 L 188.265 69.188 L 230.04 49.101 L 272.929 61.377 L 329.185 61.377 L 389.341 49.101 L 451.168 66.399 L 495.171 53.007 L 543.629 44.08 L 601 0 L 601 76.953 Z"
                  fill="url(#idid_uu8LUOBX3g-491382765)"
                  strokeWidth="0.5"
                  stroke="rgb(0, 165, 245)"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <Box size={10} strokeWidth={1} className="text-ink-secondary" />
            <span className="font-medium text-ink-tertiary text-[10px] leading-4">
              Deployments
            </span>
          </div>

          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm">
            <div className="flex justify-center items-center p-2">
              <CircleDashedIcon
                size={7}
                strokeWidth={3}
                className="text-brand-surface animate-spin animation-duration-[2s]"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>feat: add responsive navigation</span>
                <span>a82f91c</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2 animate-pulse">
                <span>Building...</span>
                <div className="flex items-center gap-0.5">
                  <GitCommitHorizontal
                    size={8}
                    strokeWidth={1}
                    className="text-ink-primary"
                  />
                  <span className="font-bold">main</span>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-1">
              <Ellipsis
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm opacity-80">
            <div className="flex justify-center items-center p-2">
              <span className="bg-white w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>fix: improve mobile spacing</span>
                <span>c64fbbe</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>5h ago</span>
                <div className="flex items-center gap-0.5">
                  <GitCommitHorizontal
                    size={8}
                    strokeWidth={1}
                    className="text-ink-primary"
                  />
                  <span className="font-bold">main</span>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-1">
              <Ellipsis
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm opacity-40">
            <div className="flex justify-center items-center p-2">
              <span className="bg-white w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>refactor: simplify components</span>
                <span>f31d7e2</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>8h ago</span>
                <div className="flex items-center gap-0.5">
                  <GitCommitHorizontal
                    size={8}
                    strokeWidth={1}
                    className="text-ink-primary"
                  />
                  <span className="font-bold">main</span>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-1">
              <Ellipsis
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm opacity-20">
            <div className="flex justify-center items-center p-2">
              <span className="bg-white w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>chore: update dependencies</span>
                <span>9b2a6f4</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>12h ago</span>
                <div className="flex items-center gap-0.5">
                  <GitCommitHorizontal
                    size={8}
                    strokeWidth={1}
                    className="text-ink-primary"
                  />
                  <span className="font-bold">main</span>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-1">
              <Ellipsis
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
