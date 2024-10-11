import React from 'react'
import {Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">
      LaborConnect
    </div>
    <ul className="flex space-x-6">
      <li><Link to="/" className="hover:underline">Home</Link></li>
      <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
      <li><Link to="/about" className="hover:underline">About Us</Link></li>
      <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      <li><Link to="/login" className="hover:underline">Login</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar