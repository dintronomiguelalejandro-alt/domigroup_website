import {
  Car,
  Dog,
  Heart,
  HeartPulse,
  Sofa,
  type LucideIcon,
} from "lucide-react"

export type Category = {
  icon: LucideIcon
  image: string
  title: string
  description: string
  tags: string[]
  badge?: string
}

export const categories: Category[] = [
  {
    icon: Heart,
    image: "/categories/beauty-personal-care.jpg",
    badge: "Top",
    title: "Beauty & Personal Care",
    description:
      "Deodorants, skincare, hair care and personal hygiene products from recognized brands. High purchase frequency and strong brand loyalty.",
    tags: ["Skincare", "Hair Care", "Hygiene"],
  },
  {
    icon: HeartPulse,
    image: "/categories/health-household.jpg",
    badge: "Top",
    title: "Health & Household",
    description:
      "Vitamins, cleaning products and wellness essentials. Loyal repeat buyers with consistent demand across the US market.",
    tags: ["Vitamins", "Cleaning", "Wellness"],
  },
  {
    icon: Sofa,
    image: "/categories/home-kitchen.jpg",
    badge: "Top",
    title: "Home & Kitchen",
    description:
      "Cleaning supplies, kitchen essentials and home products. The largest consumer category in the United States.",
    tags: ["Cleaning Supplies", "Kitchen Essentials", "Home"],
  },
  {
    icon: Dog,
    image: "/categories/pet-supplies.jpg",
    badge: "Top",
    title: "Pet Supplies",
    description:
      "Pet food, accessories and grooming products. Low return rate with highly loyal buyers.",
    tags: ["Pet Food", "Accessories", "Grooming"],
  },
  {
    icon: Car,
    image: "/categories/automotive.jpg",
    badge: "Strong",
    title: "Automotive",
    description:
      "Motor oils, car care and accessories. Consistent year-round demand with high repurchase rate.",
    tags: ["Motor Oils", "Car Care", "Accessories"],
  },
]
