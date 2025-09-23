import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen  text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091215367-59ab6c2a7b77?auto=format&fit=crop&w=1400&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          PROFESSIONAL <br /> RESIDENTIAL & <br /> COMMERCIAL SERVICES
        </h1>

        <p className="mt-6 max-w-xl text-gray-200 text-lg">
          Our electrical services are provided with care and attention to detail
          to ensure safety and reliability. We are a trusted and experienced
          team of licensed electricians who prioritize customer satisfaction.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700">
            GET A QUOTE
          </button>
          <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            OUR SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
