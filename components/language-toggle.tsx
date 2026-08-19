"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/i18n/dictionary"

export function LanguageToggle({
  locale,
  className,
}: {
  locale: Locale
  className?: string
}) {
  const pathname = usePathname()

  const targetHref =
    locale === "en"
      ? `/es${pathname === "/" ? "" : pathname}`
      : pathname.replace(/^\/es/, "") || "/"

  const label = locale === "en" ? "Español" : "English"

  return (
    <Link
      href={targetHref}
      className={cn(
        "border-2 border-current px-3 py-1.5 text-xs font-semibold tracking-widest uppercase transition-colors",
        className
      )}
    >
      {label}
    </Link>
  )
}
