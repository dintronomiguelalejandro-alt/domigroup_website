"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card text-card-foreground shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-all motion-reduce:transition-none",
        open
          ? "translate-y-0 opacity-100 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          : "pointer-events-none translate-y-full opacity-0 duration-300 ease-[cubic-bezier(0.64,0,0.78,0)]"
      )}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="size-4 text-primary" strokeWidth={1.75} />
          </div>
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience and understand site
            usage. See our{" "}
            <Link
              href="/cookies"
              className="font-medium text-primary hover:underline"
            >
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            onClick={() => setOpen(false)}
          >
            Necessary Only
          </Button>
          <Button
            size="sm"
            className="rounded-full"
            onClick={() => setOpen(false)}
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
