import Image from "next/image"
import { CheckCircle2, Globe2, Mail, MapPin, Clock, Users } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CategoryCard } from "@/components/category-card"
import { featuredCategories } from "@/lib/categories"

const stats = [
  { value: "3", label: "Markets" },
  { value: "10+", label: "Categories" },
  { value: "FL", label: "Florida LLC" },
]

const features = [
  {
    icon: CheckCircle2,
    title: "LLC Registered in Florida",
    description:
      "Legally constituted company with full compliance in the State of Florida.",
  },
  {
    icon: Globe2,
    title: "Global Trade Operations",
    description:
      "Sourcing and distributing top-selling products across North American markets.",
  },
  {
    icon: Users,
    title: "Reliable Business Partner",
    description:
      "We build long-term relationships with authorized distributors and suppliers.",
  },
]

const companyInfo = [
  { label: "Company Name", value: "Domi Global Group" },
  { label: "Registration", value: "State of Florida, USA" },
  { label: "Headquarters", value: "Miami, Florida 33130" },
  { label: "Business Type", value: "General Merchandise Trade" },
  { label: "Established", value: "2026" },
]

const markets = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇨🇦", name: "Canada" },
]

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main>
        <section className="border-b border-primary-foreground/15">
          <div className="mx-auto max-w-6xl px-8 pt-10 pb-32 md:pt-14 md:pb-40">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
              <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-none md:text-left">
                <h1 className="text-5xl font-semibold tracking-tight text-balance md:text-6xl">
                  Connecting brands to{" "}
                  <span className="text-primary-foreground/80">
                    millions of consumers
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 md:mx-0">
                  Your trusted partner in global trade. We connect leading
                  brands with markets across the Americas — delivering
                  quality products with reliability, speed, and professional
                  service.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                  <Button
                    size="lg"
                    className="bg-card text-primary hover:bg-card/90"
                    nativeButton={false}
                    render={<a href="#contact" />}
                  >
                    Work With Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    nativeButton={false}
                    render={<a href="#categories" />}
                  >
                    Our Categories
                  </Button>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-primary-foreground/15 pt-8 text-center md:justify-start md:text-left">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-semibold tabular-nums">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs tracking-widest text-primary-foreground/80 uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-16 hidden aspect-[4/5] overflow-hidden border border-primary-foreground/15 md:mt-0 md:block">
                <Image
                  src="/hero/delivery.webp"
                  alt="A courier delivering a package to a customer's front door"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-8 py-24 md:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
              <p className="text-xs font-medium tracking-widest text-primary uppercase">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                A professional trading company based in Miami
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground md:mx-0">
                Domi Global Group is a Florida-registered trading company
                specializing in the procurement and distribution of consumer
                goods across the United States, Mexico, and Canada.
              </p>

              <div className="mt-10 space-y-7 text-left">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <feature.icon
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <div>
                      <h3 className="text-sm font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="h-fit gap-0 rounded-2xl border border-border/60 bg-muted/40 p-8 shadow-none">
              {companyInfo.map((row, i) => (
                <div key={row.label}>
                  {i > 0 && <Separator className="my-5" />}
                  <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                    {row.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold">{row.value}</p>
                </div>
              ))}
            </Card>
          </div>
        </section>

        <section id="categories" className="border-b border-primary-foreground/15">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              Product Categories
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
              What we trade
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80 md:mx-0">
              We work with authorized distributors across the most in-demand
              consumer product categories on Amazon and major US
              marketplaces.
            </p>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              <div className="mx-auto flex aspect-[4/5] w-[78%] flex-col justify-between border border-primary-foreground/15 bg-[#04182a] p-6 sm:mx-0 sm:w-full">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                    View All Categories
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Explore every product category we source and distribute
                    across North America.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-fit border-white/30 text-white hover:bg-white/10 hover:text-white"
                  nativeButton={false}
                  render={<a href="/categories" />}
                >
                  View All Categories
                </Button>
              </div>

              {featuredCategories.map((cat) => (
                <CategoryCard key={cat.title} category={cat} />
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <p className="text-xs font-medium tracking-widest text-primary uppercase">
              Our Markets
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
              Where we operate
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:mx-0">
              We actively trade across three major North American markets,
              bringing products to millions of consumers through Amazon and
              major US marketplaces.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {markets.map((market) => (
                <Card
                  key={market.name}
                  className="flex-row items-center justify-center gap-3 rounded-2xl border border-border/60 px-6 py-5 shadow-none sm:justify-start"
                >
                  <span className="text-2xl">{market.flag}</span>
                  <span className="text-sm font-semibold">
                    {market.name}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-8 py-16 text-center text-primary-foreground md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Ready to bring your products to new markets?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80 md:mx-0">
                Partner with Domi Global Group and reach millions of
                consumers across the United States, Mexico, and Canada.
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0 bg-card text-primary hover:bg-card/90"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Get In Touch
            </Button>
          </div>
        </section>

        <section id="contact" className="bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-8 py-24 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted-foreground md:mx-0">
                We are always looking to partner with authorized distributors
                and suppliers. Reach out to discuss how we can work together.
              </p>

              <div className="mt-10 space-y-6 text-left">
                <div className="flex gap-4">
                  <Mail
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      sales@domiglobalgroup.com
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
                      Address
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      1065 SW 8th St, Miami, FL 33130
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
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Mon&ndash;Fri &middot; 9am&ndash;6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="gap-0 rounded-2xl border border-border/60 p-8 shadow-none">
              <form
                action="mailto:sales@domiglobalgroup.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" name="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" name="Last Name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business email</Label>
                  <Input
                    id="email"
                    name="Business Email"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" name="Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="Message"
                    required
                    className="min-h-28"
                    placeholder="Tell us about your products and how we can work together..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
