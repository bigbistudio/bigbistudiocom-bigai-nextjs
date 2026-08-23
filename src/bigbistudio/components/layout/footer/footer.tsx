// External
import Link from "next/link"

// Internal
import {
  lucideIcons,
  type LucideIconName,
} from "@/bigbistudio/utils/lucide-icons.maps"

import { Logo } from "@/bigbistudio/components/logo"
import { socialIconMap } from "@/bigbistudio/utils/component.maps"

import { companyData } from "@/bigbistudio/data/company"
import { navigationData } from "@/bigbistudio/data/navigation"

export function Footer() {
  return (
    <footer className="border-t border-line-translucent">
      {/* Footer Main Area */}
      <div className="container flex flex-col lg:flex-row gap-10 justify-between py-20">
        {/* Company Info */}
        <div className="flex flex-col gap-4 text-sm max-w-75">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="active:scale-[0.99] transition-transform duration-150"
            >
              <Logo width={180} height={36} />
            </Link>
            <span className="text-ink-tertiary leading-relaxed">
              {companyData.slogan}
            </span>
          </div>

          <ul className="flex flex-col gap-4">
            {companyData.contact.map((item) => {
              const Icon = item.icon
                ? lucideIcons[item.icon as LucideIconName]
                : null
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-1.5 text-ink-tertiary hover:text-ink-primary duration-200"
                >
                  {Icon && <Icon size={12} strokeWidth={2} />}
                  <Link
                    href={item.href}
                    target={item.id === "address" ? "_blank" : undefined}
                    rel={
                      item.id === "address" ? "noopener noreferrer" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Social Media */}
          <ul className="flex flex-wrap gap-2 mt-4">
            {companyData.socials.map(({ id, href, label }) => {
              const Icon = socialIconMap[id]
              return (
                <li
                  key={id}
                  className="inline-flex items-center active:scale-[0.99] transition-transform duration-150"
                >
                  <Link
                    className="inline-block p-2 rounded-lg hover:bg-surface-quaternary text-ink-tertiary hover:text-ink-primary cursor-pointer transition-all duration-200"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                  >
                    {Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : (
                      <span className="sr-only">{label}</span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Footer Quick Links */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-3 text-sm">
          {navigationData.footer.groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <span className="font-medium">{group.title}</span>
              <div
                className="grid gap-16"
                style={{
                  gridTemplateColumns: `repeat(${group.columns?.length ?? 1}, minmax(0, 1fr))`,
                }}
              >
                {group.columns.map((column, index) => (
                  <ul key={index} className="flex flex-col gap-6">
                    {column.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="text-ink-tertiary hover:text-ink-primary transition-all duration-200"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div className="flex flex-col items-center pb-20 lg:pb-8">
        <div className="flex flex-col items-center gap-2 text-small">
          <span className="font-semibold text-ink-tertiary">
            {companyData.copyright}
          </span>
          <Link
            className="text-ink-quaternary hover:text-ink-primary tracking-wide transition-all duration-200"
            href="https://github.com/bigbi-studio/bigai-workflow-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with bigA.i Workflow Next.js Template
          </Link>
        </div>
      </div>
    </footer>
  )
}
