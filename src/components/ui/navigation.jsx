"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaArrowRight } from "react-icons/fa6"
import Products_cart from "./products_cart"

// Define interfaces for type safety
interface Product {
  id: string
  title: string
  href: string
  categorie: string
  image?: string
}

interface MenuItem {
  title: string
  content?: string
  href: string
  isLink?: boolean
}

interface Category {
  title: string
  href: string
}

// Reusable ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string
    title: string
    children?: React.ReactNode
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink
      asChild
      className={cn(
        "block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{title}</span>
        {children}
      </div>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"

interface NavigationProps {
  menuItems?: MenuItem[]
  neufTitle?: string
  neufDescription?: string
  neufHref?: string
  occasionTitle?: string
  occasionDescription?: string
  occasionHref?: string
}

export default function Navigation({
  menuItems = [
    {
      title: "Materiel Neuf",
      content: "neuf",
      href: "/neuf",
    },
    {
      title: "Materiel Occasion",
      content: "occasion",
      href: "/occasion",
    },
    {
      title: "Location",
      isLink: true,
      href: "/location",
    },
    {
      title: "Nos services",
      isLink: true,
      href: "/services",
    },
  ],
  neufTitle = "Materiel Neuf",
  neufDescription = "Matériel neuf, prêt à l'emploi. Fiable, robuste et garanti.",
  neufHref = "/neuf",
  occasionTitle = "Materiel Occasion",
  occasionDescription = "Une sélection de matériel d'occasion fiable, testé et certifié pour vous offrir performance et tranquillité d'esprit.",
  occasionHref = "/occasion",
}: NavigationProps) {
  const [neuf, setNeuf] = React.useState<Product[]>([])
  const [occasion, setOccasion] = React.useState<Product[]>([])
  const [neufCategories, setNeufCategories] = React.useState<Category[]>([])
  const [occasionCategories, setOccasionCategories] = React.useState<Category[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const [neufResponse, occasionResponse] = await Promise.all([
          fetch('/api/neuf_products'),
          fetch('/api/occasion_products'),
        ])

        if (!neufResponse.ok || !occasionResponse.ok) {
          throw new Error('Failed to fetch products')
        }

        const [neufData, occasionData] = await Promise.all([
          neufResponse.json(),
          occasionResponse.json(),
        ])

        setNeuf(neufData)
        setOccasion(occasionData)

        // Create unique categories
        const neufCats = [...new Set(neufData.map((item: Product) => item.categorie))].map(
          (category: string) => ({
            title: category,
            href: `/neuf/${category.toLowerCase().replace(/\s+/g, '-')}`,
          })
        )
        const occasionCats = [...new Set(occasionData.map((item: Product) => item.categorie))].map(
          (category: string) => ({
            title: category,
            href: `/occasion/${category.toLowerCase().replace(/\s+/g, '-')}`,
          })
        )

        setNeufCategories(neufCats)
        setOccasionCategories(occasionCats)
      } catch (error: any) {
        console.error('Error fetching products:', error)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>
  }

  return (
    <NavigationMenu className="w-full max-lg:hidden">
      <NavigationMenuList className="flex flex-col md:flex-row w-full max-w-4xl">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <Link href={item.href || "#"} passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "transition-colors duration-200 hover:bg-accent/50 hover:text-accent-foreground text-md"
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className="transition-colors duration-200 hover:bg-accent/50 hover:text-accent-foreground text-md">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-4 p-6" onMouseLeave={() => setHoveredItem(null)}>
                  <ul className="w-[200px] space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="ps-3 font-semibold text-lg">Materiel {item.content}:</p>
                      <Link
                        href={item.href || "#"}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        Tous les produits {item.content}
                      </Link>
                    </div>
                    <hr className="border-t border-gray-300 mt-2 mx-3 mb-5" />
                    {(item.content === "neuf" ? neufCategories : occasionCategories).map(
                      (subItem, i) => (
                        <ListItem
                          key={i}
                          href={subItem.href}
                          title={subItem.title}
                          className="flex justify-between text-md capitalize font-semibold items-center transition-transform duration-200 hover:scale-105 hover:bg-accent/30"
                          onMouseEnter={() => setHoveredItem(subItem.title)}
                        >
                          <FaArrowRight className="text-muted-foreground" />
                        </ListItem>
                      )
                    )}
                  </ul>
                  {hoveredItem && (
                    <div className="w-[400px] p-6 grid grid-cols-2 gap-4">
                      {(item.content === "neuf"
                        ? neuf.filter((it) => it.categorie === hoveredItem)
                        : occasion.filter((it) => it.categorie === hoveredItem)
                      ).map((item, index) => (
                        <Products_cart key={item.id} item={item} index={index} />
                      ))}
                    </div>
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
