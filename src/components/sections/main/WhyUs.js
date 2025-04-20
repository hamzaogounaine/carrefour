import React from 'react'

const WhyUs = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-all">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expertise Reconnue</h3>
          <p className="text-muted-foreground">Plus de 10 ans d'expérience dans la vente et la location de matériel de manutention</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-all">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Service Rapide</h3>
          <p className="text-muted-foreground">Intervention rapide et maintenance préventive pour minimiser les temps d'arrêt</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-all">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Prix Compétitifs</h3>
          <p className="text-muted-foreground">Des solutions adaptées à tous les budgets avec des options de financement flexibles</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-all">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Service Après-Vente</h3>
          <p className="text-muted-foreground">Une équipe dédiée pour assurer le suivi et la maintenance de votre matériel</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default WhyUs