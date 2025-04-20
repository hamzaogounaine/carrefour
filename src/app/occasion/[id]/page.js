'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/occasion/${id}`)
                const data = await response.json()
                console.log('data' , data)
                setProduct(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!product) return <div>No product found</div>

    return (
        <div>
            Occasion product page
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default Page