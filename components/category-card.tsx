import { cn } from "@/lib/utils"
import type { LocalizedCategory } from "@/lib/categories"

export function CategoryCard({
  category,
  icon,
  className,
}: {
  category: Omit<LocalizedCategory, "icon">
  icon: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-2 border-white bg-[#0d0d0d] p-6 text-left text-white",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight uppercase">
          {category.title}
        </h3>
        <div className="shrink-0 text-white [&_svg]:size-6">{icon}</div>
      </div>
      <p className="text-sm text-white/70">{category.description}</p>
    </div>
  )
}
