'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button when scrolled to the very bottom
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setIsVisible(scrollTop + windowHeight < documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = "1234567890" // Replace with actual WhatsApp number
  const whatsappMessage = "Hello! I'm interested in getting an IELTS certificate. Can you help me?"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Expanded Message */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-80 mb-2 border">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-white w-4 h-4" />
              </div>
              <span className="font-semibold text-gray-800">IELTS Simplified</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Hi there! 👋 Need help with your IELTS certificate? Chat with us on WhatsApp for instant support!
          </p>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full block text-center"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 group"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />


        </button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  )
}
