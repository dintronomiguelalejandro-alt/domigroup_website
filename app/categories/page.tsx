import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryCard } from "@/components/category-card"
import { categories } from "@/lib/categories"

export const metadata: Metadata = {
  title: "Product Categories | Domi Global Group",
  description:
    "Every consumer product category Domi Global Group sources and purchases across the United States, Mexico, and Canada.",
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
              The full range of consumer categories we actively purchase and
              distribute across the US market.
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24">
            <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {categories.map(({ icon: _icon, ...cat }) => (
                <CategoryCard
                  key={cat.title}
                  category={cat}
                  className="border-border/60"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
