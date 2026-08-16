import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Category } from "@/lib/categories"

export function CategoryCard({
  category,
  className,
  compact = false,
}: {
  category: Category
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "group relative flex aspect-[4/5] overflow-hidden border border-primary-foreground/15 transition-colors hover:border-primary-foreground/40",
        className
      )}
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes={
          compact
            ? "(min-width: 1024px) 25vw, 50vw"
            : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className={cn(
          "absolute top-0 left-0 z-10 m-4 bg-primary px-3 py-1.5",
          compact && "m-2 px-1.5 py-1 sm:m-4 sm:px-3 sm:py-1.5"
        )}
      >
        <span
          className={cn(
            "text-sm font-bold tracking-tight text-primary-foreground uppercase",
            compact && "text-xs leading-tight sm:text-sm"
          )}
        >
          {category.title}
        </span>
      </div>

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col justify-end bg-[#04182a] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-95",
          compact && "p-3 sm:p-5"
        )}
      >
        {category.badge && (
          <span
            className={cn(
              "text-[11px] font-semibold tracking-widest text-sky-400 uppercase",
              compact && "text-[10px] sm:text-[11px]"
            )}
          >
            {category.badge}
          </span>
        )}
        <p
          className={cn(
            "mt-2 text-sm text-white/80",
            compact && "mt-1 text-xs sm:mt-2 sm:text-sm"
          )}
        >
          {category.description}
        </p>
        <div
          className={cn(
            "mt-3 flex flex-wrap gap-1.5",
            compact && "mt-2 gap-1 sm:mt-3 sm:gap-1.5"
          )}
        >
          {category.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "border border-white/20 px-2 py-0.5 text-[11px] text-white/70",
                compact && "px-1.5 text-[10px] sm:px-2 sm:text-[11px]"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
