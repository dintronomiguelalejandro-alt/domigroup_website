import type { Metadata } from "next"
import { Cookie, ShieldCheck } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalToc } from "@/components/legal-toc"
import { LegalSection } from "@/components/legal-section"

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
      "A single first-party cookie that remembers the choice you make in our cookie banner, so we don't ask again on your next visit. This is the only cookie this site currently sets.",
  },
]

const browserLinks = [
  {
    name: "Google Chrome",
    href: "https://support.google.com/chrome/answer/95647",
  },
  {
    name: "Mozilla Firefox",
    href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
  },
  {
    name: "Safari",
    href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
  },
  {
    name: "Microsoft Edge",
    href: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
]

const sections = [
  {
    id: "what-are-cookies",
    number: "01",
    title: "What Are Cookies",
    body: [
      "Cookies are small text files that a website stores on your device when you visit it. They let the site remember information about your visit — like your cookie preference or a setting you changed — so it doesn't have to ask again the next time.",
    ],
  },
  {
    id: "first-party-and-third-party-cookies",
    number: "02",
    title: "First-Party and Third-Party Cookies",
    body: [
      "First-party cookies are set directly by this site (domiglobalgroup.com) and are only readable by us. Right now, the only cookie we set is the necessary cookie described above, which remembers your cookie banner choice.",
      "We do not currently use any third-party cookies — no analytics, no advertising, and no tracking of any kind. If that ever changes, we'll update this policy and, where required, ask for your consent first.",
    ],
  },
  {
    id: "how-long-this-cookie-lasts",
    number: "03",
    title: "How Long This Cookie Lasts",
    body: [
      "The necessary cookie described above is a persistent cookie that stays on your device for up to 12 months, or until you clear it manually through your browser settings.",
    ],
  },
  {
    id: "how-to-disable-cookies-in-your-browser",
    number: "04",
    title: "How to Disable Cookies in Your Browser",
    body: [
      "Beyond our cookie banner, every major browser lets you block or delete cookies at the browser level. Keep in mind that blocking necessary cookies may affect how parts of the site work.",
    ],
    links: browserLinks,
  },
  {
    id: "changes-to-this-policy",
    number: "05",
    title: "Changes to This Policy",
    body: [
      "We may update this Cookie Policy from time to time as we add or remove tools from the site. We'll update the \"Last updated\" date at the top of this page when we do.",
    ],
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main>
        <section className="border-b-2 border-white">
          <div className="mx-auto max-w-3xl px-10 py-24 text-center md:py-32">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              A quick breakdown of what we use and why — no jargon. The full
              details are below.
            </p>
            <p className="mt-8 text-xs tracking-widest text-primary-foreground/60 uppercase">
              Last updated &middot; August 2026
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-3xl px-10 py-24">
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

            <div className="mt-14 border-t-2 border-primary pt-14">
              <LegalToc items={sections} />
            </div>

            <div className="mt-14 space-y-10">
              {sections.map((section) => (
                <LegalSection key={section.id} {...section} />
              ))}
            </div>

            <div className="mt-14 flex gap-4 border-t-2 border-primary pt-14">
              <Cookie className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
              <div>
                <h2 className="text-base font-semibold">Managing cookies</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Change your choice anytime from the cookie banner shown on
                  your first visit, or by clearing cookies in your browser
                  settings. Questions? Email{" "}
                  <a
                    href="mailto:sales@domi-globalgroup.com"
                    className="font-medium text-primary hover:underline"
                  >
                    sales@domi-globalgroup.com
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
