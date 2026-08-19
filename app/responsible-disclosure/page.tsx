import type { Metadata } from "next"
import { Mail } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy | Domi Global Group",
  description:
    "How to report a security vulnerability to Domi Global Group, and what to expect from us in return.",
}

const sections = [
  {
    title: "1. Our Commitment",
    body: [
      "Domi Global Group takes the security of our website and the information entrusted to us seriously. We value the work of security researchers who help us identify and fix vulnerabilities, and we're committed to working with anyone who reports an issue in good faith.",
    ],
  },
  {
    title: "2. Scope",
    body: [
      "This policy covers domiglobalgroup.com and any subdomains we operate. It does not cover third-party services we link to or rely on, such as our hosting provider's infrastructure — please report issues with those services directly to the provider responsible.",
    ],
  },
  {
    title: "3. How to Report a Vulnerability",
    body: [
      "If you believe you've found a security vulnerability, email us at sales@domiglobalgroup.com with the subject line \"Security Disclosure.\" Please give us a reasonable amount of time to investigate and address the issue before disclosing it publicly.",
    ],
  },
  {
    title: "4. What to Include in Your Report",
    body: [
      "To help us reproduce and fix the issue quickly, please include: a description of the vulnerability and its potential impact, step-by-step instructions to reproduce it, any relevant URLs, screenshots, or proof-of-concept code, and the browser or tool you used to find it.",
    ],
  },
  {
    title: "5. Our Process",
    body: [
      "We'll acknowledge your report within 5 business days, investigate and validate the issue, and keep you reasonably informed of our progress toward a fix. Response and remediation times depend on the severity and complexity of the issue.",
    ],
  },
  {
    title: "6. Safe Harbor",
    body: [
      "We will not pursue legal action against researchers who discover and report vulnerabilities in good faith, in accordance with this policy — provided you avoid privacy violations, data destruction, service disruption, and only interact with accounts and data you own or have explicit permission to test.",
    ],
  },
  {
    title: "7. What Not to Do",
    body: [
      "Please don't access, modify, or delete data that isn't yours, perform testing that could degrade the site's performance or availability (including automated scanning that generates significant traffic), or publicly disclose an issue before we've had a reasonable opportunity to address it.",
    ],
  },
]

export default function ResponsibleDisclosurePage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main>
        <section className="border-b-2 border-white">
          <div className="mx-auto max-w-3xl px-8 py-24 text-center md:py-32">
            <p className="text-xs font-medium tracking-widest text-primary-foreground uppercase">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Responsible Disclosure
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              Found a security issue? Here&apos;s how to report it, and what
              to expect from us.
            </p>
            <p className="mt-8 text-xs tracking-widest text-primary-foreground/60 uppercase">
              Last updated &middot; August 2026
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-3xl px-8 py-24">
            <div className="space-y-10">
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
                </div>
              ))}
            </div>

            <div className="mt-14 flex gap-4 border-t-2 border-primary pt-14">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
              <div>
                <h2 className="text-base font-semibold">Report an issue</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Email us at{" "}
                  <a
                    href="mailto:sales@domiglobalgroup.com"
                    className="font-medium text-primary hover:underline"
                  >
                    sales@domiglobalgroup.com
                  </a>{" "}
                  with the subject line &quot;Security Disclosure.&quot;
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
