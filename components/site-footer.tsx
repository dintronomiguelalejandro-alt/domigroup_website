import Link from "next/link"
import { Globe2 } from "lucide-react"

import { getDictionary, localePath, type Locale } from "@/lib/i18n/dictionary"

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).footer

  return (
    <footer className="border-t-2 border-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-10 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href={localePath(locale)}
            className="flex items-center gap-2 transition-colors hover:text-primary-foreground/80"
          >
            <Globe2 className="size-4 text-primary-foreground" strokeWidth={1.75} />
            <span className="text-sm font-semibold tracking-tight">
              Domi Global Group
            </span>
          </Link>
          <p className="mt-2 text-xs tracking-wide text-primary-foreground/70 uppercase">
            {t.tagline}
          </p>
          <p className="mt-4 text-xs text-primary-foreground/70">
            {t.copyright}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:max-w-56 sm:justify-end">
          {t.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
