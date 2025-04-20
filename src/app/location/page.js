import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Service de Location
        </h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 text-center mb-8">
            Découvrez notre service de location de matériel professionnel de qualité supérieure.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Matériel professionnel de haute qualité</li>
                <li>• Prix compétitifs et transparents</li>
                <li>• Service client réactif et professionnel</li>
                <li>• Flexibilité des durées de location</li>
                <li>• Livraison et installation possibles</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Notre engagement</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Maintenance régulière du matériel</li>
                <li>• Assistance technique disponible</li>
                <li>• Garantie satisfaction</li>
                <li>• Solutions adaptées à vos besoins</li>
                <li>• Conseils personnalisés</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Pour plus d'informations sur nos services de location ou pour obtenir un devis personnalisé, n'hésitez pas à nous contacter.
            </p>
            <a 
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page