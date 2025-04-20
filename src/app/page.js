import Layout from '@/components/layout'
import ContactUs from '@/components/sections/main/ContactUs'
import Hero from '@/components/sections/main/hero'
import Partenaires from '@/components/sections/main/Partenaires'
import Services from '@/components/sections/main/Services'
import WhyUs from '@/components/sections/main/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <WhyUs />
        <Partenaires />
        <Services />
        <ContactUs />
    </div>
  )
}

export default page