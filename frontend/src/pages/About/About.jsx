import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#1F2937]">About LaborConnect</h1>
          <p className="mt-4 text-lg text-[#6B7280]">
            Empowering blue-collar workers and employers to connect, hire, and build stronger futures.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1F2937]">Our Mission</h2>
          <p className="mt-4 text-[#4B5563] leading-relaxed">
            LaborConnect is on a mission to make job opportunities more accessible for blue-collar workers and streamline 
            the hiring process for employers. We believe in the power of connection, trust, and skill, and aim to create 
            a platform that brings workers and employers together with ease and transparency.
          </p>
        </div>

        {/* Features/Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1F2937]">Why Choose LaborConnect?</h2>
          <ul className="mt-4 space-y-4 text-[#4B5563]">
            <li>
              <strong className="font-semibold">Tailored for Blue-Collar Jobs:</strong> We specialize in connecting workers
              with relevant, local opportunities in industries like construction, manufacturing, and logistics.
            </li>
            <li>
              <strong className="font-semibold">Trusted and Verified Employers:</strong> All job listings and employers 
              are verified, ensuring a safe and reliable experience for workers.
            </li>
            <li>
              <strong className="font-semibold">Streamlined Hiring Process:</strong> Employers can easily post jobs, 
              review applications, and hire skilled workers directly through the platform.
            </li>
            <li>
              <strong className="font-semibold">Empowering Workers:</strong> LaborConnect offers a platform where blue-collar
              workers can showcase their skills, find new opportunities, and grow their careers.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1F2937]">Join LaborConnect Today</h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Whether you’re a worker looking for a new job or an employer searching for skilled talent, LaborConnect 
            is here to help you succeed.
          </p>
          <div className="mt-6">
            <Link to="/login" className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB]">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
