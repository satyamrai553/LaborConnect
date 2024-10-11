// Statistics.js
import React from 'react';

function Statistics() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Impact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600">Jobs Posted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Employers Registered</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-600">2000+</h3>
            <p className="text-gray-600">Candidates Hired</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
