import Image from "next/image"
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CategoryCard } from "@/components/category-card"
import { Reveal } from "@/components/reveal"
import { AccordionList } from "@/components/accordion-list"
import { categories } from "@/lib/categories"

const stats = [
  { value: "3", label: "Markets" },
  { value: "5+", label: "Categories" },
  { value: "Miami", label: "Florida HQ" },
  { value: "24h", label: "Response" },
]

const checkmarks = [
  "Legally registered company — Active & Good Standing in Florida",
  "Valid Resale Certificate for tax-exempt wholesale purchases",
  "Consistent volume orders — not one-time buyers",
  "Miami-based operations with national distribution reach",
  "We strictly respect all MAP pricing policies",
  "Dedicated purchasing team — fast and professional communication",
]

const whySellToUs = [
  {
    title: "Consistent Volume Orders",
    description:
      "We place regular, recurring purchase orders across multiple product categories. We are built for consistency — not one-time transactions.",
  },
  {
    title: "Verified & Compliant Buyer",
    description:
      "Registered company in good standing. Valid Florida Resale Certificate for tax-exempt wholesale purchases. Full compliance with all legal requirements.",
  },
  {
    title: "We Respect MAP Policies",
    description:
      "We strictly follow Minimum Advertised Price policies. We are committed to protecting your brand's pricing integrity across all channels.",
  },
  {
    title: "Fast & Professional Communication",
    description:
      "Dedicated purchasing team. We respond within 24 hours, keep communication clear, and make the buying process easy for our suppliers.",
  },
  {
    title: "Miami-Based Operations",
    description:
      "Our Miami operations center gives us direct access to major US distribution networks and logistics infrastructure across the Southeast and beyond.",
  },
  {
    title: "Long-Term Partnerships Only",
    description:
      "We are not looking for one-time deals. We seek lasting supplier relationships built on trust, volume, and mutual long-term growth.",
  },
]

const markets = [
  {
    flag: "🇺🇸",
    name: "United States",
    description:
      "Primary market. We distribute across all major regions through established wholesale channels and our national distribution network.",
  },
  {
    flag: "🇲🇽",
    name: "Mexico",
    description:
      "Fast-growing market with strong and increasing demand for US consumer brands across all major categories.",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    description:
      "Premium market with high consumer spending and strong brand loyalty toward US consumer products.",
  },
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
                <Reveal>
                  <div className="inline-flex items-center border border-primary-foreground/30 px-3 py-1.5 text-xs font-medium tracking-widest text-primary-foreground uppercase">
                    Authorized Wholesale Buyer · Miami, Florida
                  </div>
                  <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance md:text-6xl">
                    We Source. We Buy.{" "}
                    <span className="text-primary-foreground/80">
                      We Deliver.
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 md:mx-0">
                    Domi Global Group is a Miami-based wholesale trading
                    company. We purchase consumer goods directly from
                    authorized distributors and move them through our
                    distribution network across the United States, Mexico,
                    and Canada. We are looking to build serious, long-term
                    supplier partnerships.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                    <Button
                      size="lg"
                      className="bg-card text-primary hover:bg-card/90"
                      nativeButton={false}
                      render={<a href="#contact" />}
                    >
                      Start a Partnership →
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
                </Reveal>

                <Reveal delay={150}>
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
                </Reveal>
              </div>

              <Reveal
                delay={100}
                className="relative mt-16 hidden aspect-[4/5] overflow-hidden border border-primary-foreground/15 md:mt-0 md:block"
              >
                <Image
                  src="/hero/delivery.webp"
                  alt="A courier delivering a package to a customer's front door"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 0px"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto max-w-3xl px-8 py-24 text-center md:text-left">
            <Reveal>
              <p className="text-xs font-medium tracking-widest text-primary uppercase">
                Who We Are &amp; Why Partner With Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                A Wholesale Trading Company Based in Miami
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground md:mx-0">
                Domi Global Group is a legally registered trading company in
                the State of Florida, dedicated to sourcing and purchasing
                top consumer goods in volume directly from authorized
                distributors. We operate across the United States, Mexico,
                and Canada, building serious, long-term supply relationships
                with the brands and distributors we work with. Here&apos;s
                what that means for the distributors and brands we work
                with.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-border/60 text-left">
              {checkmarks.map((line, i) => (
                <Reveal
                  key={line}
                  delay={i * 60}
                  className="flex items-center justify-between gap-4 border-b border-border/60 py-5"
                >
                  <p className="text-base text-card-foreground">{line}</p>
                  <CheckCircle2
                    className="size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <h3 className="text-xl font-semibold tracking-tight text-balance">
                Why Sell To Us
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:mx-0">
                What we offer our distribution partners
              </p>
              <div className="mt-6">
                <AccordionList items={whySellToUs} />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="categories" className="border-b border-primary-foreground/15">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <Reveal>
              <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
                Product Categories
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                What we trade
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80 md:mx-0">
                We actively purchase from authorized distributors across the
                most in-demand consumer categories in the US market.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <div className="mx-auto flex aspect-[4/5] w-[78%] flex-col justify-between border border-primary-foreground/15 bg-[#04182a] p-6 sm:mx-0 sm:w-full">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                      View All Categories
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      Explore every product category we source and
                      distribute across North America.
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
              </Reveal>

              {categories.slice(0, 3).map(({ icon: _icon, ...cat }, i) => (
                <Reveal key={cat.title} delay={(i + 1) * 80}>
                  <CategoryCard category={cat} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="border-b border-border/60 bg-card text-card-foreground">
          <div className="mx-auto max-w-6xl px-8 py-24 text-center md:text-left">
            <Reveal>
              <p className="text-xs font-medium tracking-widest text-primary uppercase">
                Our Markets
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance">
                Where We Operate
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:mx-0">
                Three major North American markets, millions of end
                consumers.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {markets.map((market, i) => (
                <Reveal key={market.name} delay={i * 80}>
                  <Card className="gap-2 rounded-2xl border border-border/60 p-6 shadow-none">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{market.flag}</span>
                      <span className="text-sm font-semibold">
                        {market.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {market.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-8 py-16 text-center text-primary-foreground md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Ready to become a trusted supplier?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80 md:mx-0">
                Join our network of authorized distributors and start a
                long-term wholesale partnership with Domi Global Group.
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
          </Reveal>
        </section>

        <section id="contact" className="bg-card text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-16 px-8 py-24 md:grid-cols-2">
            <Reveal className="text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                Interested in Supplying Us?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted-foreground md:mx-0">
                We are actively looking for authorized distributors and brand
                owners to establish long-term supply agreements. If you
                represent a brand or distribute consumer goods and are
                looking for a serious, consistent wholesale buyer — we want
                to hear from you. Fill out the form and our purchasing team
                will get back to you within 24 hours.
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
            </Reveal>

            <Reveal delay={120}>
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
                    placeholder="Tell us about your brand and the products you distribute..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Wholesale Inquiry →
                </Button>
              </form>
            </Card>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
