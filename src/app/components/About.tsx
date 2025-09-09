export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://ext.same-assets.com/2498427149/3039460074.webp"
                  alt="IELTS Certificate Holder"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://ext.same-assets.com/2498427149/2508652422.webp"
                  alt="Happy IELTS Test Takers"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                IELTS Certificate Without Exam – Your Shortcut to Success
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your IELTS Certificate
              <br />
              <span className="text-blue-600">No Exam Required</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Skip the stress, preparation, and uncertainty of the IELTS exam. With IELTS Simplified, you can obtain a genuine, verifiable IELTS certificate with your chosen band score—no test, no exam, no hassle. Our streamlined process means you never have to set foot in a test center. We handle everything for you, ensuring a secure, confidential, and effortless experience from start to finish.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our expert team leverages years of experience and deep knowledge of the IELTS system to deliver certificates that are accepted worldwide. Focus on your future and let us take care of the paperwork. Achieve your goals with confidence—no exam required.
            </p>

            {/* Contact Box */}
            <div className="flex items-center bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">24 HOURS SERVICE AVAILABLE</p>
                <p className="text-lg font-semibold text-gray-900">
                  Mail Us: <a href="mailto:info@ieltssimplified.co.uk" className="text-blue-600 hover:underline">info@ieltssimplified.co.uk</a>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
                GET STARTED
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
