'use client'
import { FaWhatsapp, FaEye, FaCheckCircle } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-r from-[#20385c] to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://d3q9kdqrtloda.cloudfront.net/production/transformed-images/general/ielts-advertising-square/1285062/ive-got-this-advertising-campaign-man-holding-ielts-certificate_157f0d904d1544ba631b9156ab85c223.webp"
          alt="Student holding IELTS certificate - Success in English language testing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-[80vh]">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center mb-6">
            <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold flex items-center gap-2">
              <FaCheckCircle />
              NO EXAM REQUIRED
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            GET YOUR IELTS CERTIFICATE
            <br />
            <span className="text-blue-300">WITHOUT THE TEST</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Skip the stress and uncertainty of the IELTS exam. We provide authentic, verifiable certificates with your desired band score—no test required. Our service is fast, discreet, and guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/237670347320?text=Hello! I'm interested in getting an IELTS certificate. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              CONTACT WHATSAPP
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#20385c] px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <FaEye className="w-5 h-5 mr-2" />
              VIEW BAND SCORES
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  )
}
