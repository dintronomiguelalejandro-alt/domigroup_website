import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Category } from "@/lib/categories"

export function CategoryCard({
  category,
  className,
}: {
  category: Category
  className?: string
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
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute top-0 left-0 z-10 m-2 bg-primary px-1.5 py-1 sm:m-4 sm:px-3 sm:py-1.5">
        <span className="text-[10px] leading-tight font-bold tracking-tight text-primary-foreground uppercase sm:text-sm">
          {category.title}
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-[#04182a] p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-95 sm:p-5">
        {category.badge && (
          <span className="text-[9px] font-semibold tracking-widest text-sky-400 uppercase sm:text-[11px]">
            {category.badge}
          </span>
        )}
        <p className="mt-1 text-[11px] text-white/80 sm:mt-2 sm:text-sm">
          {category.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/20 px-1.5 py-0.5 text-[9px] text-white/70 sm:px-2 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
