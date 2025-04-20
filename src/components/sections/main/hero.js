import { ArrowDownIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero min-h-full max-sm:h-fit  bg-cover bg-center bg-no-repeat relative w-full h-full'>
      <div className='absolute inset-0 bg-black/40 text-white flex items-end justify-center '><ArrowDownIcon className='w-10 h-10 animate-bounce max-sm:hidden' /></div>
      <div className='flex flex-col items-center justify-center min-h-[100vh] max-sm:min-h-fit max-sm:py-20 relative z-10 px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4 sm:mb-6 tracking-tight'>
          Carrefour de Manutention
        </h1>
        <p className='text-white text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8 leading-relaxed'>
          Votre partenaire de confiance pour la vente et la location d&apos;équipements de manutention de qualité.
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>

        <button className='bg-red-500 text-white transition-all px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-white hover:text-red-500 duration-300 transform hover:scale-105'>
          Contactez-nous
        </button>
        <button className='bg-white text-red-500 transition-all px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-red-500 hover:text-white duration-300 transform hover:scale-105'>
          <Link href="/produits">
            Parcourir tous les produits
          </Link>
        </button>
        </div>
        </div>

    </div>
  )
}

export default Hero