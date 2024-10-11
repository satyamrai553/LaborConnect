// Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'LaborConnect helped me find my dream job within a week!',
  },
  {
    name: 'Jane Smith',
    feedback: 'Great platform for employers to find qualified candidates quickly.',
  },
];

function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <div className="mt-8 space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="italic">"{testimonial.feedback}"</p>
              <p className="mt-2 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
