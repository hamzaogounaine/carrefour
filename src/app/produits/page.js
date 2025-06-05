"use client"
import Layout from '@/components/layout'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Home, ShoppingCart } from 'lucide-react'
import CardsSkeleton from '@/components/ui/CardsSkeleton'

// Define product type for better type safety
interface Product {
  id: string;
  title: string;
  href: string;
  image?: string;
  categorie: string;
}

const Page = () => {
  const [neufProducts, setNeufProducts] = useState<Product[]>([])
  const [occasionProducts, setOccasionProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const [neufResponse, occasionResponse] = await Promise.all([
          fetch('/api/neuf_products'),
          fetch('/api/occasion_products')
        ])

        if (!neufResponse.ok || !occasionResponse.ok) {
          throw new Error('Failed to fetch products')
        }

        const [neufData, occasionData] = await Promise.all([
          neufResponse.json(),
          occasionResponse.json()
        ])

        setNeufProducts(neufData)
        setOccasionProducts(occasionData)
      } catch (err) {
        setError('Failed to load products. Please try again later.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (error) {
    return (
      <Layout>
        <div className="w-full max-w-7xl mx-auto py-12 px-4">
          <p className="text-red-500">{error}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto py-12 px-4 space-y-16">
        {/* New Products Section */}
        <section>
          <div className='flex items-center gap-2 mb-5 hover:text-red-500 cursor-pointer transition-all duration-300'>
            <Home className='w-5 h-5' />
            <Link href="/">Accueil</Link>
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

          <Carousel className="w-full" opts={{ align: "start", dragFree: true }}>
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={`skeleton-neuf-${i}`} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <CardsSkeleton />
                  </CarouselItem>
                ))
              ) : (
                neufProducts.map((product) => (
                  <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
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
              <h2 className="text-2xl font-bold tracking-tight">Produits d'Occasion</h2>
              <p className="text-gray-500 mt-1">Des équipements reconditionnés à prix avantageux</p>
            </div>
            <Link href="/occasion" className="text-sm font-medium text-primary hover:underline">
              Voir tous les produits d'occasion →
            </Link>
          </div>

          <Carousel className="w-full" opts={{ align: "start", dragFree: true }}>
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={`skeleton-occasion-${i}`} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <CardsSkeleton />
                  </CarouselItem>
                ))
              ) : (
                occasionProducts.map((product) => (
                  <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
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
    </Layout>
  )
}

export default Page
