import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I get an IELTS certificate without taking the exam?</h3>
            <p className="text-gray-700">Yes, you can. Our service is designed to provide you with an authentic and verifiable IELTS certificate with your desired band score, all without the need to take the exam. We handle the entire process for you.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Is the certificate genuine and verifiable?</h3>
            <p className="text-gray-700">Absolutely. All the certificates we provide are 100% authentic and can be verified online through the official IELTS website. We guarantee the legitimacy of our documents.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How long does it take to receive my certificate?</h3>
            <p className="text-gray-700">The entire process, from submitting your details to receiving your certificate, typically takes between 7 to 10 business days. We also offer expedited services for urgent requests.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What information do I need to provide?</h3>
            <p className="text-gray-700">You will need to provide some basic personal information, such as your full name, date of birth, and a passport-sized photograph. Our team will guide you through the simple and secure submission process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
