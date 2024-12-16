import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div
      className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/landing.jpg')" }}
      id="Header"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Header Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-22"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-tight max-w-3xl mx-auto pt-20">
          Your Gateway to Exceptional Real Estate in Kenya
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto mt-6 text-lg">
          Discover premium properties, rental homes, and prime land across Nairobi and beyond with Wande Realty – 
          connecting you to the perfect place to call home.
        </p>

        {/* Call-to-Actions */}
        <div className="flex justify-center mt-12 space-x-6 sm:space-x-4 sm:w-full sm:px-4">
          <a
            href="#Properties"
            className="px-8 py-3 transition border border-white rounded hover:bg-gray-400 hover:text-white-500"
          >
            Browse Properties
          </a>
          <a
            href="#Contact"
            className="px-8 py-3 transition bg-blue-500 rounded hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
