"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaArrowRight } from "react-icons/fa6";
import products from '../../assets/products.json' assert { type: 'json' };
import Products_cart from "./products_cart";

// Reusable ListItem component
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
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
    );
  }
);
ListItem.displayName = "ListItem";

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
      title : 'Nos services',
      isLink: true,
      href: "/services",
    }
  ],
  neufTitle = "Materiel Neuf",
  neufDescription = "Matériel neuf, prêt à l'emploi. Fiable, robuste et garanti.",
  neufHref = "/neuf",
  occasionTitle = "Materiel Occasion",
  occasionDescription = "Une sélection de matériel d'occasion fiable, testé et certifié pour vous offrir performance et tranquillité d'esprit.",
  occasionHref = "/occasion",  
  // neuf = [
  //   { title: "Chariot élévateur électrique", href: "/neuf/chariot-electrique" },
  //   { title: "Installation", href: "/neuf/installation" },
  //   { title: "Nacelle", href: "/neuf/nacelle" },
  //   { title: "Transpalette", href: "/neuf/transpalette" },
  //   { title: "Gerbeur", href: "/neuf/gerbeur" },
  // ],
  // occasion = [
  //   {
  //     title: "Chariot élévateur électrique",
  //     href: "/occasion/chariot-electrique",
  //   },
  //   { title: "Installation", href: "/occasion/installation" },
  //   { title: "Nacelle", href: "/occasion/nacelle" },
  //   { title: "Transpalette", href: "/occasion/transpalette" },
  //   { title: "Gerbeur", href: "/occasion/gerbeur" },
  // ],
  chariot_electrique = [
    {
      title: "Chariot élévateur électrique 3 roues",
      href: "/neuf/chariot-electrique-3-roues",
      image: "https://placehold.co/300x200?text=Electric+Forklift+3+Wheel",
    },
    {
      title: "Chariot élévateur électrique 4 roues",
      href: "/neuf/chariot-electrique-4-roues",
      image: "https://placehold.co/300x200?text=Electric+Forklift+4+Wheel",
    },
    {
      title: "Chariot élévateur électrique compact",
      href: "/neuf/chariot-electrique-compact",
      image: "https://placehold.co/300x200?text=Compact+Electric+Forklift",
    },
  ],

}) {
  const [neuf, setNeuf] = React.useState([]);
  const [occasion, setOccasion] = React.useState([]);
  const [neufCategories, setNeufCategories] = React.useState([]);
  const [occasionCategories, setOccasionCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/neuf_products')
      .then(response => response.json())
      .then(data => {
        console.log('Neuf products:', data);
        setNeuf(data);
        // Create array of unique categories
        const categories = [...new Set(data.map(item => item.categorie))].map(category => ({
          title: category,
          href: `/neuf/${category.toLowerCase().replace(/\s+/g, '-')}`
        }));
        setNeufCategories(categories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching neuf products:', error);
        setError(error.message);
        setLoading(false);
      });
      
    fetch('/api/occasion_products')
      .then(response => response.json())
      .then(data => {
        console.log('Occasion products:', data);
        setOccasion(data);
        // Create array of unique categories with proper object structure
        const categories = [...new Set(data.map(item => item.categorie))].map(category => ({
          title: category,
          href: `/occasion/${category.toLowerCase().replace(/\s+/g, '-')}`
        }));
        setOccasionCategories(categories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching occasion products:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  const [hoveredItem, setHoveredItem] = React.useState(null);
  console.log(products)

  return (
    <NavigationMenu className="w-full max-lg:hidden">
      <NavigationMenuList className="flex flex-col md:flex-row w-full max-w-4xl ">
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
                <NavigationMenuContent className="flex gap-4 " onMouseLeave={() => setHoveredItem(null)}>
                  <ul className=" gap-2 p-6 w-sm  ">

                    <div className="flex justify-between items-center">
                    <p className="ps-3 font-semibold text-lg">Materiel {item.content}: </p>
                    <Link href={item.href || "#"} passHref className="text-sm text-muted-foreground hover:text-primary hover:underline" >
                      Tous les produits {item.content}
                    </Link>
                    </div>
                    <hr className="border-t border-gray-300 mt-2 mx-3 mb-5 " />
                    <li className="space-y-1">
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
                    </li>
                  </ul>
                  {hoveredItem && (
                    <div className="min-w-sm p-6 grid grid-cols-2">
                      {(hoveredItem && (
                        item.content === "neuf" 
                          ? neuf.filter(it => it.categorie === hoveredItem) || []
                          : occasion.filter(it => it.categorie === hoveredItem) || []
                      )).map((item, index) => (
                        <Products_cart item={item} index={index} />
                      ))}
                        
                    </div>
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      {/* You can render something based on hoveredItem if you want */}
    </NavigationMenu>
  );
}
