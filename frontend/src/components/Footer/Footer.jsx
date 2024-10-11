import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl font-bold">LaborConnect</h1>
        <p className="mt-2">Connecting blue-collar workers with jobs</p>
      </div>
      <ul className="flex space-x-6 mb-4 md:mb-0">
        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
      </ul>
      <div className="flex space-x-4">
        <a href="#facebook" className="hover:text-gray-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" className="hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" className="hover:text-gray-300">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    <div className="text-center mt-4 text-sm">
      &copy; {new Date().getFullYear()} LaborConnect. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer