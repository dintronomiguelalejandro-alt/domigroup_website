"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cookie } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/i18n/dictionary"

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith("/es") ? "es" : "en"
  const t = getDictionary(locale).cookieConsent

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!open) return
    const { style } = document.body
    const previousOverflow = style.overflow
    style.overflow = "hidden"
    return () => {
      style.overflow = previousOverflow
    }
  }, [open])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t-2 border-primary bg-card text-card-foreground shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-all motion-reduce:transition-none",
        open
          ? "translate-y-0 opacity-100 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          : "pointer-events-none translate-y-full opacity-0 duration-300 ease-[cubic-bezier(0.64,0,0.78,0)]"
      )}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-8 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="size-4 text-primary" strokeWidth={1.75} />
          </div>
          <p className="text-sm text-muted-foreground">
            {t.text}{" "}
            <Link
              href="/cookies"
              className="font-medium text-primary hover:underline"
            >
              {t.linkLabel}
            </Link>{" "}
            {t.textAfter}
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            {t.necessaryOnly}
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            {t.acceptAll}
          </Button>
        </div>
      </div>
    </div>
  )
}
