'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side - Brand or Text */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-amber-300">ഗുരുപവനപുരം ജ്യോതിഷനിലയം </span>. All rights reserved.
        </div>

        {/* Right side - Links */}
        <div className="flex space-x-4 mt-3 md:mt-0 text-sm">
          <a href="/privacy" className="hover:text-amber-300 transition duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-amber-300 transition duration-300">Terms</a>
          <a href="/contact" className="hover:text-amber-300 transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
