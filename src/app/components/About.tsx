'use client'
import { FaCheckCircle } from 'react-icons/fa'

export default function About() {

  return (
    <section id="about" className="py-20 bg-gray-50" aria-labelledby="why-choose-heading">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-choose-heading" className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our IELTS Certificate Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Verified Documentation:</strong> All certificates come with proper verification codes and can be authenticated through official channels.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Custom Band Scores:</strong> Choose your desired band score for each section (Reading, Writing, Listening, Speaking).
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Academic & General:</strong> Available for both IELTS Academic and General Training modules.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Worldwide Acceptance:</strong> Recognized by universities, employers, and immigration authorities globally.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/unrdeg6se4ke/1xYhqY3QVFQMD5O2uo8rWU/f120854e1fae82d7b45b7a78f4396b8a/example-of-ielts-test-report-form.jpg"
                alt="Official IELTS Test Report Form - Authentic certificate document sample"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
