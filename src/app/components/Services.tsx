'use client'
import {
  FaBookOpen,
  FaUserGraduate,
  FaFileAlt,
  FaPencilAlt,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaCrown,
  FaChartBar
} from 'react-icons/fa'
import { GiSparkles } from 'react-icons/gi'
import { BsArrowRightShort } from 'react-icons/bs'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export default function Services() {
  const getIcon = (iconName: string) => {
    const iconClass = "w-8 h-8 text-blue-600"

    switch(iconName) {
      case 'book-open':
        return <FaBookOpen className={iconClass} />
      case 'academic-cap':
        return <FaUserGraduate className={iconClass} />
      case 'document-text':
        return <FaFileAlt className={iconClass} />
      case 'pencil':
        return <FaPencilAlt className={iconClass} />
      case 'graduation-cap':
        return <FaGraduationCap className={iconClass} />
      case 'trophy':
        return <FaTrophy className={iconClass} />
      case 'star':
        return <FaStar className={iconClass} />
      case 'sparkles':
        return <GiSparkles className={iconClass} />
      case 'crown':
        return <FaCrown className={iconClass} />
      default:
        return <FaBookOpen className={iconClass} />
    }
  }

  const bandScores = [
    {
      id: 'band-4',
      score: '4.0',
      level: 'Basic User',
      description: 'Basic understanding with limited communication ability',
      price: '$400',
      icon: 'book-open',
      features: ['No Exam Required', 'Basic English proficiency', 'Limited workplace English', 'Foundation level certificate']
    },
    {
      id: 'band-5',
      score: '5.0',
      level: 'Modest User',
      description: 'Partial command with frequent problems in understanding',
      price: '$500',
      icon: 'academic-cap',
      features: ['No Exam Required', 'Modest English skills', 'Some workplace communication', 'Intermediate foundation']
    },
    {
      id: 'band-6',
      score: '6.0',
      level: 'Competent User',
      description: 'Generally effective command despite inaccuracies',
      price: '$600',
      icon: 'document-text',
      popular: true,
      features: ['No Exam Required', 'Competent English use', 'Workplace communication', 'University admission standard']
    },
    {
      id: 'band-6-5',
      score: '6.5',
      level: 'Competent Plus',
      description: 'Good command with occasional inaccuracies',
      price: '$650',
      icon: 'pencil',
      features: ['No Exam Required', 'Strong competent level', 'Professional communication', 'Higher education ready']
    },
    {
      id: 'band-7',
      score: '7.0',
      level: 'Good User',
      description: 'Good command with occasional inaccuracies',
      price: '$700',
      icon: 'graduation-cap',
      features: ['No Exam Required', 'Good English proficiency', 'Professional workplace use', 'University standard']
    },
    {
      id: 'band-7-5',
      score: '7.5',
      level: 'Good Plus',
      description: 'Very good command with occasional inaccuracies',
      price: '$750',
      icon: 'trophy',
      features: ['No Exam Required', 'Very good proficiency', 'Advanced workplace English', 'Competitive advantage']
    },
    {
      id: 'band-8',
      score: '8.0',
      level: 'Very Good User',
      description: 'Very good command with only occasional unsystematic inaccuracies',
      price: '$800',
      icon: 'star',
      features: ['No Exam Required', 'Very good English skills', 'Advanced professional use', 'Premium qualification']
    },
    {
      id: 'band-8-5',
      score: '8.5',
      level: 'Very Good Plus',
      description: 'Excellent command with only occasional inaccuracies',
      price: '$850',
      icon: 'sparkles',
      features: ['No Exam Required', 'Excellent proficiency', 'Near-native communication', 'Elite qualification']
    },
    {
      id: 'band-9',
      score: '9.0',
      level: 'Expert User',
      description: 'Full operational command - native-like proficiency',
      price: '$900',
      icon: 'crown',
      premium: true,
      features: ['No Exam Required', 'Expert-level English', 'Native-like proficiency', 'Highest qualification']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 flex items-center justify-center gap-2">
            <FaChartBar className="w-4 h-4" aria-hidden="true" />
            OUR IELTS BAND SCORES
          </div>
          <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-6">
            GET YOUR DESIRED
            <br />
            <span className="text-blue-600">IELTS SCORE, NO EXAM NEEDED</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose the band score that meets your goals. Every certificate is authentic, verifiable, and delivered without requiring you to take the IELTS exam. We handle the entire process, so you can focus on your future.
          </p>
        </header>

        {/* Band Score Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="IELTS Band Score Options">
          {bandScores.map((band) => (
            <article
              key={band.id}
              role="listitem"
              className={`relative bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                band.popular
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : band.premium
                  ? 'border-yellow-500 ring-2 ring-yellow-200'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              aria-labelledby={`band-${band.id}-title`}
            >
              {/* Popular/Premium Badge */}
              {band.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold" role="badge">
                    MOST POPULAR
                  </span>
                </div>
              )}
              {band.premium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold" role="badge">
                    PREMIUM
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon and Score */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                    {getIcon(band.icon)}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900" aria-label={`Band Score ${band.score}`}>{band.score}</div>
                    <div className="text-sm text-gray-500">Band Score</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 id={`band-${band.id}-title`} className="text-xl font-bold text-gray-900 mb-2">{band.level}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{band.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8" aria-label={`Features for ${band.level}`}>
                  {band.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <IoIosCheckmarkCircleOutline className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-gray-900" aria-label={`Price ${band.price}`}>{band.price}</div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>
                  <a
                    href={`https://wa.me/237670347320?text=I'm interested in the ${band.level} (Band ${band.score}) certificate.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      band.popular || band.premium
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:text-blue-600'
                    }`}
                    aria-label={`Order IELTS ${band.level} certificate for ${band.price}`}
                  >
                    ORDER NOW
                    <BsArrowRightShort className="w-4 h-4 ml-2 inline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <footer className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which band score you need? Our experts can help you choose the right level.
          </p>
          <a
            href="https://wa.me/237670347320?text=I'd like a consultation to choose the right IELTS band score."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            aria-label="Get consultation for IELTS band score selection"
          >
            GET CONSULTATION
          </a>
        </footer>
      </div>
    </section>
  )
}
