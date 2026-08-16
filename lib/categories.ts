import {
  Baby,
  Car,
  ClipboardList,
  Dog,
  Dumbbell,
  Heart,
  HeartPulse,
  Puzzle,
  ShoppingBasket,
  Sofa,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export type Category = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  badge?: string
}

export const featuredCategories: Category[] = [
  {
    icon: Heart,
    badge: "#1 Most Sold",
    title: "Beauty & Personal Care",
    description:
      "Highest average net margins on Amazon. Deodorants, skincare, hair care, and personal hygiene products from recognized brands.",
    tags: ["Skincare", "Hair Care", "Hygiene"],
  },
  {
    icon: HeartPulse,
    badge: "Top Seller",
    title: "Health & Household",
    description:
      "17% of Amazon seller market. Vitamins, cleaning essentials, and wellness products with loyal repeat buyers every 30-60 days.",
    tags: ["Vitamins", "Cleaning", "Wellness"],
  },
  {
    icon: Sofa,
    badge: "High Demand",
    title: "Home & Kitchen",
    description:
      "Largest category on Amazon FBA. Cleaning supplies, organizers, kitchen essentials and home improvement products.",
    tags: ["Cleaning Supplies", "Organizers", "Kitchen"],
  },
]

export const additionalCategories: Category[] = [
  {
    icon: Puzzle,
    title: "Toys & Games",
    description:
      "STEM kits, board games, outdoor toys. Peak sales in Q4 with up to 65% of annual revenue.",
    tags: ["STEM Kits", "Board Games"],
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Motor oils, car care, accessories and automotive supplies. Consistent repeat purchases year-round.",
    tags: ["Motor Oils", "Car Care"],
  },
  {
    icon: Wrench,
    title: "Tools & Hardware",
    description:
      "Hand tools, power tool accessories, and home improvement products with steady demand.",
    tags: ["Hand Tools", "Power Tools"],
  },
  {
    icon: Dog,
    title: "Pet Supplies",
    description:
      "Pet food, accessories and grooming. Low return rate and highly loyal repeat buyers.",
    tags: ["Pet Food", "Grooming"],
  },
  {
    icon: ClipboardList,
    title: "Office Supplies",
    description:
      "Stationery and office essentials. Lower competition with stable year-round demand.",
    tags: ["Stationery", "Essentials"],
  },
  {
    icon: ShoppingBasket,
    title: "Grocery & Gourmet",
    description:
      "Non-perishable food items, beverages and pantry essentials with high purchase frequency.",
    tags: ["Non-Perishables", "Pantry"],
  },
  {
    icon: Dumbbell,
    title: "Sports & Outdoors",
    description:
      "Resistance bands, fitness accessories, and outdoor gear with strong new-seller activity.",
    tags: ["Fitness", "Outdoor Gear"],
  },
  {
    icon: Baby,
    title: "Baby Products",
    description:
      "Baby essentials with exceptional word-of-mouth. Parents recommend products constantly to other parents.",
    tags: ["Baby Essentials"],
  },
]

export const allCategories: Category[] = [
  ...featuredCategories,
  ...additionalCategories,
]
