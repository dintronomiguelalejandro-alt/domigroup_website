import type { Metadata } from "next"

import { CategoriesListing } from "@/components/pages/categories-listing"

export const metadata: Metadata = {
  title: "Categorías de Productos | Domi Global Group",
  description:
    "Todas las categorías de productos de consumo que Domi Global Group compra y distribuye en Estados Unidos, México y Canadá.",
  alternates: {
    languages: {
      en: "/categories",
      es: "/es/categories",
    },
  },
}

export default function CategoriesPage() {
  return <CategoriesListing locale="es" />
}
