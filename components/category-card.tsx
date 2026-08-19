"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import type { Category } from "@/lib/categories"

export function CategoryCard({
  category,
  icon,
  className,
}: {
  category: Omit<Category, "icon">
  icon: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((v) => !v)}
      className={cn(
        "group relative mx-auto flex aspect-[4/5] w-[78%] cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden border-2 border-primary bg-card p-6 text-center text-card-foreground transition-shadow hover:ring-[3px] hover:ring-white hover:ring-inset sm:mx-0 sm:w-full",
        open && "ring-[3px] ring-white ring-inset",
        className
      )}
    >
      {category.badge && (
        <div className="absolute top-0 left-0 z-10 m-4 bg-primary px-3 py-1.5">
          <span className="text-sm font-bold tracking-tight text-primary-foreground uppercase">
            {category.badge}
          </span>
        </div>
      )}

      <div className="text-primary transition-transform duration-500 group-hover:scale-105 [&_svg]:size-12">
        {icon}
      </div>
      <span className="text-sm font-bold tracking-tight uppercase">
        {category.title}
      </span>

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col justify-end bg-primary p-5 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-95",
          open && "opacity-95"
        )}
      >
        {category.badge && (
          <span className="text-[11px] font-semibold tracking-widest text-white uppercase">
            {category.badge}
          </span>
        )}
        <p className="mt-2 text-sm text-white/90">{category.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-white px-2 py-0.5 text-[11px] text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
