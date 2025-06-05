"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Layout from '@/components/layout'
import { CalendarDaysIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Define interfaces for type safety
interface FicheTechnique {
  type_modèle?: string
  source_énergie?: string
  capacité_charge?: string
  hauteur_levage?: string
  dimensions?: string
  poids?: string
  rayon_virage?: string
  caractéristiques_principales?: string
  applications?: string
}

interface Product {
  id: string
  title: string
  categorie: string
  image: string
  fiche_technique?: FicheTechnique
}

const Page = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFicheTechnique, setShowFicheTechnique] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('Invalid product ID')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/neuf/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json()
        if (!data) {
          throw new Error('No product data received')
        }
        setProduct(data)
        setLoading(false)
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching the product')
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen text-red-500">
          Error: {error}
        </div>
      </Layout>
    )
  }

  if (!product) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          No product found
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 p-8">
              {/* Product Image */}
              <div className="relative h-[500px] bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={'https://www.bouchard-manutention.com/app/uploads/2018/12/manitou-chariot-tout-terrain-a.jpg'}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600">
                    Catégorie: {product.categorie}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="border-t border-gray-200 pt-8">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setShowFicheTechnique(!showFicheTechnique)}
                  >
                    <h2 className="text-2xl font-semibold">
                      Fiche Technique
                    </h2>
                    {showFicheTechnique ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>

                  {showFicheTechnique && product.fiche_technique && (
                    <div className="grid gap-6 mt-6">
                      {[
                        { label: 'Type Modèle', value: product.fiche_technique.type_modèle },
                        { label: 'Source Énergie', value: product.fiche_technique.source_énergie },
                        { label: 'Capacité de Charge', value: product.fiche_technique.capacité_charge },
                        { label: 'Hauteur de Levage', value: product.fiche_technique.hauteur_levage },
                        { label: 'Dimensions', value: product.fiche_technique.dimensions },
                        { label: 'Poids', value: product.fiche_technique.poids },
                        { label: 'Rayon de Virage', value: product.fiche_technique.rayon_virage },
                      ].map(({ label, value }, index) => (
                        value && (
                          <div key={`${label}-${index}`} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{label}</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>

                {/* Main Features */}
                <div className="space-y-6">
                  {product.fiche_technique?.caractéristiques_principales && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Caractéristiques Principales
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {product.fiche_technique.caractéristiques_principales}
                      </p>
                    </div>
                  )}

                  {product.fiche_technique?.applications && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Applications
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {product.fiche_technique.applications}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-4 right-4 mt-8 flex justify-end">
            <Link href={`/reserve/${id}`}>
              <Button size="lg" className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90">
                Réserver
                <CalendarDaysIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
