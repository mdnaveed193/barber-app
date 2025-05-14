import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">

        {/* Logo and Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Logo</h3>
          <p className="text-gray-400">Classic cuts with modern style</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Contact Us</h4>
          <p className="text-gray-300">518 Acme St unit 101,<br /> Denton, TX 76205,<br /> United States</p>
          <p className="mt-2 text-gray-300 flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" /> +1 940 808 1569
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Newsletter</h4>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter to receive updates and news.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 PMC Barbershop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
