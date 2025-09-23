import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
     <div className="hidden md:flex bg-blue-900 text-white text-sm justify-between items-center px-6 py-2">
      {/* Left Side */}
      <span>An ISO 9001:2015 Certified Company</span>

      {/* Right Side */}
      <div className="flex space-x-6">
        {/* Phone */}
        <a href="tel:+96599693670" className="flex items-center space-x-2 hover:text-gray-200">
          <FaPhoneAlt className="text-white text-sm" />
          <span>+965 99693670</span>
        </a>

        {/* Email */}
        <a href="mailto:qcompany877@gmail.com" className="flex items-center space-x-2 hover:text-gray-200">
          <MdEmail className="text-white text-sm" />
          <span>qcompany877@gmail.com</span>
        </a>
      </div>
    </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/120x50?text=LOGO"
              alt="Logo"
              className="h-12"
            />
          </div>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-600 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-blue-900 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto text-white px-6 py-3 font-medium">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a to="/" className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer">
              HOME
            </a>
            <a to="/about" className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer">
              ABOUT US
            </a>
            <a to="/products" className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer">
              PRODUCTS
            </a>
            <a to="/services" className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer">
              SERVICES
            </a>
            <a
              to="/certificates"
              className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer"
            >
              CERTIFICATES
            </a>
            <a to="/contact" className="hover:bg-blue-700 px-3 py-1 rounded cursor-pointer">
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="flex flex-col space-y-3 md:hidden mt-3">
              <a to="/" className="hover:bg-blue-700 px-3 py-1 rounded">
                HOME
              </a>
              <a to="/about" className="hover:bg-blue-700 px-3 py-1 rounded">
                ABOUT US
              </a>
              <a
                to="/products"
                className="hover:bg-blue-700 px-3 py-1 rounded"
              >
                PRODUCTS
              </a>
              <a
                to="/services"
                className="hover:bg-blue-700 px-3 py-1 rounded"
              >
                SERVICES
              </a>
              <a
                to="/certificates"
                className="hover:bg-blue-700 px-3 py-1 rounded"
              >
                CERTIFICATES
              </a>
              <a
                to="/contact"
                className="hover:bg-blue-700 px-3 py-1 rounded"
              >
                CONTACT US
              </a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
