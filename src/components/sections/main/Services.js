import React from 'react'
import location from '../../../assets/location.png'
import vente from '../../../assets/vente.png'
import sav from '../../../assets/sav.png'
import Image from 'next/image'


const Services = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all">
          <div className="w-full h-48 relative mb-4">
            <Image 
              src={location}
              alt="Service de Vente"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Vente</h3>
          <p className="text-gray-600">Large gamme d'équipements de manutention neufs et d'occasion pour répondre à vos besoins</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all">
          <div className="w-full h-48 relative mb-4">
            <Image 
              src={location}
              alt="Service de Location"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">Solutions de location flexibles pour vos besoins ponctuels ou à long terme</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all">
          <div className="w-full h-48 relative mb-4">
            <Image 
              src={sav}
              alt="Service Après-Vente"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Service Après-Vente</h3>
          <p className="text-gray-600">Maintenance, réparation et support technique par notre équipe qualifiée</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Services