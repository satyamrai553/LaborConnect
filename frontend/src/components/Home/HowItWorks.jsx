// HowItWorks.js
import React from 'react';

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <ol className="mt-8 space-y-4 text-left">
          <li>1. Create an account as an employee or employer.</li>
          <li>2. Fill out your profile with relevant information.</li>
          <li>3. Browse job listings or post job openings.</li>
          <li>4. Connect with potential candidates or employers.</li>
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
