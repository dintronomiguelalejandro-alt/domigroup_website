import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { allCategories } from "@/lib/categories"

export const metadata: Metadata = {
  title: "Product Categories | Domi Global Group",
  description:
    "Every consumer product category Domi Global Group sources and distributes across the United States, Mexico, and Canada.",
}

export default function CategoriesPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main>
        <section className="border-b border-primary-foreground/15">
          <div className="mx-auto max-w-3xl px-8 py-24 text-center md:py-32">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              Product Categories
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Everything we trade
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              The full range of consumer product categories we source and
              distribute across Amazon and major US marketplaces.
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24">
            <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {allCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="overflow-hidden rounded-2xl border border-border/60 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-24 items-center justify-center bg-primary">
                    <cat.icon
                      className="size-8 text-primary-foreground"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="bg-[#04182a] p-5">
                    {cat.badge && (
                      <span className="text-[10px] font-semibold tracking-widest text-sky-400 uppercase">
                        {cat.badge}
                      </span>
                    )}
                    <h2 className="mt-1 text-sm font-bold tracking-tight text-white uppercase">
                      {cat.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-white/60">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
