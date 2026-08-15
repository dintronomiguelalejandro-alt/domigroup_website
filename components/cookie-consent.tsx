"use client"

import { useState } from "react"
import { Cookie } from "lucide-react"

import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Necessary",
    description:
      "Required for core site functionality like navigation and security. Always active.",
  },
  {
    name: "Analytics",
    description:
      "Help us understand how visitors use the site so we can improve it.",
  },
  {
    name: "Preferences",
    description: "Remember choices like your light/dark mode setting.",
  },
]

export function CookieConsent() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto border-t border-border bg-card text-card-foreground shadow-[0_-8px_30px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="size-5 text-primary" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-sm font-semibold">We value your privacy</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              We use cookies to keep the site running smoothly, understand
              how it&apos;s used, and remember your preferences. Choose which
              types you&apos;re comfortable with below.
            </p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              {categories.map((category) => (
                <div key={category.name}>
                  <dt className="text-xs font-semibold tracking-wide uppercase">
                    {category.name}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">
                    {category.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3 md:flex-col">
          <Button
            size="lg"
            className="rounded-full"
            onClick={() => setVisible(false)}
          >
            Accept All
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            onClick={() => setVisible(false)}
          >
            Necessary Only
          </Button>
        </div>
      </div>
    </div>
  )
}
