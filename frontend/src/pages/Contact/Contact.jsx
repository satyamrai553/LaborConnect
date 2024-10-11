import React from 'react';

function Contact() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#1F2937]">Contact Us</h1>
          <p className="mt-4 text-lg text-[#6B7280]">
            Have questions, concerns, or feedback? We’d love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#1F2937] font-semibold">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 px-3 py-2 w-full bg-[#F3F4F6] rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#1F2937] font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 px-3 py-2 w-full bg-[#F3F4F6] rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-[#1F2937] font-semibold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-2 px-3 py-2 w-full bg-[#F3F4F6] rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#1F2937] font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-2 px-3 py-2 w-full bg-[#F3F4F6] rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center text-[#6B7280]">
          <p>If you need immediate assistance, feel free to reach us via email at <a href="mailto:support@laborconnect.com" className="text-[#3B82F6] hover:underline">support@laborconnect.com</a>.</p>
          <p className="mt-4">Our office hours are Monday through Friday, 9 AM to 5 PM.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
