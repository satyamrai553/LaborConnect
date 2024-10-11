// FeaturedJobs.js
import React from 'react';

const jobs = [
  { title: 'Construction Worker', company: 'ABC Construction', location: 'New York, NY' },
  { title: 'Delivery Driver', company: 'Fast Logistics', location: 'Los Angeles, CA' },
  { title: 'Warehouse Associate', company: 'Retail Solutions', location: 'Chicago, IL' },
];

function FeaturedJobs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Featured Jobs</h2>
        <div className="mt-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
