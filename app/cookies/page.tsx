import type { Metadata } from "next"
import { Cookie, LineChart, Settings2, ShieldCheck } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Cookie Policy | Domi Global Group",
  description:
    "What cookies Domi Global Group uses and why, broken down by category.",
}

const categories = [
  {
    icon: ShieldCheck,
    name: "Necessary",
    description:
      "Required for the site to work — navigation, security, and remembering your cookie choice. Always active.",
  },
  {
    icon: LineChart,
    name: "Analytics",
    description:
      "Help us understand how visitors use the site, so we know what to improve.",
  },
  {
    icon: Settings2,
    name: "Preferences",
    description: "Remember small choices, like your light/dark mode setting.",
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main>
        <section className="border-b border-primary-foreground/15">
          <div className="mx-auto max-w-3xl px-8 py-24 text-center md:py-32">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              A quick breakdown of what we use and why — no jargon.
            </p>
            <p className="mt-8 text-xs tracking-widest text-primary-foreground/60 uppercase">
              Last updated &middot; August 2026
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-3xl px-8 py-24">
            <div className="space-y-10">
              {categories.map((category) => (
                <div key={category.name} className="flex gap-4">
                  <category.icon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h2 className="text-base font-semibold">
                      {category.name}
                    </h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 border-t border-border/60 pt-10">
              <Cookie className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
              <div>
                <h2 className="text-base font-semibold">Managing cookies</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Change your choice anytime from the cookie banner shown on
                  your first visit, or by clearing cookies in your browser
                  settings. Questions? Email{" "}
                  <a
                    href="mailto:sales@domiglobalgroup.com"
                    className="font-medium text-primary hover:underline"
                  >
                    sales@domiglobalgroup.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
