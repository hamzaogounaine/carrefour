import Image from 'next/image'
import React from 'react'

const Products_cart = ({index , item}) => {
  return (
          <div
                              key={index}
                              className="flex flex-col items-start mb-4 max-w-xs p-3" 
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-32 h-20 object-cover rounded-md mb-2"
                              />
                              <a
                                href={item.href}
                                className="text-sm font-medium text-blue-500 hover:underline"
                              >
                                {item.title}
                              </a>
                            </div>
  )
}

export default Products_cart