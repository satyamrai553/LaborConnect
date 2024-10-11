// CTA.js
import React from 'react';

function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">Join LaborConnect Today!</h2>
      <p className="mt-4">Sign up now and start connecting with opportunities!</p>
      <a
        href="/signup"
        className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100"
      >
        Sign Up
      </a>
    </section>
  );
}

export default CTA;
