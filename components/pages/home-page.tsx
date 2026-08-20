import Image from "next/image"
import { Mail, MapPin, Clock } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { CategoryCard } from "@/components/category-card"
import { AccordionList } from "@/components/accordion-list"
import { Reveal } from "@/components/reveal"
import { categories, localizeCategory } from "@/lib/categories"
import { getDictionary, type Locale } from "@/lib/i18n/dictionary"

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home
  const home = locale === "es" ? "/es" : ""

  return (
    <div className="min-h-svh bg-background">
      <SiteHeader locale={locale} />

      <main>
        <section className="border-b-2 border-white">
          <div className="mx-auto max-w-6xl px-8 pt-10 pb-32 md:pt-24 md:pb-40">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
              <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-none md:text-left">
                <Reveal>
                  <h1 className="text-5xl font-semibold tracking-tight text-balance md:text-6xl">
                    {t.hero.titleLine1}{" "}
                    <span className="text-primary-foreground/80">
                      {t.hero.titleLine2}
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 md:mx-0">
                    {t.hero.paragraph}
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                    <Button
                      size="lg"
                      className="bg-card text-primary hover:bg-card/90"
                      nativeButton={false}
                      render={<a href={`${home}#contact`} />}
                    >
                      {t.hero.ctaPrimary}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      nativeButton={false}
                      render={<a href={`${home}#categories`} />}
                    >
                      {t.hero.ctaSecondary}
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div className="mt-16 flex flex-wrap justify-center gap-x-2 gap-y-6 border-t-2 border-white pt-8 text-center sm:gap-x-5 md:justify-start md:text-left">
                    {t.hero.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-semibold tabular-nums sm:text-3xl">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[9px] tracking-wider text-primary-foreground/80 uppercase sm:text-xs sm:tracking-widest">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal
                delay={100}
                className="relative mt-16 hidden aspect-[4/5] overflow-hidden md:mt-0 md:block"
              >
                <Image
                  src="/hero/delivery.webp"
                  alt={t.hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="border-b-2 border-primary bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24 text-left">
            <div className="md:grid md:grid-cols-2 md:items-stretch md:gap-12 lg:gap-20">
              <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-auto">
                <Image
                  src="/about/handoff.png"
                  alt={t.about.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>

              <div className="mt-10 md:mt-0">
                <Reveal>
                  <p className="text-xs font-medium tracking-widest text-primary uppercase">
                    {t.about.eyebrow}
                  </p>
                </Reveal>

                <Reveal delay={80} className="mt-10">
                  <AccordionList items={t.about.checkmarks} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="border-b-2 border-white">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <Reveal>
              <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
                {t.categories.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                {t.categories.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80 md:mx-0">
                {t.categories.paragraph}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {categories
                .filter((cat) =>
                  [
                    "Beauty & Personal Care",
                    "Home & Kitchen",
                    "Toys & Games",
                    "Tools & Hardware",
                    "Sports & Outdoors",
                    "Pet Supplies",
                  ].includes(cat.title)
                )
                .map((cat, i) => {
                  const { icon: Icon, ...localized } = localizeCategory(cat, locale)
                  return (
                    <Reveal key={cat.title} delay={i * 60}>
                      <CategoryCard
                        category={localized}
                        icon={<Icon strokeWidth={1.5} />}
                      />
                    </Reveal>
                  )
                })}
            </div>
          </div>
        </section>

        <section id="markets" className="border-b-2 border-primary bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <Reveal>
              <p className="text-xs font-medium tracking-widest text-primary uppercase">
                {t.markets.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                {t.markets.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:mx-0">
                {t.markets.paragraph}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
              {t.markets.items.map((market, i) => (
                <Reveal key={market.name} delay={i * 80}>
                  <Card className="gap-2 rounded-2xl border-2 border-primary p-6 shadow-none">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{market.flag}</span>
                      <span className="text-sm font-semibold">
                        {market.name}
                      </span>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <Reveal className="mx-auto max-w-6xl px-8 py-16 text-center text-primary-foreground">
            <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              {t.ctaBanner.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              {t.ctaBanner.paragraph}
            </p>
          </Reveal>
        </section>

        <section id="contact" className="bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-8 py-24 md:grid-cols-2">
            <Reveal className="text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted-foreground md:mx-0">
                {t.contact.paragraph}
              </p>

              <div className="mt-10 space-y-6 text-left">
                <div className="flex gap-4">
                  <Mail
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                      {t.contact.email.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {t.contact.email.value}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                      {t.contact.address.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {t.contact.address.value}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                      {t.contact.hours.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {t.contact.hours.value}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm locale={locale} />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
