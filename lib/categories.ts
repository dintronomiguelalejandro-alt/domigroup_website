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
  {
    icon: Puzzle,
    image: "/categories/toys-games.jpg",
    title: "Toys & Games",
    description:
      "STEM kits, board games and outdoor toys, with strong seasonal demand and high repeat interest.",
    tags: ["STEM Kits", "Board Games"],
  },
  {
    icon: Wrench,
    image: "/categories/tools-hardware.jpg",
    title: "Tools & Hardware",
    description:
      "Hand tools, power tool accessories and home improvement products, with steady, reliable repurchase cycles.",
    tags: ["Hand Tools", "Power Tools"],
  },
  {
    icon: ClipboardList,
    image: "/categories/office-supplies.jpg",
    title: "Office Supplies",
    description:
      "Stationery and office essentials with stable, year-round demand.",
    tags: ["Stationery", "Essentials"],
  },
  {
    icon: ShoppingBasket,
    image: "/categories/grocery-gourmet.jpg",
    title: "Grocery & Gourmet",
    description:
      "Non-perishable food items, beverages and pantry essentials. High purchase frequency with loyal repeat buyers.",
    tags: ["Non-Perishables", "Pantry"],
  },
  {
    icon: Dumbbell,
    image: "/categories/sports-outdoors.jpg",
    title: "Sports & Outdoors",
    description:
      "Resistance bands, fitness accessories and outdoor gear, with strong year-round demand.",
    tags: ["Fitness", "Outdoor Gear"],
  },
  {
    icon: Baby,
    image: "/categories/baby-products.jpg",
    title: "Baby Products",
    description:
      "Baby essentials with exceptional word-of-mouth. Parents recommend products constantly to other parents.",
    tags: ["Baby Essentials"],
  },
  {
    icon: Headphones,
    image: "/categories/electronics.jpg",
    title: "Electronics & Accessories",
    description:
      "Audio devices, chargers and everyday tech accessories, with fast-moving, high-frequency demand.",
    tags: ["Audio", "Accessories", "Chargers"],
  },
  {
    icon: Shirt,
    image: "/categories/apparel-footwear.jpg",
    title: "Apparel & Footwear",
    description:
      "Everyday clothing, footwear and accessories from recognized brands, with strong seasonal repurchase cycles.",
    tags: ["Clothing", "Footwear"],
  },
  {
    icon: Flower2,
    image: "/categories/outdoor-garden.jpg",
    title: "Outdoor & Garden",
    description:
      "Planters, garden tools and outdoor living essentials, with strong seasonal demand across all regions.",
    tags: ["Garden Tools", "Planters"],
  },
  {
    icon: Armchair,
    image: "/categories/furniture-storage.jpg",
    title: "Furniture & Storage",
    description:
      "Small furniture, storage and organization products, with consistent year-round demand.",
    tags: ["Storage", "Organization"],
  },
  {
    icon: Palette,
    image: "/categories/arts-crafts.jpg",
    title: "Arts & Crafts",
    description:
      "Craft supplies, sewing notions and hobby essentials, with a loyal, highly engaged buyer base.",
    tags: ["Craft Supplies", "Sewing"],
  },
]
