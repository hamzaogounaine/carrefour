import ContactUs from '@/components/sections/main/ContactUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Nos coordonnées</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-blue-600 hover:text-blue-800">
                    <a href="tel:+212710696910">07 10 69 69 10</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-blue-600 hover:text-blue-800">
                    <a href="mailto:contact@carrefourdemanutention.com">
                      contact@carrefourdemanutention.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p><strong>1.</strong>   1Km. 1.5, Route Biougra Z.I, Ait Melloul</p>
                  <p><strong>2.</strong>   Diour Chaâbi - Km 3, El Assam - Kénitra</p>
                </div>

                <div>
                  <h3 className="font-medium">Horaires d'ouverture</h3>
                  <p>Lundi - Samedi: <br /> 08h00 - 12h00 || 14h00 - 18h00</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Notre localisation</h2>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1078.3173693583194!2d-9.494011660631159!3d30.338393152481697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c6494a3a4cf5%3A0xe3e9a96ecf36002d!2sCarrefour%20Du%20Manutention!5e1!3m2!1sfr!2sma!4v1745167358982!5m2!1sfr!2sma" 
                className="w-full h-[450px]"
                style={{border: 0}} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Formulaire de contact</h2>
            
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page