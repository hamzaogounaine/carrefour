"use client"
import Layout from '@/components/layout'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Home, ShoppingCart } from 'lucide-react'
import CardsSkeleton from '@/components/ui/CardsSkeleton'

const Page = () => {
  const [neufProducts, setNeufProducts] = useState([])
  const [occasionProducts, setOccasionProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/neuf_products')
      const data = await response.json()
      setNeufProducts(data)
      const response2 = await fetch('/api/occasion_products')
      const data2 = await response2.json()
      setOccasionProducts(data2)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto py-12 px-4 space-y-16">

        {/* New Products Section */}
        <section>
          <div className='flex items-center gap-2 mb-5 hover:text-red-500 cursor-pointer transition-all duration-300'>
            <Home className='w-5 h-5' />
            <Link href="/">
              Accueil
            </Link>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Produits Neufs</h2>
              <p className="text-gray-500 mt-1">Découvrez notre gamme de produits neufs de haute qualité</p>
            </div>
            <Link href="/neuf" className="text-sm font-medium text-primary hover:underline">
              Voir tous les produits neufs →
            </Link>
          </div>

          <Carousel className="w-full mx-[-16px] px-[16px] border-r-2 rounded" opts={{ align: "start" }}>
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <CardsSkeleton />
                  </CarouselItem>
                ))
              ) : (neufProducts &&
                neufProducts.map((product, i) => (
                  <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <Link href={product.href}>
                      <Card className="h-full border shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <CardContent className="p-4 flex-grow">
                          <div className="aspect-square relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
                            <Badge className="bg-secondary text-black">{product.categorie}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 mt-auto">
                          <Button className="w-full" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Voir le détail
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </section>

        {/* Used Products Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Produits d&apos;Occasion</h2>
              <p className="text-gray-500 mt-1">Des équipements reconditionnés à prix avantageux</p>
            </div>
            <Link href="/occasion" className="text-sm font-medium text-primary hover:underline">
              Voir tous les produits d&apos;occasion →
            </Link>
          </div>

          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <CardsSkeleton />
                  </CarouselItem>
                ))
              ) : (occasionProducts &&
                occasionProducts.map((product, i) => (
                  <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <Link href={product.href}>
                      <Card className="h-full border shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <CardContent className="p-4 flex-grow">
                          <div className="aspect-square relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="object-cover w-full h-full"
                            />
                            <Badge className="absolute top-2 left-2 z-10 bg-amber-500">Occasion</Badge>
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
                            <Badge className="bg-secondary text-black">{product.categorie}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 mt-auto">
                          <Button className="w-full" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Voir le détail
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </section>

      </div>
    </div>
  )
}

export default Page
