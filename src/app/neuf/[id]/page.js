'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Layout from '@/components/layout'
import { CalendarDaysIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showFicheTechnique, setShowFicheTechnique] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/neuf/${id}`)
                const data = await response.json()
                console.log('data', data)
                setProduct(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            Loading...
        </div>
    )

    if (error) return (
        <div className="flex justify-center items-center min-h-screen text-red-500">
            Error: {error}
        </div>
    )

    if (!product) return (
        <div className="flex justify-center items-center min-h-screen">
            No product found
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 py-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-12 p-8">
                        
                        {/* Product Image */}
                        <div className="relative h-[500px] bg-gray-100 rounded-xl overflow-hidden">
                            <Image 
                                src={product.image}
                                alt={product.title}
                                className="object-contain w-full h-full"
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
                                            ['Type Modèle', product.fiche_technique.type_modèle],
                                            ['Source Énergie', product.fiche_technique.source_énergie],
                                            ['Capacité de Charge', product.fiche_technique.capacité_charge],
                                            ['Hauteur de Levage', product.fiche_technique.hauteur_levage],
                                            ['Dimensions', product.fiche_technique.dimensions],
                                            ['Poids', product.fiche_technique.poids],
                                            ['Rayon de Virage', product.fiche_technique.rayon_virage]
                                        ].map(([label, value]) => (
                                            <div key={label} className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                                                <span className="font-medium text-gray-700">{label}</span>
                                                <span className="text-gray-600">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Main Features */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Caractéristiques Principales
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {product.fiche_technique?.caractéristiques_principales}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Applications
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {product.fiche_technique?.applications}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/contact" className="sticky bottom-0 right-0 mt-8 flex justify-end">
                    <Button size='lg' className="flex bg-primary text-white hover:bg-primary/90">
                        Réserver
                        <CalendarDaysIcon />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Page