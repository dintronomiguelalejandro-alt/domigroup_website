import type { Metadata } from "next"

import { HomePage } from "@/components/pages/home-page"

export const metadata: Metadata = {
  title: "Domi Global Group | Empresa Mayorista",
  description:
    "Domi Global Group es una empresa mayorista con sede en Miami. Compramos bienes de consumo directamente a distribuidores autorizados en Estados Unidos, México y Canadá.",
  alternates: {
    languages: {
      en: "/",
      es: "/es",
    },
  },
}

export default function Page() {
  return <HomePage locale="es" />
}
