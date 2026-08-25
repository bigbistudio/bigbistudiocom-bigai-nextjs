"use client"

// External
import Image from "next/image"
import { Plus } from "lucide-react"

// Internal
import { Card, CardContent } from "@/components/ui/card"
import { lucideIcons } from "@/bigbistudio/utils/lucide-icons.maps"

// Types
import type { FeatureCard } from "@/bigbistudio/types/features.types"
import type { LucideIconName } from "@/bigbistudio/utils/lucide-icons.maps"

type FeatureCarouselCardProps = {
  card: FeatureCard
  onOpen: (card: FeatureCard) => void
}

export function FeatureCarouselCard({
  card,
  onOpen,
}: FeatureCarouselCardProps) {
  const Icon = card.icon ? lucideIcons[card.icon as LucideIconName] : null

  return (
    <div className="p-1">
      <Card
        onClick={() => onOpen(card)}
        className="group cursor-pointer rounded-4xl bg-surface-tertiary py-0 shadow-none ring-0 hover:bg-linear-to-t hover:from-surface-tertiary hover:to-surface-quaternary transition-colors duration-300 ease-in-out"
      >
        <CardContent className="relative flex aspect-square flex-col justify-between px-0">
          {card.image && (
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={240}
              className="w-full"
            />
          )}

          {Icon && (
            <div className="flex justify-center items-center w-full h-full">
              <Icon
                stroke="currentColor"
                strokeWidth={0.4}
                className="text-ink-tertiary/80 w-32 h-32"
              />
            </div>
          )}

          <div className="flex items-center justify-between px-6 pb-5">
            <span className="text-large text-ink-primary">{card.title}</span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-line-translucent group-hover:border-transparent group-hover:bg-surface-quaternary transition-colors duration-300 ease-in-out">
              <Plus
                size={18}
                strokeWidth={2.5}
                className="text-ink-tertiary group-hover:text-white"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
        </CardContent>
      </Card>
    </div>
  )
}
