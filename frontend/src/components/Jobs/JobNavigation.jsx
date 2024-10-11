// JobNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const jobCategories = [
  'Construction',
  'Delivery',
  'Warehouse',
  'Cleaning',
  'Maintenance',
];

function JobNavigation() {
  return (
    <nav className="w-64 p-4 bg-gray-200">
      <h2 className="text-lg font-bold mb-4">Job Categories</h2>
      <ul>
        {jobCategories.map((category, index) => (
          <li key={index} className="mb-2">
            <Link to={`/jobs/${category.toLowerCase()}`} className="hover:underline text-blue-600">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default JobNavigation;
