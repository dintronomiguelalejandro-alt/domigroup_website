import {
  Armchair,
  Baby,
  Car,
  ClipboardList,
  Dog,
  Dumbbell,
  Flower2,
  Headphones,
  Heart,
  HeartPulse,
  Palette,
  Puzzle,
  Shirt,
  ShoppingBasket,
  Sofa,
  Wrench,
  type LucideIcon,
} from "lucide-react"

import type { Locale } from "@/lib/i18n/dictionary"

export type Category = {
  icon: LucideIcon
  image: string
  title: string
  description: string
  tags: string[]
  badge?: string
  titleEs: string
  descriptionEs: string
  tagsEs: string[]
  badgeEs?: string
}

export const categories: Category[] = [
  {
    icon: Heart,
    image: "/categories/beauty-personal-care.jpg",
    badge: "Top",
    badgeEs: "Top",
    title: "Beauty & Personal Care",
    titleEs: "Belleza y Cuidado Personal",
    description:
      "Deodorants, skincare, hair care and personal hygiene products from recognized brands. High purchase frequency and strong brand loyalty.",
    descriptionEs:
      "Desodorantes, cuidado de la piel, cuidado del cabello y productos de higiene personal de marcas reconocidas. Alta frecuencia de compra y fuerte lealtad de marca.",
    tags: ["Skincare", "Hair Care", "Hygiene"],
    tagsEs: ["Cuidado de la Piel", "Cuidado del Cabello", "Higiene"],
  },
  {
    icon: HeartPulse,
    image: "/categories/health-household.jpg",
    badge: "Top",
    badgeEs: "Top",
    title: "Health & Household",
    titleEs: "Salud y Hogar",
    description:
      "Vitamins, cleaning products and wellness essentials. Loyal repeat buyers with consistent demand across the US market.",
    descriptionEs:
      "Vitaminas, productos de limpieza y esenciales de bienestar. Compradores recurrentes y leales con demanda constante en el mercado estadounidense.",
    tags: ["Vitamins", "Cleaning", "Wellness"],
    tagsEs: ["Vitaminas", "Limpieza", "Bienestar"],
  },
  {
    icon: Sofa,
    image: "/categories/home-kitchen.jpg",
    badge: "Top",
    badgeEs: "Top",
    title: "Home & Kitchen",
    titleEs: "Hogar y Cocina",
    description:
      "Cleaning supplies, kitchen essentials and home products. The largest consumer category in the United States.",
    descriptionEs:
      "Artículos de limpieza, esenciales de cocina y productos para el hogar. La categoría de consumo más grande en Estados Unidos.",
    tags: ["Cleaning Supplies", "Kitchen Essentials", "Home"],
    tagsEs: ["Artículos de Limpieza", "Esenciales de Cocina", "Hogar"],
  },
  {
    icon: Dog,
    image: "/categories/pet-supplies.jpg",
    badge: "Top",
    badgeEs: "Top",
    title: "Pet Supplies",
    titleEs: "Productos para Mascotas",
    description:
      "Pet food, accessories and grooming products. Low return rate with highly loyal buyers.",
    descriptionEs:
      "Alimento para mascotas, accesorios y productos de aseo. Baja tasa de devolución con compradores muy leales.",
    tags: ["Pet Food", "Accessories", "Grooming"],
    tagsEs: ["Alimento para Mascotas", "Accesorios", "Aseo"],
  },
  {
    icon: Car,
    image: "/categories/automotive.jpg",
    badge: "Strong",
    badgeEs: "Fuerte",
    title: "Automotive",
    titleEs: "Automotriz",
    description:
      "Motor oils, car care and accessories. Consistent year-round demand with high repurchase rate.",
    descriptionEs:
      "Aceites de motor, cuidado automotriz y accesorios. Demanda constante durante todo el año con alta tasa de recompra.",
    tags: ["Motor Oils", "Car Care", "Accessories"],
    tagsEs: ["Aceites de Motor", "Cuidado Automotriz", "Accesorios"],
  },
  {
    icon: Puzzle,
    image: "/categories/toys-games.jpg",
    title: "Toys & Games",
    titleEs: "Juguetes y Juegos",
    description:
      "STEM kits, board games and outdoor toys, with strong seasonal demand and high repeat interest.",
    descriptionEs:
      "Kits STEM, juegos de mesa y juguetes para exteriores, con fuerte demanda estacional y alto interés recurrente.",
    tags: ["STEM Kits", "Board Games"],
    tagsEs: ["Kits STEM", "Juegos de Mesa"],
  },
  {
    icon: Wrench,
    image: "/categories/tools-hardware.jpg",
    title: "Tools & Hardware",
    titleEs: "Herramientas y Ferretería",
    description:
      "Hand tools, power tool accessories and home improvement products, with steady, reliable repurchase cycles.",
    descriptionEs:
      "Herramientas manuales, accesorios para herramientas eléctricas y productos de mejoras para el hogar, con ciclos de recompra estables y confiables.",
    tags: ["Hand Tools", "Power Tools"],
    tagsEs: ["Herramientas Manuales", "Herramientas Eléctricas"],
  },
  {
    icon: ClipboardList,
    image: "/categories/office-supplies.jpg",
    title: "Office Supplies",
    titleEs: "Artículos de Oficina",
    description:
      "Stationery and office essentials with stable, year-round demand.",
    descriptionEs:
      "Papelería y esenciales de oficina con demanda estable durante todo el año.",
    tags: ["Stationery", "Essentials"],
    tagsEs: ["Papelería", "Esenciales"],
  },
  {
    icon: ShoppingBasket,
    image: "/categories/grocery-gourmet.jpg",
    title: "Grocery & Gourmet",
    titleEs: "Abarrotes y Gourmet",
    description:
      "Non-perishable food items, beverages and pantry essentials. High purchase frequency with loyal repeat buyers.",
    descriptionEs:
      "Alimentos no perecederos, bebidas y esenciales de despensa. Alta frecuencia de compra con compradores recurrentes y leales.",
    tags: ["Non-Perishables", "Pantry"],
    tagsEs: ["No Perecederos", "Despensa"],
  },
  {
    icon: Dumbbell,
    image: "/categories/sports-outdoors.jpg",
    title: "Sports & Outdoors",
    titleEs: "Deportes y Aire Libre",
    description:
      "Resistance bands, fitness accessories and outdoor gear, with strong year-round demand.",
    descriptionEs:
      "Bandas de resistencia, accesorios de fitness y equipo para exteriores, con fuerte demanda durante todo el año.",
    tags: ["Fitness", "Outdoor Gear"],
    tagsEs: ["Fitness", "Equipo para Exteriores"],
  },
  {
    icon: Baby,
    image: "/categories/baby-products.jpg",
    title: "Baby Products",
    titleEs: "Productos para Bebés",
    description:
      "Baby essentials with exceptional word-of-mouth. Parents recommend products constantly to other parents.",
    descriptionEs:
      "Esenciales para bebés con excelente recomendación boca a boca. Los padres recomiendan constantemente estos productos a otros padres.",
    tags: ["Baby Essentials"],
    tagsEs: ["Esenciales para Bebés"],
  },
  {
    icon: Headphones,
    image: "/categories/electronics.jpg",
    title: "Electronics & Accessories",
    titleEs: "Electrónica y Accesorios",
    description:
      "Audio devices, chargers and everyday tech accessories, with fast-moving, high-frequency demand.",
    descriptionEs:
      "Dispositivos de audio, cargadores y accesorios tecnológicos de uso diario, con demanda de alta rotación y frecuencia.",
    tags: ["Audio", "Accessories", "Chargers"],
    tagsEs: ["Audio", "Accesorios", "Cargadores"],
  },
  {
    icon: Shirt,
    image: "/categories/apparel-footwear.jpg",
    title: "Apparel & Footwear",
    titleEs: "Ropa y Calzado",
    description:
      "Everyday clothing, footwear and accessories from recognized brands, with strong seasonal repurchase cycles.",
    descriptionEs:
      "Ropa, calzado y accesorios de uso diario de marcas reconocidas, con fuertes ciclos de recompra estacional.",
    tags: ["Clothing", "Footwear"],
    tagsEs: ["Ropa", "Calzado"],
  },
  {
    icon: Flower2,
    image: "/categories/outdoor-garden.jpg",
    title: "Outdoor & Garden",
    titleEs: "Exteriores y Jardín",
    description:
      "Planters, garden tools and outdoor living essentials, with strong seasonal demand across all regions.",
    descriptionEs:
      "Macetas, herramientas de jardín y esenciales para exteriores, con fuerte demanda estacional en todas las regiones.",
    tags: ["Garden Tools", "Planters"],
    tagsEs: ["Herramientas de Jardín", "Macetas"],
  },
  {
    icon: Armchair,
    image: "/categories/furniture-storage.jpg",
    title: "Furniture & Storage",
    titleEs: "Muebles y Almacenamiento",
    description:
      "Small furniture, storage and organization products, with consistent year-round demand.",
    descriptionEs:
      "Muebles pequeños, almacenamiento y productos de organización, con demanda constante durante todo el año.",
    tags: ["Storage", "Organization"],
    tagsEs: ["Almacenamiento", "Organización"],
  },
  {
    icon: Palette,
    image: "/categories/arts-crafts.jpg",
    title: "Arts & Crafts",
    titleEs: "Arte y Manualidades",
    description:
      "Craft supplies, sewing notions and hobby essentials, with a loyal, highly engaged buyer base.",
    descriptionEs:
      "Materiales de manualidades, insumos de costura y esenciales para pasatiempos, con una base de compradores leal y muy comprometida.",
    tags: ["Craft Supplies", "Sewing"],
    tagsEs: ["Materiales de Manualidades", "Costura"],
  },
]

export type LocalizedCategory = {
  icon: LucideIcon
  image: string
  title: string
  description: string
  tags: string[]
  badge?: string
}

export function localizeCategory(
  category: Category,
  locale: Locale
): LocalizedCategory {
  if (locale === "en") {
    return {
      icon: category.icon,
      image: category.image,
      title: category.title,
      description: category.description,
      tags: category.tags,
      badge: category.badge,
    }
  }
  return {
    icon: category.icon,
    image: category.image,
    title: category.titleEs,
    description: category.descriptionEs,
    tags: category.tagsEs,
    badge: category.badgeEs,
  }
}
