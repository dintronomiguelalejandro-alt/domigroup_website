"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const links = [
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#markets", label: "Markets" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link href="#" className="flex items-center gap-3">
          <Globe2 className="size-9 text-primary md:size-8" strokeWidth={1.75} />
          <span className="text-2xl font-semibold tracking-tight md:text-xl">
            Domi Global Group
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
            Work With Us
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon-lg"
            className="size-14"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative flex size-7 flex-col items-center justify-center">
              <span
                className={cn(
                  "absolute h-0.5 w-7 rounded-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none",
                  open ? "rotate-45" : "-translate-y-2"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-7 rounded-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none",
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-7 rounded-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none",
                  open ? "-rotate-45" : "translate-y-2"
                )}
              />
            </span>
          </Button>
        </div>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
