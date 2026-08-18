"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

export function AccordionList({
  items,
}: {
  items: { title: string; description: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="border-t border-border/60 text-left">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title} className="border-b border-border/60">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {open ? (
                <Minus className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
              ) : (
                <Plus className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-xl pb-6 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
