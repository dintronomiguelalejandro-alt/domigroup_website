import type { Metadata } from "next"
import { Mail } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | Domi Global Group",
  description:
    "The terms that govern your use of the Domi Global Group website.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website (domiglobalgroup.com), you agree to be bound by these Terms & Conditions. If you don't agree with any part of these terms, please don't use the site.",
    ],
  },
  {
    title: "2. About Domi Global Group",
    body: [
      "Domi Global Group is a Florida-registered limited liability company based in Miami, Florida, specializing in the procurement and distribution of consumer goods across the United States, Mexico, and Canada.",
    ],
  },
  {
    title: "3. Use of This Website",
    body: [
      "This website is provided for informational purposes — to describe our business, product categories, and markets, and to let potential partners and suppliers get in touch with us. You agree to use the site only for lawful purposes and not to attempt to interfere with its normal operation, security, or availability.",
    ],
  },
  {
    title: "4. No Direct Sales",
    body: [
      "This website does not process orders, payments, or transactions of any kind. This is a business-to-business site: we purchase consumer goods in volume directly from authorized distributors and brand owners. Any product categories mentioned are illustrative of the markets we operate in, not an offer for sale to consumers.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "The Domi Global Group name, logo, and the content of this site — text, graphics, and layout — are the property of Domi Global Group unless otherwise noted, and may not be copied, reproduced, or used without our prior written permission. Product photography used on this site is either owned by us, generated for our use, or licensed under terms that permit commercial use.",
    ],
  },
  {
    title: "6. Third-Party Links",
    body: [
      "This site may link to third-party websites for reference purposes. We don't control and aren't responsible for the content, policies, or practices of any third-party site.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    body: [
      "This site and its content are provided \"as is,\" without warranties of any kind, express or implied. We make reasonable efforts to keep information on this site accurate and up to date, but we don't guarantee that it's complete, current, or error-free.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Domi Global Group is not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms are governed by the laws of the State of Florida, USA, without regard to its conflict-of-law principles. Any disputes arising from these terms will be handled in the state or federal courts located in Miami-Dade County, Florida.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. We'll update the \"Last updated\" date at the top of this page when we do. Continued use of the site after changes take effect means you accept the revised terms.",
    ],
  },
]

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              The terms that govern your use of this website.
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
                <h2 className="text-base font-semibold">Questions?</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Reach out anytime at{" "}
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
