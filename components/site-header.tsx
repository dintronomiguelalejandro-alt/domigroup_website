"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LogoFull } from "@/components/logo-full"
import { LanguageToggle } from "@/components/language-toggle"
import { getDictionary, localePath, type Locale } from "@/lib/i18n/dictionary"

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).header
  const pathname = usePathname()
  const home = localePath(locale)
  const isHome = pathname === home
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    const { style } = document.body
    style.position = "fixed"
    style.top = `-${scrollY}px`
    style.left = "0"
    style.right = "0"
    style.width = "100%"

    return () => {
      style.position = ""
      style.top = ""
      style.left = ""
      style.right = ""
      style.width = ""
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b-2 transition-colors duration-300",
        scrolled
          ? "border-primary bg-card/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-6">
        <Link
          href={home}
          onClick={(e) => {
            setOpen(false)
            if (isHome) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Domi Global Group"
            width={36}
            height={36}
            className={cn(
              "size-8 transition-[filter] duration-300 md:hidden",
              !scrolled && "brightness-0 invert"
            )}
            priority
          />
          <LogoFull
            className={cn(
              "hidden h-12 w-auto transition-colors duration-300 md:block",
              scrolled ? "text-primary" : "text-white"
            )}
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ModeToggle
            className={cn(
              "transition-colors duration-300",
              scrolled
                ? "text-black hover:bg-primary/10 hover:text-primary"
                : "text-white hover:bg-white/10 hover:text-white/80"
            )}
          />
          <nav className="flex items-center gap-10">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `${home}${link.href}`}
                className={cn(
                  "text-lg transition-colors duration-300",
                  scrolled
                    ? "text-black hover:text-primary"
                    : "text-white hover:text-white/80"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle
            locale={locale}
            className={cn(
              scrolled
                ? "text-black hover:text-primary"
                : "text-white hover:text-white/80"
            )}
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle
            className={cn(
              "transition-colors duration-300",
              scrolled
                ? "text-black hover:bg-primary/10 hover:text-primary"
                : "text-white hover:bg-white/10 hover:text-white/80"
            )}
          />
          <Button
            variant="ghost"
            size="icon-lg"
            className={cn(
              "size-14 transition-colors duration-300",
              scrolled
                ? "text-black hover:bg-primary/10 hover:text-primary aria-expanded:bg-primary/10 aria-expanded:text-primary"
                : cn(
                    "text-white",
                    open
                      ? "hover:bg-white/10 hover:text-white/50 aria-expanded:bg-transparent aria-expanded:text-white"
                      : "hover:bg-black/10 hover:text-black"
                  )
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={t.toggleMenu}
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
    </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#04182a] transition-[clip-path] motion-reduce:transition-none md:hidden",
          open
            ? "pointer-events-auto duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            : "pointer-events-none duration-[700ms] ease-[cubic-bezier(0.64,0,0.78,0)]"
        )}
        style={{
          clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2">
          {t.nav.map((link, i) => (
            <a
              key={link.href}
              href={isHome ? link.href : `${home}${link.href}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
              className={cn(
                "rounded-md px-6 py-4 text-3xl font-semibold tracking-tight text-foreground transition-all hover:bg-primary-foreground/10 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100",
                open
                  ? "translate-y-0 opacity-100 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "translate-y-4 opacity-0 duration-500 ease-[cubic-bezier(0.64,0,0.78,0)]"
              )}
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle
            locale={locale}
            className="mt-2 text-foreground/70 hover:text-foreground"
          />
          <Button
            size="lg"
            className="mt-6 bg-card text-primary hover:bg-card/90"
            nativeButton={false}
            render={<a href={isHome ? "#contact" : `${home}#contact`} />}
            onClick={() => setOpen(false)}
          >
            {t.cta}
          </Button>
        </nav>
      </div>
    </>
  )
}
