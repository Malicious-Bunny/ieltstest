'use client'
import { useState } from 'react'
import { FiTarget, FiUsers, FiZap, FiShield, FiCheckCircle } from 'react-icons/fi'
import { GiSparkles } from 'react-icons/gi'
import { BsArrowRightShort } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

export default function WhyChoose() {
  const [activeFeature, setActiveFeature] = useState(0)

  const getFeatureIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-blue-300"

    switch(iconName) {
      case 'target':
        return <FiTarget className={iconClass} />
      case 'users':
        return <FiUsers className={iconClass} />
      case 'lightning':
        return <FiZap className={iconClass} />
      case 'shield':
        return <FiShield className={iconClass} />
      case 'sparkles':
        return <GiSparkles className={iconClass} />
      case 'check-circle':
        return <FiCheckCircle className={iconClass} />
      default:
        return <FiTarget className={iconClass} />
    }
  }

  const features = [
    {
      title: 'Expert Documentation',
      description: 'Our experienced team provides comprehensive documentation and ensures all certificates meet international standards. We handle every detail to guarantee authenticity and acceptance worldwide.',
      icon: 'target'
    },
    {
      title: 'Personalized Service',
      description: 'Each order receives individual attention. We work closely with you to ensure your specific requirements are met, providing tailored solutions for your unique needs.',
      icon: 'users'
    },
    {
      title: 'Fast Delivery',
      description: 'We process and deliver your IELTS certificate quickly and efficiently. No long waiting periods - get your certificate when you need it most.',
      icon: 'lightning'
    },
    {
      title: 'Complete Support',
      description: 'Our dedicated support team is available throughout the entire process. From initial consultation to final delivery, we provide comprehensive assistance.',
      icon: 'shield'
    },
    {
      title: 'Peace of Mind',
      description: 'With IELTS Simplified, you can be confident in the quality and authenticity of your certificate. We ensure complete satisfaction and reliability.',
      icon: 'sparkles'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#20385c] to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://www.schiller.edu/media/s0ubvqla/international-students-during-english-preparations.webp"
                  alt="International students preparing for IELTS English exam"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Certificates Delivered</div>
                </div>
              </div>
              <div className="mt-8">
                <img
                  src="https://motto-jp.com/media/wp-content/uploads/2020/09/AdobeStock_295766623.jpeg"
                  alt="Student studying in library for English language exam preparation"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white mt-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide">
                📋 IELTS SIMPLIFIED - YOUR SUCCESS PARTNER
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Why Choose
              <br />
              <span className="text-blue-300">IELTS Simplified</span>
            </h2>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg border transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'border-blue-300 bg-white/20'
                      : 'border-white/20 hover:border-blue-400 hover:bg-white/15'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getFeatureIcon(feature.icon)}</div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <IoIosArrowDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          activeFeature === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>

                    {activeFeature === index && (
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeFeature === -1
                    ? 'border-blue-300 bg-white/20'
                    : 'border-white/20 hover:border-blue-400 hover:bg-white/15'
                }`}
                onClick={() => setActiveFeature(-1)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{getFeatureIcon('check-circle')}</div>
                      <h3 className="text-xl font-semibold">No Exam Required</h3>
                    </div>
                    <IoIosArrowDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeFeature === -1 ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>

                  {activeFeature === -1 && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-blue-100 leading-relaxed">That's right—you can get your official IELTS certificate without ever taking the exam. We handle the entire process, ensuring you receive a genuine, verifiable certificate with your desired score, hassle-free.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/237670347320?text=I'd like to get a quote for an IELTS certificate."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                GET A QUOTE
                <BsArrowRightShort className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
