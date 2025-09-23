import React from "react";

export default function Navbar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-red-600 font-extrabold text-xl">
        <span>⚡ ER</span>
        <span className="text-gray-900">Electric Service</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <a href="#home" className="hover:text-red-600">
          HOME
        </a>
        <a href="#about" className="hover:text-red-600">
          ABOUT
        </a>
        <a href="#residential" className="hover:text-red-600">
          RESIDENTIAL
        </a>
        <a href="#commercial" className="hover:text-red-600">
          COMMERCIAL
        </a>
        <a href="#testimonials" className="hover:text-red-600">
          TESTIMONIALS
        </a>
      </nav>

      {/* CTA Button */}
      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
        GET A QUOTE
      </button>
    </header>
  );
}
