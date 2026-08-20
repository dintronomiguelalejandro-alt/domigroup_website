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
    title: "1. What Are Cookies",
    body: [
      "Cookies are small text files that a website stores on your device when you visit it. They let the site remember information about your visit — like your cookie preference or a setting you changed — so it doesn't have to ask again the next time. \"Similar technologies\" is a catch-all for related tools, like local storage, that work the same way.",
    ],
  },
  {
    title: "2. First-Party and Third-Party Cookies",
    body: [
      "First-party cookies are set directly by this site (domiglobalgroup.com) and are only readable by us. We use these for necessary and preference cookies, like remembering your cookie choice or your light/dark mode setting.",
      "Third-party cookies are set by services we use to run the site, such as our analytics provider. These help us understand aggregate visitor behavior — pages viewed, time on site, general location by country — without identifying you personally. We don't use third-party advertising or retargeting cookies.",
    ],
  },
  {
    title: "3. How Long Cookies Last",
    body: [
      "Session cookies are temporary and are deleted automatically when you close your browser. Persistent cookies stay on your device for a set period — for us, typically between 30 days and 12 months, depending on the cookie's purpose — or until you delete them manually.",
    ],
  },
  {
    title: "4. How to Disable Cookies in Your Browser",
    body: [
      "Beyond our cookie banner, every major browser lets you block or delete cookies at the browser level. Keep in mind that blocking necessary cookies may affect how parts of the site work.",
    ],
    links: browserLinks,
  },
  {
    title: "5. Changes to This Policy",
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

            <div className="mt-14 space-y-10 border-t-2 border-primary pt-14">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.links && (
                    <ul className="mt-4 space-y-2">
                      {section.links.map((browser) => (
                        <li key={browser.name}>
                          <a
                            href={browser.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            {browser.name} &rarr;
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
