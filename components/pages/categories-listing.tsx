import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryCard } from "@/components/category-card"
import { categories, localizeCategory } from "@/lib/categories"
import { getDictionary, type Locale } from "@/lib/i18n/dictionary"

export function CategoriesListing({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).categoriesPage

  return (
    <div className="min-h-svh bg-background">
      <SiteHeader locale={locale} />

      <main>
        <section className="border-b-2 border-white">
          <div className="mx-auto max-w-3xl px-8 py-24 text-center md:py-32">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              {t.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              {t.paragraph}
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24">
            <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => {
                const { icon: Icon, ...localized } = localizeCategory(cat, locale)
                return (
                  <CategoryCard
                    key={cat.title}
                    category={localized}
                    icon={<Icon strokeWidth={1.5} />}
                  />
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
