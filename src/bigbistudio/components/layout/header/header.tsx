"use client"

// External
import { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Internal
import { cn } from "@/bigbistudio/utils/shadcn-utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Logo } from "@/bigbistudio/components/logo/logo"
import { socialIconMap } from "@/bigbistudio/utils/component.maps"
import { HeaderMobile } from "./header-mobile"

import { companyData } from "@/bigbistudio/data/company"
import { navigationData } from "@/bigbistudio/data/navigation"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen((prev) => !prev)

  // Clear the focused navigation item after route changes.
  useEffect(() => {
    ;(document.activeElement as HTMLElement)?.blur()
  }, [pathname])

  // Scroll to the top instead of navigating when already on the home page.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  // Prevent page scrolling while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 pointer-events-none py-4 border-b border-line-translucent bg-surface-primary">
        <div className="flex justify-between container lg:px-0 items-center gap-10 pointer-events-auto">
          <Link
            href="/"
            onClick={(e) => {
              handleLogoClick(e)
              handleClose()
            }}
            className="active:scale-[0.99] transition-transform duration-150"
          >
            <Logo />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="text-ink-tertiary gap-2">
              {navigationData.header.links.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2.5 text-small! rounded-lg hover:bg-surface-quaternary hover:text-ink-primary active:scale-[0.97] duration-150 transition-all",
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2 w-fit">
            {/* Social Media */}
            <ul className="hidden lg:flex flex-wrap gap-2">
              {companyData.socials.map(({ id, href, label }) => {
                const Icon = socialIconMap[id]
                return (
                  <li key={id} className="inline-flex items-center active:scale-[0.99] transition-transform duration-150">
                    <Link
                      className="inline-block p-2 rounded-lg hover:bg-surface-quaternary text-ink-secondary hover:text-ink-primary cursor-pointer transition-all duration-200"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                    >
                      {Icon ? (
                        <Icon className="w-4 h-4" />
                      ) : (
                        <span className="sr-only">{label}</span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <HeaderMobile
              header={navigationData.header}
              open={open}
              onToggle={handleToggle}
              onClose={handleClose}
            />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-surface-primary/80 backdrop-blur-md transition-opacity duration-400 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />
    </>
  )
}
