"use client"
import React from 'react'

const ContactUs = () => {
    const [isSuccess, setIsSuccess] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/message/send', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div className="mx-auto py-12 px-4 bg-secondary">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Contactez-nous</h2>
      {isSuccess && (
        <div className="max-w-3xl mx-auto">
          <p className="text-green-600 text-center mb-4">Message envoyé avec succès !</p>
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg bg-white border border-gray-200 backdrop-blur-sm transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg bg-white border border-gray-200 backdrop-blur-sm transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg bg-white border border-gray-200 backdrop-blur-sm transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg bg-white border border-gray-200 backdrop-blur-sm transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 text-base font-medium text-white bg-primary rounded-lg shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs