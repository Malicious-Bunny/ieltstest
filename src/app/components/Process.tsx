import { FaRedo } from 'react-icons/fa'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Band Score',
      description: 'Select the IELTS band score you need, without having to take the exam. Our team is available to help you choose the right level for your specific goals.',
      icon: 'https://ext.same-assets.com/2498427149/1332396493.svg'
    },
    {
      number: '02',
      title: 'Provide Your Details',
      description: 'Submit your personal information and specific requirements. We ensure all details are accurate and meet international standards.',
      icon: 'https://ext.same-assets.com/2498427149/2076714338.svg'
    },
    {
      number: '03',
      title: 'Process & Documentation',
      description: 'Our expert team prepares your IELTS certificate with complete documentation, ensuring authenticity and compliance with all requirements.',
      icon: 'https://ext.same-assets.com/2498427149/1382535967.svg'
    },
    {
      number: '04',
      title: 'Secure Delivery',
      description: 'Receive your professionally prepared IELTS certificate with all supporting documentation through our secure delivery service.',
      icon: 'https://ext.same-assets.com/2498427149/3799588237.svg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block flex items-center justify-center gap-2">
            <FaRedo className="w-4 h-4" />
            OUR WORK PROCESS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Your Certificate in 4 Easy Steps
            <br />
            <span className="text-blue-600">No Exam Required</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our streamlined process makes it simple to get your IELTS certificate without taking the test. From choosing your score to receiving your documents, we handle everything with professionalism and care.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-blue-200 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 pt-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <img src={step.icon} alt="" className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Your
                <span className="text-blue-600"> IELTS Certificate?</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Join thousands of satisfied customers who have successfully obtained their
                IELTS certificates through our professional service. Fast, reliable, and authentic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  START ORDER
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                  <div className="text-gray-600 text-sm">Average Processing Time</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                  <div className="text-gray-600 text-sm">Customer Satisfaction</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-gray-600 text-sm">Certificates Delivered</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
