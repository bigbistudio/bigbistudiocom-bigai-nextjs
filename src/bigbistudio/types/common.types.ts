export type UIGraphicId =
  | "ui-audit"
  | "ui-builder"
  | "ui-integration"
  | "ui-performance"

export type CtaButtonOfSection = {
  btnType: string
  btnTitle: string
  btnUrl: string
  btnIcon?: string
  targetBlank?: boolean
}

export type SectionSettings = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  buttons?: CtaButtonOfSection[]
}
