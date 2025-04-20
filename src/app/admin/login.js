import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
        <div className=" p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Admin Login</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login