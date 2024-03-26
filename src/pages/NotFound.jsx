import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
    <p className="text-xl text-gray-600 mb-8">The page you are looking for does not exist.</p>
    <a href="/" className="text-blue-600 hover:underline">Go back to homepage</a>
  </div>
  )
}

export default NotFound
