import type { Metadata } from "next"
import { Ban, FileText, Mail, ShieldCheck, UserCheck } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information in two ways. First, information you give us directly: when you submit our contact form, we collect your first name, last name, business email, company name, and the message you write. We don't require an account, and we don't ask for payment or financial information anywhere on this site.",
      "Second, information collected automatically: like most websites, our hosting and analytics providers automatically log standard technical data when you visit — your IP address, browser type, device type, the pages you view, and the site that referred you here. This data is collected through cookies and similar technologies; see our Cookie Policy for the full breakdown of what we use and why.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information above to respond to your inquiries, evaluate and follow up on potential distribution or supplier partnerships, keep the site secure and working correctly, and understand in general terms how visitors use the site so we can improve it. We do not use your contact form submissions for advertising or automated decision-making.",
    ],
  },
  {
    title: "3. How We Share Information",
    body: [
      "We do not sell, rent, or trade your personal information. We only share it with the service providers that help us run this website and our business — for example, our email delivery and website hosting providers — and only to the extent needed for them to perform that service. These providers are bound by confidentiality obligations and are not permitted to use your information for their own purposes.",
      "We may also disclose information if required to do so by law, or to protect the rights, property, or safety of Domi Global Group, our users, or others.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We keep contact form submissions for as long as reasonably necessary to respond to your inquiry and maintain a record of the business relationship — generally no longer than 24 months from your last message, unless a longer period is required by law or an active partnership continues beyond that window. You can ask us to delete your information sooner at any time; see \"Your Rights\" below.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    body: [
      "You can ask us at any time to confirm what personal information we hold about you, correct inaccurate information, or delete your information from our records. You can also withdraw consent for non-essential cookies at any time from the cookie banner or your browser settings, without affecting the site's core functionality.",
      "To exercise any of these rights, email us at sales@domiglobalgroup.com. We'll respond within a reasonable timeframe, typically within 30 days.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We use reasonable technical and organizational measures to protect the information you share with us, including encrypted transmission (HTTPS) across the site and restricting access to personal information to the people who need it to do their jobs. That said, no method of transmission or storage is 100% secure, and we can't guarantee absolute security.",
    ],
  },
  {
    title: "7. International Data Transfers",
    body: [
      "Domi Global Group is based in Miami, Florida, and operates across the United States, Mexico, and Canada. Information you provide may be processed and stored in the United States, which may have different data protection laws than your home country. Wherever your information is processed, we apply the protections described in this policy.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "This site is intended for business use and is not directed at children. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, please contact us and we'll delete it.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We'll update the \"Last updated\" date at the top of this page when we do. We encourage you to review this page periodically.",
    ],
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              Short version: we collect very little, and we only use it to
              talk to you. The full details are below.
            </p>
            <p className="mt-8 text-xs tracking-widest text-primary-foreground/60 uppercase">
              Last updated &middot; August 2026
            </p>
          </div>
        </section>

        <section className="bg-card text-card-foreground">
          <div className="mx-auto max-w-3xl px-8 py-24">
            <div className="space-y-10">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <point.icon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h2 className="text-base font-semibold">{point.title}</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {point.description}
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
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
