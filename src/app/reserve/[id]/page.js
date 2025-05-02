"use client"
import ContactUs from '@/components/sections/main/ContactUs'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
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
    <div>
       <ContactUs product={product} />
    </div>
  )
}

export default page