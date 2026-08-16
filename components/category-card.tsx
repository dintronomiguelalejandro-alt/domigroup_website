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
        "group relative flex aspect-[16/11] overflow-hidden border border-primary-foreground/15 transition-colors hover:border-primary-foreground/40 sm:aspect-[4/5]",
        className
      )}
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute top-0 left-0 z-10 m-4 bg-primary px-3 py-1.5">
        <span className="text-sm font-bold tracking-tight text-primary-foreground uppercase">
          {category.title}
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-[#04182a] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-95">
        {category.badge && (
          <span className="text-[11px] font-semibold tracking-widest text-sky-400 uppercase">
            {category.badge}
          </span>
        )}
        <p className="mt-2 text-sm text-white/80">{category.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/20 px-2 py-0.5 text-[11px] text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
