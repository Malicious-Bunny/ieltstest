'use client'
import Link from 'next/link'
import { FaClock, FaEnvelope, FaTwitter, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#20385c] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaClock className="w-4 h-4 text-white" />
              <span>We are available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4 text-white" />
              <a href="mailto:info@ieltssimplified.co.uk" className="hover:underline">
                info@ieltssimplified.co.uk
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#20385c] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              IS
            </div>
            <span className="text-2xl font-bold text-[#20385c]">IELTS Simplified</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#20385c] font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#20385c] font-medium flex items-center">
                IELTS Band Scores
                <IoIosArrowDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="#band-4" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 4 - Basic</Link>
                  <Link href="#band-5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 5 - Modest</Link>
                  <Link href="#band-6" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 6 - Competent</Link>
                  <Link href="#band-6-5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 6.5 - Competent+</Link>
                  <Link href="#band-7" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 7 - Good</Link>
                  <Link href="#band-7-5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 7.5 - Good+</Link>
                  <Link href="#band-8" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 8 - Very Good</Link>
                  <Link href="#band-8-5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 8.5 - Very Good+</Link>
                  <Link href="#band-9" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Band 9 - Expert</Link>
                </div>
              </div>
            </div>
            <Link href="#services" className="text-gray-700 hover:text-[#20385c] font-medium">
              Our Services
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-[#20385c] font-medium">
              FAQs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  )
}
