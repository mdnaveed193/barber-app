import React from 'react';
import Heading from '../utils/Heading';
import { IoIosCall } from "react-icons/io";

function Contact() {
  return (
    <div id='contact' className="min-h-screen bg-[#222936] px-4 py-10">
      <p className="text-center text-yellow-400 text-sm sm:text-base mb-2">Book Your Appointment</p>
      <Heading heading={"Contact Us"} />

      <div className="contact-main flex justify-center items-center">
        <div className="contact-form bg-[#111827] p-6 sm:p-8 rounded-xl max-w-lg w-full mx-auto shadow-md">
          <form className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-yellow-400 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                className="bg-gray-800 text-yellow-100 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-yellow-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email ID"
                className="bg-gray-800 text-yellow-100 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="number" className="text-yellow-400 mb-1">Phone</label>
              <input
                type="tel"
                id="number"
                placeholder="Enter Your Mobile no"
                className="bg-gray-800 text-yellow-100 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Service Selection */}
            <div className="flex flex-col">
              <label htmlFor="service" className="text-yellow-400 mb-1">Select Service</label>
              <select
                id="service"
                className="bg-gray-800 text-yellow-100 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select an option</option>
                <option value="haircut">Haircut</option>
                <option value="facial">Facial Massage</option>
                <option value="beard">Beard Trim</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-yellow-400 text-black text-center font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
              >
                <IoIosCall size={20} />
                Call Now
              </a>
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
