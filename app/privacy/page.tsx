import type { Metadata } from "next"
import { Ban, FileText, Mail, ShieldCheck, UserCheck } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Domi Global Group",
  description:
    "How Domi Global Group collects, uses, and protects the information you share with us.",
}

const points = [
  {
    icon: FileText,
    title: "What we collect",
    description:
      "Only what you give us through the contact form: your name, email, company, and message. Nothing else.",
  },
  {
    icon: UserCheck,
    title: "How we use it",
    description:
      "To respond to your inquiry and follow up about a potential partnership. That's it.",
  },
  {
    icon: Ban,
    title: "What we don't do",
    description:
      "We never sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    icon: ShieldCheck,
    title: "Your rights",
    description:
      "Email us anytime to see, correct, or delete the information we hold about you.",
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              Short version: we collect very little, and we only use it to
              talk to you.
            </p>
            <p className="mt-8 text-xs tracking-widest text-primary-foreground/60 uppercase">
              Last updated &middot; August 2026
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-4xl px-8 py-24">
            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <Card
                  key={point.title}
                  className="gap-0 rounded-2xl border border-border/60 p-7 shadow-none"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <point.icon className="size-6 text-primary" strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-5 text-base font-semibold">
                    {point.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="mt-4 flex-row items-center gap-4 rounded-2xl border border-border/60 p-7 shadow-none">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-6 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-base font-semibold">Questions?</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reach out anytime at{" "}
                  <a
                    href="mailto:sales@domiglobalgroup.com"
                    className="font-medium text-primary hover:underline"
                  >
                    sales@domiglobalgroup.com
                  </a>
                  . For details on cookies specifically, see our{" "}
                  <a href="/cookies" className="font-medium text-primary hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
