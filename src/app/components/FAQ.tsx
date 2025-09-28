'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Can I get an IELTS certificate without taking the exam?",
      answer: "Yes, you can. Our service is designed to provide you with an authentic and verifiable IELTS certificate with your desired band score, all without the need to take the exam. We handle the entire process for you."
    },
    {
      question: "Is the certificate genuine and verifiable?",
      answer: "Absolutely. All the certificates we provide are 100% authentic and can be verified online through the official IELTS website. We guarantee the legitimacy of our documents."
    },
    {
      question: "How long does it take to receive my certificate?",
      answer: "The entire process, from submitting your details to receiving your certificate, typically takes between 7 to 10 business days. We also offer expedited services for urgent requests."
    },
    {
      question: "What information do I need to provide?",
      answer: "You will need to provide some basic personal information, such as your full name, date of birth, and a passport-sized photograph. Our team will guide you through the simple and secure submission process."
    },
    {
      question: "What band scores are available?",
      answer: "We offer all IELTS band scores from 4.0 to 9.0, including half-band increments (6.5, 7.5, 8.5). You can choose the specific band score that meets your academic or professional requirements."
    },
    {
      question: "Is the service confidential and secure?",
      answer: "Yes, we maintain the highest levels of confidentiality and security. All personal information is encrypted and handled with strict privacy protocols. Your data is never shared with third parties."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section id="faq" className="bg-gray-100 py-20" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <FaQuestionCircle className="w-4 h-4" aria-hidden="true" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions About Our IELTS Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most commonly asked questions about our IELTS certificate services.
            </p>
          </header>

          <div className="max-w-4xl mx-auto space-y-4" role="list" aria-label="Frequently Asked Questions">
            {faqData.map((faq, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 text-blue-600" aria-hidden="true">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="https://wa.me/237670347320?text=I have a question about your IELTS services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
          </footer>
        </div>
      </section>
    </>
  );
};

export default FAQ;
