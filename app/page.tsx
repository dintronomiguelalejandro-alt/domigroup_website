import {
  Baby,
  Car,
  CheckCircle2,
  ClipboardList,
  Dog,
  Dumbbell,
  Globe2,
  Heart,
  HeartPulse,
  Mail,
  MapPin,
  Clock,
  Puzzle,
  ShoppingBasket,
  Sofa,
  Users,
  Wrench,
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

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

const featuredCategories = [
  {
    icon: Heart,
    badge: "#1 Most Sold",
    title: "Beauty & Personal Care",
    description:
      "Highest average net margins on Amazon. Deodorants, skincare, hair care, and personal hygiene products from recognized brands.",
  },
  {
    icon: HeartPulse,
    badge: "Top Seller",
    title: "Health & Household",
    description:
      "17% of Amazon seller market. Vitamins, cleaning essentials, and wellness products with loyal repeat buyers every 30-60 days.",
  },
  {
    icon: Sofa,
    badge: "High Demand",
    title: "Home & Kitchen",
    description:
      "Largest category on Amazon FBA. Cleaning supplies, organizers, kitchen essentials and home improvement products.",
  },
]

const additionalCategories = [
  {
    icon: Puzzle,
    title: "Toys & Games",
    description:
      "STEM kits, board games, outdoor toys. Peak sales in Q4 with up to 65% of annual revenue.",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Motor oils, car care, accessories and automotive supplies. Consistent repeat purchases year-round.",
  },
  {
    icon: Wrench,
    title: "Tools & Hardware",
    description:
      "Hand tools, power tool accessories, and home improvement products with steady demand.",
  },
  {
    icon: Dog,
    title: "Pet Supplies",
    description:
      "Pet food, accessories and grooming. Low return rate and highly loyal repeat buyers.",
  },
  {
    icon: ClipboardList,
    title: "Office Supplies",
    description:
      "Stationery and office essentials. Lower competition with stable year-round demand.",
  },
  {
    icon: ShoppingBasket,
    title: "Grocery & Gourmet",
    description:
      "Non-perishable food items, beverages and pantry essentials with high purchase frequency.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Outdoors",
    description:
      "Resistance bands, fitness accessories, and outdoor gear with strong new-seller activity.",
  },
  {
    icon: Baby,
    title: "Baby Products",
    description:
      "Baby essentials with exceptional word-of-mouth. Parents recommend products constantly to other parents.",
  },
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
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
              <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
                Miami, Florida &middot; Est. 2026
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance md:text-6xl">
                Domi Global{" "}
                <span className="text-primary-foreground/80">Group</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 md:mx-0">
                Your trusted partner in global trade. We connect leading
                brands with markets across the Americas — delivering quality
                products with reliability, speed, and professional service.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button
                  size="lg"
                  className="rounded-full bg-card text-primary hover:bg-card/90"
                  nativeButton={false}
                  render={<a href="#contact" />}
                >
                  Work With Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  nativeButton={false}
                  render={<a href="#categories" />}
                >
                  Our Categories
                </Button>
              </div>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-primary-foreground/15 pt-8 text-center md:justify-start md:text-left">
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
        </section>

        <section id="about" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.1fr_0.9fr]">
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
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:text-left">
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

            <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
              {featuredCategories.map((cat) => (
                <Card
                  key={cat.title}
                  className="gap-0 rounded-2xl border border-border/60 p-7 shadow-none transition-colors hover:border-primary/50"
                >
                  <Badge
                    variant="secondary"
                    className="w-fit rounded-full text-[11px] font-medium tracking-wide text-primary uppercase"
                  >
                    {cat.badge}
                  </Badge>
                  <div className="mt-5 flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <cat.icon className="size-6 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </Card>
              ))}
            </div>

            <p className="mt-14 text-xs font-medium tracking-widest text-primary-foreground/70 uppercase">
              Additional Categories
            </p>
            <div className="mt-5 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {additionalCategories.map((cat) => (
                <Card
                  key={cat.title}
                  className="gap-0 rounded-2xl border border-border/60 p-6 shadow-none transition-colors hover:border-primary/50"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <cat.icon className="size-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{cat.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:text-left">
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
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center text-primary-foreground md:flex-row md:items-center md:justify-between md:text-left">
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
              className="shrink-0 rounded-full bg-card text-primary hover:bg-card/90"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Get In Touch
            </Button>
          </div>
        </section>

        <section id="contact" className="bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2">
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
                <Button type="submit" className="w-full rounded-full">
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
