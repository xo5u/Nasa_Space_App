import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`text-center relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400  via-purple-400 to-indigo-400 animate-pulse ">
            404
          </h1>
          {/* Glowing effect */}
          <div className="absolute inset-0 text-9xl font-bold text-white opacity-30 blur-sm ">
            404
          </div>
        </div>

        {/* Animated rocket icon */}
        <div className="mb-6 animate-bounce animation-delay-1000">
          <div className="inline-block text-6xl">🚀</div>
        </div>

        {/* Animated text */}
        <div className={`space-y-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            Oops! Lost in Space
          </p>
          <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have drifted off into the cosmic void. 
            Let's get you back on track!
          </p>
        </div>

        {/* Animated buttons */}
        <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <Link
            to="/"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              🏠 Go Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/contact"
            className="group relative px-8 py-3 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
          >
            <span className="relative z-10 flex items-center gap-2">
              📡 Contact Support
            </span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NotFound