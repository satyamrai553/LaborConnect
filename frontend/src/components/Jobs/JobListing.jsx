// JobListing.js
import React from 'react';

const jobs = [
  { title: 'Construction Worker', company: 'ABC Construction', location: 'New York, NY' },
  { title: 'Delivery Driver', company: 'Fast Logistics', location: 'Los Angeles, CA' },
  { title: 'Warehouse Associate', company: 'Retail Solutions', location: 'Chicago, IL' },
];

function JobListing() {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company} | {job.location}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
