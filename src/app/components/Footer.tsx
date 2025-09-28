'use client'
import Link from 'next/link'
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#20385c] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                IS
              </div>
              <span className="text-2xl font-bold">IELTS Simplified</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Get your IELTS test certificate with your desired band score in just a few simple steps.
              Professional, authentic, and delivered with complete documentation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-gray-300 text-sm">
                    71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">
                  <FaClock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-300 text-sm">
                    We are Available 24/7. Feel Free to Contact with Us Any Time
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Contact Us</h4>
                  <a
                    href="https://wa.me/237670347320?text=I have a question about your IELTS services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Contact us on WhatsApp
                  </a>
                  <p className="text-gray-300 text-sm">We will reply ASAP.</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="text-xl hover:text-blue-400 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Band Scores
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
                  Order Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal & Policies</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#refund" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#cookie" className="text-gray-300 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 IELTS Simplified. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>IELTS Simplified - Your Path to Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}
