import { Globe2 } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#markets", label: "Markets" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Globe2 className="size-4 text-primary-foreground" strokeWidth={1.75} />
            <span className="text-sm font-semibold tracking-tight">
              Domi Global Group
            </span>
          </div>
          <p className="mt-2 text-xs tracking-wide text-primary-foreground/70 uppercase">
            Global Trade &middot; United States
          </p>
          <p className="mt-4 text-xs text-primary-foreground/70">
            &copy; 2026 Domi Global Group. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
