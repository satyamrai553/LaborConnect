// Services.js
import React from 'react';

function Services() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Job Listings</h3>
            <p className="mt-2 text-gray-600">Browse a wide range of job opportunities tailored for blue-collar workers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Employer Tools</h3>
            <p className="mt-2 text-gray-600">Access tools to manage job postings and track applicants efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Profile Creation</h3>
            <p className="mt-2 text-gray-600">Create a professional profile to showcase your skills and experience to potential employers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
