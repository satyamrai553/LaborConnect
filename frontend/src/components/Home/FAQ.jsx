// FAQ.js
import React from 'react';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Visit the signup page and fill out the necessary information.',
  },
  {
    question: 'Can I apply for multiple jobs?',
    answer: 'Yes, you can apply for as many jobs as you like!',
  },
];

function FAQ() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
