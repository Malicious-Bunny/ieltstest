'use client'
import { useState } from 'react'
import { FaStar, FaUserCircle } from 'react-icons/fa'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Anonymous Buyer',
      band: 'Band 7.0',
      text: 'IELTS Simplified made the entire process incredibly smooth and professional. I received my Band 7 certificate exactly as promised, with all the proper documentation. Highly recommended!',
      avatar: 'user'
    },
    {
      id: 2,
      name: 'Anonymous Buyer',
      band: 'Band 8.0',
      text: 'I was initially hesitant, but IELTS Simplified delivered exactly what they promised. The Band 8 certificate was professionally prepared and arrived with complete authenticity verification.',
      avatar: 'user'
    },
    {
      id: 3,
      name: 'Anonymous Buyer',
      band: 'Band 6.5',
      text: 'The service was user-friendly and their step-by-step guidance helped me get my Band 6.5 certificate without any complications. Their customer support was excellent throughout.',
      avatar: 'user'
    },
    {
      id: 4,
      name: 'Anonymous Buyer',
      band: 'Band 7.5',
      text: 'Professional service with fast delivery. My Band 7.5 certificate came with all necessary documentation and has been accepted everywhere I needed it. Very satisfied!',
      avatar: 'user'
    },
    {
      id: 5,
      name: 'Anonymous Buyer',
      band: 'Band 8.5',
      text: 'Exceptional service quality! The Band 8.5 certificate was prepared to perfection with authentic documentation. The entire process was transparent and reliable.',
      avatar: 'user'
    },
    {
      id: 6,
      name: 'Anonymous Buyer',
      band: 'Band 9.0',
      text: 'Outstanding experience with IELTS Simplified. The Band 9 certificate exceeded my expectations in terms of quality and authenticity. Truly professional work!',
      avatar: 'user'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block flex items-center justify-center gap-2">
            <FaStar className="w-4 h-4" />
            OUR CUSTOMER REVIEWS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Customers
            <br />
            <span className="text-blue-600">Are Saying</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real feedback from real customers who have successfully obtained their IELTS certificates
            through our professional service.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentTestimonial + offset) % testimonials.length
              const testimonial = testimonials[index]
              return (
                <div
                  key={testimonial.id}
                  className={`bg-gray-50 rounded-xl p-8 transition-all duration-300 ${
                    offset === 1 ? 'transform scale-105 bg-blue-50 border-2 border-blue-200' : ''
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="text-5xl text-blue-600 mb-4 opacity-50">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="text-gray-400 mr-4">
                      <FaUserCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.band}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
            <div className="text-gray-600">Average Delivery</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
