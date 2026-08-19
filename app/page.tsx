import type { Metadata } from "next"

import { HomePage } from "@/components/pages/home-page"

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "/",
      es: "/es",
    },
  },
}

export default function Page() {
  return <HomePage locale="en" />
}
