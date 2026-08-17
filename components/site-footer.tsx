import Link from "next/link"
import { Globe2 } from "lucide-react"

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/responsible-disclosure", label: "Responsible Disclosure" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-primary-foreground/80"
          >
            <Globe2 className="size-4 text-primary-foreground" strokeWidth={1.75} />
            <span className="text-sm font-semibold tracking-tight">
              Domi Global Group
            </span>
          </Link>
          <p className="mt-2 text-xs tracking-wide text-primary-foreground/70 uppercase">
            Global Trade &middot; United States
          </p>
          <p className="mt-4 text-xs text-primary-foreground/70">
            &copy; 2026 Domi Global Group. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:max-w-56 sm:justify-end">
          {legalLinks.map((link) => (
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
